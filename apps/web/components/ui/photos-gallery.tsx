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
      className={`absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] ${className || ""}`}
    >
      <motion.div
        className="flex gap-4"
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
            className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
            style={{
              rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
            }}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};