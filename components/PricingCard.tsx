import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
  onSelect?: () => void;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  delay = 0,
  onSelect,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative bg-card p-8 border-2 transition-all duration-300 ${
        highlighted
          ? 'border-accent shadow-2xl shadow-accent/20'
          : 'border-border hover:border-accent/50 hover:shadow-xl'
      }`}
    >
      {highlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 text-sm uppercase tracking-widest"
        >
          Popular
        </motion.div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl text-accent">{price}</span>
          <span className="text-muted-foreground">/ {period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.1 * index }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
              <Check size={14} className="text-accent" />
            </div>
            <span className="text-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        className={`w-full uppercase tracking-widest ${
          highlighted
            ? 'bg-accent hover:bg-accent/90 text-white'
            : 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white'
        }`}
      >
        Get Started
      </Button>
    </motion.div>
  );
}
