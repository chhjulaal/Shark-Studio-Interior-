import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  index: number;
}

export function TestimonialCard({ name, role, company, content, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-sm shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Quote className="text-neutral-300 mb-4" size={40} />
      <p className="text-neutral-700 mb-6 italic">{content}</p>
      <div>
        <p className="text-neutral-900">{name}</p>
        <p className="text-neutral-600">{role}, {company}</p>
      </div>
    </motion.div>
  );
}
