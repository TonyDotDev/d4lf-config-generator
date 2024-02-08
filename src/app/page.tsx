import { Anchor, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Stack>
        <Title order={1}>Welcome to the D4LF Config Generator!</Title>
        <Text>
          You can generate{" "}
          <Anchor href="/lootFilterProfiles/generate" component={Link}>
            loot filter profiles
          </Anchor>{" "}
          or{" "}
          <Anchor href="/paramsFiles/generate" component={Link}>
            params files
          </Anchor>{" "}
          for the{" "}
          <Anchor
            href="https://github.com/aeon0/d4lf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Diablo 4 Loot Filter overlay
          </Anchor>{" "}
          via simple forms instead of copying and pasting values into a yaml
          file.
        </Text>
      </Stack>
    </main>
  );
}
