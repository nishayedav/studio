'use client';
import { useState, useTransition } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeBlogPost } from '@/ai/flows/blogpost-summarization';
import { Loader2, Wand2 } from 'lucide-react';

export function BlogSummarizer() {
  const [blogPost, setBlogPost] = useState('');
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSummary('');
    startTransition(async () => {
      try {
        if (blogPost.trim()) {
            const result = await summarizeBlogPost({ blogPost });
            setSummary(result.summary);
        }
      } catch (error) {
        console.error("Summarization failed:", error);
        setSummary("Sorry, we couldn't generate a summary at this time. Please try again later.");
      }
    });
  };

  return (
    <Card className="bg-background shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Wand2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-headline text-2xl">AI Blog Post Summarizer</CardTitle>
            <CardDescription>Paste your blog post below to get a concise summary.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Enter the full text content of the blog post here..."
            value={blogPost}
            onChange={(e) => setBlogPost(e.target.value)}
            rows={10}
            className="bg-accent/40 focus:bg-background"
          />
          <Button type="submit" disabled={isPending || !blogPost.trim()}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Generate Summary'
            )}
          </Button>
        </form>
        {isPending && (
          <div className="mt-6 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {summary && !isPending && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold font-headline mb-2">Generated Summary:</h3>
            <Card className="bg-accent/40">
              <CardContent className="p-6">
                <p className="text-foreground/90 whitespace-pre-wrap">{summary}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
