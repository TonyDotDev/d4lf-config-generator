"use client";
import { useSearchParams } from "next/navigation";

export default function GenerateLootFilterProfile() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("preset");

  return (
    <main>
      Genereate Loot Filter Profile {preset && `For ${preset}`} Aspects, Gear
      Slots, Uniques, Sigils
    </main>
  );
}
