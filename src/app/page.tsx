import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { Services } from '@/components/home/services';
import { Testimonials } from '@/components/home/testimonials';
import { BlogPreview } from '@/components/home/blog-preview';
import { Contact } from '@/components/home/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
