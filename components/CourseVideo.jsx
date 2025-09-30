"use client";

export default function CourseVideo() {
  return (
    <section className="bg-[var(--color-dark)] py-20 px-6 text-center w-full">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        🎥 Get The{" "}
        <span className="text-[var(--color-accent)]"> Guide</span>
      </h2>
      <p className="text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
        Watch this short video where Ennamdy explains,
 how it will help you land a high-paying remote job in 60 days
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
  );
}
