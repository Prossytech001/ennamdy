"use client";

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-gray)] w-full text-[var(--color-light)] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold">
          What Our <span className="text-[var(--color-accent)]">Students Say</span>
        </h2>
        <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
          Hear directly from our students who advanced their careers with Ennamdy’s
          training programs.
        </p>

        {/* Grid with 3 iframes */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[var(--color-dark)] rounded-xl shadow hover:shadow-xl overflow-hidden">
            <div className="relative w-full h-56">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Sarah Johnson testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">
                Sarah Johnson
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Digital Marketing Student
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[var(--color-dark)] rounded-xl shadow hover:shadow-xl overflow-hidden">
            <div className="relative w-full h-56">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                src="https://www.youtube.com/embed/3fumBcKC6RE"
                title="Michael Lee testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">
                Michael Lee
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                UI/UX Design Trainee
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[var(--color-dark)] rounded-xl shadow hover:shadow-xl overflow-hidden">
            <div className="relative w-full h-56">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                src="https://www.youtube.com/embed/V-_O7nl0Ii0"
                title="Amaka Obi testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[var(--color-light)]">
                Amaka Obi
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Remote Career Success Story
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
