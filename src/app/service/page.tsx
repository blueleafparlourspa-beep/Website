"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Clock,
  Star,
  Leaf,
  ArrowRight,
  Check,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

/**
 * =========================================
 * DATA & CONFIGURATION
 * =========================================
 */
const PHONE_NUMBER = "+91 8971180801";
const WHATSAPP_NUMBER = "918971180809";

type Category = "All" | "Massages" | "Body Scrubs" | "Quick Therapies";

const CATEGORIES: Category[] = [
  "All",
  "Massages",
  "Body Scrubs",
  "Quick Therapies",
];

const SERVICES_DATA = [
  // --- MASSAGES ---
  {
    id: 1,
    name: "Aroma Massage",
    category: "Massages",
    image:
      "https://serenitysf.com/wp-content/uploads/2024/07/aromatherapy-massage-1.jpg",
    description:
      "A holistic treatment with a profound impact on the body, mind, and spirit. Experience deep relaxation through the powerful combination of aromatic oils and massage. The treatment ends with a deeply soothing head massage.",
    prices: [
      { time: "60 Min", cost: 2500 },
      { time: "90 Min", cost: 3000 },
    ],
    tags: ["Relaxation", "Stress Relief"],
  },
  {
    id: 2,
    name: "Balinese Massage",
    category: "Massages",
    image:
      "https://thumbs.dreamstime.com/b/young-women-getting-back-massage-woman-salon-40464330.jpg",
    description:
      "Techniques include acupressure, skin rolling, firm and gentle stroking, and percussion. Deeply relaxes and revitalizes the body and mind. Benefits include increased flexibility and relief from muscle tension.",
    prices: [
      { time: "60 Min", cost: 2500 },
      { time: "90 Min", cost: 3000 },
    ],
    tags: ["Flexibility", "Energy"],
  },
  {
    id: 3,
    name: "Signature Four Hands",
    category: "Massages",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    description:
      "Performed by two therapists working in unison to unravel knots and stress. This synchronized approach offers a doubled dose of therapeutic touch compared to traditional single-therapist massages.",
    prices: [
      { time: "60 Min", cost: 5000 },
      { time: "90 Min", cost: 6000 },
    ],
    highlight: true,
    tags: ["Luxury", "Double Therapist"],
  },
  {
    id: 4,
    name: "Deep Tissue Massage",
    category: "Massages",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    description:
      "Focuses on deeper layers of muscles. Deep pressure helps release chronic muscle tension, targeting tendons and fascia using slow, firm strokes. Ideal for chronic pain or athletes.",
    prices: [
      { time: "60 Min", cost: 3000 },
      { time: "90 Min", cost: 4000 },
    ],
    tags: ["Recovery", "Strong Pressure"],
  },
  {
    id: 5,
    name: "Candle Massage",
    category: "Massages",
    image:
      "https://thumbs.dreamstime.com/b/massage-women-spa-salon-girl-candles-background-treats-problem-back-relaxation-benefit-beauty-health-crop-bare-117648962.jpg",
    description:
      "Warm wax is dripped onto the body to create a gentler and more relaxing experience. The wax helps melt away muscle knots while providing a soothing sensation, ideal for anxiety.",
    prices: [
      { time: "60 Min", cost: 3500 },
      { time: "90 Min", cost: 4500 },
    ],
    tags: ["Warmth", "Anxiety Relief"],
  },
  {
    id: 6,
    name: "Wine Massage",
    category: "Massages",
    image:
      "https://media.vyaparify.com/vcards/blogs/223568/service_1743607964.png",
    description:
      "Offers potential benefits such as enhanced skin texture, improved circulation, and antioxidant protection. Treatments include wine-based scrubs and creams to exfoliate and nourish.",
    prices: [
      { time: "60 Min", cost: 3500 },
      { time: "90 Min", cost: 5000 },
    ],
    tags: ["Skin Care", "Antioxidant"],
  },
  {
    id: 7,
    name: "Lomi Lomi Massage",
    category: "Massages",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=800&auto=format&fit=crop",
    description:
      "A traditional Hawaiian massage using continuous, flowing strokes that work gently yet deeply into the muscles. Known as the 'loving hands' massage.",
    prices: [
      { time: "60 Min", cost: 2500 },
      { time: "90 Min", cost: 3500 },
    ],
    tags: ["Flowing", "Hawaiian"],
  },
  {
    id: 8,
    name: "Swedish Massage",
    category: "Massages",
    image:
      "https://thumbs.dreamstime.com/b/masseur-doing-massage-woman-body-women-spa-salon-beauty-treatment-concept-44619828.jpg",
    description:
      "Uses long, gliding strokes in the direction of blood flow toward the heart to improve circulation, reduce muscle tension, and promote deep relaxation.",
    prices: [
      { time: "60 Min", cost: 2500 },
      { time: "90 Min", cost: 3500 },
    ],
    tags: ["Classic", "Circulation"],
  },
  {
    id: 9,
    name: "Traditional Thai",
    category: "Massages",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/010/508/721/small/massage-and-spa-relaxing-treatment-of-office-syndrome-using-hot-stone-traditional-thai-massage-style-asain-female-masseuse-doing-massage-treat-back-pain-arm-pain-stress-for-woman-tired-from-work-photo.jpg",
    description:
      "A dry therapy combining yoga stretches, Shiatsu, and acupressure. Works on the body’s energy pathways and pressure points to restore balance.",
    prices: [
      { time: "60 Min", cost: 3000 },
      { time: "90 Min", cost: 4000 },
    ],
    tags: ["Stretching", "No Oil"],
  },

  // --- SCRUBS & STEAM ---
  {
    id: 10,
    name: "Full Body Scrub",
    category: "Body Scrubs",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    description: "Exfoliate dead skin cells and rejuvenate your glow.",
    prices: [{ time: "60 Min", cost: 3500 }],
  },
  {
    id: 11,
    name: "Steam Bath",
    category: "Body Scrubs",
    image:
      "https://plus.unsplash.com/premium_photo-1661319103622-991148798a57?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Humid, heated room to help open pores and aid detoxification.",
    prices: [{ time: "20 Min", cost: 500 }],
  },
  {
    id: 12,
    name: "Back Body Scrub",
    category: "Body Scrubs",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
    description: "Targeted exfoliation for the back area.",
    prices: [{ time: "30 Min", cost: 1800 }],
  },

  // --- QUICK THERAPIES ---
  {
    id: 13,
    name: "Head Massage",
    category: "Quick Therapies",
    description: "Relieves stress and migraine pain.",
    prices: [{ time: "30 Min", cost: 1000 }],
  },
  {
    id: 14,
    name: "Back Massage",
    category: "Quick Therapies",
    description: "Focus on back tension.",
    prices: [{ time: "30 Min", cost: 1500 }],
  },
  {
    id: 15,
    name: "Foot Massage",
    category: "Quick Therapies",
    description: "Reflexology focus.",
    prices: [{ time: "30 Min", cost: 1500 }],
  },
  {
    id: 16,
    name: "Potli Massage",
    category: "Quick Therapies",
    description: "Herbal pouch therapy.",
    prices: [{ time: "30 Min", cost: 1500 }],
  },
  {
    id: 17,
    name: "Hot Rock Salt",
    category: "Quick Therapies",
    description: "Warm salt therapy.",
    prices: [{ time: "30 Min", cost: 1500 }],
  },
];

/**
 * =========================================
 * COMPONENTS
 * =========================================
 */

// Exact Replica of Home Page Navbar
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
        <a
          href="/"
          className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-teal-900" : "text-teal-900"} flex items-center gap-2`}
        >
          <Leaf className="w-6 h-6 text-teal-600" />
          BLUE LEAF
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-slate-600 hover:text-teal-700 font-medium text-sm tracking-wide transition-colors"
          >
            Home
          </a>
          <a
            href="/services"
            className="text-teal-700 font-bold text-sm tracking-wide transition-colors"
          >
            Services
          </a>

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
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-slate-800"
          >
            Home
          </a>
          <a
            href="/services"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-teal-700 font-bold"
          >
            Services
          </a>
        </div>
      )}
    </nav>
  );
};

const PageHeader = () => (
  <header className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3 block">
        Our Menu
      </span>
      <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">
        World Class Treatments
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Discover our curated selection of therapies designed to restore balance
        to your mind, body, and spirit.
      </p>
    </div>
  </header>
);

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredServices =
    activeCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <main className="font-sans antialiased bg-white min-h-screen">
      <Navbar />
      <PageHeader />

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-8 pb-4 pt-4 no-scrollbar items-center justify-start md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-2 text-sm font-bold tracking-wider uppercase border-b-2 transition-all duration-300 ${activeCategory === cat
                  ? "border-teal-600 text-teal-800"
                  : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <section className="py-16 container mx-auto px-6">
        {/* Render Massages & Scrubs as Large Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices
            .filter((s) => s.category !== "Quick Therapies")
            .map((service) => (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${service.highlight ? "border-teal-900 shadow-xl ring-1 ring-teal-900" : "border-slate-100"}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    {service.tags && (
                      <div className="flex gap-2">
                        {service.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {service.highlight && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-teal-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Signature
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif text-slate-800 group-hover:text-teal-700 transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {service.prices.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center text-sm"
                      >
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock size={14} /> {p.time}
                        </div>
                        <span className="font-bold text-slate-800 text-lg">
                          ₹{p.cost.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex-1 border border-teal-600 text-teal-700 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors"
                    >
                      <Phone size={16} /> Book Session
                    </a>

                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Render Quick Therapies as a "Menu List" */}
        {(activeCategory === "All" || activeCategory === "Quick Therapies") && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-serif text-slate-800">
                Quick Therapies
              </h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {SERVICES_DATA.filter(
                (s) => s.category === "Quick Therapies",
              ).map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4 hover:bg-slate-50 transition-colors p-2 rounded"
                >
                  <div>
                    <h4 className="text-lg font-serif text-slate-800 mb-1">
                      {service.name}
                    </h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">
                      {service.prices[0].time} Session
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-teal-700">
                      ₹{service.prices[0].cost}
                    </span>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-xs text-slate-400 block mt-1 hover:text-teal-600 underline"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-teal-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Experience the art of relaxation.
          </h2>
          <p className="text-teal-200 mb-10 max-w-xl mx-auto">
            Flat 20% OFF on all services today. Walk-ins available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-teal-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call to Book
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="border border-teal-400 text-teal-100 px-8 py-3 rounded-full font-bold hover:bg-teal-800 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
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
