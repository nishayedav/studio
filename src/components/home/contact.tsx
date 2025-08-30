import { ContactForm } from "./contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:nisha.yadav@example.com" className="text-muted-foreground hover:text-primary transition-colors">nisha.yadav@example.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-muted-foreground">(+977) 98XXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
          <div>
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
