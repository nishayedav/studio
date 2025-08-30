import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Providing comprehensive cloud and IT solutions to elevate your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
