/**
 * Centralized heritage sites data - Single source of truth for all heritage site information
 * Used by both the Sites page and AR View page to ensure data consistency
 */
/**
 * Heritage Site data structure
 * This interface defines the structure for all heritage site data in the application
 */
export interface HeritageSite {
  id: number;
  title: string;
  location: string;
  year: string;
  image: string;
  description: string;
  category: string;
  isUNESCO?: boolean;
  // Additional AR-specific fields
  arUrl?: string;
  elevation?: string;
  built?: string;
  history?: {
    ancient: string;
    construction: string;
    significance: string;
    legend: string;
    architecture: string;
    modernHistory: string;
  };
}

export const heritageSites: HeritageSite[] = [
  {
    id: 0,
    title: "Kedarnath Temple",
    location: "Uttarakhand, India",
    year: "8th Century",
    image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGUlMjBoaW1hbGF5YXxlbnwxfHx8fDE3NTc0NDI1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "One of the twelve Jyotirlingas of Lord Shiva, located at an altitude of 3,583 meters in the Garhwal Himalayas. A sacred pilgrimage site rebuilt after the 2013 floods.",
    category: "Hindu Temple",
    isUNESCO: false,
    arUrl: "https://templeexplorer-ar.vercel.app/kedarnath",
    elevation: "3,583 m",
    history: {
      ancient: "The Kedarnath temple is believed to be over 1,000 years old, though its origins trace back to ancient times when the Pandavas from the Mahabharata sought Lord Shiva's blessings here.",
      construction: "The present temple structure was built by Adi Shankaracharya in the 8th century CE, constructed using large stone slabs without the use of any mortar.",
      significance: "It is one of the twelve Jyotirlingas dedicated to Lord Shiva and is part of the Panch Kedar pilgrimage circuit in the Himalayas.",
      legend: "According to legend, after the Kurukshetra war, the Pandavas sought Lord Shiva's forgiveness. Shiva, wanting to avoid them, took the form of a bull. When found, he disappeared into the ground, leaving behind his hump, which is worshipped at Kedarnath.",
      architecture: "The temple showcases remarkable ancient Indian architecture with massive stone slabs, conical-shaped lingam, and intricate carvings that have withstood centuries of harsh Himalayan weather.",
      modernHistory: "The temple suffered significant damage during the 2013 Uttarakhand floods but was restored and continues to be a major pilgrimage destination, opening only during the summer months due to extreme winter conditions."
    }
  },
  {
    id: 1,
    title: "Jagannath Temple",
    location: "Puri, Odisha, India",
    year: "12th Century",
    image: "https://images.unsplash.com/photo-1726220063675-1ac64be1d7d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWdhbm5hdGglMjB0ZW1wbGUlMjBwdXJpfGVufDF8fHx8MTc1NzM2MDM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Famous for the annual Rath Yatra festival, this temple is dedicated to Lord Jagannath. Known for its towering spire and unique wooden deities that are replaced every 12-19 years.",
    category: "Hindu Temple",
    isUNESCO: false,
    arUrl: "https://templeexplorer-ar.vercel.app/jagannath",
    built: "12th Century",
    history: {
      ancient: "The Jagannath Temple in Puri dates back to the 12th century and is dedicated to Lord Jagannath, a form of Lord Krishna. The temple has been a center of devotion for over 900 years.",
      construction: "Built by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty around 1135 CE, the temple took several decades to complete under subsequent rulers.",
      significance: "It is one of the four sacred Char Dham pilgrimage sites for Hindus and is famous for the annual Rath Yatra (Chariot Festival), where the deities are taken out in massive wooden chariots.",
      legend: "The legend states that Lord Krishna instructed King Indradyumna to build the temple after finding the deity's image floating in the sea. The wooden idols are replaced every 12-19 years in a secret ceremony called Nabakalebara.",
      architecture: "The temple features stunning Kalinga architecture with a 65-meter tall main spire (shikhara), elaborate carvings, and the famous Chakra (wheel) on top that can be seen from great distances.",
      modernHistory: "The temple continues to attract millions of devotees annually. The Rath Yatra festival, where devotees pull the chariots of Lord Jagannath, Balabhadra, and Subhadra, is celebrated with great fervor and draws international attention."
    }
  },
  {
    id: 2,
    title: "Konark Sun Temple",
    location: "Odisha, India",
    year: "13th Century",
    image: "https://images.unsplash.com/photo-1639980290886-6bdd61c7582b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb25hcmslMjBzdW4lMjB0ZW1wbGV8ZW58MXx8fHwxNzU3NDQyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Designed as a colossal chariot with 24 carved stone wheels, this temple is dedicated to the Sun god Surya. A masterpiece of Kalinga architecture and UNESCO World Heritage Site.",
    category: "Hindu Temple",
    isUNESCO: true,
    arUrl: "https://templeexplorer-ar.vercel.app/konark",
    built: "13th Century",
    history: {
      ancient: "The Konark Sun Temple, also known as the Black Pagoda, was built in the 13th century (around 1250 CE) and is dedicated to the Hindu Sun God, Surya.",
      construction: "Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple took 12 years to build and employed over 12,000 artisans and craftsmen.",
      significance: "The temple is designed as a massive chariot with 24 wheels, pulled by seven horses, representing the Sun God's chariot that carries him across the sky. It's a UNESCO World Heritage Site since 1984.",
      legend: "Local legends speak of the temple's main attraction - a powerful magnet at the top that could pull ships from the sea. The temple was also said to have been built by Samba, son of Lord Krishna, to cure himself of leprosy.",
      architecture: "The temple exemplifies Kalinga architecture with intricate stone carvings depicting the wheel of time, celestial beings, animals, and erotic sculptures. The wheels function as sundials, accurately telling time by their shadows.",
      modernHistory: "Much of the temple is now in ruins due to natural disasters and invasions, but its architectural grandeur continues to inspire visitors. Conservation efforts by the Archaeological Survey of India help preserve this magnificent monument for future generations."
    }
  },
  {
    id: 3,
    title: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu, India",
    year: "6th Century",
    image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWVuYWtzaGklMjB0ZW1wbGUlMjBpbmRpYXxlbnwxfHx8fDE3NTc4MjkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A historic Hindu temple dedicated to Parvati and Shiva. Famous for its colorful gopurams (towering gateways) with intricate sculptures and vibrant artwork.",
    category: "Hindu Temple",
    isUNESCO: false,
    arUrl: "https://templeexplorer-ar.vercel.app/meenakshi",
    built: "6th Century",
    history: {
      ancient: "The Meenakshi Temple has ancient origins dating back to the 6th century CE, built around a sacred lingam discovered by King Malayadhwaja Pandya.",
      construction: "The current structure was largely rebuilt in the 14th century by the Nayak rulers, particularly during the reign of King Thirumalai Nayak.",
      significance: "The temple is dedicated to Goddess Meenakshi (Parvati) and Lord Sundareshwar (Shiva) and is considered one of the most important temples in Tamil Nadu.",
      legend: "According to legend, Princess Meenakshi was born with three breasts, and it was prophesied that her third breast would disappear when she met her future husband, which happened when she encountered Lord Shiva.",
      architecture: "The temple complex covers 45 acres and features 14 towering gopurams with thousands of colorful sculptures depicting gods, goddesses, demons, and mortals in intricate detail.",
      modernHistory: "The temple continues to be a major pilgrimage site and cultural center, hosting the annual Meenakshi Thirukalyanam festival celebrating the divine marriage of Meenakshi and Sundareshwar."
    }
  },
  {
    id: 4,
    title: "Golden Temple",
    location: "Amritsar, Punjab, India",
    year: "16th Century",
    image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjB0ZW1wbGUlMjBhbXJpdHNhcnxlbnwxfHx8fDE3NTc3OTYyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "The holiest Sikh shrine, known as Harmandir Sahib. This golden temple sits in the middle of a sacred pool and welcomes people of all faiths.",
    category: "Sikh Temple",
    isUNESCO: false,
    arUrl: "https://templeexplorer-ar.vercel.app/golden-temple",
    built: "16th Century",
    history: {
      ancient: "The Golden Temple was founded in 1577 by the fourth Sikh Guru, Guru Ram Das, who excavated the sacred pool (Amrit Sarovar) that gives Amritsar its name.",
      construction: "The temple was built by the fifth Sikh Guru, Guru Arjan, in 1604. The current golden structure was created in the early 19th century when Maharaja Ranjit Singh covered the upper floors with gold.",
      significance: "It is the holiest shrine in Sikhism and embodies the Sikh principles of equality, humility, and service to humanity, welcoming people of all castes, creeds, and religions.",
      legend: "The site is believed to have healing powers due to the sacred waters of the Amrit Sarovar. Many pilgrims come to bathe in these waters seeking spiritual purification.",
      architecture: "The temple features a unique blend of Hindu and Islamic architectural styles, with its golden dome, white marble lower level, and intricate inlay work reflecting both traditions.",
      modernHistory: "The temple serves free meals (langar) to over 100,000 people daily and continues to be a symbol of Sikh hospitality, equality, and devotion to service."
    }
  },
  {
    id: 5,
    title: "Khajuraho Temples",
    location: "Madhya Pradesh, India",
    year: "10th Century",
    image: "https://images.unsplash.com/photo-1722709229926-b85e2e5e11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5kaWFuJTIwdGVtcGxlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzU3ODI5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A UNESCO World Heritage site famous for its stunning architecture and intricate stone carvings. These temples represent the pinnacle of medieval Indian art.",
    category: "Hindu Temple",  
    isUNESCO: true,
    arUrl: "https://templeexplorer-ar.vercel.app/khajuraho",
    built: "10th Century",
    history: {
      ancient: "The Khajuraho temples were built between 885 and 1050 CE during the reign of the Chandela dynasty, representing the zenith of medieval Indian temple architecture.",
      construction: "Originally, there were 85 temples spread over 20 square kilometers, built by various Chandela rulers including Yashovarman, Dhanga, and Vidyadhara.",
      significance: "These temples are dedicated to Hindu deities and Jain Tirthankaras, showcasing religious tolerance and artistic excellence. They are UNESCO World Heritage Sites since 1986.",
      legend: "According to legend, the temples were built by Hemavati, a beautiful woman seduced by the moon god, whose son Chandravarman founded the Chandela dynasty.",
      architecture: "The temples are famous for their nagara-style architecture and intricate sculptures depicting various aspects of life including spiritual, royal, and erotic themes, representing the complete human experience.",
      modernHistory: "Rediscovered in the 19th century after being hidden in forests for centuries, only 25 temples survive today. They continue to attract visitors worldwide for their artistic and architectural significance."
    }
  }
];

/**
 * Helper functions for data access
 * These functions provide convenient access to heritage site data for different use cases
 */
export const getFeaturedSites = () => heritageSites;
export const getARSites = () => heritageSites.filter(site => site.arUrl);
export const getSiteById = (id: number) => heritageSites.find(site => site.id === id);