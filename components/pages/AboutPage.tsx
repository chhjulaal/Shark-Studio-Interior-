import { motion } from 'motion/react';
import { Target, Heart, Award, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1715593948040-d013495c3647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwdGVhbXxlbnwxfHx8fDE3NjE0NjQ0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Priya Verma',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1715593948040-d013495c3647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwdGVhbXxlbnwxfHx8fDE3NjE0NjQ0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Rahul Kumar',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1715593948040-d013495c3647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwdGVhbXxlbnwxfHx8fDE3NjE0NjQ0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sneha Patel',
      role: 'Interior Stylist',
      image: 'https://images.unsplash.com/photo-1715593948040-d013495c3647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwdGVhbXxlbnwxfHx8fDE3NjE0NjQ0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality in design and execution.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for design drives us to create spaces that truly inspire and delight our clients.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to deliver cutting-edge design solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision is at the heart of every design.',
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
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">About Us</p>
            <h1 className="text-5xl lg:text-6xl text-foreground mb-6">Shark Studio Interior</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              A team of passionate designers dedicated to transforming spaces into timeless works of art
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Story</p>
              <h2 className="text-4xl lg:text-5xl text-foreground mb-6">
                Creating Spaces That Inspire
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a passion for exceptional design, Shark Studio Interior has been transforming spaces across Gajraula, Amroha, and beyond for over a decade. Our journey began with a simple belief: every space has the potential to become extraordinary.
                </p>
                <p>
                  Today, we're proud to be one of the region's leading interior design firms, known for our innovative approach, attention to detail, and commitment to client satisfaction. Our portfolio spans residential homes, commercial spaces, and everything in between.
                </p>
                <p>
                  What sets us apart is our holistic approach to design. We don't just create beautiful spaces; we craft environments that enhance the way you live, work, and thrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721244654392-9c912a6eb236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYxNDA5MDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-4 border-accent rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-gray-900 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 text-accent/10 text-[200px] leading-none">"</div>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl mb-6 relative z-10 italic">
            We design spaces that inspire
          </p>
          <p className="text-white/70 text-lg">Our Mission Statement</p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Values</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">What Drives Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The core principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6"
                >
                  <value.icon size={32} className="text-accent" />
                </motion.div>
                <h3 className="text-2xl mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Team</p>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-6">Meet the Experts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A talented team of designers, architects, and craftsmen dedicated to your vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-1 text-foreground">{member.name}</h3>
                <p className="text-accent text-sm uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
