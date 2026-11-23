import { Icon } from "@/components/ui/Icon";
import { filters } from "@/data/restaurant-page";

/** Pastilles de filtres + note sur le classement. */
export function FilterBar() {
  return (
    <>
      <div className="mt-2 flex gap-[15px]">
        {filters.map(({ label, leadingIcon, trailingIcon }) => (
          <button
            key={label}
            type="button"
            className="flex h-[33.5px] items-center justify-center gap-[7px] whitespace-nowrap rounded-full bg-[#f3f3f3] px-3 text-[13px] font-medium tracking-[-0.26px] text-[#111]"
          >
            {leadingIcon && <Icon name={leadingIcon} size={14} />}
            {label}
            {trailingIcon && <Icon name={trailingIcon} size={14} />}
          </button>
        ))}
      </div>

      <p className="ml-[15px] mt-[16.5px] whitespace-nowrap text-[13px] tracking-[-0.26px] text-[#6b6b6b]">
        Classés du moins cher au plus fauché.{" "}
        <span className="underline">En savoir plus.</span>
      </p>

      <hr className="mt-[16.5px] h-px border-0 bg-[#e5e5e5]" />
    </>
  );
}
