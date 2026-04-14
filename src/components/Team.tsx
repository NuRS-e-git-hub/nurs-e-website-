import { Badge } from "@/components/ui/badge";

import tiasImg from "@/assets/team/tias-hazebroek.jpg";
import maickelImg from "@/assets/team/maickel-koenders.jpg";
import wesselImg from "@/assets/team/wessel-grift.jpg";
import susanneImg from "@/assets/team/susanne-jonsson.jpg";
import rubenImg from "@/assets/team/ruben-vinke.jpg";
import maartenImg from "@/assets/team/maarten-baijs.jpg";
import nicoImg from "@/assets/team/nico-kooijman.jpg";

const team = [
  { name: "Tias Hazebroek", role: "Founder Directeur", img: tiasImg },
  { name: "Maickel Koenders", role: "Compliance adviseur", img: maickelImg },
  { name: "Wessel Grift", role: "Product Design", img: wesselImg },
  { name: "Susanne Jönsson", role: "Research", img: susanneImg },
  { name: "Ruben Vinke", role: "Product Development", img: rubenImg },
  { name: "Maarten Baijs", role: "Tech Lead", img: maartenImg },
  { name: "Nico Kooijman", role: "IT Support", img: nicoImg },
];

export const Team = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Ons Team</Badge>
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-xl text-muted-foreground">
            De mensen achter NuRS-e — gedreven door innovatie, zorg en vertrouwen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 ring-2 ring-border/50 group-hover:ring-primary/40 group-hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group-hover:scale-105">
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-base md:text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
