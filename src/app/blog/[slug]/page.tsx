import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/lib/data';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-4xl">
          <article>
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog" className="text-muted-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Nisha Yadav</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>

            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                data-ai-hint={post.dataAiHint}
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line.startsWith('- ') ? <span className="ml-4 block">{line}</span> : line}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
