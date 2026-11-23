import Image from "next/image";
import { nearbyStores } from "@/data/restaurant-page";

/** Rangée de commerces à proximité (logo rond + délai). */
export function NearbyStores() {
  return (
    <section className="pb-[7px]">
      <div className="mt-[39px] flex items-center justify-between">
        <h2 className="whitespace-nowrap text-[22px] font-bold tracking-[-0.44px] text-[#111]">
          Commerces à proximité
        </h2>
        <button
          type="button"
          className="whitespace-nowrap text-[13px] font-semibold text-[#111]"
        >
          Tout afficher
        </button>
      </div>

      <ul className="mt-[16.5px] flex gap-[21.25px]">
        {nearbyStores.map(({ name, eta, logo }) => (
          <li
            key={name}
            className="flex w-[121px] shrink-0 flex-col items-center gap-3"
          >
            <div className="relative size-[121px] overflow-hidden rounded-full border border-[#e5e5e5]">
              <Image
                src={logo}
                alt=""
                fill
                sizes="121px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-0.5 whitespace-nowrap text-[14px]">
              <span className="font-medium text-[#111]">{name}</span>
              <span className="text-[#6b6b6b]">{eta}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
