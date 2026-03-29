"use client"
import { useRef } from "react"
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
      className="min-h-dvh bg-white relative"
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
        colors={["#f0f9ff", "#0891b2", "#06b6d4", "#e0f2fe", "#fed7aa"]}
        speed={0.3}
      />

      <div className="absolute top-0 left-0 right-0 bottom-1/3 md:bottom-2/5 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <main className="max-w-3xl mx-auto">
            <div className="text-center">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-[0.95] tracking-[-0.04em]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              >
                <span className="block font-black text-gray-900">Margo Group</span>
                <span className="block font-black text-gray-900">Your Partner</span>
                <span className="block font-black text-gray-900">in Jordan</span>
              </motion.h1>

              <motion.div
                className="mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              >
                <div className="h-1 w-12 md:w-16 bg-primary rounded-full mb-4 md:mb-6 mx-auto"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
                  Leading distributor of international beauty and personal care brands
                </p>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Photos Gallery */}
      <PhotosGallery images={DEMO_IMAGES} />
    </div>
  )
}
