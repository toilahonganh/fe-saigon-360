'use client';
import React, { useEffect, useRef } from 'react';
import { Header } from '../header';

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const tryPlayVideo = () => {
        videoElement.play().catch((error) => {
          console.error("Không thể phát video:", error);
        });
      };

      const handleVideoEnded = () => {
        videoElement.pause();
        videoElement.src = '/assets/video/thuthiem2.mp4'; // Video mới
        videoElement.load();
        videoElement.oncanplaythrough = () => {
          videoElement.play();
        };
      };

      videoElement.addEventListener('ended', handleVideoEnded);

      tryPlayVideo();

      setTimeout(() => {
        tryPlayVideo();
      }, 500);

      return () => {
        if (videoElement) {
          videoElement.removeEventListener('ended', handleVideoEnded);
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/video/saigon3.mp4"
        autoPlay
        loop={false}
        muted={true}
        playsInline
        preload="auto"
        onError={(e) => console.error('Không thể tải video:', e)}
      />

      {/* Lớp phủ và văn bản */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">Khám Phá Sài Gòn 360°</h1>
        <p className="mt-4 text-lg">Trải nghiệm thành phố sôi động này theo một cách hoàn toàn mới.</p>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20 flex items-center bg-transparent py-4 px-5">
        {/* Chèn nội dung header vào đây */}
        <Header />
      </header>
    </div>
  );
}
