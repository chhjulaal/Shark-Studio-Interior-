import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxSection } from '../ParallaxSection';

export function OurWorkPage() {
  const workItems = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDgxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Living Space',
      category: 'Residential',
      span: 'wide',
    },
    {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzY4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bedroom Walkthrough',
      category: 'Residential',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1758548157243-f4ef3e614684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0ODE4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Contemporary Kitchen',
      category: 'Residential',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMGludGVyaW9yfGVufDF8fHx8MTc2MTM4Njc5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Office Interior',
      category: 'Commercial',
      span: 'tall',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1657639398998-f1a0463c859f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MTQ4MTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Dining Space',
      category: 'Residential',
    },
    {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjE0ODE4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Bathroom Tour',
      category: 'Residential',
    },
  ];

  const getGridClass = (span?: string) => {
    switch (span) {
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Page Header with Parallax */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDgxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        height="50vh"
      >
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Portfolio</p>
            <h1 className="text-5xl lg:text-6xl mb-6">Our Work</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Explore our collection of completed projects showcasing our design excellence
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Work Gallery with Masonry Grid */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 0.98 }}
                className={`relative group overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all ${getGridClass(item.span)}`}
              >
                <ImageWithFallback
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                )}

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col justify-end p-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-accent text-sm uppercase tracking-wider mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-white text-2xl">{item.title}</h3>
                  </motion.div>
                </motion.div>

                {/* Golden border on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 border-4 border-accent pointer-events-none rounded-lg"
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-8 py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '450+', label: 'Happy Clients' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-5xl lg:text-6xl text-accent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-white/70 uppercase text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-24 bg-muted">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
            Want to See Your Space Here?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's create something beautiful together. Contact us to start your design journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(198, 166, 100, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-white rounded-full uppercase tracking-wider hover:bg-accent/90 transition-all"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
