apps/web/src/pages/HomePage.jsx

import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import pb from '@/lib/pocketbaseClient';
const CATEGORIES = ['Todos', 'Geral', 'Tecnologia', 'Viagem', 'Estilo de Vida', 'Comida'];
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') || 'Todos';
  useEffect(() => {
    let active = true;
    setLoading(true);
    pb.collection('posts').getFullList({
      sort: '-created',
      filter: 'published = true'
    }).then(res => {
      if (active) setPosts(res);
    }).catch(err => {
      console.error('load posts failed', err);
      if (active) setError('Não foi possível carregar os posts agora.');
    }).finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);
  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return posts;
    return posts.filter(p => p.category === activeCategory);
  }, [posts, activeCategory]);
  const [featured, ...rest] = filtered;
  return <>
      <Helmet>
        <title>Prosa — Histórias que valem a leitura</title>
        <meta name="description" content="Prosa é um blog editorial com histórias sobre tecnologia, viagem, estilo de vida e comida." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[70vh] flex items-end overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <img src="https://images.hostinger.com/83513c41-f63c-4e0f-a789-4027761dc3a5.png" alt="Capa do blog Prosa" className="w-full h-full object-cover" />
              <div className="scrim" />
            </div>

            <div className="relative max-w-7xl mx-auto container-padding pb-20 pt-40 w-full">
              <motion.div initial={{
              opacity: 0,
              y: 24
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7
            }}>
                <p className="eyebrow mb-5">Prosa · edição semanal</p>
                <h1 className="headline-mega text-white text-[clamp(2.75rem,8vw,6.5rem)] max-w-4xl">
                  Histórias que
                  <br />
                  <span className="headline-script text-gradient-gold normal-case">valem a leitura.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  Tecnologia, viagem, estilo de vida e comida — contadas com calma, uma edição por vez.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="section-spacing container-padding max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {CATEGORIES.map(cat => <button key={cat} onClick={() => cat === 'Todos' ? setSearchParams({}) : setSearchParams({
              categoria: cat
            })} className={['px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-all duration-200 border', activeCategory === cat ? 'bg-gold text-primary-foreground border-gold' : 'border-border text-muted-foreground hover:text-foreground hover:border-gold/40'].join(' ')}>
                  {cat}
                </button>)}
            </div>

            {loading && <p className="text-muted-foreground">Carregando posts…</p>}
            {error && <p className="text-destructive">{error}</p>}
            {!loading && !error && filtered.length === 0 && <div className="surface-card p-12 text-center">
                <p className="text-muted-foreground"></p>
              </div>}

            {!loading && !error && filtered.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured && <PostCard post={featured} featured />}
                {rest.map(post => <PostCard key={post.id} post={post} />)}
              </div>}
          </section>
        </main>

        <Footer />
      </div>
    </>;
};
export default HomePage;
