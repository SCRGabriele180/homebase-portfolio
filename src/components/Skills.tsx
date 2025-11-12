import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Development",
      skills: ["Node.js", "React", "TypeScript", "HTML/CSS", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Gaming & Bot",
      skills: ["Plugin Minecraft", "Discord Bot", "Java", "Discord.js", "Spigot API"],
    },
    {
      category: "Tools & Utilities",
      skills: ["Git", "VS Code", "Tool Development", "REST APIs", "Database"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Competenze
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologie e strumenti che utilizzo per creare soluzioni eccezionali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
