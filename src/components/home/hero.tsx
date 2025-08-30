import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] min-h-[600px] bg-accent/30">
      <div className="container h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start text-left space-y-6">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Nisha Yadav
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Cloud Engineer & IT Professional
            </p>
            <p className="max-w-xl text-lg text-muted-foreground">
              Building robust, scalable, and secure cloud solutions from Kathmandu, Nepal. Passionate about leveraging technology to solve complex problems and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-background">
                <Link href="#about">
                  Learn More <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image
                src="https://picsum.photos/400/400"
                alt="Nisha Yadav"
                fill
                className="object-cover"
                priority
                data-ai-hint="woman professional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
