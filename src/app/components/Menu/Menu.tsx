import { map } from "lodash";
import { ActionIcon, Box, Menu as MantineMenu } from "@mantine/core";
import { DotsVertical as DotsVerticalIcon } from "tabler-icons-react";

interface MenuProps {
  renderButton?: () => React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  opened?: boolean;
  ariaLabel: string;
  setOpened?: (opened: boolean) => void;
  menuItems: {
    name?: string;
    divider?: boolean;
    sectionLabel?: string;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    color?: string;
  }[];
}

const Menu = ({
  renderButton,
  onClick,
  opened,
  setOpened,
  ariaLabel,
  menuItems,
}: MenuProps) => {
  return (
    <MantineMenu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <MantineMenu.Target>
        {renderButton ? (
          renderButton()
        ) : (
          <ActionIcon
            // This has to be a polymorphic div component because nextjs doesn't support button being a descendant of another button
            component="div"
            onClick={onClick}
            variant="outline"
            aria-label={ariaLabel}
          >
            <DotsVerticalIcon style={{ width: "70%", height: "70%" }} />
          </ActionIcon>
        )}
      </MantineMenu.Target>

      <MantineMenu.Dropdown>
        {map(menuItems, (menuItem, index) => {
          if (menuItem.divider) {
            return <MantineMenu.Divider key={index} color={menuItem.color} />;
          }

          if (menuItem.sectionLabel) {
            return (
              <MantineMenu.Label key={index} color={menuItem.color}>
                {menuItem.sectionLabel}
              </MantineMenu.Label>
            );
          }

          return (
            <MantineMenu.Item
              key={index}
              leftSection={menuItem.leftSection}
              rightSection={menuItem.rightSection}
              onClick={menuItem.onClick}
              color={menuItem.color}
            >
              {menuItem.name}
            </MantineMenu.Item>
          );
        })}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
};

export default Menu;
