import { Card, CardContent, CardHeader } from './ui/card';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { Crown, Mountain, Building2, Landmark } from 'lucide-react';

export function Categories() {
  const categories = [
    {
      title: "Ancient Monuments",
      description: "Explore ancient civilizations through their monumental architecture",
      image: "https://images.unsplash.com/photo-1728383172502-e55bdde0ca7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbW9udW1lbnQlMjBoZXJpdGFnZXxlbnwxfHx8fDE3NTc0NDI0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Mountain,
      count: "250+ Sites"
    },
    {
      title: "Historic Castles",
      description: "Medieval fortresses and royal residences across the globe",
      image: "https://images.unsplash.com/photo-1633700774912-b26913ace672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNhc3RsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTc0NDI0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Crown,
      count: "180+ Sites"
    },
    {
      title: "Cultural Museums",
      description: "Repositories of human history and cultural artifacts",
      image: "https://images.unsplash.com/photo-1660724214366-f1c63c067a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbXVzZXVtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NDQyNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Building2,
      count: "320+ Sites"
    },
    {
      title: "Sacred Temples",
      description: "Religious and spiritual sites from various cultures and faiths",
      image: "https://images.unsplash.com/photo-1559891209-0f8805999d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwc2l0ZXxlbnwxfHx8fDE3NTc0NDI0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Landmark,
      count: "200+ Sites"
    }
  ];

  return (
    <section id="categories" className="py-16 bg-card relative z-10 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Explore by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse heritage sites by type and discover the rich diversity of human cultural achievements 
            spanning thousands of years of history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <IconComponent className="h-12 w-12 mx-auto mb-2" />
                        <h3 className="text-lg mb-1">{category.title}</h3>
                        {/* <p className="text-sm text-gray-300">{category.count}</p> */}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}