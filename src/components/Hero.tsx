import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Ciao, sono{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gabriele
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Sviluppatore Web, Plugin Minecraft & Discord Bot
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creo siti web, tool personalizzati, plugin Minecraft e Discord bot con passione e competenza
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:opacity-90 shadow-elegant transition-all hover:scale-105"
            >
              Vedi i Progetti
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            >
              Contattami
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
