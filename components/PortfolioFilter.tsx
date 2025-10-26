import { motion } from 'motion/react';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PortfolioFilter({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-4 mb-16"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 uppercase tracking-widest text-sm transition-all relative overflow-hidden ${
            activeCategory === category
              ? 'text-white'
              : 'text-foreground hover:text-accent'
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-accent"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}
