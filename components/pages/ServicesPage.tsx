import { motion } from 'motion/react';
import { Home, Palette, Ruler, Hammer, Sofa, Building } from 'lucide-react';
import { ServiceCard } from '../ServiceCard';

export function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces, bringing your vision to life with expert creativity and attention to detail.',
    },
    {
      icon: Building,
      title: 'Architecture',
      description: 'Comprehensive architectural services from concept to completion, ensuring structural integrity and aesthetic excellence in every project.',
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Intelligent space planning that maximizes functionality, flow, and aesthetic appeal while optimizing every square foot of your space.',
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Expert renovation services that transform existing spaces into modern, functional, and beautiful environments tailored to your needs.',
    },
    {
      icon: Sofa,
      title: 'Furniture Design',
      description: 'Custom furniture design and selection that perfectly complements your space, style preferences, and functional requirements.',
    },
    {
      icon: Home,
      title: 'Turnkey Projects',
      description: 'End-to-end project management from concept to completion, ensuring seamless execution and exceptional results every time.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">What We Offer</p>
            <h1 className="text-5xl lg:text-6xl text-foreground mb-6">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive interior design and architectural solutions tailored to transform your vision into reality. From concept to completion, we deliver excellence at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-8 mt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Process</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined approach to bring your design dreams to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'We meet to discuss your vision, requirements, and budget' },
              { num: '02', title: 'Design', desc: 'Our team creates detailed plans and 3D visualizations' },
              { num: '03', title: 'Execution', desc: 'Expert craftsmen bring the design to life' },
              { num: '04', title: 'Completion', desc: 'Final touches and handover of your dream space' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-accent/20 text-7xl mb-4">{step.num}</div>
                <h3 className="text-2xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-accent/20 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-gray-900 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-8">
            Let's discuss how we can transform your space into something extraordinary.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(198, 166, 100, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-white rounded-full uppercase tracking-wider hover:bg-accent/90 transition-all"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
