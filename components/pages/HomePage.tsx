import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../Hero';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        imageUrl="https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYxNDgxODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Transforming Spaces into Timeless Designs"
        subtitle="Shark Studio Interior Design"
        showScrollIndicator={true}
        onCTAClick={() => onNavigate('projects')}
      />

      {/* Welcome Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent uppercase tracking-[0.3em] mb-4 text-sm"
              >
                Welcome to Shark Studio
              </motion.p>
              <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
                Creating Spaces That Inspire
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Shark Studio Interior Design, we believe that every space tells a story. Our passion is transforming ordinary rooms into extraordinary experiences that reflect your unique vision and lifestyle.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With years of expertise in residential and commercial design, we combine creativity with functionality to deliver timeless interiors that exceed expectations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full uppercase text-sm tracking-wider hover:bg-accent/90 transition-all"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzY4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Interior Design"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">What We Do</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Design',
                desc: 'Complete interior design solutions for residential and commercial spaces',
              },
              {
                title: 'Space Planning',
                desc: 'Intelligent layouts that maximize functionality and aesthetic appeal',
              },
              {
                title: 'Custom Furniture',
                desc: 'Bespoke furniture pieces designed specifically for your space',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-2xl mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="h-1 bg-accent mt-6 rounded-full"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-primary text-white rounded-full uppercase text-sm tracking-wider hover:bg-primary/90 transition-all"
            >
              View All Services
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">Ready to Transform Your Space?</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Let's bring your vision to life with our expert design services. Contact us today for a consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(198, 166, 100, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-accent text-white rounded-full uppercase tracking-wider hover:bg-accent/90 transition-all"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('our-work')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
