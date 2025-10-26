import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Our Work', id: 'our-work' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-2">Shark Studio</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Interior
            </p>
            <p className="text-white/70 leading-relaxed">
              Creating exceptional spaces that inspire and elevate everyday living through innovative design solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate?.(link.id)}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Ground Floor, 30 Gajraula, Moh Jalal Nagar, Gajraula, Amroha – 244235</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:9582835516" className="hover:text-accent transition-colors">
                  9582835516
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@sharkstudiointerior.com" className="hover:text-accent transition-colors">
                  info@sharkstudiointerior.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg mb-6 uppercase tracking-wider">Follow Us</h4>
            <p className="text-white/70 text-sm mb-6">
              Stay updated with our latest projects and design insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
                >
                  <social.icon size={18} className="text-accent" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
        >
          <p>© 2024 Shark Studio Interior. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-accent transition-colors">Terms of Service</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
