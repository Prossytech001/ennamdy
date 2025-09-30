"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-light)] py-12 mt-20 border-t border-[var(--color-muted)]/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-accent)]">Ennamdy</h2>
          <p className="mt-4 text-[var(--color-muted)] text-sm leading-relaxed">
            Helping you gain skills, land remote jobs, and earn globally. 
            The Ultimate Remote Job Guide gives you the proven roadmap 
            to succeed.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3 text-sm">
          <h3 className="font-semibold text-[var(--color-light)] mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <Link href="#course" className="hover:text-[var(--color-accent)]">Course</Link>
          <Link href="#about" className="hover:text-[var(--color-accent)]">About</Link>
          <Link href="#newsletter" className="hover:text-[var(--color-accent)]">Newsletter</Link>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-[var(--color-light)] mb-2">Follow Me</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-[var(--color-accent)]">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-[var(--color-accent)]">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[var(--color-accent)]">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" className="hover:text-[var(--color-accent)]">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[var(--color-muted)]/20 pt-6 text-center text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} Ennamdy. All rights reserved.
      </div>
    </footer>
  );
}
