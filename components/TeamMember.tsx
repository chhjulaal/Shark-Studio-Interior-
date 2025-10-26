import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  delay?: number;
}

export function TeamMember({ name, role, imageUrl, bio, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative overflow-hidden bg-card mb-4">
        <div className="aspect-square relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent flex items-end p-6"
          >
            {bio && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white text-sm"
              >
                {bio}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl text-foreground mb-1">{name}</h3>
        <p className="text-accent text-sm uppercase tracking-widest">{role}</p>
      </div>
    </motion.div>
  );
}
