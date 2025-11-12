import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Sviluppo",
      description: "Creo applicazioni web moderne utilizzando le tecnologie più recenti",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Progetto interfacce intuitive con focus su UX/UI",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Ottimizzazione per velocità e scalabilità",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Chi Sono
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sono un appassionato sviluppatore con esperienza nella creazione di soluzioni web innovative. 
              Mi dedico a trasformare idee in realtà digitali di successo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
