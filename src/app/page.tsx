"use client";
import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Plus } from "tabler-icons-react";
import { getSelectLootFilterProfileCards } from "./helpers";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  const handleGenerateLootFilterProfileClick = () => {
    open();
  };

  const selectLootFilterProfileCards = getSelectLootFilterProfileCards();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Select a loot filter profile preset or create a new one"
        size={801}
      >
        <Group>
          {selectLootFilterProfileCards.map((card) => {
            return (
              <Card
                key={card.url}
                href={card.url}
                component={Link}
                shadow="sm"
                padding="xl"
              >
                <Card.Section>
                  {card.src && (
                    <Image maw={180} src={card.src} alt={card.title} />
                  )}
                  {card.icon && <Center>{card.icon}</Center>}
                </Card.Section>
                <Text style={{ textAlign: "center" }} fw={500} size="lg">
                  {card.title}
                </Text>
              </Card>
            );
          })}
        </Group>
      </Modal>{" "}
      <Center component="main">
        <Stack gap={20} maw={1000} w="100%">
          <Title order={1}>Welcome to the D4LF Config Generator!</Title>
          <Text>
            This is a tool to help you generate loot filter profiles and params
            files for the{" "}
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
          <Group>
            <Button
              onClick={handleGenerateLootFilterProfileClick}
              variant="light"
              leftSection={<Plus size={14} />}
            >
              Generate Loot Filter Profile
            </Button>
            <Button
              href="/paramsFiles/generate"
              component={Link}
              variant="outline"
              leftSection={<Plus size={14} />}
            >
              Generate Params File
            </Button>
          </Group>
        </Stack>
      </Center>
    </>
  );
}
