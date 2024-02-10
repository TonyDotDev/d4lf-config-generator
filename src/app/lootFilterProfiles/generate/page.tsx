"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  Center,
  Stack,
  TextInput,
  Title,
  Accordion,
  Grid,
  NumberInput,
  MultiSelect,
  Group,
  rem,
} from "@mantine/core";
import {
  Plus as PlusIcon,
  Trash as TrashIcon,
  Copy as CopyIcon,
} from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import { find } from "lodash";

import { getAspectOptions } from "@/app/filterCategories/aspects";
import { getItemTypeOptions } from "@/app/filterCategories/itemTypes";
import InfoTooltip from "@/app/components/InfoTooltip";
import Menu from "@/app/components/Menu";

const MAX_GEAR_SCORE = 925;

const INITIAL_AFFIXES_VALUES = {
  name: "",
  itemType: [],
  minPower: 0,
  affixPool: [],
  minAffixCount: 0,
};

type Affixes = typeof INITIAL_AFFIXES_VALUES;
type AffixesList = Affixes[];

export default function GenerateLootFilterProfile() {
  const [affixesList, setAffixesList] = useState<AffixesList>([]);

  // Set the index of the affixes item to determine which menu to open
  const [affixesMenuOpened, setAffixesMenuOpened] = useState<null | number>(
    null
  );
  const [
    affixSelectorOpened,
    { open: openAffixSelector, close: closeAffixSelector },
  ] = useDisclosure(false);
  const searchParams = useSearchParams();
  const preset = searchParams.get("preset");

  const initialAffixesItem = { ...INITIAL_AFFIXES_VALUES };
  initialAffixesItem.name = `Gear Item 1`;

  const form = useForm({
    initialValues: { affixes: [initialAffixesItem] },
    validate: {},
  });

  const handleSubmit = (values: {}) => {
    console.log(values, "vals");
  };

  const handleAddAffixes = () => {
    const newAffixesItem = { ...INITIAL_AFFIXES_VALUES };
    newAffixesItem.name = `Gear Item ${form.values.affixes.length + 1}`;

    form.setFieldValue("affixes", [...form.values.affixes, newAffixesItem]);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleDeleteAffixesItem = (indexToDelete: number) => {
    const newAffixes = form.values.affixes.filter(
      (_, index) => index !== indexToDelete
    );
    form.setFieldValue("affixes", newAffixes);
  };

  const handleDuplicateAffixesItem = (indexToDuplicate: number) => {
    const duplicateAffix = { ...form.values.affixes[indexToDuplicate] };
    duplicateAffix.name = `${
      duplicateAffix.name || `Gear Item ${indexToDuplicate + 1}`
    } Copy`;

    const newAffixes = [...form.values.affixes, duplicateAffix];

    form.setFieldValue("affixes", newAffixes);
  };

  return (
    <Center component="main">
      <Stack maw="1000" w="100%">
        <Title order={1}>Generate Loot Filter Profile</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Title order={2}>Gear/Affixes</Title>
          <Stack>
            <Accordion defaultValue="0">
              {form.values.affixes.map((affix, index) => {
                return (
                  <Accordion.Item value={index.toString()} key={index}>
                    <Accordion.Control mih="48.8px">
                      <Group justify="space-between" pr={10}>
                        {affix.name || `Gear Item ${index + 1}`}
                        <Menu
                          onClick={handleMenuClick}
                          opened={affixesMenuOpened === index}
                          ariaLabel={`Gear Item ${index + 1} Menu`}
                          setOpened={() => {
                            if (index === affixesMenuOpened) {
                              setAffixesMenuOpened(null);
                            } else {
                              setAffixesMenuOpened(index);
                            }
                          }}
                          menuItems={[
                            {
                              name: "Duplicate",
                              onClick: (e) => {
                                e.stopPropagation();
                                handleDuplicateAffixesItem(index);
                              },
                              leftSection: (
                                <CopyIcon
                                  style={{ width: rem(14), height: rem(14) }}
                                />
                              ),
                            },
                            {
                              name: "Delete",
                              color: "red",
                              onClick: (e) => {
                                e.stopPropagation();
                                handleDeleteAffixesItem(index);
                              },
                              leftSection: (
                                <TrashIcon
                                  style={{ width: rem(14), height: rem(14) }}
                                />
                              ),
                            },
                          ]}
                        />
                      </Group>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Grid>
                        <Grid.Col span={6}>
                          <TextInput
                            required
                            label="Name"
                            placeholder='e.g. "Legendary Boots"'
                            rightSection={
                              <InfoTooltip label="Name that will show up in-game when this filter matches the requirements." />
                            }
                            {...form.getInputProps(`affixes.${index}.name`)}
                          />
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <MultiSelect
                            required
                            label="Item Types"
                            placeholder="Select item types"
                            // rightSection={
                            //   <InfoTooltip label="Item types that this filter will match." />
                            // }
                            data={getItemTypeOptions()}
                            {...form.getInputProps(`affixes.${index}.itemType`)}
                          />
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <NumberInput
                            label="Minimum Gear Score"
                            min={0}
                            max={MAX_GEAR_SCORE}
                            rightSection={
                              <InfoTooltip label="The filter will match this gear score and higher. The maximum being 925." />
                            }
                            {...form.getInputProps(`affixes.${index}.minPower`)}
                          />
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <NumberInput
                            label="Minimum Affix Count"
                            min={0}
                            // If the user has less than 4 affixes, then the max will be the length of the affix pool
                            max={
                              form.values.affixes[index].affixPool.length < 4
                                ? form.values.affixes[index].affixPool.length
                                : 4
                            }
                            rightSection={
                              <InfoTooltip label="The filter will match at least this number of affixes on a single piece of gear." />
                            }
                            {...form.getInputProps(
                              `affixes.${index}.minAffixCount`
                            )}
                          />
                        </Grid.Col>
                      </Grid>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            <Box>
              <Button
                type="button"
                leftSection={<PlusIcon size={14} />}
                onClick={handleAddAffixes}
              >
                Add Gear Item
              </Button>
            </Box>
          </Stack>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button justify="right" type="submit">
              Generate
            </Button>
          </Box>
        </form>
      </Stack>
    </Center>
  );
}
