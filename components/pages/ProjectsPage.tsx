import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AnimatedGallery } from '../AnimatedGallery';

export function ProjectsPage() {
  const projectImages = [
    {
      url: 'https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDgxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Living Room',
      category: 'Residential',
    },
    {
      url: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzY4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Bedroom Suite',
      category: 'Residential',
    },
    {
      url: 'https://images.unsplash.com/photo-1758548157243-f4ef3e614684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0ODE4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Kitchen Design',
      category: 'Residential',
    },
    {
      url: 'https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMGludGVyaW9yfGVufDF8fHx8MTc2MTM4Njc5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Contemporary Office Space',
      category: 'Commercial',
    },
    {
      url: 'https://images.unsplash.com/photo-1657639398998-f1a0463c859f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MTQ4MTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Beautiful Dining Space',
      category: 'Residential',
    },
    {
      url: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjE0ODE4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Bathroom',
      category: 'Residential',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <section className="px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Projects</p>
            <h1 className="text-5xl lg:text-6xl text-foreground mb-6">Featured Work</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of beautifully designed spaces. Each project represents our commitment to excellence, creativity, and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Project */}
      <section className="px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Featured Project</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-4">Project Showcase</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDgxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Featured Project Video"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play size={36} className="text-white ml-1" fill="white" />
                </motion.div>
              </motion.div>

              {/* Golden Border on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border-4 border-accent pointer-events-none rounded-lg"
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <h3 className="text-3xl text-foreground mb-3">Complete Home Transformation</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A comprehensive residential project featuring modern aesthetics, functional layouts, and premium finishes throughout.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Gallery</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">More Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Click on any image to view in full screen
            </p>
          </motion.div>

          <AnimatedGallery items={projectImages} />
        </div>
      </section>
    </div>
  );
}
