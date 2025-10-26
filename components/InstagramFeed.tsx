import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InstagramPost {
  imageUrl: string;
  likes: number;
  comments: number;
}

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export function InstagramFeed({ posts }: InstagramFeedProps) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} className="text-accent" />
            <p className="text-accent uppercase tracking-widest text-sm">Follow Us</p>
          </div>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">@SharkStudioDesign</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get daily design inspiration and behind-the-scenes glimpses of our latest projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square group cursor-pointer overflow-hidden"
            >
              <ImageWithFallback
                src={post.imageUrl}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-accent/90 flex items-center justify-center gap-6 text-white"
              >
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white uppercase tracking-widest hover:shadow-xl transition-shadow"
          >
            <Instagram size={20} />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
