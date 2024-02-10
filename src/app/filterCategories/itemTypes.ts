import { map, startCase } from "lodash";

export const itemTypes = {
  amulet: "amulet",
  axe: "axe",
  axe2H: "two-handed axe",
  boots: "boots",
  bow: "bow",
  chestArmor: "chest armor",
  crossbow2H: "two-handed crossbow",
  dagger: "dagger",
  focus: "focus",
  gloves: "gloves",
  helm: "helm",
  legs: "pants",
  mace: "mace",
  mace2H: "two-handed mace",
  offHandTotem: "off-hand totem",
  polearm: "polearm",
  ring: "ring",
  scythe: "scythe",
  scythe2H: "two-handed scythe",
  shield: "shield",
  staff: "staff",
  sword: "sword",
  sword2H: "two-handed sword",
  tome: "tome",
  wand: "wand",
};

type ItemType = keyof typeof itemTypes;

export const getItemTypeOptions = () => {
  return map(itemTypes, (label, value) => {
    return { value, label: startCase(label) };
  });
};
