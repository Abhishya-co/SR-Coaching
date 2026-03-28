import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";

dotenv.config();

// In-memory store for demo purposes (In production, use a database)
const subscriptions = new Map<string, { email: string; verified: boolean }>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Newsletter Subscription Route
  app.post("/api/newsletter/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    subscriptions.set(token, { email, verified: false });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationUrl = `${process.env.APP_URL || "http://localhost:3000"}/verify?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirm your Newsletter Subscription - Shree Ram Coaching",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #E11D48;">Shree Ram Coaching Centre</h2>
          <p>Thank you for subscribing to our newsletter!</p>
          <p>Please click the button below to verify your email address and complete your subscription.</p>
          <a href="${verificationUrl}" style="display: inline-block; background-color: #E11D48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px;">Verify Subscription</a>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">If you didn't request this, you can safely ignore this email.</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: "Verification email sent. Please check your inbox." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send verification email. Please check server configuration." });
    }
  });

  // Newsletter Verification Route
  app.get("/api/newsletter/verify/:token", (req, res) => {
    const { token } = req.params;
    const sub = subscriptions.get(token);

    if (!sub) {
      return res.status(404).json({ error: "Invalid or expired verification token" });
    }

    sub.verified = true;
    res.json({ message: "Subscription verified successfully!", email: sub.email });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
