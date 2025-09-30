"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      skill: "Newsletter Signup", // 👈 different tag so you know it's from newsletter
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzRkVPXLAnfTS-f-xHQxJ03Z4dop5qqEYllL_8DLN9aatsgpin-g8bP9kt2KIHCgCW6wA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Newsletter error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="newsletter w-full text-[var(--color-light)] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Join Our <span className="text-[var(--color-accent)]">Newsletter</span>
        </h2>
        <p className="mt-4 text-[var(--color-muted)]">
          Get the latest updates on training programs, career tips, and opportunities
          delivered straight to your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full sm:w-1/3 px-4 py-3 rounded bg-[var(--color-gray)] text-[var(--color-light)] placeholder-[var(--color-muted)] border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full sm:w-1/3 px-4 py-3 rounded bg-[var(--color-gray)] text-[var(--color-light)] placeholder-[var(--color-muted)] border border-[var(--color-muted)]/30 focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-3 rounded font-semibold transition ${
                submitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[var(--color-accent)] text-[var(--color-dark)] hover:opacity-90"
              }`}
            >
              {submitting ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        ) : (
          <p className="mt-6 text-[var(--color-accent)] font-medium">
            🎉 Thank you for subscribing! Check your inbox for updates.
          </p>
        )}
      </div>
    </section>
  );
}
