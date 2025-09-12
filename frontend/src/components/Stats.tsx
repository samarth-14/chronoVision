import { Card, CardContent } from './ui/card';
import { Globe, Users, Camera, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Globe,
      number: "3",
      label: "Sacred Temples",
      description: "Divine heritage sites",
      color: "text-primary"
    },
    {
      icon: Users,
      number: "10M+",
      label: "Devotees",
      description: "Annual pilgrims",
      color: "text-secondary"
    },
    {
      icon: Camera,
      number: "5K+",
      label: "Sacred Images",
      description: "Blessed photography",
      color: "text-accent"
    },
    {
      icon: Award,
      number: "1",
      label: "UNESCO Site",
      description: "Konark Sun Temple",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-card z-10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sacred Statistics
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Discover the magnificence of India's temple heritage through numbers that tell the story 
            of centuries of devotion, artistry, and spiritual significance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="glass border-white/30 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <IconComponent className={`h-16 w-16 mx-auto ${stat.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-4xl font-bold mb-3 ${stat.color}`}>{stat.number}</div>
                  <h3 className="text-xl mb-3 font-semibold">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}