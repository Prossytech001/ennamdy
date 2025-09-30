// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const skills = [
//   "Social Media Management",
//   "Digital Marketing",
//   "Project Management",
//   "UI/UX Design",
//   "Customer Support",
//   "Virtual Assistant",
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     let observer;
//     if (sectionRef.current) {
//       observer = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting) {
//             // Wait 10s before showing popup
//             const timer = setTimeout(() => {
//               setShowPopup(true);
//             }, 10000);
//             return () => clearTimeout(timer);
//           }
//         },
//         { threshold: 0.3 }
//       );
//       observer.observe(sectionRef.current);
//     }
//     return () => observer && observer.disconnect();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const data = {
//       name: form.name.value,
//       email: form.email.value,
//       skill: form.skill.value,
//     };

//     // 👉 Replace with your Google Apps Script Web App URL
//     await fetch("https://script.google.com/macros/s/AKfycbzRkVPXLAnfTS-f-xHQxJ03Z4dop5qqEYllL_8DLN9aatsgpin-g8bP9kt2KIHCgCW6wA/exec", {
//   method: "POST",
//   mode: "no-cors", // 👈 important
//   body: JSON.stringify(data),
//   headers: { "Content-Type": "application/json" },
// });


//     alert("Thanks for signing up! We'll be in touch.");
//     setShowPopup(false);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[var(--color-gray)] text-[var(--color-light)] py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold">
//           Skill <span className="text-[var(--color-accent)]">Training Programs</span>
//         </h2>
//         <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
//           Gain in-demand skills that prepare you for remote and global career
//           opportunities.
//         </p>

//         {/* Skill Cards */}
//         <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="p-6 bg-[var(--color-dark)] rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold text-[var(--color-accent)]">
//                 {skill}
//               </h3>
//               <p className="mt-2 text-[var(--color-muted)] text-sm">
//                 Master {skill} with structured training and real-world projects.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popup Form */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-[var(--color-dark)]">
//             <h3 className="text-2xl font-bold mb-4 text-center">
//               Join Our Training Programs
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 className="w-full px-4 py-2 border rounded"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full px-4 py-2 border rounded"
//               />
//               <select
//                 name="skill"
//                 required
//                 className="w-full px-4 py-2 border rounded"
//               >
//                 <option value="">Select Skill</option>
//                 {skills.map((skill, i) => (
//                   <option key={i} value={skill}>
//                     {skill}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="submit"
//                 className="w-full bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold py-2 rounded hover:opacity-90 transition"
//               >
//                 Submit
//               </button>
//             </form>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="mt-4 text-sm text-[var(--color-dark)] underline block mx-auto"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";

// const skills = [
//   "Social Media Management",
//   "Digital Marketing",
//   "Project Management",
//   "UI/UX Design",
//   "Customer Support",
//   "Virtual Assistant",
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   // Show popup 10s after user scrolls into section
//   useEffect(() => {
//     let observer;
//     let timer;
//     if (sectionRef.current) {
//       observer = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting) {
//             timer = setTimeout(() => setShowPopup(true), 10000);
//           }
//         },
//         { threshold: 0.3 }
//       );
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (observer) observer.disconnect();
//       if (timer) clearTimeout(timer);
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     const form = e.target;
//     const data = {
//       name: form.name.value,
//       email: form.email.value,
//       skill: form.skill.value,
//     };

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbzRkVPXLAnfTS-f-xHQxJ03Z4dop5qqEYllL_8DLN9aatsgpin-g8bP9kt2KIHCgCW6wA/exec",
//         {
//           method: "POST",
//           mode: "no-cors", // bypass CORS
//           body: JSON.stringify(data),
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       setSubmitted(true);
//       form.reset();
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Something went wrong. Please try again later.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[var(--color-gray)] text-[var(--color-light)] py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold">
//           Skill <span className="text-[var(--color-accent)]">Training Programs</span>
//         </h2>
//         <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
//           Gain in-demand skills that prepare you for remote and global career
//           opportunities.
//         </p>

//         {/* Skill Cards */}
//         <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="p-6 border border-[var(--color-muted)]/30 bg-[var(--color-dark)] rounded-xl shadow hover:shadow-lg transition flex flex-col"
//             >
//               <h3 className="text-xl font-semibold text-[var(--color-accent)]">
//                 {skill}
//               </h3>
//               <p className="mt-2 text-[var(--color-muted)] text-sm flex-1">
//                 Master {skill} with structured training and real-world projects.
//               </p>
            //   <button
            //     onClick={() => setShowPopup(true)}
            //     className="mt-6 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg shadow hover:opacity-90 transition"
            //   >
            //     Enroll Now
            //   </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popup Form */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
//           <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-[var(--color-dark)] relative">
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-3 text-lg font-bold"
//             >
//               ✕
//             </button>

//             {!submitted ? (
//               <>
//                 <h3 className="text-2xl font-bold mb-4 text-center">
//                   Join Our Training Programs
//                 </h3>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     required
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     required
//                     className="w-full px-4 py-2 border rounded"
//                   />
//                   <select
//                     name="skill"
//                     required
//                     className="w-full px-4 py-2 border rounded"
//                   >
//                     <option value="">Select Skill</option>
//                     {skills.map((skill, i) => (
//                       <option key={i} value={skill}>
//                         {skill}
//                       </option>
//                     ))}
//                   </select>
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className={`w-full py-2 rounded font-semibold transition ${
//                       submitting
//                         ? "bg-gray-400 text-white cursor-not-allowed"
//                         : "bg-[var(--color-accent)] text-[var(--color-dark)] hover:opacity-90 shadow"
//                     }`}
//                   >
//                     {submitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </>
//             ) : (
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">
//                   🎉 Thank You!
//                 </h3>
//                 <p className="text-[var(--color-muted)]">
//                   Your registration has been received. We’ll contact you soon.
//                 </p>
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="mt-4 px-6 py-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg hover:opacity-90 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
// "use client";

// import { useEffect, useRef, useState } from "react";

// const skills = [
//   "Social Media Management",
//   "Digital Marketing",
//   "Project Management",
//   "UI/UX Design",
//   "Customer Support",
//   "Virtual Assistant",
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [hasShown, setHasShown] = useState(false); // ✅ prevents repeat

//   useEffect(() => {
//     let observer;
//     let timer;
//     if (sectionRef.current && !hasShown) {
//       observer = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           timer = setTimeout(() => {
//             setShowPopup(true);
//             setHasShown(true); // ✅ mark as shown
//           }, 10000);
//         }
//       }, { threshold: 0.3 });

//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (observer) observer.disconnect();
//       if (timer) clearTimeout(timer);
//     };
//   }, [hasShown]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const data = {
//       name: form.name.value,
//       email: form.email.value,
//       skill: form.skill.value,
//     };

//     await fetch("https://script.google.com/macros/s/AKfycbzRkVPXLAnfTS-f-xHQxJ03Z4dop5qqEYllL_8DLN9aatsgpin-g8bP9kt2KIHCgCW6wA/exec", {
//       method: "POST",
//       mode: "no-cors",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     });

//     alert("Thanks for signing up! We'll be in touch.");
//     setShowPopup(false);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[var(--color-dark)] text-[var(--color-light)] py-20"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold">
//           Skill <span className="text-[var(--color-accent)]">Training Programs</span>
//         </h2>
//         <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
//           Gain in-demand skills that prepare you for remote and global career
//           opportunities.
//         </p>

//         {/* Skill Cards */}
//         <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, i) => (
//             <div
//               key={i}
//               className="p-6 bg-[var(--color-dark)] rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold text-[var(--color-accent)]">
//                 {skill}
//               </h3>
//               <p className="mt-2 text-[var(--color-muted)] text-sm">
//                 Master {skill} with structured training and real-world projects.
//               </p>
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="mt-6 px-4 py-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold rounded-lg shadow hover:opacity-90 transition"
//               >
//                Learn more
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popup Form */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-[var(--color-dark)] relative">
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-3 text-lg font-bold"
//             >
//               ✕
//             </button>
//             <h3 className="text-2xl font-bold mb-4 text-center">
//               Join Our Training Programs
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 className="w-full px-4 py-2 border rounded"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full px-4 py-2 border border- rounded"
//               />
//               <select
//                 name="skill"
//                 required
//                 className="w-full px-4 py-2 border rounded"
//               >
//                 <option value="">Select Skill</option>
//                 {skills.map((skill, i) => (
//                   <option key={i} value={skill}>
//                     {skill}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="submit"
//                 className="w-full bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold py-2 rounded hover:opacity-90 transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
//   {
//     title: "Social Media Management",
//     modules: 8,
//     rating: 4.6,
//     image: "/skills/social-media.jpg",
//     free: true,
//   },
//   {
//     title: "Digital Marketing",
//     modules: 12,
//     rating: 4.8,
//     image: "/skills/digital-marketing.jpg",
//     free: true,
//   },
  {
    title: "ultimate Remote job guide",
    modules: 10,
    rating: 4.7,
    image: "/course.png",
    free: false,
  },
//   {
//     title: "UI/UX Design",
//     modules: 11,
//     rating: 4.9,
//     image: "/skills/uiux.jpg",
//     free: true,
//   },
//   {
//     title: "Customer Support",
//     modules: 6,
//     rating: 4.5,
//     image: "/skills/customer-support.jpg",
//     free: false,
//   },
//   {
//     title: "Virtual Assistant",
//     modules: 7,
//     rating: 4.4,
//     image: "/skills/virtual-assistant.jpg",
//     free: false,
//   },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let observer;
    let timer;
    if (sectionRef.current && !hasShown) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          timer = setTimeout(() => {
            setShowPopup(true);
            setHasShown(true);
          }, 10000);
        }
      }, { threshold: 0.3 });

      observer.observe(sectionRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      skill: form.skill.value,
    };

    await fetch("https://script.google.com/macros/s/AKfycbzRkVPXLAnfTS-f-xHQxJ03Z4dop5qqEYllL_8DLN9aatsgpin-g8bP9kt2KIHCgCW6wA/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    alert("Thanks for signing up! We'll be in touch.");
    setShowPopup(false);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-dark)] text-[var(--color-light)] w-full py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
         Your Path to<span className="text-[var(--color-accent)]">Remote Work Freedom</span>
        </h2>
        <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
         it’s a 
          complete step-by-step program designed to help you land high-paying remote 
          jobs with international companies — even if you have no coding or tech background.
        </p>

        {/* Skill Cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[var(--color-gray)] rounded-xl shadow hover:shadow-xl overflow-hidden transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
                {skill.free && (
                  <span className="absolute top-3 left-3 bg-[var(--color-accent)] text-[var(--color-dark)] text-xs font-bold px-3 py-1 rounded-full">
                    Free
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-[var(--color-light)]">
                  {skill.title}
                </h3>
                <p className="mt-2 text-[var(--color-muted)] text-sm">
                  {skill.modules} Modules  
                  <select name="" id="">
                    <option value=""></option>
                  </select>
                </p>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>
                      {skill.rating >= starIndex + 1 ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="ml-2 text-xs text-[var(--color-muted)]">
                    {skill.rating.toFixed(1)}
                  </span>
                </div>

                {/* CTA */}
                <Link 
                href="/course">
                <button
                  // onClick={() => setShowPopup(true)}
                  className="mt-4 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-lg shadow hover:opacity-90 transition"
                >
                  Learn more
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[var(--color-dark)] p-8 rounded-xl shadow-lg w-[90%] max-w-md text-[var(--color-dark)] relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-lg font-bold text-[var(--color-light)]"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-[18px] text-[var(--color-accent)]">
              Land a Remote Job That Pays in Dollars — No Tech Skills Needed
            </h3>
            <p className="mt-6 text-center text-[12px] text-[var(--color-muted)] max-w-xl">
            I help everyday people break free from constant rejections and land remote jobs with international companies. As a remote consultant and sales funnel designer, I’ve guided dozens of people into the global job market and you can be next.

          </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-[var(--color-accent)] rounded text-[var(--color-light)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-[var(--color-accent)] rounded text-[var(--color-light)]"
              />
              <select
                name="skill"
                required
                className="w-full px-4 py-2 border border-[var(--color-accent)] rounded text-[var(--color-light)]"
              >
                <option value="">Select Skill</option>
                {skills.map((skill, i) => (
                  <option key={i} value={skill.title}>
                    {skill.title}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold py-2 rounded hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
