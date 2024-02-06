"use client";

import { AppShell, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { nprogress } from "@mantine/nprogress";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <main>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>
          <Button
            onClick={() => {
              nprogress.start();
            }}
          >
            CLICK
          </Button>
        </AppShell.Main>
      </AppShell>
    </main>
  );
}
