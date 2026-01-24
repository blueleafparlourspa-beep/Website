"use client";

import React, { useState, useEffect } from "react";
import {
  Leaf,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronDown,
} from "lucide-react";

/**
 * BLUE LEAF PARLOUR & SPA - "SILENT LUXURY" EDITION (COMPLETE)
 * * DESIGN LANGUAGE:
 * - Typography: Gigantic Serif (Playfair) vs Micro Mono (Tech feel).
 * - Layout: Asymmetrical, Art Gallery style.
 * - Colors: Midnight Slate (#0B1215) & Eucalyptus Mist (#E0E5E5).
 * - Vibe: Architectural, Calm, Expensive.
 */

// --- FULL DATA FROM PDF ---

const MASSAGES = [
  {
    title: "Signature Four Hands",
    desc: "Performed by two therapists working in unison to unravel knots and stress. A synchronized approach offering a doubled dose of therapeutic touch.",
    time: "60 / 90 min",
    price: "5,000 / 6,000",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Aroma Massage",
    desc: "A holistic treatment using aromatic oils to deeply relax body, mind, and spirit. Includes a soothing head massage to relieve stress.",
    time: "60 / 90 min",
    price: "2,500 / 3,000",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Swedish Massage",
    desc: "Long, gliding strokes in the direction of blood flow. Improves circulation, reduces tension, and promotes deep relaxation. Includes shower.",
    time: "60 / 90 min",
    price: "2,500 / 3,000",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Balinese Massage",
    desc: "Techniques include acupressure, skin rolling, and flicking with essential oils. Revitalizes the body and balances the energy system.",
    time: "60 / 90 min",
    price: "2,500 / 3,000",
    image:
      "https://images.unsplash.com/photo-1591343395082-e2158405b723?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Deep Tissue",
    desc: "Targets deeper layers of muscle, tendons, and fascia using slow, firm strokes. Ideal for chronic muscle tension and physical ailments.",
    time: "60 / 90 min",
    price: "3,000 / 4,000",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Lomi Lomi",
    desc: "Traditional Hawaiian 'loving hands' massage. Uses continuous, flowing strokes that work gently yet deeply into the muscles.",
    time: "60 / 90 min",
    price: "2,500 / 3,500",
    image:
      "https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Candle Massage",
    desc: "Warm wax is dripped onto the body to create a gentle, melting sensation. Perfect for melting away muscle knots and anxiety.",
    time: "60 / 90 min",
    price: "3,500 / 4,500",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Wine Massage",
    desc: "Red wine-based scrubs and creams. Offers antioxidant protection, enhanced skin texture, and improved circulation.",
    time: "60 / 90 min",
    price: "3,500 / 5,000",
    image:
      "https://images.unsplash.com/photo-1510733485939-705d529b5354?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Traditional Thai",
    desc: "Dry therapy combining yoga stretches, Shiatsu, and acupressure. Focuses on energy pathways and chakras. Includes foot ritual.",
    time: "60 / 90 min",
    price: "3,000 / 4,000",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
  },
];

const EXPRESS_THERAPIES = [
  { title: "Head Massage", time: "30 Min", price: "1,000" },
  { title: "Back Massage", time: "30 Min", price: "1,500" },
  { title: "Back Body Scrub", time: "30 Min", price: "1,800" },
  { title: "Potli Massage", time: "30 Min", price: "1,500" },
  { title: "Hot Rock Salt", time: "30 Min", price: "1,500" },
  { title: "Foot Massage", time: "30 Min", price: "1,500" },
  { title: "Steam Bath", time: "20 Min", price: "500" },
];

const BODY_RITUALS = [
  { title: "Full Body Scrub", time: "60 Min", price: "3,500" },
];

const FAQS = [
  {
    q: "Are therapists certified?",
    a: "Yes, all our therapists are professionally trained and experienced.",
  },
  {
    q: "Are prices fixed or negotiable?",
    a: "All prices are fixed and transparent. No hidden charges.",
  },
  {
    q: "Is privacy maintained?",
    a: "Absolutely. We offer private rooms and strict hygiene standards.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-ins are welcome, but prior booking is recommended.",
  },
  {
    q: "Is the 20% discount available on all services?",
    a: "Yes, the discount applies to all services booked today.",
  },
];

const WHY_CHOOSE_US = [
  "Certified & professionally trained therapists",
  "Private, clean & hygienic spa rooms",
  "Premium oils & authentic techniques",
  "Transparent pricing - no hidden charges",
  "Calm, peaceful & luxurious ambience",
];

// --- COMPONENTS ---

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#0B1215] z-50 transition-all duration-100 ease-out"
      style={{ width: `${width}%` }}
    />
  );
};

const MagneticButton = ({ children, className, onClick }: any) => (
  <button
    onClick={onClick}
    className={`relative group overflow-hidden rounded-full border border-[#0B1215] px-6 py-3 md:px-8 md:py-4 font-mono text-xs uppercase tracking-widest transition-all duration-500 hover:bg-[#0B1215] hover:text-white active:scale-95 ${className}`}
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  </button>
);

const ServiceRow = ({ service, index }: any) => (
  <div className="group relative border-t border-[#0B1215]/10 py-8 md:py-12 transition-all duration-500 hover:bg-[#F5F5F0]">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-baseline justify-between gap-6 z-10 relative">
      <div className="w-full md:w-1/4">
        <span className="font-mono text-xs text-[#0B1215]/40 mb-2 block">
          0{index + 1}
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#0B1215] group-hover:translate-x-4 transition-transform duration-500">
          {service.title}
        </h3>
        {/* Mobile Image: Visible only on small screens */}
        <div className="mt-4 md:hidden w-full h-48 overflow-hidden rounded-sm">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <p className="text-[#0B1215]/70 font-light leading-relaxed max-w-md text-sm md:text-base">
          {service.desc}
        </p>
      </div>
      {/* Responsive Price Grid: Stacked on mobile, flex on desktop */}
      <div className="w-full md:w-1/4 grid grid-cols-2 md:flex md:items-end md:justify-end gap-4 md:gap-12 font-mono text-sm border-t md:border-t-0 border-[#0B1215]/10 pt-4 md:pt-0 mt-4 md:mt-0">
        <div className="md:text-right">
          <span className="block text-[#0B1215]/40 text-xs mb-1">Time</span>
          <span className="text-[#0B1215]">{service.time}</span>
        </div>
        <div className="md:text-right">
          <span className="block text-[#0B1215]/40 text-xs mb-1">INR</span>
          <span className="text-xl font-serif text-[#0B1215]">
            ₹{service.price}
          </span>
        </div>
      </div>
    </div>

    {/* Desktop Hover Image Reveal: Hidden on mobile */}
    <div className="absolute inset-y-0 right-[15%] w-[250px] opacity-0 scale-90 group-hover:opacity-10 group-hover:scale-100 transition-all duration-700 pointer-events-none mix-blend-multiply hidden md:block">
      <img
        src={service.image}
        alt=""
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);

// --- PAGES ---

const HomePage = ({ setPage }: any) => (
  <>
    {/* HERO */}
    <section className="relative min-h-screen flex flex-col justify-between p-6 pt-24 md:p-12 lg:p-24 overflow-hidden animate-fade-in">
      <div className="flex justify-between items-start">
        <div className="font-mono text-xs uppercase tracking-widest max-w-[200px]">
          Bengaluru, India
          <br />
          12.9716° N, 77.5946° E
        </div>
        <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-right">
          Authentic Thai
          <br />
          Luxury Wellness
        </div>
      </div>

      <div className="relative z-10 mt-8 md:mt-0">
        <h1 className="text-[14vw] leading-[0.85] font-serif font-medium tracking-tighter text-[#0B1215]">
          BLUE <span className="italic font-light">LEAF</span>
        </h1>
        <div className="h-px w-full bg-[#0B1215] mt-4 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 md:pb-0">
          <p className="max-w-md text-lg md:text-xl font-light leading-relaxed">
            Ancient wellness traditions meeting modern architectural luxury.
            Relax, rejuvenate, and restore your balance.
          </p>
          <div
            className="flex items-center gap-4 cursor-pointer mt-4 md:mt-0"
            onClick={() => setPage("menu")}
          >
            <MagneticButton className="border-[#0B1215]">
              Explore Menu
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full border border-[#0B1215]/5 z-0 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
    </section>

    {/* IMAGE BREAK */}
    <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden relative">
      <img
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        alt="Spa"
      />
    </div>

    {/* TEASER */}
    <section className="py-24 md:py-32 px-6 md:px-24 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-serif">The Philosophy</h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            Blue Leaf is not just a spa. It is a sanctuary for the soul. We
            believe in the healing power of touch, the purity of organic oils,
            and the luxury of silence.
          </p>
          <button
            onClick={() => setPage("about")}
            className="text-[#0B1215] border-b border-[#0B1215] pb-1 font-mono text-xs uppercase tracking-widest hover:opacity-50"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  </>
);

const MenuPage = () => (
  <div className="pt-24 md:pt-32 min-h-screen animate-fade-in bg-white">
    <div className="px-6 md:px-24 mb-12 md:mb-16">
      {/* Title scales responsively but caps at a readable max size on desktop */}
      <h2 className="text-[14vw] md:text-8xl lg:text-[120px] font-serif text-[#0B1215] leading-none opacity-10">
        MENU
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-[-4vw] md:mt-[-30px]">
        <h1 className="text-4xl md:text-6xl font-serif text-[#0B1215]">
          Bodywork
        </h1>
        <span className="font-mono text-xs uppercase tracking-widest mt-2 md:mt-0">
          Full Service List
        </span>
      </div>
    </div>

    {/* Main Massages */}
    <div className="mb-12 md:mb-24">
      {MASSAGES.map((service, index) => (
        <ServiceRow key={index} service={service} index={index} />
      ))}
    </div>

    {/* Express & Rituals */}
    <div className="bg-[#E0E5E5] py-16 md:py-24 px-6 md:px-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Express */}
        <div>
          <h3 className="text-3xl font-serif mb-8 md:mb-12 flex items-center gap-4">
            <Clock className="text-[#0B1215]/40" /> Express Therapies
          </h3>
          <div className="space-y-6">
            {EXPRESS_THERAPIES.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-[#0B1215]/10 pb-4 group hover:pl-4 transition-all"
              >
                <div>
                  <h4 className="font-serif text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <span className="text-xs font-mono text-[#0B1215]/50">
                    {item.time}
                  </span>
                </div>
                <span className="font-serif text-lg whitespace-nowrap">
                  ₹{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rituals */}
        <div>
          <h3 className="text-3xl font-serif mb-8 md:mb-12 flex items-center gap-4">
            <Sparkles className="text-[#0B1215]/40" /> Body Rituals
          </h3>
          <div className="space-y-6">
            {BODY_RITUALS.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-[#0B1215]/10 pb-4 group hover:pl-4 transition-all"
              >
                <div>
                  <h4 className="font-serif text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <span className="text-xs font-mono text-[#0B1215]/50">
                    {item.time}
                  </span>
                </div>
                <span className="font-serif text-lg whitespace-nowrap">
                  ₹{item.price}
                </span>
              </div>
            ))}
            <div className="mt-12 p-8 bg-[#0B1215] text-[#E0E5E5]">
              <h4 className="font-serif text-2xl mb-4">Today's Privilege</h4>
              <p className="font-light opacity-80 mb-6">
                Receive a flat 20% discount on all therapies booked for today.
              </p>
              <div className="font-mono text-xs uppercase tracking-widest border border-[#E0E5E5]/30 inline-block px-4 py-2">
                Code: TODAY20
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-24 md:pt-32 min-h-screen animate-fade-in px-6 md:px-24">
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-5xl md:text-8xl font-serif mb-12 md:mb-16 text-[#0B1215]">
        The Sanctuary
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
        <div className="order-2 md:order-1">
          <p className="text-lg md:text-xl leading-relaxed font-light mb-8">
            Welcome to Blue Leaf Parlour & Spa. We stand at the intersection of
            ancient Thai wellness traditions and modern, hygienic luxury.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light">
            Our mission is simple: to provide a space where you can disconnect
            from the city's chaos and reconnect with your inner balance.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="w-full h-full object-cover"
            alt="Oils"
          />
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-serif mb-12 border-b border-[#0B1215] pb-4 inline-block">
          Why Choose Blue Leaf?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className="flex gap-4">
              <Star className="shrink-0 text-[#0B1215]/40" />
              <p className="font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COMPLIANCE SECTION - CRITICAL FROM PDF */}
      <div className="bg-[#F5F5F0] p-8 md:p-12 border border-[#0B1215]/10 mb-24">
        <div className="flex items-center gap-4 mb-8">
          <ShieldCheck size={32} className="text-[#0B1215]" />
          <h3 className="text-2xl font-serif">Code of Ethics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm text-[#0B1215]/70">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0B1215] rounded-full shrink-0"></div>
            Professional spa & wellness services only
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0B1215] rounded-full shrink-0"></div>
            Services strictly follow wellness standards
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0B1215] rounded-full shrink-0"></div>
            No explicit or adult services
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0B1215] rounded-full shrink-0"></div>
            Safe, hygienic, and respectful environment
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<any>(null);

  return (
    <div className="pt-24 md:pt-32 min-h-screen animate-fade-in px-6 md:px-24 max-w-[1200px] mx-auto">
      <h1 className="text-5xl md:text-8xl font-serif mb-12 md:mb-16 text-[#0B1215]">
        Queries
      </h1>

      <div className="space-y-0 border-t border-[#0B1215]/10">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-[#0B1215]/10">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-6 md:py-8 flex justify-between items-center text-left hover:bg-white transition-colors gap-4"
            >
              <span className="text-lg md:text-2xl font-serif text-[#0B1215]">
                {faq.q}
              </span>
              <ChevronDown
                className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${openIndex === i ? "max-h-60 opacity-100 mb-8" : "max-h-0 opacity-0"}`}
            >
              <p className="text-base md:text-lg font-light text-[#0B1215]/70 max-w-3xl">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-8 md:p-12 bg-[#0B1215] text-[#E0E5E5] text-center rounded-sm">
        <h3 className="text-2xl font-serif mb-4">Still have questions?</h3>
        <p className="font-light mb-8 opacity-70">
          Our concierge is available to assist you instantly.
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => window.open("tel:+919876543210")}
            className="border-b border-[#E0E5E5] pb-1 hover:opacity-50"
          >
            Call Us
          </button>
          <button
            onClick={() => window.open("https://wa.me/919876543210")}
            className="border-b border-[#E0E5E5] pb-1 hover:opacity-50"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN LAYOUT ---

export default function BlueLeafSpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setPage={setCurrentPage} />;
      case "menu":
        return <MenuPage />;
      case "about":
        return <AboutPage />;
      case "faq":
        return <FaqPage />;
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-[#E0E5E5] min-h-screen text-[#0B1215] selection:bg-[#0B1215] selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      <ScrollProgress />

      {/* DESKTOP SIDEBAR */}
      <div className="fixed top-0 left-0 h-screen w-20 border-r border-[#0B1215]/10 flex-col justify-between items-center py-8 hidden lg:flex z-40 bg-[#E0E5E5]/80 backdrop-blur-sm">
        <div
          className="font-serif font-bold text-2xl rotate-180 cursor-pointer"
          onClick={() => setCurrentPage("home")}
          style={{ writingMode: "vertical-rl" }}
        >
          BLUE LEAF
        </div>
        <div className="flex flex-col gap-6">
          <button
            onClick={() => setCurrentPage("home")}
            className={`hover:scale-110 transition-transform ${currentPage === "home" ? "text-[#0B1215]" : "text-[#0B1215]/40"}`}
          >
            <Leaf size={20} />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="hover:scale-110 transition-transform"
          >
            <Menu size={20} />
          </button>
        </div>
        <div
          className="font-mono text-xs rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          EST. 2024
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="fixed top-0 w-full p-6 flex justify-between items-center lg:hidden z-40 bg-[#E0E5E5]/90 backdrop-blur-md shadow-sm">
        <span
          className="font-serif font-bold text-xl cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          BLUE LEAF
        </span>
        <button onClick={() => setMenuOpen(true)} className="p-2">
          <Menu size={24} />
        </button>
      </div>

      {/* FULL SCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#0B1215] z-50 transition-all duration-700 ${menuOpen ? "translate-y-0" : "-translate-y-full"} flex items-center justify-center overflow-y-auto`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300 p-2"
        >
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-8 font-serif text-5xl md:text-7xl text-[#E0E5E5] py-20">
          {["Home", "Menu", "About", "FAQ"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrentPage(item.toLowerCase());
                setMenuOpen(false);
              }}
              className={`hover:text-white hover:italic transition-all duration-300 ${currentPage === item.toLowerCase() ? "text-white italic" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT RENDERER */}
      <main className="lg:pl-20 min-h-screen">
        {renderPage()}

        {/* FOOTER (On all pages) */}
        <footer className="bg-[#E0E5E5] pt-16 md:pt-24 pb-12 px-6 md:px-24 border-t border-[#0B1215]/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h3 className="font-serif text-3xl mb-6">Blue Leaf Spa.</h3>
              <p className="text-[#0B1215]/60 max-w-sm leading-relaxed">
                A design-led wellness sanctuary. We combine aesthetic calm with
                therapeutic precision.
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#0B1215]/40">
                Find Us
              </h4>
              <p className="mb-4">
                123 Wellness Avenue,
                <br />
                Serenity District, Bengaluru
              </p>
              <a
                href="https://maps.google.com"
                className="inline-flex items-center gap-2 border-b border-[#0B1215] pb-1 hover:opacity-50 transition-opacity"
              >
                Get Directions <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#0B1215]/40">
                Booking
              </h4>
              <p className="text-xl font-serif mb-2">20% OFF Today</p>
              <div className="flex gap-4 text-sm font-mono uppercase tracking-widest mt-4">
                <button
                  onClick={() => window.open("tel:+919876543210")}
                  className="hover:text-green-700 transition-colors"
                >
                  Call
                </button>
                <button
                  onClick={() => window.open("https://wa.me/919876543210")}
                  className="hover:text-green-700 transition-colors"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-24 pt-8 border-t border-[#0B1215]/5 flex flex-col md:flex-row justify-between items-center text-[#0B1215]/40 text-xs font-mono">
            <p>&copy; 2026 Blue Leaf Parlour. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Excellence.</p>
          </div>
        </footer>
      </main>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0B1215] text-[#E0E5E5] p-4 flex justify-between items-center z-50 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-xs text-[#E0E5E5]/60 uppercase tracking-widest">
            Today's Offer
          </span>
          <span className="font-serif text-lg">20% OFF</span>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+919876543210"
            className="w-12 h-12 flex items-center justify-center bg-[#E0E5E5] text-[#0B1215] rounded-full active:scale-95 transition-transform"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://wa.me/919876543210"
            className="w-12 h-12 flex items-center justify-center bg-green-700 text-white rounded-full active:scale-95 transition-transform"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background-color: #0B1215; color: #E0E5E5; }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
