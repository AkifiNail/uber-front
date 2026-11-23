import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/** Barre de navigation principale (desktop). */
export function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center gap-6 bg-white pl-7 pr-[19.5px]">
      <button type="button" aria-label="Menu" className="shrink-0">
        <Icon name="menu" size={24} />
      </button>

      <Link
        href="/"
        className="shrink-0 whitespace-nowrap rounded-lg border-[1.5px] border-dashed border-[#111] px-3.5 py-2 text-[16px] font-bold text-[#111]"
      >
        Logo Dèche
      </Link>

      <div className="flex shrink-0 items-center rounded-full bg-[#f3f3f3] p-1">
        <button
          type="button"
          className="whitespace-nowrap rounded-full bg-white px-5 py-[9px] text-[15px] font-medium text-[#111] shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
        >
          Livraison
        </button>
        <button
          type="button"
          className="whitespace-nowrap rounded-full px-5 py-[9px] text-[15px] font-medium text-[#111]"
        >
          À emporter
        </button>
      </div>

      <button type="button" className="flex shrink-0 items-center gap-2">
        <Icon name="location-marker-20" size={20} />
        <span className="whitespace-pre text-[15px] font-medium text-[#111]">
          {"Ma ville  ·  Maintenant"}
        </span>
        <Icon name="chevron-down-20" size={20} />
      </button>

      <label className="flex h-11 min-w-px flex-1 items-center gap-3 rounded-full bg-[#f3f3f3] px-[18px]">
        <Icon name="search" size={18} />
        <input
          type="search"
          placeholder="Rechercher dans Dèche"
          className="w-full bg-transparent text-[15px] text-[#111] outline-none placeholder:text-[#6b6b6b]"
        />
      </label>

      <button
        type="button"
        aria-label="Panier"
        className="relative size-[34px] shrink-0"
      >
        <Icon name="basket-24" size={24} className="absolute left-0.5 top-2" />
        <span className="absolute left-4 top-0 flex size-[18px] items-center justify-center rounded-full bg-[#2e9e5b] text-[11px] font-bold text-white">
          0
        </span>
      </button>

      <button
        type="button"
        className="shrink-0 whitespace-nowrap text-[15px] font-medium text-[#111]"
      >
        Connexion
      </button>

      <button
        type="button"
        className="shrink-0 whitespace-nowrap rounded-full bg-[#f3f3f3] px-5 py-[11px] text-[15px] font-medium text-[#111]"
      >
        Inscription
      </button>
    </header>
  );
}
