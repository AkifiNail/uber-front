import Image from "next/image";
import { CircleButton } from "@/components/ui/CircleButton";
import { categories } from "@/data/restaurant-page";

/** Barre horizontale des catégories de cuisine. */
export function CategoryBar() {
  return (
    <div className="relative -ml-[9.5px] w-[calc(100%+9.5px)]">
      <ul className="ml-0.5 flex h-[82px] overflow-hidden">
        {categories.map(({ label, image }) => (
          <li
            key={label}
            className="flex w-[84.25px] shrink-0 flex-col items-center gap-3"
          >
            <Image
              src={image}
              alt=""
              width={47}
              height={47}
              className="size-[47px] object-contain"
            />
            <span className="whitespace-nowrap text-[14px] font-medium text-[#111]">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <CircleButton
        icon="arrow-droite"
        label="Catégories suivantes"
        variant="muted"
        className="absolute right-0 top-[17.5px]"
      />
    </div>
  );
}
