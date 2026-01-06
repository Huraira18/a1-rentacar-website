// src/pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type Slide = {
  image: string;
  heading1: string;
  heading2: string;
  desc: string;
};

type Review = {
  text: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
};

type Service = {
  title: string;
  image: string; // ✅ image instead of Icon
  desc: string;
};

type Car = {
  title: string;
  image: string;
  dayPrice: number;
  monthPrice: number;
  rating: number; // 0-5
  year: string;
  seats: string;
  engine: string;
  transmission: string;
  whatsappLink: string;
  callLink: string;
  bookLink: string;
};

// ✅ Replace images with your real images inside public/images/cars/
const carsTop: Car[] = [
  {
    title: "Renault Symbol",
    image: "/images/renault-symbol.jpg",
    dayPrice: 39,
    monthPrice: 1170,
    rating: 5,
    year: "2022",
    seats: "4",
    engine: "1600 CC",
    transmission: "Tiptronic",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Nissan Sunny",
    image: "/images/nissan-sunny.jpg",
    dayPrice: 50,
    monthPrice: 1550,
    rating: 5,
    year: "2024",
    seats: "5",
    engine: "1.5L",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Renault Duster",
    image: "/images/renault-duster.jpg",
    dayPrice: 69,
    monthPrice: 2700,
    rating: 5,
    year: "2023",
    seats: "5",
    engine: "1600 CC",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "MG 3",
    image: "/images/mg3.jpg",
    dayPrice: 79,
    monthPrice: 1999,
    rating: 5,
    year: "2024",
    seats: "5",
    engine: "1.6L",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Chevrolet Spark",
    image: "/images/chevrolet-spark.jpg",
    dayPrice: 80,
    monthPrice: 1499,
    rating: 5,
    year: "2020",
    seats: "4",
    engine: "1.4L",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "EMGrand Geely 2026",
    image: "/images/emgrand-geely.jpg",
    dayPrice: 80,
    monthPrice: 2300,
    rating: 5,
    year: "2026",
    seats: "5",
    engine: "1.5L",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
];

const carsBottom: Car[] = [
  {
    title: "Nissan Sunny 2023",
    image: "/images/nissan-sunny-2023.jpg",
    dayPrice: 49,
    monthPrice: 1490,
    rating: 5,
    year: "2023",
    seats: "4",
    engine: "1500 CC",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Renault Duster 2023",
    image: "/images/duster-2023.jpg",
    dayPrice: 69,
    monthPrice: 2070,
    rating: 5,
    year: "2023",
    seats: "4",
    engine: "1600 CC",
    transmission: "Tiptronic",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Toyota Corolla",
    image: "/images/toyota-corolla.jpg",
    dayPrice: 79,
    monthPrice: 2299,
    rating: 5,
    year: "2021",
    seats: "4",
    engine: "1800 CC",
    transmission: "Tiptronic",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Hyundai Accent",
    image: "/images/hyundai-accent.jpg",
    dayPrice: 90,
    monthPrice: 1700,
    rating: 5,
    year: "2022",
    seats: "4",
    engine: "1600 CC",
    transmission: "Tiptronic",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Mitsubishi Mirage",
    image: "/images/mitsubishi-mirage.jpg",
    dayPrice: 99,
    monthPrice: 2200,
    rating: 5,
    year: "2021",
    seats: "4",
    engine: "1200 CC",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
  {
    title: "Kia Sportage",
    image: "/images/kia-sportage.jpg",
    dayPrice: 120,
    monthPrice: 3799,
    rating: 5,
    year: "2022",
    seats: "5",
    engine: "2400 CC",
    transmission: "Auto",
    whatsappLink: "https://wa.me/971544044600",
    callLink: "tel:+971544044600",
    bookLink: "#contact",
  },
];



const Home: NextPage = () => {
  /** ---------------- HERO SLIDER ---------------- */
  const slides: Slide[] = useMemo(
    () => [
      {
        image: "/images/hero1.jpg",
        heading1: "Affordable Car Rentals",
        heading2: "Across Dubai",
        desc:
          "Reliable and affordable car rentals for every journey. Choose from economy to luxury vehicles with flexible plans.",
      },
      {
        image: "/images/hero2.jpg",
        heading1: "Your Trusted Car Rental",
        heading2: "in Dubai",
        desc:
          "Well-maintained cars at competitive rates. Daily, weekly, and monthly rentals with 24/7 support.",
      },
      {
        image: "/images/hero3.jpg",
        heading1: "Simple. Reliable.",
        heading2: "Car Rentals.",
        desc:
          "Explore Dubai with comfort and ease. Flexible rentals designed to fit your lifestyle.",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  function prev() {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setActive((i) => (i + 1) % slides.length);
  }

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[active];

  /** ---------------- REVIEWS ---------------- */
  const reviews: Review[] = useMemo(
    () => [
      {
        text:
          "I rented a car from A1 Rent a Car for both work and weekend travel. The booking process was simple, the car was clean, and pricing was transparent. Highly recommended for anyone in Dubai.",
        name: "Ahmed Khan",
        role: "Sales Manager",
        avatar: "/images/review1.jpg",
        stars: 5,
      },
      {
        text:
          "A1 Rent a Car made my Dubai travel very easy. The car was in excellent condition and pickup was smooth. Their customer support was responsive and helpful throughout the rental.",
        name: "Sarah Williams",
        role: "Marketing Consultant",
        avatar: "/images/review2.jpg",
        stars: 5,
      },
      {
        text:
          "Excellent service from A1 Rent a Car. I used their airport pickup and rental service during my business visit. Everything was handled professionally and on time.",
        name: "Omar Al Hassan",
        role: "Operations Executive",
        avatar: "/images/review3.jpg",
        stars: 4,
      },
      {
        text:
          "I’ve used A1 Rent a Car for monthly rentals and the experience has always been reliable. Well-maintained cars, fair pricing, and no hidden charges. Great service overall.",
        name: "Michael Brooks",
        role: "IT Engineer",
        avatar: "/images/review4.jpg",
        stars: 5,
      },
    ],
    []
  );

  const [reviewActive, setReviewActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setReviewActive((i) => (i + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, [reviews.length]);

  const r = reviews[reviewActive];

  /** ---------------- CONTACT FORM ---------------- */
  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<null | { type: "ok" | "err"; msg: string }>(
    null
  );

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setContactStatus({ type: "err", msg: "Please fill all fields." });
      return;
    }

    setContactLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Failed to send message.");
      }

      setContactStatus({ type: "ok", msg: "Message sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setContactStatus({
        type: "err",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setContactLoading(false);
    }
  }
  
  
  function CarCard({ car }: { car: Car }) {
  return (
    <div
      className={[
        "group rounded-2xl bg-white border border-zinc-200",
        "shadow-[0_8px_22px_rgba(0,0,0,0.08)]",
        "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(0,0,0,0.14)]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative p-3">
        <div className="rounded-xl overflow-hidden bg-zinc-100">
          <div
            className="w-full h-40 sm:h-44 bg-center bg-cover transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${car.image})` }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 text-center">
          {car.title}
        </h3>

        {/* Prices */}
        <div className="mt-3 flex items-center justify-between text-[12px] text-zinc-700">
          <div>
            <span className="font-extrabold text-zinc-900">AED {car.dayPrice}</span>
            <span className="text-zinc-500"> / Day</span>
          </div>

          <div className="h-4 w-px bg-zinc-200" />

          <div>
            <span className="font-extrabold text-zinc-900">AED {car.monthPrice}</span>
            <span className="text-zinc-500"> / Mon.</span>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-start gap-2">
          <div className="h-5 w-5 rounded-full bg-white border border-zinc-200 grid place-items-center text-[10px] font-bold text-zinc-900">
            G
          </div>
          <StarRow count={car.rating} />
        </div>

        {/* Specs with icons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <SpecPill icon={<IconCalendar />}>{car.year}</SpecPill>
          <SpecPill icon={<IconUsers />}>{car.seats}</SpecPill>
          <SpecPill icon={<IconEngineMini />}>{car.engine}</SpecPill>
          <SpecPill icon={<IconGear />}>{car.transmission}</SpecPill>
        </div>

        {/* Actions with icons */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <a
            href={car.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white text-[11px] font-semibold py-2 px-2 text-center transition inline-flex items-center justify-center gap-1.5"
          >
            <IconWhatsapp />
            WhatsApp
          </a>

          <a
            href={car.callLink}
            className="rounded-full bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-semibold py-2 px-2 text-center transition inline-flex items-center justify-center gap-1.5"
          >
            <IconPhoneMini />
            Call Us
          </a>

          <a
            href={car.bookLink}
            className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-semibold py-2 px-2 text-center transition inline-flex items-center justify-center gap-1.5"
          >
            <IconBook />
            Book Online
          </a>
        </div>
      </div>
    </div>
  );
}

function SpecPill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-zinc-700">
      <span className="text-zinc-500">{icon}</span>
      {children}
    </span>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          className={i < count ? "text-orange-500" : "text-orange-500/30"}
        >
          <path
            d="M12 17.3l-6.2 3.6 1.7-7-5.5-4.8 7.2-.6L12 2l2.8 6.5 7.2.6-5.5 4.8 1.7 7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function PromoBanner() {
  return (
              <div className="rounded-2xl bg-green-500 text-white overflow-hidden">
      <div className="px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-m text-black/70">Promocode: New-Customer</p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight">
            BOOK A CAR FOR A
            <br />
            FIRST DAY AT <span className="font-extrabold text-black">19 AED</span>
          </h3>

          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-500 hover:bg-red-600 px-5 py-2 text-xs font-bold transition"
            >
              <IconBolt />
              Claim Offer
            </a>
          </div>
        </div>

        {/* Car image (optional) */}
        <div className="w-full sm:w-85">
          <div
            className="h-52 sm:h-52 w-full bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(/images/promo-car.png)` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}



  /** ---------------- PAGE ---------------- */
  return (
    <>
      <Head>
        <title>A1 Rent A Car</title>
        <meta name="description" content="Rent a car landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ✅ Global CSS for moving map bg (review section) */}
      <style jsx global>{`
        .map-pan {
          background-image: url("/images/world-map.jpg");
          background-repeat: repeat;
          background-size: 1400px auto;
          background-position: 0% 50%;
          animation: mapPan 22s linear infinite;
          opacity: 1;
        }

        @keyframes mapPan {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="min-h-screen bg-white text-zinc-900">
        <Navbar />

        {/* ---------------- HERO (Slider) ---------------- */}
        <section id="home" className="relative w-full min-h-[85vh]">
          <div
            className="pointer-events-none absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden="true" />

          <button
            type="button"
            onClick={prev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 grid place-items-center"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 grid place-items-center"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>

          <div className="relative z-20 pt-20 sm:pt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="min-h-[85vh] flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-3 mb-6">
                  <SocialIcon href="#" label="Facebook">
                    <IconFacebook />
                  </SocialIcon>
                  <SocialIcon href="#" label="Twitter">
                    <IconTwitter />
                  </SocialIcon>
                  <SocialIcon href="#" label="Instagram">
                    <IconInstagram />
                  </SocialIcon>
                  <SocialIcon href="#" label="YouTube">
                    <IconYoutube />
                  </SocialIcon>
                </div>

                <h1 className="font-extrabold tracking-tight text-white text-4xl sm:text-6xl lg:text-7xl">
                  {s.heading1}
                  <br />
                  {s.heading2}
                </h1>

                <p className="mt-5 max-w-3xl text-white/85 text-base sm:text-lg">{s.desc}</p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="#services"
                    className="w-56 sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-red-500 px-8 py-3 font-semibold text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    Our Services
                  </a>
                  <a
                    href="#contact"
                    className="w-56 sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 font-semibold text-white hover:bg-white hover:text-zinc-900 transition"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActive(idx)}
                      className={[
                        "h-2.5 rounded-full transition-all",
                        idx === active ? "w-8 bg-white" : "w-2.5 bg-white/40",
                      ].join(" ")}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SERVICES (UPDATED DESIGN) ---------------- */}
<section id="services" className="py-14 sm:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-6xl font-semibold tracking-[0em] text-red-500">WE PROVIDE</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900">Our Services</h2>
    </div>

    <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      {services.map((item) => (
        <div
          key={item.title}
          className={[
            "group relative overflow-hidden rounded-2xl bg-white",
            "border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
            "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]",
          ].join(" ")}
        >
          {/* Image */}
          <div className="relative w-full h-44 sm:h-52">
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
              aria-hidden="true"
            />
            {/* dark gradient overlay */}
            <div className="absolute inset-0 from-black/55 via-black/10 to-transparent" />

            {/* floating badge */}
            <div className="absolute left-4 bottom-4">
              <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow-sm">
                A1 Rent A Car
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7">
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900">{item.title}</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {item.desc}
            </p>

            {/* underline animation */}
            <div className="mt-5 h-1 w-10 rounded-full bg-green-500/70 transition-all duration-300 group-hover:w-16" />
          </div>

          {/* subtle corner accent */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  </div>
</section>


        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <div
                  className="w-full aspect-16/11 bg-center bg-cover"
                  style={{ backgroundImage: "url(/images/about.jpg)" }}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
                  What We Promise To You
                </h2>

                <p className="mt-4 text-zinc-500 leading-7">
                  A1 Rent a Car provides reliable and affordable car rental services across Dubai.
                  We offer a wide range of vehicles, from economy cars to luxury models.
                  Our focus is on well-maintained cars, transparent pricing, and flexible plans.
                  With 24/7 support, we make car rental simple, smooth, and hassle-free.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                  {aboutPoints.map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <CheckBoxIcon />
                      <span className="text-zinc-700">{p}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-red-500 px-10 py-3 font-semibold text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- PACKAGES / CARS (NEW DESIGN) ---------------- */}
<section id="pricing" className="py-14 sm:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="text-6xl font-semibold tracking-[0m] text-red-500">POPULAR CARS</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zinc-900">Choose Your Ride</h2>
    </div>

    {/* TOP 6 CAR CARDS */}
    <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {carsTop.map((car) => (
        <CarCard key={car.title} car={car} />
      ))}
    </div>

    {/* CTA BANNER (FULL WIDTH) */}
    <div className="mt-10 sm:mt-12">
      <PromoBanner />
    </div>

    {/* BOTTOM 6 CAR CARDS */}
    <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {carsBottom.map((car) => (
        <CarCard key={car.title} car={car} />
      ))}
    </div>
  </div>
</section>


        {/* ---------------- REVIEW ---------------- */}
        <section id="review" className="relative py-16 sm:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 map-pan opacity-100" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-white/75" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-6xl font-semibold tracking-[0m] text-red-500">OUR TESTIMONIALS</p>

            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-zinc-900">Client Feedback</h2>

            <div className="mt-8 flex justify-center">
              <Stars count={r.stars} />
            </div>

            <p className="mt-6 text-sm sm:text-base leading-7 text-zinc-500 italic max-w-3xl mx-auto">
              {r.text}
            </p>

            <div className="mt-10 flex flex-col items-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-red-500 grid place-items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${r.avatar})` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/70" />
              </div>

              <p className="mt-4 text-sm font-bold text-zinc-900">{r.name}</p>
              <p className="text-xs text-green-500">{r.role}</p>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setReviewActive(idx)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    idx === reviewActive ? "bg-green-500" : "bg-zinc-300",
                  ].join(" ")}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-6xl font-semibold tracking-[0em] text-red-500">GET IN TOUCH</p>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-zinc-900">Contact Us</h2>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-4 space-y-6">
                <InfoCard
                  title="Address:"
                  lines={[
                    "Al Quoz Industrial Area 3, No. 1 Auto Repairing Street, Street No. 3, Warehouse No. 5, Dubai, UAE",
                  ]}
                  icon={<IconHome />}
                />
                <InfoCard title="Phone:" lines={["+971 50 556 6889"]} icon={<IconPhone />} />
                <InfoCard title="Email:" lines={["a1rentacar14@gmail.com"]} icon={<IconMail />} />
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={onSubmit} className="space-y-5">
                  <Input name="name" value={form.name} onChange={onChange} placeholder="Your Name" type="text" />
                  <Input name="email" value={form.email} onChange={onChange} placeholder="Your Email" type="email" />
                  <Input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Your Subject"
                    type="text"
                  />

                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your Message"
                    rows={6}
                  />

                  <div className="pt-1 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={contactLoading}
                      className={[
                        "inline-flex items-center justify-center rounded-full border-2 border-green-500 px-10 py-3 font-semibold transition",
                        contactLoading
                          ? "cursor-not-allowed opacity-70 text-green-500"
                          : "text-green-500 hover:bg-green-500 hover:text-white",
                      ].join(" ")}
                    >
                      {contactLoading ? "Sending..." : "Send Message"}
                    </button>

                    {contactStatus?.type === "ok" ? (
                      <span className="text-sm text-green-600">{contactStatus.msg}</span>
                    ) : contactStatus?.type === "err" ? (
                      <span className="text-sm text-red-600">{contactStatus.msg}</span>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ ---------------- GOOGLE MAP SECTION (NEW) ---------------- */}
        <section id="location" className="bg-white">
          <div className="w-full">
            <div className="relative w-full h-65 sm:h-90 lg:h-105">
              <iframe
                title="Google Map"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5848842056575!2d55.21195667461202!3d25.115909677763373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cebc53a9f03%3A0xc91fb15fecd9d12a!2z8J2ZifCdmaQgMSDwnZi88J2ZqvCdmanwnZmkIPCdmafwnZma8J2ZpfCdmZbwnZme8J2Zp_CdmZ7wnZmj8J2ZnCDwnZmY8J2ZmvCdmaPwnZmp8J2ZmvCdmacgLfCdmY_wnZmk8J2ZpSDwnZmA8J2ZrfCdmZjwnZma8J2ZofCdmaHwnZma8J2Zo_CdmZjwnZmaIPCdmYLwnZmW8J2Zp_CdmZbwnZmc8J2Zmg!5e0!3m2!1sen!2s!4v1767356593532!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;

/** ---------- Data ---------- */

// ✅ Only changed services data: Icon -> image
// Put these images inside: /public/images/services/
const services: Service[] = [
  { title: "Economy Cars", image: "/images/economy.jpg", desc: "Affordable and reliable economy cars for your daily needs." },
  { title: "Sedan Cars", image: "/images/sedan.jpg", desc: "Comfortable and spacious sedans perfect for family trips." },
  { title: "SUV Cars", image: "/images/suv.jpg", desc: "Versatile SUVs with excellent performance and safety features." },
  { title: "Luxury Cars", image: "/images/luxury.jpg", desc: "Premium luxury vehicles offering comfort and elegance." },
  { title: "Airport Pickup & Drop-Off", image: "/images/airport.jpg", desc: "Convenient airport transportation services for seamless travel." },
  { title: "24/7 Support", image: "/images/support.jpg", desc: "Round-the-clock customer support for all your rental needs." },
  { title: "Daily Rental", image: "/images/daily.jpg", desc: "Flexible daily rental options for short-term needs." },
  { title: "Weekly Rental", image: "/images/weekly.jpg", desc: "Cost-effective weekly rental plans for extended stays." },
  { title: "Monthly Rental", image: "/images/monthly.jpg", desc: "Long-term monthly rental solutions for business or personal use." },
];

const aboutPoints = [
  "Wide Vehicle Selection",
  "Flexible Rental Plans",
  "Affordable Rental Rates",
  "Well Maintained Cars",
  "Easy Booking Process",
  "Airport Pickup Service",
  "24/7 Customer Support",
  "Trusted Car Rental",
];

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$170",
    features: [
      "Oil & Filter Change",
      "15 Point Check",
      "Check Suspension",
      "Check Brake Lines & Hoses",
      "Brake Fluid Change",
      "Brake Component Clean",
      "Top up Coolant",
    ],
  },
  {
    title: "Standard Plan",
    price: "$250",
    features: [
      "Oil & Filter Change",
      "Computer & Systems Health Check",
      "25 Point Check",
      "Essential Fluid Top Ups",
      "Road Test & Report",
      "Lubricate Door Hinges",
      "Component Adjustments",
    ],
  },
  {
    title: "Premium Plan",
    price: "$350",
    features: [
      "Oil & Filter Change",
      "Vacuum Footwells",
      "Road Test & Report",
      "Lubricate Door Hinges",
      "Adjust Brakes As Necessary",
      "Replace Brake Fluid (Flush)",
      "Washer, Coolant, Power steering",
    ],
  },
];

/** ---------- Small components ---------- */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-12 w-12 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 transition grid place-items-center"
    >
      {children}
    </a>
  );
}

function CheckBoxIcon() {
  return (
    <div className="h-5 w-5 rounded-sm border border-green-500 grid place-items-center shrink-0">
      <div className="h-2.5 w-2.5 bg-green-500 rounded-xs" />
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          className={i < count ? "text-yellow-400" : "text-yellow-400/40"}
        >
          <path
            d="M12 17.3l-6.2 3.6 1.7-7-5.5-4.8 7.2-.6L12 2l2.8 6.5 7.2.6-5.5 4.8 1.7 7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-0.75 bg-green-500 rounded-full" />
      <input
        {...props}
        className={[
          "w-full rounded-md bg-zinc-50 border border-zinc-100 px-5 py-4 text-sm outline-none",
          "placeholder:text-zinc-400 focus:border-orange-200 focus:ring-4 focus:ring-orange-100",
        ].join(" ")}
      />
    </div>
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative">
      <span className="absolute left-0 top-6 h-10 w-0.75 bg-green-500 rounded-full" />
      <textarea
        {...props}
        className={[
          "w-full rounded-md bg-zinc-50 border border-zinc-100 px-5 py-4 text-sm outline-none resize-none",
          "placeholder:text-zinc-400 focus:border-orange-200 focus:ring-4 focus:ring-orange-100",
        ].join(" ")}
      />
    </div>
  );
}

function InfoCard({
  title,
  lines,
  icon,
}: {
  title: string;
  lines: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="relative rounded-lg bg-zinc-50 border border-zinc-100 p-6 shadow-sm overflow-hidden">
      <div className="pointer-events-none absolute -left-10 -bottom-8 h-28 w-28 rounded-full bg-green-200/30" />
      <div className="pointer-events-none absolute -left-2 top-8 h-16 w-16 rounded-full bg-green-200/25" />

      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-base font-extrabold text-zinc-900">{title}</p>
          <div className="mt-3 space-y-1 text-sm text-zinc-500">
            {lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <div className="h-14 w-14 rounded-full bg-white grid place-items-center shadow-sm">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

/** ---------- Icons ---------- */

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.6-.1-3-.1-3 0-5 1.8-5 5.2V11H6v3h2.7v8h4.8z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1A3.7 3.7 0 0016.2 4c-2 0-3.7 1.7-3.7 3.8 0 .3 0 .6.1.9A10.5 10.5 0 014 5.3a3.9 3.9 0 001.1 5.1c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8A7.5 7.5 0 013 18.4 10.6 10.6 0 008.7 20c6.9 0 10.7-5.8 10.7-10.8v-.5c.7-.5 1.4-1.2 1.9-2z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 17a5 5 0 100-10 5 5 0 000 10z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 002.4 7.2 31.7 31.7 0 002.4 12c0 1.6.1 3.2.4 4.8a3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8zM10.3 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-green-500">
      <path
        d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-green-500">
      <path
        d="M6.5 2h3l1.2 6-2.1 1.1c1.5 3 3.9 5.4 6.9 6.9L16.7 14l6 1.2v3c0 1.1-.9 2-2 2C10.8 20.2 3.8 13.2 4 3.3 4 2.9 4.3 2 6.5 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-green-500">
      <path
        d="M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M22 8l-10 7L2 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3v2M17 3v2M4 8h16M6 5h12a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 21v-2.2c0-1.7-1.8-3.1-4-3.1H8c-2.2 0-4 1.4-4 3.1V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 12.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 21v-2.5c0-1.4-1.1-2.6-2.7-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 5.8a3 3 0 0 1 0 5.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


function IconGear() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.4 13.5a7.9 7.9 0 0 0 .1-3l2-1.2-2-3.4-2.3.6c-.7-.6-1.4-1-2.2-1.3L14.6 3h-5.2l-.4 2.2c-.8.3-1.5.7-2.2 1.3l-2.3-.6-2 3.4 2 1.2a7.9 7.9 0 0 0 0 3l-2 1.2 2 3.4 2.3-.6c.7.6 1.4 1 2.2 1.3L9.4 21h5.2l.4-2.2c.8-.3 1.5-.7 2.2-1.3l2.3.6 2-3.4-2-1.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function IconEngineMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9h10a3 3 0 013 3v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4a3 3 0 013-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M3 13H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M23 13h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 6v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 6v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a9.8 9.8 0 0 0-8.4 14.8L3 22l5.3-1.4A9.9 9.9 0 1 0 12 2Zm0 18.1c-1.2 0-2.4-.3-3.4-.9l-.3-.2-3.1.8.8-3-.2-.3a8 8 0 1 1 6.2 3.6Zm4.6-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3-2.6c-.2-.3 0-.4.1-.6l.5-.6c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.8 2.3.9 2.5.1.2 1.6 2.6 4 3.6.6.2 1 .4 1.3.5.6.2 1.2.2 1.7.1.5-.1 1.2-.5 1.4-1 .2-.5.2-1 0-1.1-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}


function IconPhoneMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 2h3l1.2 6-2.1 1.1c1.5 3 3.9 5.4 6.9 6.9L16.7 14l6 1.2v3c0 1.1-.9 2-2 2C10.8 20.2 3.8 13.2 4 3.3 4 2.9 4.3 2 6.5 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19a2 2 0 002 2h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 3h12a2 2 0 012 2v16H6a2 2 0 01-2-2V5a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 7h8M8 11h8M8 15h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

