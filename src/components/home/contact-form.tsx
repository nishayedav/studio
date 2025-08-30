'use client'

import { useEffect, useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast"
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(submitContactForm, {
    message: "",
    success: false,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);
  
  const onSubmit = handleSubmit(data => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formAction(formData);
  });

  return (
    <Card className="bg-accent/30 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
        <CardDescription>Fill out the form below and I will get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="name"
              placeholder="Your Name"
              {...register('name')}
              aria-invalid={!!errors.name}
              className="bg-background"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register('email')}
              aria-invalid={!!errors.email}
              className="bg-background"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              {...register('message')}
              aria-invalid={!!errors.message}
              className="bg-background"
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
             {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
