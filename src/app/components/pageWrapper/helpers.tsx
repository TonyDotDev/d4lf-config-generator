import { Home2, Article } from "tabler-icons-react";

export const getNavbarItems = () => {
  return [
    {
      label: "Home",
      href: "/",
      leftSection: <Home2 size="1rem" />,
    },
    {
      label: "Generate Config",
      href: "/generate",
      leftSection: <Article size="1rem" />,
    },
  ];
};
