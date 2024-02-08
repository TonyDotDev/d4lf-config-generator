"use client";
import { ReactNode } from "react";
import {
  Anchor,
  AppShell,
  Burger,
  NavLink,
  Avatar,
  Box,
  Button,
  Image,
} from "@mantine/core";
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
      // navbar={{
      //   width: 300,
      //   breakpoint: "sm",
      //   collapsed: { mobile: !opened },
      // }}
      padding="md"
    >
      <AppShell.Header
        style={{
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Anchor href="/" component={Link}>
            <Avatar radius="sm" src="/images/d4-demon.png" alt="demon" />
          </Anchor>
        </Box>

        <Box
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <Button>Sign Up</Button>
          <Button variant="outline">Login</Button>
        </Box>
        {/* <Box>
          <Avatar color="cyan" radius="xl">
            TP
          </Avatar>
        </Box> */}
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
        {navbarItems.map((navbarItem) => {
          return (
            <AppShell.Section key={navbarItem.href}>
              <NavLink
                style={{ borderRadius: 4 }}
                href={navbarItem.href}
                label={navbarItem.label}
                leftSection={navbarItem.leftSection}
                active={navbarItem.href === pathname}
                variant="filled"
                component={Link}
              />
            </AppShell.Section>
          );
        })}
      </AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
