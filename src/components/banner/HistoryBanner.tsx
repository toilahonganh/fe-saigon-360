'use client'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images } from '../shared';

export default function HistoryBanner() {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleClick = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg w-full h-[350px]">
      <motion.div 
        className="flex items-center justify-between w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Ảnh */}
        <motion.div 
          className="w-1/2 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image 
            src={Images.hochiminh}
            alt="Hồ Chí Minh"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>
        
        {/* Văn bản */}
        <motion.div 
          className="w-1/2 pl-6 h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold text-gray-800">
            Tại sao thành phố được đặt tên là Chủ tịch Hồ Chí Minh
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Thành phố Hồ Chí Minh, trung tâm kinh tế lớn nhất của Việt Nam, đã được đặt tên để tưởng nhớ Chủ tịch Hồ Chí Minh - người lãnh đạo vĩ đại của dân tộc.
          </p>
          
          {/* Nút để hiển thị lịch sử */}
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
            onClick={handleClick}
          >
            Xem lịch sử hình thành
          </button>

          {/* Hiển thị thông tin lịch sử */}
          {isHistoryVisible && (
            <div className="mt-4 text-gray-700">
              <h2 className="font-semibold text-xl">Lịch sử hình thành tên gọi</h2>
              <p>
                Thành phố Hồ Chí Minh trước đây được gọi là Sài Gòn. Vào năm 1976, sau khi miền Nam Việt Nam được thống nhất, thành phố được đổi tên để vinh danh Chủ tịch Hồ Chí Minh, người đã dành cả cuộc đời cho sự nghiệp đấu tranh giành độc lập cho dân tộc.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
