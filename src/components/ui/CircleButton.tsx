import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/types";

interface CircleButtonProps {
  icon: IconName;
  label: string;
  /** `floating` : fond blanc + ombre (carrousel promo). `muted` : fond gris. */
  variant: "floating" | "muted";
  className?: string;
}

/** Bouton rond 34px avec une flèche (aucune action pour le moment). */
export function CircleButton({
  icon,
  label,
  variant,
  className = "",
}: CircleButtonProps) {
  const style =
    variant === "floating"
      ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
      : "bg-[#f3f3f3]";

  return (
    <button
      type="button"
      aria-label={label}
      className={`flex size-[34px] shrink-0 items-center justify-center rounded-full ${style} ${className}`}
    >
      <Icon name={icon} size={18} />
    </button>
  );
}
