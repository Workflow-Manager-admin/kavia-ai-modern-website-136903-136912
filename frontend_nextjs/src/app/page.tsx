"use client";

/**
 * PUBLIC_INTERFACE
 * Main HomePage for KAVIA AI with modern, minimal design, responsive navigation, and all critical sections.
 */

import React from "react";

// Navbar with smooth scroll to each section
function Navbar() {
  return (
    <nav
      className="w-full flex justify-center items-center py-6 gap-8 sticky top-0 bg-white/90 shadow-sm z-20 backdrop-blur"
      style={{
        borderBottom: `1px solid #f1f1f1`,
      }}
    >
      <span className="text-2xl font-bold tracking-wide text-[var(--color-foreground)] mr-10">
        KAVIA AI
      </span>
      <ul className="flex flex-row gap-6 font-medium text-[17px] text-[#393e46]">
        {[
          { label: "Home", target: "#hero" },
          { label: "Services", target: "#services" },
          { label: "About", target: "#about" },
          { label: "Contact", target: "#contact" },
        ].map(({ label, target }) => (
          <li key={label}>
            <a
              href={target}
              className="hover:text-[#00adb5] transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[65vh] flex flex-col items-center justify-center text-center py-24 md:py-36 bg-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#222831]">
        Welcome to <span className="text-[#00adb5]">KAVIA AI</span>
      </h1>
      <p className="text-xl md:text-2xl text-[#393e46] mb-7 max-w-2xl mx-auto">
        Modern, minimalistic, and intelligent solutions for your business. Discover how AI can accelerate your success.
      </p>
      <a
        href="#services"
        className="inline-block bg-[#00adb5] text-white text-lg font-semibold rounded px-8 py-3 shadow hover:bg-[#009aa6] focus:outline-none focus:ring transition-all duration-200"
        style={{ boxShadow: "0 2px 12px rgba(0,173,181,0.09)" }}
      >
        View Services
      </a>
    </section>
  );
}

// Services Overview
function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#f8f8f9] py-20 px-4 flex flex-col items-center"
      style={{ borderTop: `1px solid #ececec` }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#222831] tracking-tight">
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center">
        <div className="flex-1 p-8 rounded-lg bg-white border border-[#ededed] shadow-sm hover:shadow-md transition-all duration-300">
          <span className="block text-[#00adb5] text-xl font-bold mb-2">
            AI Consulting
          </span>
          <p className="text-[#393e46] text-base">
            Strategic advice and integration of AI-driven workflows tailored to your business needs.
          </p>
        </div>
        <div className="flex-1 p-8 rounded-lg bg-white border border-[#ededed] shadow-sm hover:shadow-md transition-all duration-300">
          <span className="block text-[#00adb5] text-xl font-bold mb-2">
            Automation Solutions
          </span>
          <p className="text-[#393e46] text-base">
            Automate tedious processes and boost productivity with custom AI tools and pipelines.
          </p>
        </div>
        <div className="flex-1 p-8 rounded-lg bg-white border border-[#ededed] shadow-sm hover:shadow-md transition-all duration-300">
          <span className="block text-[#00adb5] text-xl font-bold mb-2">
            Data Analytics
          </span>
          <p className="text-[#393e46] text-base">
            Unlock valuable insights from data with advanced analytics, dashboards, and reports.
          </p>
        </div>
      </div>
    </section>
  );
}

// About Us
function About() {
  return (
    <section
      id="about"
      className="w-full py-20 flex flex-col items-center px-4 bg-white"
      style={{ borderTop: "1px solid #ededed" }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-[#222831]">
        About Us
      </h2>
      <p className="max-w-3xl text-[#393e46] text-lg text-center">
        KAVIA AI is dedicated to providing cutting-edge artificial intelligence solutions that are intuitive, elegant, and effective. Our team fuses technical expertise with a deep sense of design, helping clients harness the power of AI for transformative results.
      </p>
    </section>
  );
}

// Contact Form Footer
function Contact() {
  // In a real solution, connect to your backend or third-party form (like Formspree, etc.).
  return (
    <footer
      id="contact"
      className="w-full py-16 px-4 bg-[#222831] flex flex-col items-center"
      style={{ borderTop: "1px solid #1a1a1a" }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#ededed]">Contact Us</h2>
      <form
        className="flex flex-col gap-4 w-full max-w-md bg-[#23252b] p-7 rounded-lg shadow"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Contact request submitted!");
        }}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="rounded px-3 py-2 border border-[#393e46] bg-[#282d31] text-[#ededed] placeholder-[#888] focus:border-[#00adb5] outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="rounded px-3 py-2 border border-[#393e46] bg-[#282d31] text-[#ededed] placeholder-[#888] focus:border-[#00adb5] outline-none"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="rounded px-3 py-2 border border-[#393e46] bg-[#282d31] text-[#ededed] placeholder-[#888] focus:border-[#00adb5] outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-2 rounded bg-[#00adb5] text-white font-semibold hover:bg-[#009aa6] transition-all duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-sm text-[#cccccc] flex flex-col items-center">
        <span>
          Or email us:{" "}
          <a
            href="mailto:info@kavia.ai"
            className="text-[#00adb5] underline hover:text-[#ededed]"
          >
            info@kavia.ai
          </a>
        </span>
        <span className="mt-4">&copy; {new Date().getFullYear()} KAVIA AI. All rights reserved.</span>
      </div>
    </footer>
  );
}

// Animated minimal transition between sections (fade effect)
function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-12 flex items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #f8f8f9 0%, #fff 100%)",
      }}
    />
  );
}

// Main exported page - entry for all main sections with minimal/modern effects
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white text-[#222831]">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </main>
  );
}
