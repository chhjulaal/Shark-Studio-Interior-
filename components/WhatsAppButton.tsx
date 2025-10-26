import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919582835516', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl flex items-center justify-center group"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
    >
      {/* Pulsing Ring Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* WhatsApp Icon */}
      <MessageCircle size={28} className="relative z-10" fill="white" />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm whitespace-nowrap rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        Message us on WhatsApp
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-0 h-0 border-8 border-transparent border-l-gray-900" />
      </motion.div>
    </motion.button>
  );
}
