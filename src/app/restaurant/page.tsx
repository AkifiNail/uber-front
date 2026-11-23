import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { CategoryBar } from "@/components/restaurant/CategoryBar";
import { FilterBar } from "@/components/restaurant/FilterBar";
import { NearbyStores } from "@/components/restaurant/NearbyStores";
import { PromoBanners } from "@/components/restaurant/PromoBanners";
import { RestaurantSection } from "@/components/restaurant/RestaurantSection";
import { restaurantSections } from "@/data/restaurant-page";

export const metadata: Metadata = {
  title: "Dèche – Restaurants et commerces",
};

export default function RestaurantPage() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 pb-[7.5px] pl-[15px] pr-[19.5px] pt-[20.5px]">
          <CategoryBar />
          <FilterBar />
          <PromoBanners />
          <NearbyStores />
          {restaurantSections.map((section) => (
            <RestaurantSection key={section.title} {...section} />
          ))}
        </main>
      </div>
    </>
  );
}
