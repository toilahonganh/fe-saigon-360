import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading } from '@/components/shared';

const Banner = () => {
  const images = [
    { src: '/assets/images/buudienthanhpho.png', alt: 'Image 1' },
    { src: '/assets/images/chobenthanh.png', alt: 'Image 2' },
    { src: '/assets/images/hafthi3.png', alt: 'Image 3' }
  ];

  return (
    <div className="relative w-full h-[800px]">
      {/* Heading hiển thị cho toàn bộ banner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Heading title="Discover story-worthy travel moments" />
      </div>

      <div className="flex w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-1/3 overflow-hidden group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            {/* Lớp phủ với opacity khi hover */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
