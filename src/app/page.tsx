"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Clock,
  Star,
  ShieldCheck,
  Leaf,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/**
 * =========================================
 * CONFIGURATION & DATA
 * =========================================
 */

const COMPANY_NAME = "Blue Leaf Parlour & Spa";
const WHATSAPP_NUMBER = "918971180809";
const PHONE_NUMBER = "+91 8971180801";

// Interface for Service Data
interface Service {
  name: string;
  image: string; // New image property
  description?: string;
  prices: { duration: string; price: number }[];
  category: string;
  highlight?: boolean;
}

// Data Array with Unsplash Images
const SERVICES: Service[] = [
  // --- Massages ---
  {
    name: "Aroma Massage",
    image:
      "https://serenitysf.com/wp-content/uploads/2024/07/aromatherapy-massage-1.jpg",
    description:
      "Holistic treatment with aromatic oils to relieve stress from mind and body. Includes head massage and shower.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 2500 },
      { duration: "90 Min", price: 3000 },
    ],
  },
  {
    name: "Swedish Massage",
    image:
      "https://thumbs.dreamstime.com/b/masseur-doing-massage-woman-body-women-spa-salon-beauty-treatment-concept-44619828.jpg",
    description:
      "Long gliding strokes to improve circulation and reduce tension. A classic for relaxation.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 2500 },
      { duration: "90 Min", price: 3500 },
    ],
  },
  {
    name: "Balinese Massage",
    image:
      "https://thumbs.dreamstime.com/b/young-women-getting-back-massage-woman-salon-40464330.jpg",
    description:
      "Deep relaxation using acupressure, skin rolling, and essential oils. Increases flexibility.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 2500 },
      { duration: "90 Min", price: 3000 },
    ],
  },
  {
    name: "Deep Tissue Massage",
    image:
      "https://img.freepik.com/premium-photo/beautiful-young-woman-enjoying-head-massage-spa-center_488220-74694.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "Focuses on deeper layers of muscle to release chronic tension. Ideal for physical ailments.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 3000 },
      { duration: "90 Min", price: 4000 },
    ],
  },
  {
    name: "Lomi Lomi Massage",
    image:
      "https://img.freepik.com/free-photo/woman-spending-time-spa-getting-exfoliation-massage_23-2149871917.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "Traditional Hawaiian 'loving hands' massage using continuous, flowing strokes.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 2500 },
      { duration: "90 Min", price: 3500 },
    ],
  },
  {
    name: "Candle Massage",
    image:
      "https://thumbs.dreamstime.com/b/massage-women-spa-salon-girl-candles-background-treats-problem-back-relaxation-benefit-beauty-health-crop-bare-117648962.jpg",
    description:
      "Warm wax is dripped onto the body for a gentle, soothing experience. Ideal for anxiety.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 3500 },
      { duration: "90 Min", price: 4500 },
    ],
  },
  {
    name: "Wine Massage",
    image:
      "https://media.vyaparify.com/vcards/blogs/223568/service_1743607964.png", // Abstract luxury texture
    description:
      "Antioxidant-rich red wine based scrubs and creams to enhance skin texture.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 3500 },
      { duration: "90 Min", price: 5000 },
    ],
  },
  {
    name: "Traditional Thai Massage",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/010/508/721/small/massage-and-spa-relaxing-treatment-of-office-syndrome-using-hot-stone-traditional-thai-massage-style-asain-female-masseuse-doing-massage-treat-back-pain-arm-pain-stress-for-woman-tired-from-work-photo.jpg",
    description:
      "Dry therapy combining yoga stretches and acupressure. Focuses on energy pathways.",
    category: "Massages",
    prices: [
      { duration: "60 Min", price: 3000 },
      { duration: "90 Min", price: 4000 },
    ],
  },

  // --- Therapies & Others ---
  {
    name: "Head Massage",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8fDA%3D",
    description: "Relieves stress, migraine pain, and improves circulation.",
    category: "Therapies",
    prices: [{ duration: "30 Min", price: 1000 }],
  },
  {
    name: "Back Massage",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/070/469/870/small/relaxing-massage-session-at-a-wellness-spa-with-calming-atmosphere-photo.jpeg",
    category: "Therapies",
    prices: [{ duration: "30 Min", price: 1500 }],
  },
  // --- Scrubs & Steam ---
  {
    name: "Full Body Scrub",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    category: "Scrubs & Steam",
    prices: [{ duration: "60 Min", price: 3500 }],
  },
  {
    name: "Steam Bath",
    image:
      "https://media.gettyimages.com/id/2021357135/photo/young-pretty-woman-relaxing-in-turkish-hammam.jpg?s=612x612&w=0&k=20&c=xK-Z9kREV4Fqat9Edx1cj5H_3mwfbmGGxijtdUjb0EM=",
    description: "Detoxify and open pores in our humid, heated steam room.",
    category: "Scrubs & Steam",
    prices: [{ duration: "20 Min", price: 500 }],
  },
];

const FAQS = [
  {
    q: "Are therapists certified?",
    a: "Yes, all our therapists are certified South & North Indian female professionals with extensive training and experience.",
  },
  {
    q: "Are prices fixed?",
    a: "All prices are fixed and transparent. No hidden charges.",
  },
  {
    q: "Is privacy maintained?",
    a: "Absolutely. We offer private rooms and strict hygiene standards.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-ins are welcome, but prior booking is recommended to secure your slot.",
  },
];

/**
 * =========================================
 * COMPONENTS
 * =========================================
 */

const SectionHeading = ({
  children,
  subtitle,
  light = false,
}: {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-14 text-center">
    {subtitle && (
      <span
        className={`${light ? "text-teal-400" : "text-teal-600"} font-medium tracking-widest text-sm uppercase mb-3 block`}
      >
        {subtitle}
      </span>
    )}
    <h2
      className={`text-4xl md:text-5xl font-serif ${light ? "text-white" : "text-slate-800"}`}
    >
      {children}
    </h2>
    <div
      className={`w-24 h-1 ${light ? "bg-teal-400" : "bg-teal-600"} mx-auto mt-6 rounded-full`}
    />
  </div>
);

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
        <div
          className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-teal-900" : "text-teal-900"} flex items-center gap-2`}
        >
          <Leaf className="w-6 h-6 text-teal-600" />
          BLUE LEAF
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[

            { title: "Services", href: "/service" },
            { title: "Contact us", href: "/contact" },

          ].map((item, index) => (
            <a
              key={index}
              href={`${item.href}`}
              className="text-slate-600 hover:text-teal-700 font-medium text-sm tracking-wide transition-colors"
            >
              {item.title}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-900/20 text-sm font-medium"
          >
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
            href="service"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-slate-800"
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#F8FAFC]">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-amber-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-teal-200 rounded-full bg-white/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
          <span className="text-teal-800 font-bold text-xs tracking-widest uppercase">
            Authentic Thai Spa
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] mb-6">
          Ancient wellness, <br />
          <span className="italic text-teal-700">modern luxury.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
          Relax, rejuvenate, and restore your balance with certified female south and north therapist
        </p>

        {/* Offer Card */}
        <div className="bg-white p-1 rounded-2xl shadow-xl shadow-teal-900/5 border border-slate-100 inline-block w-full max-w-md">
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-teal-100 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-teal-700 font-bold tracking-wider text-xs uppercase mb-2">
                <Star className="fill-current w-3 h-3" /> Today's Special Offer
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-serif text-slate-900">
                  20% OFF
                </span>
                <span className="text-slate-500 text-sm">on all bookings</span>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${PHONE_NUMBER}`} className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                  <Phone size={16} /> Call Now
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Collage */}
      <div className="hidden lg:block relative h-[600px]">
        <div className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 border-4 border-white z-20">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Massage"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl -rotate-3 border-4 border-white z-10">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Spa"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200 rounded-full"></div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <SectionHeading subtitle="Why Choose Us">
            The Blue Leaf Standard
          </SectionHeading>
          <div className="space-y-8 mt-8">
            {[
              {
                title: "Certified Female Therapists",
                desc: "Expert South & North Indian female therapists with professional training.",
              },
              {
                title: "Private & Hygienic",
                desc: "Clean, private spa rooms with premium amenities.",
              },
              {
                title: "Transparent Pricing",
                desc: "What you see is what you pay. No hidden costs.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              alt="Spa Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-serif text-2xl">"Peace is the new luxury."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <div
    className={`group relative rounded-2xl overflow-hidden transition-all duration-300 border bg-white flex flex-col h-full ${service.highlight ? "border-teal-900 shadow-2xl ring-4 ring-teal-50 md:-mt-4 md:mb-4 z-10" : "border-slate-100 hover:shadow-xl hover:-translate-y-1"}`}
  >
    {/* Image Section */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

      {service.highlight && (
        <div className="absolute top-4 right-4 bg-amber-400 text-teal-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
          Most Recommended
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
        {service.category}
      </div>
    </div>

    {/* Content Section */}
    <div
      className={`p-6 md:p-8 flex-1 flex flex-col ${service.highlight ? "bg-teal-900 text-white" : "bg-white"}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3
          className={`text-2xl font-serif ${service.highlight ? "text-white" : "text-slate-800"}`}
        >
          {service.name}
        </h3>
      </div>

      {service.description && (
        <p
          className={`text-sm mb-6 leading-relaxed flex-1 ${service.highlight ? "text-teal-100" : "text-slate-500"}`}
        >
          {service.description}
        </p>
      )}

      <div
        className={`space-y-3 pt-6 border-t mt-auto ${service.highlight ? "border-teal-800" : "border-slate-100"}`}
      >
        {service.prices.map((price, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock
                size={14}
                className={
                  service.highlight ? "text-teal-400" : "text-slate-400"
                }
              />
              <span
                className={`text-sm ${service.highlight ? "text-teal-50" : "text-slate-500"}`}
              >
                {price.duration}
              </span>
            </div>
            <span
              className={`font-semibold text-lg ${service.highlight ? "text-white" : "text-slate-900"}`}
            >
              ₹{price.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className={`w-full mt-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:gap-3 ${service.highlight ? "bg-white text-teal-900 hover:bg-teal-50" : "bg-slate-900 text-white hover:bg-teal-700"}`}
      >
        Book Session <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Our Treatments">
        Menu of Services
      </SectionHeading>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-500 text-sm mb-6">
          * All prices are subject to change. 20% Discount applicable on final
          bill.
        </p>
        <button className="inline-flex items-center gap-2 text-teal-700 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
          Download Full Menu <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl mb-4 bg-white overflow-hidden transition-all hover:border-teal-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-800">{q}</span>
        {isOpen ? (
          <ChevronUp className="text-teal-600" />
        ) : (
          <ChevronDown className="text-slate-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 bg-slate-50 ${isOpen ? "max-h-40" : "max-h-0"}`}
      >
        <p className="text-slate-600 leading-relaxed p-6 pt-0">{a}</p>
      </div>
    </div>
  );
};

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-6">
    <div className="flex items-center justify-between mb-3 px-1">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">
          Slots filling fast
        </span>
      </div>
      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
        20% OFF TODAY
      </span>
    </div>
    <div className="flex gap-3">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
      >
        <Phone size={18} /> Call
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-medium shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 pb-32 md:pb-16">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-white text-2xl font-serif mb-6 flex items-center gap-2">
          <Leaf className="text-teal-500" /> Blue Leaf
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-400">
          Authentic wellness traditions meeting modern luxury. Rejuvenate your
          body and soul in our premium sanctuary.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
          Services
        </h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Thai Massage
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Swedish Massage
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Deep Tissue
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Steam Bath
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
          Company
        </h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#about" className="hover:text-teal-400 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
          Visit Us
        </h4>
        <p className="mb-4 text-sm">
          123 Wellness Avenue, Spa District
          <br />
          City Name, State, 000000
        </p>
        <p className="text-white text-lg font-serif mb-4">{PHONE_NUMBER}</p>
      </div>
    </div>
    <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-600">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </p>
      <p>
        Safe, Hygienic & Respectful Environment. Compliant with Local Wellness
        Regulations.
      </p>
    </div>
  </footer>
);

/**
 * =========================================
 * MAIN PAGE LAYOUT
 * =========================================
 */
export default function LandingPage() {
  return (
    <main className="font-sans antialiased text-slate-900 bg-white selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <Services />

      <section id="faq" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <SectionHeading subtitle="Common Questions">
            Everything You Need To Know
          </SectionHeading>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
