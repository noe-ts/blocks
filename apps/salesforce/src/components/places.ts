export interface Place {
  id: number;
  name: string;
  label: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  image: string;
  images: string[];
  history: string;
  tags: string[];
  lng: number;
  lat: number;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Musée d'Orsay",
    label: "Musée d'Orsay",
    category: "Museum",
    rating: 4.7,
    reviews: 28341,
    description:
      "The Musée d'Orsay is one of the most celebrated art museums in Paris, housed in a grand former railway station and featuring an extensive collection of Impressionist masterpieces.",
    address: "1 Rue de la Légion d'Honneur, 75007 Paris, France",
    phone: "+33 1 40 49 48 14",
    website: "https://www.musee-orsay.fr",
    hours: "Everyday: 9:30 am – 6:00 pm",
    image:
      "https://images.unsplash.com/photo-1632127255731-469370df58c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1632127255731-469370df58c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572884659181-ac4463757d6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzJUMzJUE5ZSUyMGQnb3JzYXl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1639155246028-37a981f27095?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzJUMzJUE5ZSUyMGQnb3JzYXl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1573301626856-8552b3889342?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    history:
      "The Musée d'Orsay is a museum in Paris, France, on the Left Bank of the Seine. It is housed in the former Gare d'Orsay, a Beaux-Arts railway station built between 1898 and 1900. The museum holds mainly French art dating from 1848 to 1914, including paintings, sculptures, furniture, and photography. It houses the largest collection of Impressionist and post-Impressionist masterpieces in the world, by painters including Monet, Manet, Degas, Renoir, Cézanne, Seurat, Sisley, Gauguin, and Van Gogh. Many of these works were held at the Galerie nationale du Jeu de Paume prior to the museum's opening in 1986.",
    tags: ["Art museum", "Historical landmark", "Cultural Institution", "Tourist attraction"],
    lng: 2.3259,
    lat: 48.8600,
  },
  {
    id: 2,
    name: "Eiffel Tower",
    label: "Eiffel Tower",
    category: "Monument",
    rating: 4.8,
    reviews: 102384,
    description:
      "The Eiffel Tower is Paris's most iconic landmark, offering breathtaking views of the city and dazzling light displays every night.",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    phone: "+33 892 70 12 39",
    website: "https://www.toureiffel.paris",
    hours: "Everyday: 9:00 am – 12:00 am",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=210&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=210&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    history:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889. Locally nicknamed 'La dame de fer' (French for 'Iron Lady'), it was constructed as the centerpiece of the 1889 World's Fair and was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world. The Eiffel Tower is the most visited monument with an entrance fee in the world; 6.91 million people ascended it in 2015.",
    tags: ["Tourist attraction", "Historical landmark", "Monument", "Architecture"],
    lng: 2.2945,
    lat: 48.8584,
  },
  {
    id: 3,
    name: "Louvre Museum",
    label: "Louvre Museum",
    category: "Museum",
    rating: 4.7,
    reviews: 452193,
    description:
      "The Louvre Museum is the world's largest art museum and a historic monument in Paris, famed for its glass pyramid and the Mona Lisa.",
    address: "Rue de Rivoli, 75001 Paris, France",
    phone: "+33 1 40 20 50 50",
    website: "https://www.louvre.fr",
    hours: "Wed–Mon: 9:00 am – 6:00 pm",
    image:
      "https://images.unsplash.com/photo-1567942585146-33d62b775db0?q=80&w=1309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1567942585146-33d62b775db0?q=80&w=1309&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    history:
      "The Louvre, or the Louvre Museum, is a national art museum in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). At any given point in time, approximately 38,000 objects from prehistory to the 21st century are being exhibited over an area of 72,735 square meters (782,910 square feet). The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II. Remnants of the Medieval Louvre fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings.",
    tags: ["Art museum", "Historical landmark", "Cultural Institution", "Tourist attraction"],
    lng: 2.3364,
    lat: 48.8606,
  },
];
