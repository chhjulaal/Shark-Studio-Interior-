import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  onClick?: () => void;
  delay?: number;
}

export function BlogCard({ title, excerpt, date, imageUrl, category, onClick, delay = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="bg-card overflow-hidden border border-border group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-accent/50"
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-4 py-1 text-xs uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <Calendar size={16} />
          <span>{date}</span>
        </div>

        <h3 className="text-xl text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 text-accent text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
          <span>Read More</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.article>
  );
}
