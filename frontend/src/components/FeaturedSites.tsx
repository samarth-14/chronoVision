import { SiteCard } from './SiteCard';

export function FeaturedSites() {
  const featuredSites = [
    {
      title: "Kedarnath Temple",
      location: "Uttarakhand, India",
      year: "8th Century",
      image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGUlMjBoaW1hbGF5YXxlbnwxfHx8fDE3NTc0NDI1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "One of the twelve Jyotirlingas of Lord Shiva, located at an altitude of 3,583 meters in the Garhwal Himalayas. A sacred pilgrimage site rebuilt after the 2013 floods.",
      category: "Hindu Temple",
      isUNESCO: false
    },
    {
      title: "Jagannath Temple",
      location: "Puri, Odisha, India",
      year: "12th Century",
      image: "https://images.unsplash.com/photo-1726220063675-1ac64be1d7d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWdhbm5hdGglMjB0ZW1wbGUlMjBwdXJpfGVufDF8fHx8MTc1NzM2MDM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Famous for the annual Rath Yatra festival, this temple is dedicated to Lord Jagannath. Known for its towering spire and unique wooden deities that are replaced every 12-19 years.",
      category: "Hindu Temple",
      isUNESCO: false
    },
    {
      title: "Konark Sun Temple",
      location: "Odisha, India",
      year: "13th Century",
      image: "https://images.unsplash.com/photo-1639980290886-6bdd61c7582b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25hcmslMjBzdW4lMjB0ZW1wbGV8ZW58MXx8fHwxNzU3NDQyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Designed as a colossal chariot with 24 carved stone wheels, this temple is dedicated to the Sun god Surya. A masterpiece of Kalinga architecture and UNESCO World Heritage Site.",
      category: "Hindu Temple",
      isUNESCO: true
    }
  ];

  return (
    <section id="sites" className="py-16 bg-card relative z-10 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Heritage Sites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover some of the world's most iconic and culturally significant heritage sites, 
            each with its own unique story and historical importance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSites.map((site, index) => (
            <SiteCard key={index} {...site} />
          ))}
        </div>
      </div>
    </section>
  );
}