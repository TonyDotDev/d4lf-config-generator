import { Home2, Settings2, Filter } from "tabler-icons-react";

export const getNavbarItems = () => {
  return [
    {
      label: "Home",
      href: "/",
      leftSection: <Home2 size="1rem" />,
    },
    {
      label: "Loot Filter Profiles",
      href: "/lootFilterProfiles",
      leftSection: <Filter size="1rem" />,
    },
    {
      label: "Param Files",
      href: "/paramsFiles",
      leftSection: <Settings2 size="1rem" />,
    },
  ];
};
