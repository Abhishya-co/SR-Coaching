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
  Clock,
  Home,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
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
    { name: 'Courses', href: '#courses' },
    { name: 'Success', href: '#success' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'FAQ', href: '#faq' },
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
            <button 
              onClick={onBookDemo}
              className={`text-sm font-bold px-5 py-2 rounded-full border transition-all ${isScrolled ? 'border-brand-red text-brand-red hover:bg-brand-red hover:text-white' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              Book Demo
            </button>
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
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => {
                    onBookDemo();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border-2 border-brand-red text-brand-red px-6 py-3 rounded-xl font-bold text-center"
                >
                  Book Demo Class
                </button>
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

const Hero = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center pt-20 md:pt-32 pb-10 md:pb-12 overflow-hidden">
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
        <div className="flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block bg-brand-red/20 text-brand-red border border-brand-red/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 backdrop-blur-sm">
              Admissions Open 2026-27
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
              Empowering Minds, <br />
              <span className="text-brand-red">Shaping Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
              Premium coaching for Class 6th to 12th. Excellence in CBSE, ICSE, State Boards & NIOS with a result-oriented approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center">
              <a 
                href="https://wa.me/919818478036?text=Hello%20Shree%20Ram%20Coaching%2C%20I%20am%20interested%20in%20enrolling%20for%20coaching%20classes.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-red-500/30"
              >
                Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onBookDemo}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Book Demo Class
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10 justify-items-center">
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

          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-brand-red/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-white">Register Now</h3>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-50/50 relative overflow-hidden">
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
            
            <div className="aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white max-w-md mx-auto">
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
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Home Coaching</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Personalized Learning in the <br />Comfort of Your Home
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-brand-red font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                Learn More About Us <ChevronRight className="w-5 h-5" />
              </button>
              <a 
                href="#" 
                className="bg-brand-red/10 text-brand-red px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-red hover:text-white transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Brochure download will start soon. (Please replace this with your actual PDF link)");
                }}
              >
                <Download className="w-5 h-5" /> Download Brochure
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomeCoachingBanner = ({ onBookHomeTutor }: { onBookHomeTutor: () => void }) => {
  return (
    <section className="py-6 md:py-10 bg-indigo-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://imglink.cc/cdn/9C-QDmqfzx.jpg" 
          alt="Home Coaching Poster" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Home className="w-4 h-4 text-indigo-300" />
              <span>Premium Home Tuition Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About Our <span className="text-indigo-300">Institute</span>
            </h2>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed max-w-xl">
              Get 1-on-1 attention from our expert faculty at your doorstep. Tailored teaching methods designed to match your child's learning pace and style.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                </div>
                <span className="font-semibold">Flexible Timings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                </div>
                <span className="font-semibold">Safe Environment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                </div>
                <span className="font-semibold">Individual Focus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                </div>
                <span className="font-semibold">Regular Feedback</span>
              </div>
            </div>
            
            <button 
              onClick={onBookHomeTutor}
              className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-black/20"
            >
              Book Home Tutor <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative max-w-md mx-auto"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=800" 
                alt="Student learning at home" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-indigo-900 font-bold text-xl">1-on-1</p>
                <p className="text-gray-500 text-sm font-medium">Dedicated Support</p>
              </div>
            </div>
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
    <section id="courses" className="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-brand-red/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Our Programs</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">Explore Our Specialized Streams</h3>
          <p className="text-gray-600 text-lg">We offer a wide range of academic and competitive courses tailored to meet the diverse needs of our students.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-5 rounded-2xl border border-gray-100 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${course.color}`}>
                {React.cloneElement(course.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h4 className="text-lg font-bold mb-2">{course.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {course.desc}
              </p>
              <button className="flex items-center gap-2 text-brand-red text-sm font-bold group">
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
    <section className="py-8 md:py-12 bg-white overflow-hidden relative">
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
            className="relative mt-12 md:mt-0 max-w-md mx-auto"
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
    <section id="results" className="py-12 md:py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Our Achievers</h2>
          <h3 className="text-4xl font-bold mb-6">Celebrating Academic Excellence</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">Our students consistently secure top marks in board exams and competitive tests. Join the league of toppers!</p>
          
          {/* Head of Coaching Spotlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-[40px] mb-20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-red/30 flex-shrink-0">
                <img 
                  src="https://academic-amaranth-qktx7wmtta.edgeone.app/WhatsApp%20Image%202026-03-23%20at%2010.41.06%20PM.jpeg" 
                  alt="Dilip Kumar" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                  Head of Coaching
                </div>
                <h4 className="text-3xl font-bold mb-2">Dilip Kumar</h4>
                <p className="text-brand-red font-medium mb-4">Specialist: Mathematics & Science</p>
                <p className="text-gray-400 leading-relaxed italic">
                  "Our mission is to provide a platform where every student can discover their true potential. We don't just teach subjects; we build foundations for a lifetime of success."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {toppers.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 rounded-[32px] text-center group hover:bg-white/10 transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-brand-red/30 p-1">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover rounded-full transition-all" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-lg font-bold mb-0.5">{t.name}</h4>
              <p className="text-brand-red font-medium text-xs mb-3">{t.class}</p>
              <div className="bg-white/5 rounded-2xl py-2.5 px-2">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Marks Obtained</p>
                <p className="text-xs font-bold">{t.marks}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      name: "Anjali Verma",
      year: "Batch of 2018",
      achievement: "IIT Delhi Graduate",
      current: "Software Engineer at Google",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      text: "Shree Ram Coaching provided the strong foundation in Physics and Math that I needed to clear JEE. The teachers were always there to clear my doubts."
    },
    {
      name: "Vikram Aditya",
      year: "Batch of 2019",
      achievement: "SRCC Alumnus",
      current: "Chartered Accountant (CA)",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      text: "The Commerce faculty here is top-notch. Their practical approach to Accounts and Economics made complex topics very easy to understand."
    },
    {
      name: "Rohan Mehra",
      year: "Batch of 2020",
      achievement: "AIIMS Entrance Ranker",
      current: "MBBS Student at AIIMS Delhi",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      text: "Biology was my favorite subject, and the teachers here nurtured that passion. The test series was exactly like the actual competitive exams."
    }
  ];

  return (
    <section id="success" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold text-brand-dark leading-tight">
              Where Our Alumni Are <span className="text-brand-red">Shining Today</span>
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm">
            Our students don't just pass exams; they build careers. See how our former students are making their mark in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-red-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <img src={story.img} alt={story.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-dark">{story.name}</h4>
                  <p className="text-brand-red text-sm font-medium">{story.year}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span className="font-bold text-gray-700">{story.achievement}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-indigo-500" />
                  <span className="text-gray-600">{story.current}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed italic relative">
                <span className="text-4xl text-brand-red/10 absolute -top-4 -left-2 font-serif">"</span>
                {story.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Faculty = () => {
  const teachers = [
    { name: "Dilip Kumar", subject: "Math & Science", exp: "15+ Years", img: "https://academic-amaranth-qktx7wmtta.edgeone.app/WhatsApp%20Image%202026-03-23%20at%2010.41.06%20PM.jpeg", role: "Head of Coaching" },
    { name: "Mr. R.K. Sharma", subject: "Mathematics", exp: "12+ Years", img: "https://i.pravatar.cc/150?u=rk" },
    { name: "Ms. Anjali Verma", subject: "Physics", exp: "8+ Years", img: "https://i.pravatar.cc/150?u=anjali" },
    { name: "Mr. Vikram Singh", subject: "Chemistry", exp: "10+ Years", img: "https://i.pravatar.cc/150?u=vikram" }
  ];

  return (
    <section id="faculty" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Expert Faculty</h2>
          <h3 className="text-4xl font-bold text-brand-dark">Learn from the Best</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teachers.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group max-w-[280px] mx-auto w-full"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative shadow-md">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-base">{t.name}</p>
                    <p className="text-xs opacity-80">{(t as any).role || t.subject + " Specialist"}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-1">{t.name}</h4>
                <p className="text-sm text-gray-500">{(t as any).role || t.subject} • {t.exp} Exp</p>
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
    { name: "Meena Gupta", role: "Parent", text: "Highly professional environment. The teachers are very approachable and the progress tracking is very helpful." },
    { name: "Rajesh Khanna", role: "Parent", text: "The discipline and regular test series at Shree Ram Coaching are unmatched. My son is now much more confident in Science." },
    { name: "Priya Sharma", role: "Class 10 Student", text: "Best coaching for board exams! The teachers make even the toughest topics in Maths seem so simple." },
    { name: "Amitabh Bachchan", role: "Parent", text: "We are very satisfied with the progress of our child. The faculty is highly experienced and dedicated." },
    { name: "Deepika Padukone", role: "Class 11 Student", text: "The atmosphere here is very competitive yet supportive. I love the way they handle each student's weaknesses." }
  ];

  // Duplicate for seamless loop
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-12 md:py-24 bg-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-brand-dark">What Parents & Students Say</h3>
        </div>
      </div>

      {/* Live Scrolling Animation Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-8 py-4"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allReviews.map((r, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm relative w-[350px] flex-shrink-0"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed h-[100px] overflow-hidden">"{r.text}"</p>
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I enroll my child at Shree Ram Coaching Centre?",
      answer: "Enrollment is simple! You can fill out the registration form on our website, visit our centre in Noida Sector 22, or call us directly at +91 9818478036. We also offer a free demo class for new students."
    },
    {
      question: "Which classes and boards do you cover?",
      answer: "We provide comprehensive coaching for students from Class 6th to 12th. We cover all major boards including CBSE, ICSE, State Boards, and NIOS. Our curriculum is tailored to meet the specific requirements of each board."
    },
    {
      question: "What is the fee structure for different courses?",
      answer: "Our fees are competitive and vary based on the class and subjects chosen. We offer flexible payment options and special discounts for siblings or full-year advance payments. Please contact us for a detailed fee quote for your specific requirements."
    },
    {
      question: "What are the batch timings?",
      answer: "We have multiple batches throughout the day to accommodate school schedules. Typically, classes are held between 3:00 PM and 8:00 PM on weekdays. We also have special weekend batches for intensive revision and test series."
    },
    {
      question: "Do you provide home coaching services?",
      answer: "Yes, we offer premium Home Coaching services for students who prefer one-on-one attention in the comfort of their homes. Our experienced tutors visit your location at a time that suits you best."
    },
    {
      question: "How do you track student progress?",
      answer: "We conduct weekly tests and monthly assessments to monitor progress. Detailed performance reports are shared with parents regularly, and we hold parent-teacher meetings to discuss areas of improvement."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common queries about our admissions, courses, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 md:text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-brand-red" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-8">Get in Touch Today</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a 
              href="https://share.google/lDyx4yW3i95xx7arH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl hover:bg-red-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-red transition-colors">
                <MapPin className="text-brand-red w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-lg mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm">R.C. Complex, Above Canara Bank, Pillor No. 110, Salarpur Bhangel, Noida (U.P.)</p>
            </a>

            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl hover:bg-red-50 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-red transition-colors">
                <Phone className="text-brand-red w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-lg mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm">+91 9818478036</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl hover:bg-red-50 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-red transition-colors">
                <Mail className="text-brand-red w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-lg mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm">info@shreeramcoaching.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden h-[300px] shadow-xl border border-gray-100">
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
            <div className="text-center">
              <a 
                href="https://share.google/lDyx4yW3i95xx7arH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline"
              >
                Open in Google Maps & View Profile <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Shree Ram <span className="text-brand-red">Coaching</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Leading coaching institute in Noida providing quality education and foundation building for students from Class 6th to 12th.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-brand-red transition-all border border-white/10"
              onClick={(e) => {
                e.preventDefault();
                alert("Brochure download will start soon. (Please replace this with your actual PDF link)");
              }}
            >
              <Download className="w-4 h-4" /> Download Brochure
            </a>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-red transition-colors">Courses</a></li>
              <li><a href="#results" className="hover:text-brand-red transition-colors">Results</a></li>
              <li><a href="#success" className="hover:text-brand-red transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Our Courses</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-red transition-colors">Science Stream</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Commerce Stream</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Arts & Humanities</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Competitive Exams</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Spoken English</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get latest updates and study tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs outline-none focus:border-brand-red transition-all flex-grow" />
              <button className="bg-brand-red p-2 rounded-xl hover:bg-red-600 transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Shree Ram Coaching Centre. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-xs">
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

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Terms & Conditions</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-gray-600 space-y-6 leading-relaxed">
              <section>
                <h4 className="font-bold text-gray-900 mb-2">1. Admission Policy</h4>
                <p>Admission is subject to the availability of seats and performance in the initial assessment test. The management reserves the right to refuse admission without assigning any reason.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900 mb-2">2. Fee Structure</h4>
                <p>Fees must be paid in advance by the 7th of every month. Late payments will attract a fine. Fees once paid are non-refundable and non-transferable under any circumstances.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900 mb-2">3. Attendance & Discipline</h4>
                <p>Students must maintain at least 85% attendance. Misbehavior, irregularity, or damage to centre property will lead to immediate disciplinary action or expulsion.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900 mb-2">4. Home Coaching</h4>
                <p>For home coaching, the parent must ensure a suitable environment for study. Any changes in schedule must be communicated at least 24 hours in advance.</p>
              </section>
              <section>
                <h4 className="font-bold text-gray-900 mb-2">5. Progress Tracking</h4>
                <p>Parents are expected to attend scheduled Parent-Teacher Meetings (PTMs) and monitor the student's performance reports regularly.</p>
              </section>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-brand-red text-white px-8 py-2 rounded-xl font-bold hover:bg-red-600 transition-all"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    contactNumber: "",
    schoolName: "",
    className: "",
    stream: "",
    coachingType: "Centre Coaching",
    address: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const message = `*New Student Registration*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Gender:* ${formData.gender}%0A` +
      `*Contact:* ${formData.contactNumber}%0A` +
      `*School:* ${formData.schoolName}%0A` +
      `*Class:* ${formData.className}%0A` +
      `*Stream:* ${formData.stream}%0A` +
      `*Coaching Type:* ${formData.coachingType}%0A` +
      `*Address:* ${formData.address}`;

    const whatsappUrl = `https://wa.me/919818478036?text=${message}`;

    // Simulate API call and then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h4 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h4>
        <p className="text-gray-600 mb-8">Thank you for registering with Shree Ram Coaching Centre. You have been redirected to WhatsApp to send your details.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-brand-red font-bold hover:underline"
        >
          Register another student
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required 
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Gender</label>
          <select 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required
            value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value})}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Contact Number */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Contact Number</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required 
            value={formData.contactNumber}
            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
          />
        </div>

        {/* Current School/College */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">School / College Name</label>
          <input 
            type="text" 
            placeholder="Enter school/college name" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required 
            value={formData.schoolName}
            onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
          />
        </div>

        {/* Current Class */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Current Class</label>
          <input 
            type="text" 
            placeholder="e.g. Class 10, Class 12" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required 
            value={formData.className}
            onChange={(e) => setFormData({...formData, className: e.target.value})}
          />
        </div>

        {/* Stream / Subject */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Stream / Subject</label>
          <input 
            type="text" 
            placeholder="e.g. Science, Commerce, Arts" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required 
            value={formData.stream}
            onChange={(e) => setFormData({...formData, stream: e.target.value})}
          />
        </div>

        {/* Coaching Type */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Coaching Type</label>
          <select 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm" 
            required
            value={formData.coachingType}
            onChange={(e) => setFormData({...formData, coachingType: e.target.value})}
          >
            <option value="Centre Coaching">Centre Coaching</option>
            <option value="Home Coaching">Home Coaching</option>
          </select>
        </div>

        {/* Address */}
        <div className="space-y-1 md:col-span-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Address</label>
          <textarea 
            rows={2} 
            placeholder="Enter your full address" 
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all resize-none text-sm" 
            required
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          ></textarea>
        </div>

        <div className="md:col-span-2 flex items-start gap-2 py-2">
          <input 
            type="checkbox" 
            id="terms" 
            className="mt-1 w-4 h-4 text-brand-red border-gray-300 rounded focus:ring-brand-red cursor-pointer" 
            required
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
            I agree to the <button type="button" onClick={() => setShowTermsModal(true)} className="text-brand-red font-bold hover:underline">Terms and Conditions</button> of Shree Ram Coaching Centre.
          </label>
        </div>

        <div className="md:col-span-2 pt-1">
          <button 
            type="submit" 
            disabled={isSubmitting || !agreedToTerms}
            className="w-full bg-brand-red text-white py-2.5 rounded-lg font-bold text-base hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </div>
      </form>
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </motion.div>
  );
};

const DemoBookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    subject: '',
    mode: 'centre' // 'centre' or 'home'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Hello Shree Ram Coaching, I would like to book a Free Demo Class.

*Student Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.grade}th
Subject: ${formData.subject}
Mode: ${formData.mode === 'centre' ? 'At Centre' : 'Home Tuition'}

Please confirm the timing.`;

    const whatsappUrl = `https://wa.me/919818478036?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: '', phone: '', grade: '', subject: '', mode: 'centre' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-[300px] rounded-[32px] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {isSuccess ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Success!</h3>
                <p className="text-xs text-gray-600">We'll contact you shortly.</p>
              </div>
            ) : (
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-brand-dark leading-tight">Book a Demo</h3>
                  <p className="text-gray-500 text-[10px]">Experience our teaching style.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Student Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-xs"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-xs"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Class</label>
                      <select 
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                        className="w-full px-2 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all bg-white text-xs"
                      >
                        <option value="">Select</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Subject</label>
                      <input 
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-xs"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Mode</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, mode: 'centre'})}
                        className={`py-1.5 rounded-lg font-bold text-[10px] border-2 transition-all ${formData.mode === 'centre' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                      >
                        Centre
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, mode: 'home'})}
                        className={`py-1.5 rounded-lg font-bold text-[10px] border-2 transition-all ${formData.mode === 'home' ? 'border-brand-red bg-red-50 text-brand-red' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                      >
                        Home
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-red text-white py-3 rounded-xl font-bold text-sm hover:bg-red-600 transition-all shadow-xl shadow-red-500/20 disabled:opacity-50 mt-1"
                  >
                    {isSubmitting ? "Processing..." : "Confirm"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const HomeTutorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    subject: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Hello Shree Ram Coaching, I am looking for a Home Tutor.

*Student Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.grade}th
Subject: ${formData.subject}
Location: ${formData.location}

Please let me know the availability and fees.`;

    const whatsappUrl = `https://wa.me/919818478036?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({ name: '', phone: '', grade: '', subject: '', location: '' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-[300px] rounded-[32px] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {isSuccess ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Request Sent!</h3>
                <p className="text-xs text-gray-600">We'll contact you shortly for Home Tuition.</p>
              </div>
            ) : (
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-brand-dark leading-tight">Book Home Tutor</h3>
                  <p className="text-gray-500 text-[10px]">Personalized 1-on-1 learning at home.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Student Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-xs"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-xs"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Class</label>
                      <select 
                        required
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                        className="w-full px-2 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all bg-white text-xs"
                      >
                        <option value="">Select</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Subject</label>
                      <input 
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-xs"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 mb-0.5">Area/Location</label>
                    <input 
                      type="text" 
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-xs"
                      placeholder="e.g. Sector 15, Rohini"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 disabled:opacity-50 mt-1"
                  >
                    {isSubmitting ? "Processing..." : "Request Home Tutor"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isHomeTutorModalOpen, setIsHomeTutorModalOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />
      <main>
        <Hero onBookDemo={() => setIsDemoModalOpen(true)} />
        <HomeCoachingBanner onBookHomeTutor={() => setIsHomeTutorModalOpen(true)} />
        <Courses />
        <WhyChooseUs />
        <About />
        <Results />
        <SuccessStories />
        <Faculty />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <HomeTutorModal isOpen={isHomeTutorModalOpen} onClose={() => setIsHomeTutorModalOpen(false)} />
    </div>
  );
}
