// src/components/layout/Navbar.tsx
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Your Ride", href: "#pricing" },
  { label: "Review", href: "#review" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur border-b shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo (replace with your company logo) */}
          <a href="#home" className="flex items-center gap-3">
            {/* ✅ Put your logo in: /public/images/logo.png (or change src) */}
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className={[
                "h-9 w-auto object-contain transition-opacity",
                scrolled ? "opacity-100" : "opacity-95",
              ].join(" ")}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "text-sm font-semibold transition-colors",
                  scrolled
                    ? "text-zinc-800 hover:text-orange-600"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={[
                "block h-0.5 w-6 transition-all",
                scrolled ? "bg-zinc-900" : "bg-white",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-6 mt-1.5 transition-all",
                scrolled ? "bg-zinc-900" : "bg-white",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-6 mt-1.5 transition-all",
                scrolled ? "bg-zinc-900" : "bg-white",
              ].join(" ")}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border bg-white p-3 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
