import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, className, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone are required." });
    }

    // Email Configuration
    // To use this, the user must add EMAIL_USER and EMAIL_PASS to their secrets
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kdilips505@gmail.com",
      subject: `New Message from ${name} - Shree Ram Coaching`,
      text: `
        Name: ${name}
        Class: ${className}
        Phone: ${phone}
        Message: ${message || "No message provided."}
      `,
    };

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("Email credentials not set. Logging message instead.");
        console.log("Message Details:", mailOptions.text);
        return res.json({ 
          success: true, 
          message: "Message received! (Note: Email sending is pending configuration of secrets)" 
        });
      }

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
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
