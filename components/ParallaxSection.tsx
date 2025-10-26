import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  speed?: number;
}

export function ParallaxSection({ imageUrl, children, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="relative w-full h-[120%]">
          <ImageWithFallback
            src={imageUrl}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 bg-primary/80"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
