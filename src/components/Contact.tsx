import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const discordUsername = "Gabriele09089";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordUsername);
    toast({
      title: "Copiato!",
      description: "Username Discord copiato negli appunti",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contattami
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hai un progetto in mente? Scrivimi su Discord!
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="border-0 shadow-elegant bg-gradient-primary text-primary-foreground overflow-hidden">
              <CardContent className="pt-8 pb-8 text-center relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <MessageCircle className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Contattami su Discord
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Sono sempre disponibile per discutere nuovi progetti, collaborazioni o semplicemente per fare due chiacchiere!
                  </p>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 mb-4 inline-block">
                    <p className="text-3xl font-mono font-bold mb-2">
                      {discordUsername}
                    </p>
                  </div>

                  <Button
                    onClick={copyToClipboard}
                    variant="secondary"
                    size="lg"
                    className="gap-2 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Copy className="w-4 h-4" />
                    Copia Username
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Come aggiungermi
                </h3>
                <ol className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">1.</span>
                    <span>Apri Discord sul tuo dispositivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">2.</span>
                    <span>Clicca su "Aggiungi amico"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">3.</span>
                    <span>Inserisci <span className="font-mono font-bold text-foreground">{discordUsername}</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">4.</span>
                    <span>Invia la richiesta di amicizia!</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-secondary">
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">
                  💬 Rispondo solitamente entro 24 ore
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
