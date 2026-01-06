// src/components/layout/Footer.tsx
import type React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#edeaea] text-black">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-9">
        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              {/* ✅ Your logo (same as navbar) */}
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-xl text-[13px] leading-7 text-black/70">
              A1 Rent a Car is a trusted car rental service operating across Dubai.
              We offer flexible rental plans with competitive pricing and quality vehicles.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <SocialCircle href="#" label="Facebook">
                <IconFacebook />
              </SocialCircle>
              <SocialCircle href="#" label="Twitter">
                <IconTwitter />
              </SocialCircle>
              <SocialCircle href="#" label="LinkedIn">
                <IconLinkedin />
              </SocialCircle>
              <SocialCircle href="#" label="YouTube">
                <IconYoutube />
              </SocialCircle>
            </div>
          </div>

          {/* Quick Link */}
          <div className="lg:col-span-3 lg:pl-4">
            <p className="text-lg font-extrabold">Quick Link</p>
            <ul className="mt-5 space-y-3.5 text-[13px] text-black/70">
              <li>
                <a className="hover:text-red-400 transition" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  Our Services
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#pricing">
                  Your Ride
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#review">
                  Review
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Cars */}
          <div className="lg:col-span-4">
            <p className="text-lg font-extrabold">Rent a Car</p>
            <ul className="mt-5 space-y-3.5 text-[13px] text-black/70">
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  Rolls Royce
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  Bentley
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  Ferrari
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  BMW
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="#services">
                  Mercedes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 bg-green-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
          <div className="text-center space-y-2">
            <p className="text-[16px] text-white/85">© 2026 All Rights Reserved.</p>
            <p className="text-[16px] text-white/85">Designed by Nexterse LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** ---------- small components ---------- */

function SocialCircle({
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
      className="h-11 w-11 rounded-full bg-red-500 hover:bg-green-600 transition grid place-items-center"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

/** ---------- icons ---------- */

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

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      {/* cleaner linkedin icon */}
      <path d="M6 7a2 2 0 11.001-4.001A2 2 0 016 7zM4 21h4V9H4v12zm6-12h4v1.7c.6-1 1.8-2 3.8-2 3 0 4.2 2 4.2 5.2V21h-4v-6c0-1.7-.6-2.9-2.2-2.9-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V21h-4V9z" />
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
