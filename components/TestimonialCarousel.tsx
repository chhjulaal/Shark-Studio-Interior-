import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative max-w-4xl mx-auto px-6">
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Quote size={48} className="text-accent" />
              </div>
              <p className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-accent uppercase tracking-widest mb-1">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
        >
          <ChevronLeft size={24} className="text-accent" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-border'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
        >
          <ChevronRight size={24} className="text-accent" />
        </button>
      </div>
    </div>
  );
}
