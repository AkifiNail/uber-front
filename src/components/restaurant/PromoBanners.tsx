import Image from "next/image";
import { CircleButton } from "@/components/ui/CircleButton";
import { Icon } from "@/components/ui/Icon";
import { promos } from "@/data/restaurant-page";
import type { Promo } from "@/types";

function PromoCard({ title, description, image, theme, badge }: Promo) {
  const isLight = theme === "light";

  return (
    <article
      className={`relative h-[166px] overflow-hidden rounded-2xl ${
        isLight ? "bg-[#fce3c8] text-[#111]" : "bg-black text-white"
      }`}
    >
      <div className="absolute right-0 top-0 size-[166px]">
        <Image
          src={image}
          alt=""
          fill
          sizes="166px"
          className="object-cover"
        />
      </div>
      {isLight && (
        <div
          aria-hidden
          className="absolute right-24 top-0 h-[166px] w-[70px] bg-gradient-to-r from-[#fce3c8] to-[rgba(252,227,200,0)]"
        />
      )}

      <div className="absolute left-4 top-4 flex w-[205px] flex-col items-start gap-1.5">
        {badge && (
          <p className="whitespace-nowrap text-[13px] font-medium">{badge}</p>
        )}
        <h3 className="text-[18px] font-semibold">{title}</h3>
        <p className="text-[13px]">{description}</p>
      </div>

      <button
        type="button"
        className="absolute left-[15px] top-[121px] flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[15px] font-medium text-[#111]"
      >
        Je commande
        <Icon name="arrow-right-16" size={16} />
      </button>
    </article>
  );
}

/** Carrousel de bandeaux promotionnels (3 visibles). */
export function PromoBanners() {
  return (
    <section
      aria-label="Promotions"
      className="relative mt-[37px] grid grid-cols-3 gap-[15px]"
    >
      {promos.map((promo) => (
        <PromoCard key={promo.title} {...promo} />
      ))}
      <CircleButton
        icon="arrow-gauche"
        label="Précédent"
        variant="floating"
        className="absolute -left-[20.5px] top-1/2 -translate-y-1/2"
      />
      <CircleButton
        icon="arrow-droite"
        label="Suivant"
        variant="floating"
        className="absolute -right-[20.5px] top-1/2 -translate-y-1/2"
      />
    </section>
  );
}
