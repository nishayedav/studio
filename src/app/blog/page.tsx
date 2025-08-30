import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/lib/data';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                My Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                A collection of articles and insights on cloud, technology, and everything in between.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="bg-accent/30 shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
