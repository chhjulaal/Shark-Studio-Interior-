import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Ground Floor, 30 Gajraula, Moh Jalal Nagar, Gajraula, Amroha – 244235',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '9582835516',
      link: 'tel:9582835516',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@sharkstudiointerior.com',
      link: 'mailto:info@sharkstudiointerior.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: By Appointment',
      link: null,
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
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Get In Touch</p>
            <h1 className="text-5xl lg:text-6xl text-foreground mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out to us and let's discuss how we can transform your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-6 lg:px-8 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
                >
                  <info.icon size={32} className="text-accent" />
                </motion.div>

                <h3 className="text-2xl mb-4 text-foreground group-hover:text-accent transition-colors">
                  {info.title}
                </h3>

                {info.link ? (
                  <motion.a
                    href={info.link}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground text-lg hover:text-accent transition-colors inline-block"
                  >
                    {info.details}
                  </motion.a>
                ) : (
                  <p className="text-muted-foreground text-lg whitespace-pre-line">
                    {info.details}
                  </p>
                )}

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
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="px-6 lg:px-8 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-muted rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-video bg-gradient-to-br from-primary to-gray-900 flex items-center justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent rounded-full" />
                <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-accent rounded-lg rotate-45" />
              </div>
              
              <div className="text-center z-10">
                <MapPin size={64} className="text-accent mx-auto mb-4" />
                <h3 className="text-white text-2xl mb-2">Visit Our Studio</h3>
                <p className="text-white/70 max-w-md">
                  Ground Floor, 30 Gajraula, Moh Jalal Nagar<br />
                  Gajraula, Amroha – 244235
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-gray-900 rounded-2xl p-12 md:p-16 text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We're here to answer your questions and help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="tel:9582835516"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(198, 166, 100, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full uppercase tracking-wider hover:bg-accent/90 transition-all"
            >
              <Phone size={18} />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:info@sharkstudiointerior.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              <Mail size={18} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
