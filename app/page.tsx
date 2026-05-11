import type { ComponentType } from "react";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  LayoutGrid,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#shop" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "120+", label: "gadgets stocked" },
  { value: "98%", label: "customer satisfaction" },
  { value: "24h", label: "typical response time" },
];

const services = [
  {
    title: "Gadgets and devices",
    copy: "Phones, tablets, wearables, headphones, and everyday gadgets selected for quality and value.",
    icon: LayoutGrid,
  },
  {
    title: "Accessories",
    copy: "Chargers, cases, cables, speakers, and accessories that complete your setup.",
    icon: Workflow,
  },
  {
    title: "Swap faulty gadgets",
    copy: "Trade in or swap damaged devices for working alternatives with a simple, fast process.",
    icon: BarChart3,
  },
  {
    title: "Repair service",
    copy: "Faulty gadgets can be diagnosed and repaired so you can get back to using them sooner.",
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: "Smartphones",
    result: "$399+",
    image: "/images/company-work-1.jpg",
    copy: "Latest phones with fast performance, sharp cameras, and everyday reliability.",
  },
  {
    title: "Accessories",
    result: "$19+",
    image: "/images/company-work-2.jpg",
    copy: "Chargers, cases, cables, headphones, and add-ons to complete your setup.",
  },
  {
    title: "Swap & Repair",
    result: "Service",
    image: "/images/company-work-3.jpg",
    copy: "Bring in a faulty gadget for inspection, swapping, or repair support.",
  },
];

const process = [
  {
    title: "Choose products",
    copy: "Browse gadgets, accessories, and new stock that fit your needs and budget.",
  },
  {
    title: "Swap or repair",
    copy: "If your gadget is faulty, bring it in for a swap, inspection, or repair recommendation.",
  },
  {
    title: "Collect or order",
    copy: "Pick up in store, request delivery, or contact us to place an order directly.",
  },
];

const whatsappCatalogueUrl = "https://wa.me/?text=Hi%20Teo%20Innoation%2C%20please%20share%20your%20catalogue%20and%20current%20prices.";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700/70">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function ServiceCard({
  title,
  copy,
  icon: Icon,
}: {
  title: string;
  copy: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </article>
  );
}

function ProjectCard({
  title,
  result,
  image,
  copy,
}: {
  title: string;
  result: string;
  image: string;
  copy: string;
}) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-4/3 bg-slate-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {result}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={whatsappCatalogueUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Shop on WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Contact to order
          </a>
        </div>
      </div>
    </article>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur">
      <p className="text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(219,234,254,0.9),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(191,219,254,0.5),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_46%,#ffffff_100%)] pt-24 text-slate-900 sm:pt-28">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
              T
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                Teo Innoation
              </p>
              <p className="text-base font-semibold text-slate-950">
                Gadgets, accessories, swap & repair
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Book a call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <details className="border-t border-slate-200/70 lg:hidden">
          <summary className="flex list-none items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-sm font-medium text-slate-600">Browse sections</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm">
              <Menu className="h-4 w-4" />
            </span>
          </summary>
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 sm:px-6">
            <div className="grid gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </details>
      </header>

      <section id="top" className="mx-auto w-full max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-18">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-sky-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Teo Innoation
            </div>

            <h1
              className="mt-6 text-5xl font-semibold tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Shop gadgets, accessories, swap, and repair support in one place.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Teo Innoation sells gadgets and accessories, and helps customers swap or repair faulty devices with a smooth shopping experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappCatalogueUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Shop on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white"
              >
                View products
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <StatCard key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)] blur-2xl" />
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-4/3 overflow-hidden rounded-[28px] bg-slate-950">
                <Image
                  src="/images/hero-showcase.jpg"
                  alt="Teo Innoation gadget showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Fresh stock</p>
                      <p className="text-sm text-slate-600">Gadgets and accessories ready to buy</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Swap and repair</p>
                      <p className="text-sm text-slate-600">Faulty gadgets inspected and supported</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-4 rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:grid-cols-4">
          {[
            "Gadgets and accessories in stock",
            "Swap service for faulty gadgets",
            "Repair support available",
            "Built for desktop and mobile",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-sky-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need for gadgets, accessories, swap, and repair"
          description="Browse products, request a swap, or bring in a faulty gadget for repair support."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} copy={service.copy} icon={service.icon} />
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Shop"
          title="Featured gadgets, accessories, and services"
          description="A clean product grid with prices, plus easy access to swap and repair support."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Process"
          title="How buying, swapping, and repair support works"
          description="The process is simple: choose a product, request a swap or repair, and we help you complete the order or service."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-700/70">
              Why customers choose us
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tighter text-slate-950">
              Trusted for gadgets, accessories, and repair support.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              We focus on clear product listings, easy ordering, and practical support for customers who need a new device, a useful accessory, or help with a faulty gadget.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Phones, tablets, and gadgets",
                "Accessories and add-ons",
                "Swap support for faulty devices",
                "Repair guidance and service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(135deg,#0f172a,#1d4ed8_60%,#38bdf8)] p-8 text-white shadow-[0_24px_80px_rgba(37,99,235,0.24)]">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/70">
                  Customer quote
                </p>
                <p className="mt-5 text-2xl font-semibold leading-tight tracking-tighter">
                  “Teo Innoation is the place for gadgets, accessories, and quick help when a device needs swapping or repair.”
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-4 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Sales and service</p>
                  <p className="text-sm text-white/75">Products, accessories, swapping, and repairs in one place.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_26px_90px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-700/70">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-slate-950 sm:text-4xl">
                Need gadgets, accessories, a swap, or a repair?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Send us a quick note and we’ll follow up with product availability, swap details, repair support, and the right next step.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@teoinnoation.com?subject=Project%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Email us to order
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                Back to top
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Teo Innoation.</p>
          <div className="mt-3 flex items-center gap-4 sm:mt-0">
            <a href="#shop" className="transition hover:text-slate-950">Shop</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
            <a href="mailto:hello@teoinnoation.com" className="transition hover:text-slate-950">
              hello@teoinnoation.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
