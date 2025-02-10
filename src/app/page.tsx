'use client'
import { useState, useEffect } from 'react';
// import { VRBanner } from "@/components/banner";
import { BannerVideo } from "./components/banner";
import { HeaderFixed } from './components/header';

export default function Home() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    // Thêm sự kiện scroll
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <BannerVideo />
      {/* <BannerAds /> */}
      {/* <VRBanner /> */}

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHeaderFixed ? 'bg-white shadow-lg' : 'hidden'}`}>
        <HeaderFixed/>
      </header>
    </div>
  );
}
