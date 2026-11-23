import { CircleButton } from "@/components/ui/CircleButton";
import { RestaurantCard } from "@/components/restaurant/RestaurantCard";
import type { RestaurantSectionData } from "@/types";

/** Section titrée (ex. « Supermarchés ») avec une grille de 4 cartes. */
export function RestaurantSection({
  title,
  restaurants,
}: RestaurantSectionData) {
  return (
    <section className="mt-[14.5px]">
      <hr className="h-px border-0 bg-[#e5e5e5]" />

      <div className="mt-[18px] flex h-[34px] items-center justify-between">
        <h2 className="whitespace-nowrap text-[22px] font-bold tracking-[-0.44px] text-[#111]">
          {title}
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="mr-[33.5px] whitespace-nowrap text-[13px] font-semibold text-[#111]"
          >
            Tout afficher
          </button>
          <CircleButton
            icon="arrow-gauche-muted"
            label="Précédent"
            variant="muted"
          />
          <CircleButton icon="arrow-droite" label="Suivant" variant="muted" />
        </div>
      </div>

      <ul className="mt-[15px] grid grid-cols-4 gap-[15px]">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} {...restaurant} />
        ))}
      </ul>
    </section>
  );
}
