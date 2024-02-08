import { NewSection } from "tabler-icons-react";

export const getSelectLootFilterProfileCards = () => {
  return [
    {
      title: "Barbarian",
      src: "/images/Diablo-4-Barbarian-Icon-2.webp",
      url: "/lootFilterProfiles/generate?preset=barbarian",
    },
    {
      title: "Druid",
      src: "/images/Diablo-4-Druid-Icon-2.webp",
      url: "/lootFilterProfiles/generate?preset=druid",
    },
    {
      title: "Necromancer",
      src: "/images/Diablo-4-Necromancer-Icon.webp",
      url: "/lootFilterProfiles/generate?preset=necromancer",
    },
    {
      title: "Rogue",
      src: "/images/Diablo-4-Rogue-Icon.webp",
      url: "/lootFilterProfiles/generate?preset=rogue",
    },
    {
      title: "Sorcerer",
      src: "/images/Diablo-4-Sorcerer-Icon.webp",
      url: "/lootFilterProfiles/generate?preset=sorcerer",
    },
    {
      title: "Create New",
      icon: <NewSection size={180} />,
      url: "/lootFilterProfiles/generate",
    },
  ];
};
