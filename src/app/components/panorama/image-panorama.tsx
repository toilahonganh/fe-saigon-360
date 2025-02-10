"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

interface ImagePanoramaProps {
  images: string[];
  text?: string;
  address?: string; // 🆕 Thêm địa chỉ
  interval?: number;
}

export default function ImagePanorama({ images, text, address, interval = 3000 }: ImagePanoramaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative w-full h-[750px] mt-28 cursor-pointer overflow-hidden select-none">
      {/* Ảnh Panorama */}
      <Image
        src={images[currentIndex]}
        alt="Panorama"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
      />

      {/* Overlay Text + Address */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <span className="text-white text-5xl font-bold">{text || "Ouvrir la visite virtuelle"}</span>
        {address && <span className="text-white text-md font-light mt-2">{address}</span>}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"} transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
