import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  delay?: number;
}

export function AnimatedIcon({ icon: Icon, size = 48, className = '', delay = 0 }: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}
