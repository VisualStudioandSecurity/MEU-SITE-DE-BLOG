apps/web/src/components/PostCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PostCard = ({ post, featured = false }) => {
  const date = post.created ? new Date(post.created).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`group relative surface-card overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}
    >
      <Link to={`/post/${post.slug}`} className="block">
        <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-navy-elevated" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
          {post.category && (
            <span className="absolute top-4 left-4 hud-badge hud-badge-gold text-[11px] font-semibold uppercase tracking-widest">
              {post.category}
            </span>
          )}
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {post.authorName || 'Autor'} · {date}
          </p>
          <h3 className={`headline-display text-foreground group-hover:text-gold transition-colors duration-200 ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Ler mais
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default PostCard;
