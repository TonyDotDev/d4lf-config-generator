"use client";
import { ReactNode } from "react";
import { Anchor, AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { getNavbarItems } from "./helpers";
import Link from "next/link";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const navbarItems = getNavbarItems();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Anchor href="/" component={Link}>
          D4LF Config Generator
        </Anchor>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navbarItems.map(({ href, label, leftSection }) => {
          return (
            <AppShell.Section key={href}>
              <NavLink
                style={{ borderRadius: 4 }}
                href={href}
                label={label}
                leftSection={leftSection}
                active={href === pathname}
                variant="filled"
                component={Link}
              />
            </AppShell.Section>
          );
        })}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
