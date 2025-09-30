"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CourseLanding() {
const screenshots = ["/image01.jpg", "/image02.jpg", "/image03.jpg"];

const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-light)]">
      <div className=" c-land">
      <Image
          src="/course.png"
          alt="Ennamdy"
          width={400}
          height={250}
          className="object-cover w-full "
        />
        </div>
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-[var(--color-gray)]">
      <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl mx-auto">
        Land a High-Paying Remote Job in{" "}
        <span className="text-[var(--color-accent)]">60 Days or Less</span> — Even If You Have No Tech Skills or Connections.
      </h1>

      <p className="mt-6 text-lg max-w-2xl mx-auto text-[var(--color-muted)]">
        Stop sending countless applications with no reply. With the{" "}
        <span className="font-semibold text-[var(--color-light)]">Ultimate Remote Job Guide</span>, 
        you’ll discover the proven system to find legit global jobs, apply the right way, and start earning in dollars.
      </p>

      {/* Countdown + buyers info */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Countdown */}
        <div className="bg-[var(--color-dark)] text-[var(--color-light)] px-6 py-3 rounded-lg shadow-md">
          {timeLeft.expired ? (
            <span className="text-[var(--color-accent)] font-semibold">⏰ Offer Expired</span>
          ) : (
            <span>
              ⏳ Don’t miss out! Offer ends in{" "}
              <span className="font-bold text-[var(--color-accent)]">
                {timeLeft.hours ?? "00"}h : {timeLeft.minutes ?? "00"}m : {timeLeft.seconds ?? "00"}s
              </span>
            </span>
          )}
        </div>

        {/* Buyers count */}
        <div className="bg-[var(--color-accent)] text-[var(--color-dark)] px-6 py-3 rounded-lg shadow-md font-semibold">
          🎉 20+ students already enrolled!
        </div>
      </div>

      {/* CTA */}
      <Link
        href="#checkout"
        className="mt-8 inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark)] font-bold rounded-full shadow-lg hover:opacity-90 transition"
      >
        👉 Get Instant Access for Just ₦10,000{" "}
        <span className="block text-sm font-normal">(Launch Offer – Save Over 90%)</span>
      </Link>
    </section>
    <section className="bg-[var(--color-dark)] py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        🎥 Inside the{" "}
        <span className="text-[var(--color-accent)]">Ultimate Remote Job Guide</span>
      </h2>
      <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
        Watch this short video where Ennamdy explains how the course works, what’s
        inside, and how it will help you land a high-paying remote job in 60 days
        or less.
      </p>

      {/* Video */}
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-[var(--color-muted)]/30">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // 👉 Replace with your course video ID
          title="Ultimate Remote Job Guide Explained"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>

      {/* Pain Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">The Struggle is Real</h2>
        <ul className="mt-6 space-y-3 text-[var(--color-muted)] text-lg">
          <li>😩 Tired of applying for jobs and never hearing back?</li>
          <li>🤔 Feel remote jobs are only for “tech bros”?</li>
          <li>🚫 Wasted time on fake job boards and scams?</li>
        </ul>
        <p className="mt-6 text-[var(--color-light)]">
          You’re not alone. Most job seekers make the same mistakes — sending generic CVs, applying randomly, and hoping for luck.
        </p>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-[var(--color-gray)] text-center">
        <h2 className="text-3xl font-bold">The Solution: The Ultimate Remote Job Guide</h2>
        <p className="mt-6 max-w-3xl mx-auto text-[var(--color-muted)]">
          A step-by-step system designed for people like you who want to work globally 
          and earn in dollars without needing coding or heavy tech skills.
        </p>
        <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto text-[var(--color-light)]">
          <li>✅ Find legit job opportunities worldwide.</li>
          <li>✅ Position yourself as the top candidate (even with little experience).</li>
          <li>✅ Apply with confidence and get interview calls.</li>
          <li>✅ Build a skill set that makes you irresistible to employers.</li>
        </ul>
      </section>

       <section className="bg-[var(--color-gray)] py-16 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Proof It Works <span className="text-[var(--color-accent)]">Screenshots</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="bg-[var(--color-dark)] rounded-xl shadow-lg overflow-hidden border border-[var(--color-muted)]/30 hover:scale-105 transform transition"
          >
            <Image
              src={src}
              alt={`Evidence ${i + 1}`}
              width={400}
              height={250}
              className="object-cover w-full h-86"
            />
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="mt-8 text-[var(--color-muted)] max-w-2xl mx-auto">
        These are real results and feedback from people who used{" "}
        <span className="text-[var(--color-accent)] font-semibold">
          The Ultimate Remote Job Guide
        </span>{" "}
        to land opportunities.
      </p>
    </section>

      {/* Offer Breakdown */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What You Get</h2>

        {/* Core Value */}
        <div className="mt-10 bg-[var(--color-dark)] border border-[var(--color-muted)]/30 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">
            🎯 Core Package (₦95,000 Value)
          </h3>
          <ul className="text-left space-y-3 max-w-xl mx-auto">
            <li>1️⃣ Ultimate Remote Job Guide – (₦40,000 Value)</li>
            <li>2️⃣ Skill Shortcut System – (₦25,000 Value)</li>
            <li>3️⃣ CV & Cover Letter Templates – (₦15,000 Value)</li>
            <li>4️⃣ Remote Job Platforms Vault – (₦15,000 Value)</li>
          </ul>
        </div>

        {/* Bonuses */}
        <div className="mt-10 bg-[var(--color-gray)] border border-[var(--color-muted)]/30 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">
            🎁 Bonuses Included (₦55,000 Value)
          </h3>
          <ul className="text-left space-y-3 max-w-xl mx-auto">
            <li>Bonus 1: Remote Interview Mastery – (₦15,000 Value)</li>
            <li>Bonus 2: The ₦0 Remote Tools Stack – (₦10,000 Value)</li>
            <li>Bonus 3: First Client Fast-Track Guide – (₦20,000 Value)</li>
            <li>Bonus 4: 30-Day Action Plan – (₦10,000 Value)</li>
          </ul>
        </div>

        {/* Pricing */}
        <p className="mt-10 text-xl">
          💰 <span className="line-through">₦150,000</span>{" "}
          <span className="text-[var(--color-accent)] font-bold">Now Only ₦10,000</span>
        </p>

        <Link
          href="#checkout"
          className="mt-6 inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark)] font-bold rounded-full shadow-lg hover:opacity-90 transition"
        >
          👉 Yes! I Want the Guide for ₦10,000
        </Link>
      </section>

      {/* Scarcity */}
      <section className="py-12 px-6 text-center bg-[var(--color-dark)] border-t border-[var(--color-muted)]/30">
        <p className="text-lg text-[var(--color-accent)]">
          ⚠ Founder’s launch price only available for the first 100 downloads. After that, price doubles!
        </p>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-6 text-center bg-[var(--color-gray)]">
        <h2 className="text-3xl font-bold">🛡 Risk-Free Guarantee</h2>
        <p className="mt-6 max-w-3xl mx-auto text-[var(--color-muted)]">
          Try it for 60 days. If you don’t land interviews or clients using this system, 
          you’ll get a 100% refund — no questions asked.
        </p>
      </section>

      {/* Transformation */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">
          🌍 Transformation Promise
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-[var(--color-muted)]">
          In 60 days or less, move from rejected applications to landing remote job offers 
          and earning in dollars — without coding, without connections, without frustration.
        </p>
        <Link
          href="#checkout"
          className="mt-8 inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark)] font-bold rounded-full shadow-lg hover:opacity-90 transition"
        >
          🎉 Yes! I Want the Guide for Just ₦10,000
        </Link>
      </section>
    </div>
  );
}
