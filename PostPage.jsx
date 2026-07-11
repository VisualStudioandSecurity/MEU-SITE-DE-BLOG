apps/web/src/pages/PostPage.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import pb from '@/lib/pocketbaseClient';
import { useAuth } from '@/hooks/useAuth';

const PostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    pb.collection('posts')
      .getFirstListItem(`slug = "${slug.replace(/"/g, '')}"`)
      .then((res) => active && setPost(res))
      .catch((err) => {
        console.error('load post failed', err);
        if (active) setError('Post não encontrado.');
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [slug]);

  const isOwner = post && user && post.owner === user.id;

  const handleDelete = async () => {
    if (!post || !window.confirm('Excluir este post permanentemente?')) return;
    try {
      await pb.collection('posts').delete(post.id);
      navigate('/');
    } catch (err) {
      console.error('delete failed', err);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} — Prosa` : 'Prosa'}</title>
        {post?.excerpt && <meta name="description" content={post.excerpt} />}
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-1 pt-32">
          {loading && (
            <div className="max-w-3xl mx-auto container-padding py-24 text-center text-muted-foreground">
              Carregando…
            </div>
          )}

          {error && !loading && (
            <div className="max-w-3xl mx-auto container-padding py-24 text-center">
              <p className="text-muted-foreground mb-6">{error}</p>
              <Link to="/" className="text-gold uppercase text-sm tracking-widest font-semibold">
                Voltar para o início
              </Link>
            </div>
          )}

          {post && !loading && (
            <article>
              <div className="max-w-3xl mx-auto container-padding mb-10">
                <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors mb-8">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Todos os posts
                </Link>

                {post.category && (
                  <p className="eyebrow mb-4">{post.category}</p>
                )}
                <h1 className="headline-mega text-foreground text-[clamp(2.25rem,6vw,4.25rem)]">
                  {post.title}
                </h1>
                <p className="mt-5 text-sm text-muted-foreground uppercase tracking-widest">
                  {post.authorName || 'Autor'} ·{' '}
                  {new Date(post.created).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>

                {isOwner && (
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild variant="outline" className="btn-ghost-gold h-9 rounded-none border text-[11px] uppercase tracking-widest">
                      <Link to={`/editar/${post.id}`} className="inline-flex items-center gap-2">
                        <Pencil className="w-3.5 h-3.5" /> Editar
                      </Link>
                    </Button>
                    <button
                      onClick={handleDelete}
                      className="inline-flex items-center gap-2 h-9 px-4 border border-destructive/40 text-destructive text-[11px] uppercase tracking-widest hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Excluir
                    </button>
                  </div>
                )}
              </div>

              {post.coverImage && (
                <div className="max-w-5xl mx-auto container-padding mb-12">
                  <img src={post.coverImage} alt={post.title} className="w-full aspect-[16/9] object-cover" />
                </div>
              )}

              <div
                className="max-w-3xl mx-auto container-padding pb-24 prose prose-invert prose-lg text-foreground/90 leading-relaxed [&_p]:mb-5"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </article>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PostPage;
