/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Users, 
  Trophy, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X, 
  GraduationCap, 
  Atom, 
  Briefcase, 
  Palette, 
  Languages,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-red p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              Shree Ram <span className="text-brand-red">Coaching</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-red hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-red text-white px-6 py-3 rounded-xl font-semibold inline-block text-center"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920" 
          alt="Students studying" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-red/20 text-brand-red border border-brand-red/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 backdrop-blur-sm">
              Admissions Open 2026-27
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
              Empowering Minds, <br />
              <span className="text-brand-red">Shaping Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl leading-relaxed">
              Premium coaching for Class 6th to 12th. Excellence in CBSE, ICSE, State Boards & NIOS with a result-oriented approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
              <a 
                href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-red-500/30"
              >
                Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Book Demo Class
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <Users className="text-brand-red w-5 h-5" />
                </div>
                <span className="text-white font-medium text-sm">Experienced Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <Clock className="text-brand-red w-5 h-5" />
                </div>
                <span className="text-white font-medium text-sm">Weekly Tests</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-red/20 p-2 rounded-lg">
                  <Trophy className="text-brand-red w-5 h-5" />
                </div>
                <span className="text-white font-medium text-sm">Result-Oriented</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-brand-red/5 pointer-events-none select-none hidden lg:block">
        SHREE RAM
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 md:mb-0"
          >
            {/* Decorative Dots Pattern */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-20 hidden lg:block">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-brand-red rounded-full"></div>
                ))}
              </div>
            </div>
            
            <div className="aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Classroom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 rounded-3xl shadow-xl hidden lg:block z-20">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90">Years of Academic<br />Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">About Our Institute</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Nurturing Talent, Achieving <br />Academic Excellence
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Shree Ram Coaching Centre has been a cornerstone of quality education in Noida for over a decade. We believe that every student has the potential to excel when provided with the right guidance and environment.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Mission</h4>
                  <p className="text-gray-600">To provide high-quality, accessible education that empowers students to reach their full potential.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Vision</h4>
                  <p className="text-gray-600">To be the leading coaching institute recognized for academic success and character building.</p>
                </div>
              </div>
            </div>

            <button className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              Learn More About Us <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Science Stream",
      desc: "Comprehensive coaching for Physics, Chemistry, Mathematics, and Biology for Class 11th & 12th.",
      icon: <Atom className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Commerce Stream",
      desc: "Expert guidance in Accountancy, Business Studies, and Economics for future business leaders.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Arts & Humanities",
      desc: "In-depth study of History, Geography, Political Science, and Sociology with expert faculty.",
      icon: <Palette className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Competitive Exams",
      desc: "Specialized batches for SSC, NDA, CUET, and Navy entrance exams with proven strategies.",
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Spoken English",
      desc: "Enhance your communication skills with our specialized Spoken & Academic English courses.",
      icon: <Languages className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Junior Wing (6-10)",
      desc: "Strong foundation building for all subjects from Class 6th to 10th (All Boards).",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-red-50 text-brand-red"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-brand-red/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Our Programs</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">Explore Our Specialized Streams</h3>
          <p className="text-gray-600 text-lg">We offer a wide range of academic and competitive courses tailored to meet the diverse needs of our students.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${course.color}`}>
                {course.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{course.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {course.desc}
              </p>
              <button className="flex items-center gap-2 text-brand-red font-bold group">
                View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Faculty",
      desc: "Learn from passionate educators with over 10+ years of teaching experience."
    },
    {
      title: "Concept-Based Teaching",
      desc: "We focus on deep understanding rather than rote memorization."
    },
    {
      title: "Progress Tracking",
      desc: "Regular weekly tests and detailed performance reports for parents."
    },
    {
      title: "Study Materials",
      desc: "Comprehensive, easy-to-understand notes and practice papers provided."
    },
    {
      title: "Flexible Learning",
      desc: "Both home tuition and online classes available to suit your schedule."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gray-50 -z-0"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-8 leading-tight">
              The Best Learning Experience <br />for Every Student
            </h3>
            
            <div className="space-y-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <CheckCircle2 className="text-brand-red w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 md:mt-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                alt="Student studying" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-100 rounded-full -z-0 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const toppers = [
    { name: "Rahul Sharma", class: "Class 12", marks: "Physics: 98, Math: 96", img: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Priya Singh", class: "Class 10", marks: "Science: 95, Math: 98", img: "https://i.pravatar.cc/150?u=priya" },
    { name: "Amit Kumar", class: "Class 12", marks: "Accounts: 97, Eco: 94", img: "https://i.pravatar.cc/150?u=amit" },
    { name: "Sneha Gupta", class: "Class 10", marks: "English: 96, SST: 94", img: "https://i.pravatar.cc/150?u=sneha" }
  ];

  return (
    <section id="results" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Our Achievers</h2>
          <h3 className="text-4xl font-bold mb-6">Celebrating Academic Excellence</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Our students consistently secure top marks in board exams and competitive tests. Join the league of toppers!</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center group hover:bg-white/10 transition-all"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-red/30 p-1">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold mb-1">{t.name}</h4>
              <p className="text-brand-red font-medium text-sm mb-4">{t.class}</p>
              <div className="bg-white/5 rounded-xl py-3 px-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Marks Obtained</p>
                <p className="text-sm font-semibold">{t.marks}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Faculty = () => {
  const teachers = [
    { name: "Mr. R.K. Sharma", subject: "Mathematics", exp: "12+ Years", img: "https://i.pravatar.cc/150?u=rk" },
    { name: "Ms. Anjali Verma", subject: "Physics", exp: "8+ Years", img: "https://i.pravatar.cc/150?u=anjali" },
    { name: "Mr. Vikram Singh", subject: "Chemistry", exp: "10+ Years", img: "https://i.pravatar.cc/150?u=vikram" }
  ];

  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Expert Faculty</h2>
          <h3 className="text-4xl font-bold text-brand-dark">Learn from the Best</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group max-w-[280px] mx-auto w-full"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative shadow-md">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-base">{t.name}</p>
                    <p className="text-xs opacity-80">{t.subject} Specialist</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-1">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.subject} • {t.exp} Exp</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Suresh Mehra", role: "Parent", text: "The individual attention my daughter received at Shree Ram Coaching was exceptional. Her grades improved significantly within months." },
    { name: "Karan Johar", role: "Class 12 Student", text: "The study materials and weekly tests helped me clear my concepts. I scored 95% in my board exams thanks to the faculty here." },
    { name: "Meena Gupta", role: "Parent", text: "Highly professional environment. The teachers are very approachable and the progress tracking is very helpful." }
  ];

  return (
    <section className="py-24 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-brand-dark">What Parents & Students Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm relative"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-brand-red">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-brand-dark">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
              <MessageSquare className="absolute top-8 right-8 text-red-100 w-12 h-12 -z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    className: "Class 6th",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', msg: data.message });
        setFormData({ name: "", className: "Class 6th", phone: "", message: "" });
      } else {
        setStatus({ type: 'error', msg: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: "Failed to connect to server. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-8">Get in Touch Today</h3>
            
            <div className="space-y-8 mb-12">
              <a 
                href="https://share.google/lDyx4yW3i95xx7arH" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-5 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <MapPin className="text-brand-red w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-brand-red transition-colors">Visit Us</h4>
                  <p className="text-gray-600">R.C. Complex, Above Canara Bank, Pillor No. 110, Salarpur Bhangel, Noida (U.P.)</p>
                </div>
              </a>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Phone className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 9818478036</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Mail className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">info@shreeramcoaching.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-64 shadow-lg border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6653456789!2d77.37!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce61794d053e7%3A0x6b6a3744e0d977e!2sShree%20Ram%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1710840000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
              <a 
                href="https://share.google/lDyx4yW3i95xx7arH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline"
              >
                Open in Google Maps & View Profile <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
          >
            <h4 className="text-2xl font-bold mb-8 text-brand-dark">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status && (
                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.msg}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Class</label>
                  <select 
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all"
                  >
                    <option>Class 6th</option>
                    <option>Class 7th</option>
                    <option>Class 8th</option>
                    <option>Class 9th</option>
                    <option>Class 10th</option>
                    <option>Class 11th</option>
                    <option>Class 12th</option>
                    <option>Competitive</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all" 
                  placeholder="+91 98765 43210" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all" 
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all shadow-xl shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Register Now"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Shree Ram <span className="text-brand-red">Coaching</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading coaching institute in Noida providing quality education and foundation building for students from Class 6th to 12th.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-red transition-colors">Courses</a></li>
              <li><a href="#results" className="hover:text-brand-red transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Courses</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Science Stream</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Commerce Stream</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Arts & Humanities</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Competitive Exams</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Spoken English</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get latest updates and study tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-brand-red transition-all flex-grow" />
              <button className="bg-brand-red p-2 rounded-xl hover:bg-red-600 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 Shree Ram Coaching Centre. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Results />
        <Faculty />
        <Testimonials />
        
        {/* Final CTA Banner */}
        <section className="py-20 bg-brand-red relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Join the Best Coaching in Noida Today</h3>
            <a 
              href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-red px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl inline-block"
            >
              Register Now
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
