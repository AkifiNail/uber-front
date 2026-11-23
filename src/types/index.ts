/** Noms des icônes SVG disponibles dans `public/icons` (sans l'extension). */
export type IconName =
  | "location-marker-22"
  | "location-marker-20"
  | "clock-22"
  | "chevron-down-22"
  | "chevron-down-20"
  | "chevron-down-14"
  | "home"
  | "basket-20"
  | "basket-24"
  | "storefront"
  | "wine"
  | "pill"
  | "delivery-bag"
  | "pet"
  | "mothers-room"
  | "heart"
  | "heart-outline"
  | "computer-chip"
  | "tag-20"
  | "tag-14"
  | "medal-14"
  | "pencil-line"
  | "person"
  | "menu"
  | "search"
  | "star"
  | "arrow-right-16"
  | "arrow-gauche"
  | "arrow-gauche-muted"
  | "arrow-droite";

/** Entrée de la sidebar de navigation. */
export interface NavItem {
  label: string;
  icon: IconName;
  active?: boolean;
}

/** Catégorie de cuisine affichée dans la barre horizontale. */
export interface Category {
  label: string;
  image: string;
}

/** Filtre sous forme de pastille. */
export interface Filter {
  label: string;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
}

/** Bandeau promotionnel du carrousel. */
export interface Promo {
  title: string;
  description: string;
  image: string;
  /** `light` : fond crème, texte sombre. `dark` : fond noir, texte blanc. */
  theme: "light" | "dark";
  badge?: string;
}

/** Commerce de proximité (logo rond + délai). */
export interface Store {
  name: string;
  eta: string;
  logo: string;
}

/** Carte restaurant. */
export interface Restaurant {
  name: string;
  image: string;
  /** Note sur 5. */
  rating: number;
  /** Nombre d'avis déjà formaté, ex. `1,500+`. */
  reviews: string;
  /** Délai ou heure de livraison, ex. `20 min` ou `14:40`. */
  eta: string;
  /** Tag promo affiché en haut à gauche de la photo. */
  promoTag?: string;
}

/** Section de la liste des restaurants. */
export interface RestaurantSectionData {
  title: string;
  restaurants: Restaurant[];
}
