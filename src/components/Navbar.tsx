"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[var(--color-primary)] text-white z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">TourismEC</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-primary)] flex flex-col items-center gap-4 py-4 fade-in">
          <a href="#packages" onClick={() => setOpen(false)}>Packages</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}