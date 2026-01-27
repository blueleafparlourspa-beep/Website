"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Leaf,
  Menu,
  X,
  Send,
  CheckCircle,
} from "lucide-react";

/**
 * =========================================
 * DATA & CONFIGURATION
 * =========================================
 */
const PHONE_NUMBER = "+91 8971180801";
const WHATSAPP_NUMBER = "918971180809";
const EMAIL_ADDRESS = "bookings@blueleafspa.com";
const ADDRESS = "123 Wellness Avenue, Spa District, City Name, 000000";

const CONTACT_DETAILS = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: PHONE_NUMBER,
    sub: "Mon-Sun 10am - 9pm",
    link: `tel:${PHONE_NUMBER}`,
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    value: "Chat with us",
    sub: "Instant Booking",
    link: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: EMAIL_ADDRESS,
    sub: "For corporate inquiries",
    link: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Wellness Avenue",
    sub: "Get Directions",
    link: "#map",
  },
];

/**
 * =========================================
 * COMPONENTS
 * =========================================
 */

// Reusing the robust Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled ? "bg-white/95 backdrop-blur-md border-slate-100 py-3 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-teal-900" : "text-teal-900"} flex items-center gap-2`}
        >
          <Leaf className="w-6 h-6 text-teal-600" />
          BLUE LEAF
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-slate-600 hover:text-teal-700 font-medium text-sm tracking-wide transition-colors"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-slate-600 hover:text-teal-700 font-medium text-sm tracking-wide transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-teal-700 font-bold text-sm tracking-wide transition-colors"
          >
            Contact
          </Link>

          <a href={`tel:${PHONE_NUMBER}`} className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 text-sm font-medium">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-teal-900"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4 border-t border-slate-100">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-slate-800"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-slate-800"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-teal-700 font-bold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

const PageHeader = () => (
  <header className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3 block">
        Get In Touch
      </span>
      <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
        Visit Our Sanctuary
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Have questions about our treatments or want to book a session? We are
        here to assist you.
      </p>
    </div>
  </header>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add actual form logic here
  };

  if (submitted) {
    return (
      <div className="bg-teal-50 p-12 rounded-2xl text-center border border-teal-100 h-full flex flex-col justify-center items-center">
        <CheckCircle className="w-16 h-16 text-teal-600 mb-4" />
        <h3 className="text-2xl font-serif text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. Our reception team will contact you
          shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-teal-700 font-medium underline hover:text-teal-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
    >
      <h3 className="text-2xl font-serif text-slate-800 mb-6">
        Send a Message
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
            Phone
          </label>
          <input
            type="tel"
            required
            placeholder="+91 987..."
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Service of Interest
        </label>
        <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all">
          <option>General Inquiry</option>
          <option>Aroma Massage</option>
          <option>Deep Tissue Massage</option>
          <option>Couple's Package</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2 mb-8">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your requirements..."
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold tracking-wide hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
      >
        Send Message <Send size={18} />
      </button>
    </form>
  );
};

export default function ContactPage() {
  return (
    <main className="font-sans antialiased bg-white min-h-screen">
      <Navbar />
      <PageHeader />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div>
              <h2 className="text-3xl font-serif text-slate-900 mb-8">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We are located in the heart of the city, offering a peaceful
                retreat from the urban bustle. Walk-ins are welcome, though we
                recommend booking in advance.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {CONTACT_DETAILS.map((item, idx) => (
                  <a
                    href={item.link}
                    key={idx}
                    className="group p-6 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-slate-900 font-serif text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-teal-700 font-medium mb-1">
                      {item.value}
                    </p>
                    <p className="text-slate-400 text-sm">{item.sub}</p>
                  </a>
                ))}
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h4 className="flex items-center gap-2 font-serif text-xl text-slate-800 mb-4">
                  <Clock className="text-teal-600" /> Opening Hours
                </h4>
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between border-b border-slate-200 pb-2 border-dashed">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-slate-900">
                      10:00 AM - 09:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2 border-dashed">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-slate-900">
                      10:00 AM - 10:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              {/* Decorative element behind form */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 -left-10 w-60 h-60 bg-teal-200/20 rounded-full blur-3xl"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[400px] w-full bg-slate-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzM0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Spa Location"
        ></iframe>

        {/* Map Overlay Card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4">
          <MapPin className="text-teal-600" />
          <div>
            <p className="font-bold text-slate-900">{ADDRESS}</p>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Blue Leaf Parlour & Spa. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
