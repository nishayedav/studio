import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/data';
import { Download } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden shadow-lg transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-transform duration-300">
              <Image
                src="https://picsum.photos/400/500"
                alt="Nisha Yadav at work"
                fill
                className="object-cover"
                data-ai-hint="woman developer"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hello! I'm Nisha Yadav, a dedicated Cloud Engineer based in the vibrant city of Kathmandu, Nepal. With a strong background in IT and a passion for cutting-edge technology, I specialize in designing and managing cloud infrastructure that is not only powerful but also secure and cost-efficient.
              </p>
              <p>
                My journey into the world of tech began with a degree in Computer Science, which laid the foundation for my career. Over the years, I've honed my skills across major cloud platforms and embraced the DevOps culture to bridge the gap between development and operations. I thrive on challenges and am constantly learning to stay at the forefront of the ever-evolving tech landscape.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold font-headline">My Skills & Expertise</h3>
                <Button asChild variant="outline">
                  <Link href="/Nisha_Yadav_CV.pdf" download="Nisha_Yadav_CV.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-sm py-2 px-4 bg-accent border-primary/20 text-foreground/80">
                    <skill.icon className="h-4 w-4 mr-2 text-primary" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
