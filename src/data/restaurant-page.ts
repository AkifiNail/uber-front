import type {
  Category,
  Filter,
  NavItem,
  Promo,
  RestaurantSectionData,
  Store,
} from "@/types";

/** Données statiques de la maquette (aucune API pour le moment). */

export const mainNav: NavItem[] = [
  { label: "Domicile", icon: "home", active: true },
  { label: "Pâtes & riz", icon: "basket-20" },
  { label: "Épicerie", icon: "storefront" },
  { label: "Boissons", icon: "wine" },
  { label: "Santé", icon: "pill" },
  { label: "Boutique", icon: "delivery-bag" },
  { label: "Animaux", icon: "pet" },
  { label: "Bébé", icon: "mothers-room" },
  { label: "Hygiène", icon: "heart" },
  { label: "Électronique", icon: "computer-chip" },
];

export const accountNav: NavItem[] = [
  { label: "Offres", icon: "tag-20" },
  { label: "Inscription", icon: "pencil-line" },
  { label: "Connexion", icon: "person" },
];

const categoryImage = (slug: string) => `/images/categories/${slug}.png`;

export const categories: Category[] = [
  { label: "Courses", image: categoryImage("courses") },
  { label: "Pizzas", image: categoryImage("pizzas") },
  { label: "Sushis", image: categoryImage("sushis") },
  { label: "Halal", image: categoryImage("halal") },
  { label: "Burgers", image: categoryImage("burgers") },
  { label: "Sandwichs", image: categoryImage("sandwichs") },
  { label: "Poke", image: categoryImage("poke") },
  { label: "Asiatique", image: categoryImage("asiatique") },
  { label: "Italienne", image: categoryImage("italienne") },
  { label: "Mexicaine", image: categoryImage("mexicaine") },
  { label: "Fast food", image: categoryImage("fast-food") },
  { label: "Chinoise", image: categoryImage("chinoise") },
  { label: "Américaine", image: categoryImage("americaine") },
  { label: "Réconfort", image: categoryImage("reconfort") },
  { label: "Salades", image: categoryImage("salades") },
];

export const filters: Filter[] = [
  { label: "Offres", leadingIcon: "tag-14" },
  { label: "Frais de livraison", trailingIcon: "chevron-down-14" },
  { label: "Les moins chers", leadingIcon: "medal-14" },
  { label: "Trier", trailingIcon: "chevron-down-14" },
];

export const promos: Promo[] = [
  {
    title: "1 acheté = 1 offert au resto du coin",
    description: "Kebab ou tacos, à toi de choisir",
    image: "/images/promo/kebab.png",
    theme: "light",
  },
  {
    badge: "Dèche Club Exclusive",
    title: "1 acheté = 1 offert sur tes pâtes",
    description: "Restos participants, fins de mois",
    image: "/images/promo/burger.png",
    theme: "dark",
  },
  {
    badge: "Dèche Club Exclusive",
    title: "-30% sur tes pâtes du 25 au 5",
    description: "Spécial fin de mois",
    image: "/images/promo/pates.png",
    theme: "dark",
  },
];

export const nearbyStores: Store[] = [
  { name: "Épicerie du coin", eta: "34 min", logo: "/images/logos/epicerie-du-coin.png" },
  { name: "Chez Momo", eta: "24 min", logo: "/images/logos/chez-momo.png" },
  { name: "Le Petit Marché", eta: "47 min", logo: "/images/logos/le-petit-marche.png" },
  { name: "Supérette Nord", eta: "41 min", logo: "/images/logos/superette-nord.png" },
  { name: "Halles du centre", eta: "49 min", logo: "/images/logos/halles-du-centre.png" },
  { name: "Primeur Ali", eta: "49 min", logo: "/images/logos/primeur-ali.png" },
  { name: "Boulangerie Léa", eta: "24 min", logo: "/images/logos/boulangerie-lea.png" },
];

const restaurantImage = (slug: string) => `/images/restaurants/${slug}.png`;

export const restaurantSections: RestaurantSectionData[] = [
  {
    title: "Les offres préférées sur Dèche",
    restaurants: [
      {
        name: "Le Kebab du Coin",
        image: restaurantImage("le-kebab-du-coin"),
        rating: 4.1,
        reviews: "1,500+",
        eta: "20 min",
        promoTag: "1 acheté = 1 offert",
      },
      {
        name: "Pasta Rapido",
        image: restaurantImage("pasta-rapido"),
        rating: 4.5,
        reviews: "2,000+",
        eta: "24 min",
        promoTag: "1 acheté = 1 offert",
      },
      {
        name: "Épicerie du coin",
        image: restaurantImage("epicerie-du-coin"),
        rating: 4.5,
        reviews: "330+",
        eta: "14:40",
        promoTag: "100+ articles en promotion",
      },
      {
        name: "Chez Momo",
        image: restaurantImage("chez-momo"),
        rating: 4.5,
        reviews: "100+",
        eta: "14:51",
        promoTag: "1 acheté = 1 offert",
      },
    ],
  },
  {
    title: "Supermarchés",
    restaurants: [
      {
        name: "Supérette Nord",
        image: restaurantImage("superette-nord"),
        rating: 4.8,
        reviews: "29",
        eta: "14:32",
      },
      {
        name: "Halles du centre",
        image: restaurantImage("halles-du-centre"),
        rating: 4.6,
        reviews: "53",
        eta: "14:57",
      },
      {
        name: "Le Petit Marché",
        image: restaurantImage("le-petit-marche"),
        rating: 4.7,
        reviews: "210+",
        eta: "14:59",
      },
      {
        name: "Primeur Ali",
        image: restaurantImage("primeur-ali"),
        rating: 4.4,
        reviews: "320+",
        eta: "14:59",
      },
    ],
  },
  {
    title: "Offres du jour",
    restaurants: [
      {
        name: "Burger Dèche",
        image: restaurantImage("burger-deche"),
        rating: 4.3,
        reviews: "800+",
        eta: "18 min",
        promoTag: "20% offert sur plusieurs articles",
      },
      {
        name: "Pizza Fin de Mois",
        image: restaurantImage("pizza-fin-de-mois"),
        rating: 4.6,
        reviews: "1,200+",
        eta: "22 min",
        promoTag: "1 acheté = 1 offert",
      },
      {
        name: "Wok Express",
        image: restaurantImage("wok-express"),
        rating: 4.4,
        reviews: "450+",
        eta: "25 min",
        promoTag: "20% offert sur plusieurs articles",
      },
      {
        name: "Frites & Co",
        image: restaurantImage("frites-co"),
        rating: 4.2,
        reviews: "600+",
        eta: "17 min",
        promoTag: "1 acheté = 1 offert",
      },
    ],
  },
];
