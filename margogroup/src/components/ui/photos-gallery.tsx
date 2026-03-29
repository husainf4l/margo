"use client";

import React from "react";
import { motion } from "framer-motion";

interface PhotosGalleryProps {
  images: string[];
  className?: string;
}

export const PhotosGallery: React.FC<PhotosGalleryProps> = ({
  images,
  className,
}) => {
  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-1/3 md:h-2/5 overflow-hidden pointer-events-none ${className || ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          className="flex gap-3 md:gap-4 h-full items-end pb-8 md:pb-12"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-3/4 h-44 md:h-64 lg:h-72 shrink-0 group"
              style={{
                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl shadow-black/20"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};