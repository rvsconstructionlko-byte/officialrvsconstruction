import React from "react";
import {
  Building2,
  Hammer,
  Wrench,
  Ruler,
  HardHat,
  Phone,
  MapPin,
  Clock,
  Quote,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function RVSVisualMock() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <img
                src="/Screenshot 2025-08-19 070325.png" // apna logo public folder me daalna (public/logo.png)
                alt="RVS Construction Logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="font-semibold">RVS Construction</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-amber-600">
              Services
            </a>
            <a href="#projects" className="hover:text-amber-600">
              Projects
            </a>
            <a href="#why" className="hover:text-amber-600">
              Why Us
            </a>
            <a href="#contact" className="hover:text-amber-600">
              Contact
            </a>
          </nav>
          <a
            href="tel:+919451808595"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-4 py-2 text-white text-sm shadow hover:bg-amber-700 transition"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 
  bg-[radial-gradient(70%_30%_at_90%_10%,#0A2942_0%,transparent_60%),radial-gradient(80%_35%_at_10%_90%,#F59E0B_20%,transparent_50%)] 
  opacity-40 pointer-events-none"
        />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Building trust.
              <br /> Creating dreams.
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Civil construction in Lucknow — residential, commercial &
              renovation. On-time handover, transparent budgets, and quality
              materials.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGe4hs4DgqtRRnsx2IZBNZdLWOelP3dTn6HwZQNsv9iDZv8A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-amber-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-amber-700 inline-flex items-center gap-2"
              >
                📝 Click To Fill Form <ArrowRight className="size-4" />
              </a>
              <a
                href="https://wa.me/919451808595?text=Hi%20RVS%20Construction%2C%20I%20need%20a%20quote"
                className="rounded-2xl border px-5 py-3 text-sm font-medium inline-flex items-center gap-2 hover:border-amber-600"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat n="120+" k="Projects" />
              <Stat n="8+" k="Years" />
              <Stat n="100%" k="On-time" />
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-white shadow-lg p-4 grid grid-cols-2 gap-4">
            <Tile icon={HardHat} title="Site Safety" />
            <Tile icon={Hammer} title="Quality Work" />
            <Tile icon={Ruler} title="Accurate BOQ" />
            <Tile icon={Wrench} title="After‑service" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <p className="text-neutral-600 mt-2">
          Choose turnkey or labour-only execution as per your budget.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={Building2}
            title="Residential Construction"
            desc="Homes, duplexes, villas with RCC frame & premium finishes."
          />
          <Card
            icon={Building2}
            title="Commercial Projects"
            desc="Shops, offices, showrooms — planning to handover."
          />
          <Card
            icon={Wrench}
            title="Renovation & Remodeling"
            desc="Extensions, re-tiling, repainting, kitchen/bath upgrades."
          />
          <Card
            icon={Ruler}
            title="RCC & Structural"
            desc="Footings, columns, beams, slabs with mix control."
          />
          <Card
            icon={Hammer}
            title="Interiors & Finishing"
            desc="False ceiling, wardrobes, modular kitchen, paint."
          />
          <Card
            icon={HardHat}
            title="Waterproofing & Repairs"
            desc="Terrace/bathroom waterproofing with warranty."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Recent Projects
          </h2>
          <p className="text-neutral-600 mt-2">
            A snapshot of our ongoing & completed works.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Vrindavan Yojna – Home",
                desc: "🧱 Spacious Living – Built to Last",
                img: "home1.jpg",
              },
              {
                title: "Alambagh – Office",
                desc: "Corporate office with modular workspace",
                img: "home2.jpg",
              },
              {
                title: "Gomti Nagar",
                desc: "Premium Residences – Work in Progress",
                img: "home3.jpg",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-3xl border overflow-hidden bg-neutral-50"
              >
                <img src={project.img} alt={project.title} className="" />

                <div className="p-4 text-sm">
                  <div className="font-medium">{project.title}</div>
                  <div className="text-neutral-600">{project.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / TESTIMONIALS */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Why Choose RVS
            </h2>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Written estimates & clear timelines</li>
              <li>• Experienced supervisors & trained workforce</li>
              <li>• Brand‑grade materials with bill transparency</li>
              <li>• Warranty on waterproofing & structure</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-3xl border bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 text-amber-600">
                  <Quote className="size-5" />
                  <span className="font-medium">Client feedback</span>
                </div>
                <p className="mt-2 text-neutral-700">
                  “On-time delivery and neat finishing. Budget discussed was
                  maintained. Recommended for residential builds.”
                </p>
                <div className="mt-2 text-sm text-neutral-500">
                  — Lucknow homeowner
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gradient-to-br from-amber-50 to-orange-50 border-t"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT CONTACT CARD */}
          <div className="rounded-3xl bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-2 text-neutral-700">
              <div className="flex gap-3 items-start">
                <MapPin className="size-5 text-amber-600" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="size-5 text-amber-600" />
                <span>9451808595 • 8604085029</span>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="size-5 text-amber-600" />
                <span>Mon–Sat • 9:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919451808595"
                className="rounded-2xl bg-amber-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-amber-700 inline-flex items-center gap-2"
              >
                <Phone className="size-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919451808595?text=Hi%20RVS%20Construction%2C%20I%20need%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border px-5 py-3 text-sm font-medium inline-flex items-center gap-2 hover:border-amber-600"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT CLIENT-FRIENDLY CTA */}
          <div className="rounded-3xl border bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-amber-700">
              Get Your Free Quote 🚀
            </h3>
            <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
              Planning your dream home, office, or renovation? <br />
              Share your details and our team will get back with a quick
              estimate.
            </p>

            <div className="mt-6 flex flex-col gap-3 items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGe4hs4DgqtRRnsx2IZBNZdLWOelP3dTn6HwZQNsv9iDZv8A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto rounded-2xl bg-amber-600 text-white px-6 py-3 text-sm font-medium shadow hover:bg-amber-700 transition inline-flex items-center justify-center gap-2"
              >
                📝 Fill Quick Form <ArrowRight className="size-4" />
              </a>
              <a
                href="https://wa.me/919451808595?text=Hi%20RVS%20Construction%2C%20I%20need%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto rounded-2xl border px-6 py-3 text-sm font-medium shadow-sm inline-flex items-center justify-center gap-2 hover:border-amber-600 hover:text-amber-700 transition"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              ✨ Trusted by 120+ clients • 8+ Years of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} RVS Construction — Lucknow</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-600">
              Privacy
            </a>
            <a href="#" className="hover:text-amber-600">
              Terms
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919451808595?text=Hi%20RVS%20Construction%2C%20I%20need%20a%20quote"
        className="fixed bottom-6 right-6 rounded-full bg-amber-600 p-4 shadow-lg hover:bg-amber-700"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white" />
      </a>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="size-10 rounded-2xl bg-amber-100 text-amber-700 grid place-items-center">
        <Icon className="size-5" />
      </div>
      <div className="mt-3 font-medium">{title}</div>
      <div className="text-sm text-neutral-600">{desc}</div>
    </div>
  );
}

function Tile({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="rounded-2xl border bg-neutral-50 grid place-items-center p-6 text-center">
      <Icon className="size-8 text-amber-600" />
      <div className="mt-2 text-sm font-medium">{title}</div>
    </div>
  );
}

function Stat({ n, k }: { n: string; k: string }) {
  return (
    <div className="rounded-2xl bg-white border p-4 shadow-sm">
      <div className="text-2xl font-semibold">{n}</div>
      <div className="text-xs text-neutral-500">{k}</div>
    </div>
  );
}
