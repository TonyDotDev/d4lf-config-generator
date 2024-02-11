import aspects from "@/data/aspects.json";

export const getAspectOptions = () => {
  return aspects.map((aspect) => ({
    label: aspect.name,
    value: aspect.slug,
    data: aspect,
  }));
};
