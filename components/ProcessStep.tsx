import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

interface ProcessStepProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({ icon, number, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
          className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-4"
        >
          <span className="text-accent">{number}</span>
        </motion.div>

        {/* Icon */}
        <div className="mb-4 text-accent">
          <AnimatedIcon icon={icon} size={48} delay={delay + 0.2} />
        </div>

        {/* Content */}
        <h3 className="text-xl mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-xs">{description}</p>
      </div>
    </motion.div>
  );
}
