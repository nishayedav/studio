import Link from 'next/link';
import { Github, Linkedin, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/50 border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Cloud className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg text-foreground">Tech with Neesha</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nisha Yadav. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
