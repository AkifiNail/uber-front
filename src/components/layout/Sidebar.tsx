import { Icon } from "@/components/ui/Icon";
import { accountNav, mainNav } from "@/data/restaurant-page";
import type { NavItem } from "@/types";

function SidebarItem({ label, icon, active = false }: NavItem) {
  return (
    <li>
      <button
        type="button"
        aria-current={active ? "page" : undefined}
        className={`relative flex h-[34px] w-[163px] items-center gap-3.5 whitespace-nowrap pl-[18px] pr-3 text-[15px] font-medium ${
          active ? "bg-[#eee] text-[#111]" : "text-[#333]"
        }`}
      >
        {active && (
          <span
            aria-hidden
            className="absolute left-0 top-0 h-[34px] w-[3px] bg-[#111]"
          />
        )}
        <Icon name={icon} size={20} />
        {label}
      </button>
    </li>
  );
}

/** Sidebar gauche : catégories de commerces + liens compte. */
export function Sidebar() {
  return (
    <aside className="sticky top-16 h-fit w-[175px] shrink-0 pl-3 pt-5">
      <nav aria-label="Catégories de commerces">
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>

      <hr className="mb-[14px] mt-[15px] h-px w-[163px] border-0 bg-[#e5e5e5]" />

      <nav aria-label="Compte">
        <ul className="flex flex-col gap-1">
          {accountNav.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
