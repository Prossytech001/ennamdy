// "use client"; 

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="fixed top-0 w-full z-20  backdrop-blur-md text-brand-light shadow">
//         <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
            
//             {/* Logo + Brand */}
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/mainlogo.png"
//                 alt="Ennamdy Logo"
//                 width={150}
//                 height={150}
//                 priority
//               />
              
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-brand-accent transition text-[20px]">Home</Link>
//               <Link href="/services" className="hover:text-brand-accent transition text-[20px]">Services</Link>
//               <Link href="/about" className="hover:text-brand-accent transition text-[20px]">About</Link>
//               <Link href="/contact" className="hover:text-brand-accent transition text-[20px]">Contact</Link>
//             </div>

//             {/* CTA Button */}
//             <div className="hidden md:block">
//               <Link
//                 href="/get-started"
//                 className="px-4 py-2 bg-brand-accent text-white font-semibold rounded-[30px] shadow bg-blue-800 transition"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* Mobile Hamburger */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="text-brand-light focus:outline-none text-2xl"
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 z-30 flex">
//           {/* Dark overlay */}
//           <div
//             className="fixed inset-0  bg-opacity-50"
//             onClick={() => setIsOpen(false)}
//           ></div>

//           {/* Sidebar */}
//           <div className="relative bg-brand-dark w-64 h-full p-6 text-brand-light z-40 animate-slide-in">
//             {/* Close button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-2xl"
//             >
//               ✕
//             </button>

//             {/* Menu Links */}
//             <nav className="mt-10 bg-white space-y-6 text-lg">
//               <Link href="/" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link href="/services" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>Services</Link>
//               <Link href="/about" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>About</Link>
//               <Link href="/contact" className="block hover:text-brand-accent" onClick={() => setIsOpen(false)}>Contact</Link>
//               <Link
//                 href="/get-started"
//                 className="block mt-6 px-4 py-2 bg-brand-accent text-brand-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition text-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-20 bg-[var(--color-dark)] text-[var(--color-light)] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/mainlogo.png"
                alt="Ennamdy Logo"
                width={140}
                height={140}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <Link href="/" className="hover:text-[var(--color-accent)] transition text-[18px] font-medium">Home</Link>
              <Link href="/services" className="hover:text-[var(--color-accent)] transition text-[18px] font-medium">Services</Link>
              <Link href="/about" className="hover:text-[var(--color-accent)] transition text-[18px] font-medium">About</Link>
              <Link href="/contact" className="hover:text-[var(--color-accent)] transition text-[18px] font-medium">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/get-started"
                className="px-6 py-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-full shadow hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-[var(--color-light)] focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 flex">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative bg-[var(--color-dark)] w-64 h-full p-6 text-[var(--color-light)] z-40 animate-slide-in">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            {/* Menu Links */}
            <nav className="mt-12 space-y-6 text-lg font-medium">
              <Link href="/" className="block hover:text-[var(--color-accent)]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/services" className="block hover:text-[var(--color-accent)]" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/about" className="block hover:text-[var(--color-accent)]" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" className="block hover:text-[var(--color-accent)]" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link
                href="/get-started"
                className="block mt-8 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-dark)] font-semibold rounded-full shadow hover:opacity-90 transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
