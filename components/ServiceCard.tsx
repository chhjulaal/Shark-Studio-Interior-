import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="bg-card p-8 border border-border group transition-all duration-300 hover:shadow-xl hover:border-accent/50"
    >
      <div className="flex flex-col items-start">
        <div className="mb-6 text-accent">
          <AnimatedIcon icon={icon} size={56} delay={delay + 0.2} />
        </div>
        <h3 className="text-2xl mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="h-0.5 bg-accent mt-6"
        />
      </div>
    </motion.div>
  );
}
