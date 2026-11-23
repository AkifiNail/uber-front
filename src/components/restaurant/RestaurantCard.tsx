import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Restaurant } from "@/types";

/** Carte d'un restaurant : photo, nom, favori, note et délai. */
export function RestaurantCard({
  name,
  image,
  rating,
  reviews,
  eta,
  promoTag,
}: Restaurant) {
  return (
    <li className="h-[175px]">
      <div className="relative h-[121px] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt=""
          fill
          sizes="290px"
          className="object-cover"
        />
        {promoTag && (
          <span className="absolute left-[7.5px] top-[7.5px] whitespace-nowrap rounded bg-[#d9382b] px-[7px] py-[3px] text-[12px] font-medium text-white">
            {promoTag}
          </span>
        )}
      </div>

      <div className="mt-[13px] flex items-center justify-between">
        <h3 className="whitespace-nowrap text-[16px] font-medium text-[#111]">
          {name}
        </h3>
        <button type="button" aria-label={`Ajouter ${name} aux favoris`}>
          <Icon name="heart-outline" size={19} />
        </button>
      </div>

      <p className="mt-px flex items-center gap-[3px] whitespace-nowrap text-[14px] text-[#6b6b6b]">
        <span className="font-medium text-[#111]">{rating.toFixed(1)}</span>
        <Icon name="star" size={11} />
        <span>({reviews})</span>
        <span aria-hidden>•</span>
        <span>{eta}</span>
      </p>
    </li>
  );
}
