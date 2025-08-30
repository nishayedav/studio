import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogSummarizer } from '@/components/home/blog-summarizer';

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-24 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            From The Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Sharing insights on cloud technology, DevOps, and professional growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="bg-background shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="p-0">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.dataAiHint}
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <CardDescription>{post.summary}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button size="lg" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>

        <BlogSummarizer />
      </div>
    </section>
  );
}
