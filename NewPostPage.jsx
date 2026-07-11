apps/web/src/pages/NewPostPage.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import pb from '@/lib/pocketbaseClient';

const CATEGORIES = ['Geral', 'Tecnologia', 'Viagem', 'Estilo de Vida', 'Comida'];

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const NewPostPage = () => {
  const { user, isAuthed } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState('Geral');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(isEditing);

  useEffect(() => {
    if (!isAuthed) navigate('/entrar');
  }, [isAuthed, navigate]);

  useEffect(() => {
    if (!isEditing) return;
    pb.collection('posts')
      .getOne(id)
      .then((post) => {
        setTitle(post.title);
        setExcerpt(post.excerpt || '');
        setContent((post.content || '').replace(/<\/?p>/g, '').replace(/<br\s*\/?>/g, '\n'));
        setCoverImage(post.coverImage || '');
        setCategory(post.category || 'Geral');
      })
      .catch((err) => console.error('load post for edit failed', err))
      .finally(() => setLoadingPost(false));
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const htmlContent = content
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .map((line) => `<p>${line}</p>`)
        .join('');

      if (isEditing) {
        await pb.collection('posts').update(id, {
          title,
          excerpt,
          content: htmlContent,
          coverImage,
          category,
        });
        const updated = await pb.collection('posts').getOne(id);
        navigate(`/post/${updated.slug}`);
      } else {
        const slug = `${slugify(title)}-${Date.now().toString(36)}`;
        await pb.collection('posts').create({
          title,
          slug,
          excerpt,
          content: htmlContent,
          coverImage,
          category,
          authorName: user?.name || user?.email || 'Autor',
          owner: user?.id,
          published: true,
        });
        navigate(`/post/${slug}`);
      }
    } catch (err) {
      console.error('save post failed', err);
      setError('Não foi possível salvar o post. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loadingPost) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-32 text-center text-muted-foreground">Carregando…</main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet><title>{isEditing ? 'Editar post' : 'Novo post'} — Prosa</title></Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-32 pb-24 container-padding">
          <div className="max-w-2xl mx-auto surface-card p-10">
            <p className="eyebrow mb-4">{isEditing ? 'Editar' : 'Nova publicação'}</p>
            <h1 className="headline-display text-3xl mb-8">{isEditing ? 'Editar post' : 'Escrever novo post'}</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Título</label>
                <Input required value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-10 bg-input border border-border px-3 text-sm text-foreground rounded-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Imagem de capa (URL)</label>
                <Input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://…" className="rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Resumo</label>
                <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} className="rounded-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Conteúdo</label>
                <Textarea required value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="rounded-none" placeholder="Escreva um parágrafo por linha…" />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" disabled={loading} className="btn-gold w-full h-11 rounded-none border-0 text-[12px] font-bold uppercase tracking-widest">
                {loading ? 'Salvando…' : isEditing ? 'Salvar alterações' : 'Publicar post'}
              </Button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewPostPage;
