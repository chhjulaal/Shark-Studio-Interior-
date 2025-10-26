import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface SkillBarProps {
  label: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ label, percentage, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
    }
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground">{label}</span>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: 'easeOut', delay }}
          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative overflow-hidden"
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
