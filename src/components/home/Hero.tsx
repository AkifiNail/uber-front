import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Hero de la page d'accueil : titre + recherche d'adresse sur photo plein cadre. */
export function Hero() {
  return (
    <main className="relative h-[754px] w-full overflow-hidden bg-[#e9be82]">
      <Image
        src="/images/home/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute left-[38px] top-[290px] flex flex-col gap-6">
        <h1 className="whitespace-nowrap text-[56px] font-bold tracking-[-1.12px] text-[#111]">
          Vos restos livrés, même à la dèche
        </h1>

        <div className="flex items-center gap-2">
          <label className="flex h-[53px] w-[498px] items-center gap-3.5 rounded-lg bg-white pl-[22px] pr-[18px]">
            <Icon name="location-marker-22" size={22} />
            <input
              type="text"
              placeholder="Saisis ton adresse de livraison."
              className="w-full bg-transparent text-[17px] text-[#111] outline-none placeholder:text-[#6b6b6b]"
            />
          </label>

          <button
            type="button"
            className="flex h-[53px] w-[246px] items-center gap-3.5 whitespace-nowrap rounded-lg bg-white pl-[22px] pr-[7px] text-[17px] font-semibold text-[#111]"
          >
            <Icon name="clock-22" size={22} />
            Livrer maintenant
            <Icon name="chevron-down-22" size={22} />
          </button>

          <Link
            href="/restaurant"
            className="flex h-[53px] w-[206px] items-center justify-center whitespace-nowrap rounded-lg bg-[#111] text-[17px] font-semibold text-white"
          >
            Trouver un resto
          </Link>
        </div>

        <p className="text-[15px] text-[#111]">
          Ou <span className="underline">Connexion</span>
        </p>
      </div>
    </main>
  );
}
