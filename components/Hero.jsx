// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative w-[100%] remote-hero min-h-screen flex items-center bg-gradient-to-br from-brand-light to-white overflow-hidden">
//       {/* Decorative background shapes */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-accent/30 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-dark/30 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
//         {/* Left Side: Text */}
//         <div className="text-center md:text-left">
//           {/* Tagline */}
//           <span className="inline-flex items-center text-sm font-medium text-brand-dark bg-brand-accent/20 px-3 py-1 rounded-full mb-4">
//             Inclusive workplaces for all
//           </span>

//           {/* Headline */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
//             Job <span className="text-brand-accent bg-yellow-500">Finder</span> <br />
//             with Diversity Focus.
//           </h1>

//           {/* Subtext */}
//           <p className="mt-6 text-lg text-brand-dark max-w-xl">
//             Find jobs at companies focused on diversity and inclusion that match your values.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <Link
//               href="/find-job"
//               className="px-6 py-3 bg-brand-accent text-brand-black font-semibold rounded-lg shadow bg-yellow-500 transition text-center"
//             >
//               Find Your Job
//             </Link>
//             <Link
//               href="/hire"
//               className="px-6 py-3 border-2 border-yellow-500 text-brand-dark font-semibold rounded-lg hover:bg-brand-dark hover:text-brand-light transition text-center"
//             >
//               Hire Talent
//             </Link>
//           </div>

//           {/* Search Bar */}
          
//         </div>

//         {/* Right Side: Image */}
//         <div className="relative bottom-0 flex justify-center md:justify-end">
//           <Image
//             src="/ennamdyimg.png" // 👉 replace with your actual hero image
//             alt="Remote work illustration"
//             width={500}
//             height={500}
//             className="rounded-2xl "
//           />

//           {/* Floating Badge */}
//           <div className="absolute top-6 right-6 bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
//             <span className="w-3 h-3 rounded-full bg-brand-accent"></span>
//             <p className="text-sm font-medium text-brand-dark">Job Available</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
    // <section className="relative w-full remote-hero min-h-screen flex items-start bg-gradient-to-br from-brand-light to-white overflow-hidden pt-24">
    //   {/* Decorative background shapes */}
    //   <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-brand-accent/30 rounded-full blur-3xl"></div>
    //   <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-brand-dark/30 rounded-full blur-3xl"></div>

    //   <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start z-10 w-full">
        
    //     {/* Left Side: Text */}
    //     <div className="flex flex-col items-start">
    //       {/* Tagline */}
    //       <span className="inline-flex items-center text-sm font-medium text-brand-dark bg-brand-accent/20 px-3 py-1 rounded-full mb-4">
    //         Inclusive workplaces for all
    //       </span>

    //       {/* Headline */}
    //       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
    //         Job <span className="text-brand-accent bg-yellow-500">Finder</span> <br />
    //         with Diversity Focus.
    //       </h1>

    //       {/* Subtext */}
    //       <p className="mt-6 text-lg text-brand-dark max-w-xl">
    //         Find jobs at companies focused on diversity and inclusion that match your values.
    //       </p>

    //       {/* CTA Buttons */}
    //       <div className="mt-8 px-6 py-3 flex sm:flex-row w-[100%] rounded-[30px] bg-white gap-4">
    //         <Link
    //           href="/find-job"
    //           className=" bg-yellow-500  px-3 py-2 text-brand-black font-semibold rounded-[30px] shadow bg-yellow-500 transition text-center w-full sm:w-auto"
    //         >
    //           Find Your Job
    //         </Link>
    //         <Link
    //           href="/hire"
    //           className=" border-2 px-3 py-2 border-yellow-500 text-brand-dark font-semibold rounded-[30px] hover:bg-brand-dark hover:text-brand-light transition text-center w-full sm:w-auto"
    //         >
    //           Hire Talent
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Right Side: Image */}
    //     <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
    //       <Image
    //         src="/ennamdyimg.png" // 👉 replace with your actual hero image
    //         alt="Remote work illustration"
    //         width={500}
    //         height={500}
    //         className="rounded-2xl"
    //       />

    //       {/* Floating Badge */}
    //       <div className="absolute top-6 right-6 bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
    //         <span className="w-3 h-3 rounded-full bg-brand-accent"></span>
    //         <p className="text-sm font-medium text-brand-dark">Job Available</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
//     <section className="relative min-h-screen flex items-start bg-gradient-to-br from-brand-light to-white pt-24">
//   <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
    
//     {/* Left Side: Text */}
//     <div className="flex flex-col items-start">
//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
//         Hi, I’m <span className="text-brand-accent">Ennamdy</span> <br />
//         Digital Marketer & Remote Work Expert.
//       </h1>

//       <p className="mt-6 text-lg text-brand-dark max-w-xl">
//         I help businesses grow with data-driven marketing strategies and guide professionals
//         to thrive in remote careers.
//       </p>

//       {/* CTA Buttons */}
//       <div className="mt-8 flex flex-col sm:flex-row gap-4">
//         <Link
//           href="/services"
//           className="px-6 py-3 bg-brand-accent text-brand-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition text-center"
//         >
//           Work With Me
//         </Link>
//         <Link
//           href="/about"
//           className="px-6 py-3 border-2 border-brand-dark text-brand-dark font-semibold rounded-lg hover:bg-brand-dark hover:text-brand-light transition text-center"
//         >
//           Learn More
//         </Link>
//       </div>
//     </div>

//     {/* Right Side: Image/Logo */}
//     <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
//       <Image
//         src="/sirp.png" // 👉 or your professional photo
//         alt="Ennamdy Branding"
//         width={200}
//         height={200}
//         className="rounded-full shadow-lg bg-white p-6"
//       />
//     </div>
//   </div>
// </section>

//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full pt-20 min-h-screen flex items-center bg-[var(--color-dark)]">
      {/* Overlay background shapes */}
      <div className="absolute inset-0 bg-[var(--color-dark)]/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center w-full mt-10">
        
        {/* Left Side: Text */}
        <div className="flex flex-col items-start">
          <span className="inline-block text-[var(--color-accent)] font-semibold tracking-wide uppercase mb-4">
            Skills • Training • Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-light)] leading-tight">
            Earn in Dollars with Global <span className="text-[var(--color-accent)]">Remote Jobs</span> <br />
            No Coding, No Tech <span className="text-[var(--color-accent)]">Background Needed</span>
          </h1>

          <p className="mt-6 text-lg text-[var(--color-muted)] max-w-xl">
            I help everyday people break free from constant rejections and land remote jobs with international companies. As a remote consultant and sales funnel designer, I’ve guided dozens of people into the global job market and you can be next.

          </p>

          <div className="mt-8 flex  sm:flex-row gap-4">
            <Link
              href="/course"
              className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-full shadow hover:opacity-90 transition text-center"
            >
              Show Me How to Get Started
            </Link>
            {/* <Link
              href="/course"
              className="px-6 py-3 border-2 border-[var(--color-light)] text-[var(--color-light)] font-semibold rounded-full hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] transition text-center"
            >
             Show Me How to Get Started
            </Link> */}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full h-[500px] md:h-[600px]">
  <Image
    src="/sirp.png"
    alt="Ennamdy"
    fill
    className="object-cover rounded-xl"
  />
</div>

      </div>
    </section>
  );
}
