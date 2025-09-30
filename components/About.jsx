// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function About() {
//   return (
//     <section className="relative w-full bg-[var(--color-dark)] text-[var(--color-light)] py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Side: Image */}
//         <div className="relative flex justify-center">
//           <div className="border-4 border-[var(--color-accent)] rounded-xl overflow-hidden shadow-lg">
//            <Image
//   src="/sirp.png"
//   alt="Ennamdy"
//   width={450}
//   height={450}
//    className="object-cover rounded-xl"
// />

//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-light)]">
//             About <span className="text-[var(--color-accent)]">Ennamdy</span>
//           </h2>
//           <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
//             I am a <span className="text-[var(--color-accent)]">digital marketer</span> 
//             and <span className="text-[var(--color-accent)]">remote work expert</span> 
//             dedicated to helping individuals and businesses thrive.  
//             Through tailored training, I equip people with in-demand skills 
//             and connect them with global companies looking for talent.  
//           </p>

//           {/* Bullet Points */}
//           <ul className="mt-6 space-y-3 text-[var(--color-muted)]">
//             <li className="flex items-center gap-2">
//               <span className="text-[var(--color-accent)]">✔</span> Digital Marketing Campaigns
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-[var(--color-accent)]">✔</span> Remote Work Career Coaching
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-[var(--color-accent)]">✔</span> Training & Skill Development
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-[var(--color-accent)]">✔</span> Connecting Talent with Employers
//             </li>
//           </ul>

//           {/* CTA */}
//           <div className="mt-8">
//             <Link
//               href="/services"
//               className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-full shadow hover:opacity-90 transition"
//             >
//               Discover My Services
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full bg-[var(--color-dark)] text-[var(--color-light)] py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="relative flex justify-center">
          <div className="border-4 border-[var(--color-accent)] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/sirp.png"
              alt="Ennamdy"
              width={450}
              height={450}
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-light)]">
            About <span className="text-[var(--color-accent)]">Ennamdy</span>
          </h2>
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
            A few years ago, I was just like many of you — sending out endless job
            applications and facing rejection after rejection. Each{" "}
            <em>“We regret to inform you…”</em> email felt like a dead end.
          </p>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            I knew I had potential but didn’t know how to break into the global
            market. I was stuck, frustrated, and tired of wasting time on strategies
            that didn’t work. Then everything shifted. I discovered how to position
            myself for international opportunities, mastered remote-friendly skills,
            and built the confidence to work with clients around the world.
          </p>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            Fast forward to today: I work as a{" "}
            <span className="text-[var(--color-accent)]">remote consultant</span> and{" "}
            <span className="text-[var(--color-accent)]">sales funnel designer</span>,
            serving international clients and earning in dollars — all from the comfort
            of my laptop.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-[var(--color-muted)]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✔</span> Helped 100+ people transition from rejection to remote job success
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✔</span> Designed sales funnels for global clients in Tech, SaaS & E-commerce
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">✔</span> Built proven systems that cut job search time from months to weeks
            </li>
          </ul>

          <p className="mt-6 text-[var(--color-muted)] leading-relaxed">
            My mission now is simple: help everyday people avoid the mistakes I made,
            stop wasting time on endless applications, and confidently land global
            remote jobs that pay in dollars — even if they don’t have a tech background.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/course"
              className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-full shadow hover:opacity-90 transition"
            >
              Discover My Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
