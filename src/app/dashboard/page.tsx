import { Text, Title, Stack } from "@mantine/core";

export default function Dashboard() {
  return (
    <main>
      <Stack>
        <Stack gap={10}>
          <Title order={1}>Welcome Tony!</Title>
          <Text>What would you like to do?</Text>
        </Stack>
      </Stack>
    </main>
  );
}
