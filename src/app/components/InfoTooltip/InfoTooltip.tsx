import { Center, Text, Tooltip, TooltipProps, rem } from "@mantine/core";
import { InfoCircle } from "tabler-icons-react";

interface InfoTooltipProps {
  label: string;
  position?: TooltipProps["position"];
}

export default function InfoTooltip({ label, position }: InfoTooltipProps) {
  return (
    <Tooltip label={label} position={position}>
      <Text component="div" c="dimmed" style={{ cursor: "help" }}>
        <Center>
          <InfoCircle style={{ width: rem(18), height: rem(18) }} />
        </Center>
      </Text>
    </Tooltip>
  );
}
