import { motion } from 'motion/react';
import { Award } from 'lucide-react';

interface AwardCardProps {
  year: string;
  title: string;
  organization: string;
  delay?: number;
}

export function AwardCard({ year, title, organization, delay = 0 }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-card p-6 border border-border group hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"
        >
          <Award size={24} />
        </motion.div>
        
        <div className="flex-1">
          <div className="text-accent text-sm uppercase tracking-widest mb-2">{year}</div>
          <h3 className="text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{organization}</p>
        </div>
      </div>
    </motion.div>
  );
}
