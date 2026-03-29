"use client"
import { useRef } from "react"
import Link from "next/link"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { PhotosGallery } from "./photos-gallery"

const DEMO_IMAGES = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/6.webp",
  "/images/6.jpg",
];

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative"
      style={{ contain: 'layout style', willChange: 'transform' }}
    >
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
        colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
        speed={0.3}
      />

      <header className="relative z-20 flex items-center p-2 pl-24">
        {/* Logo — left */}
        <div className="flex items-center mt-4">
          <Link href="/">
            <img
              src="/images/margo-group-logo-white (1).png"
              alt="Margo Group Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation — centered absolutely */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
          <a
            href="/about"
            className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <main className="absolute top-1/4 left-8 z-20 max-w-2xl">
        <div className="text-left">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block font-black text-white drop-shadow-2xl">your partner in jordan</span>
          </motion.h1>

          <motion.div
            className="mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-10 h-px bg-cyan-400/60 mb-4"></div>
          </motion.div>
        </div>
      </main>

      {/* Photos Gallery */}
      <PhotosGallery images={DEMO_IMAGES} />
    </div>
  )
}
