'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Images } from '../shared';

const banners = [
  {
    image: Images.VR,
    title: "Khám phá vẻ đẹp Sài Gòn với trải nghiệm kính thực tế ảo VR",
    text: "Hòa mình vào không gian sống động với công nghệ thực tế ảo. Trải nghiệm các địa điểm nổi tiếng và những góc phố thân quen theo cách hoàn toàn mới."
  },
  {
    image: Images.buudienthanhpho,
    title: "Trải nghiệm du lịch 360°",
    text: "Đắm chìm trong thế giới du lịch thực tế ảo, khám phá những danh lam thắng cảnh nổi tiếng mà không cần rời khỏi nhà."
  },
  {
    image: Images.amthuc,
    title: "Ẩm thực đường phố Sài Gòn",
    text: "Hãy để chúng tôi đưa bạn vào hành trình ẩm thực phong phú với những món ăn ngon đặc trưng của thành phố sôi động này."
  }
];

export default function VRBanner() {
  const [index, setIndex] = useState(0);

  // Hàm thay đổi banner tự động sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg w-full h-[350px]">
      <motion.div 
        className="flex items-center justify-between w-full"
        animate={{ opacity: 1 }} // Giữ nguyên sự ổn định cho flex
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Ảnh */}
        <motion.div 
          className="w-1/2 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image 
            src={banners[index].image} 
            alt="Banner Image" 
            width={500} 
            height={500} 
            className="rounded-lg object-cover"
          />
        </motion.div>
        
        {/* Văn bản */}
        <motion.div 
          className="w-1/2 pl-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-extrabold text-gray-800">{banners[index].title}</h1>
          <p className="text-lg text-gray-600 mt-2">{banners[index].text}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
