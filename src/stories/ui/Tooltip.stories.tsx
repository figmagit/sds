import type { Meta } from "@storybook/react";
import { IconHelpCircle } from "icons";
import { DialogTrigger, IconButton, Text, Tooltip } from "ui";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "SDS UI/Tooltip",
  parameters: { layout: "centered" },
};

export default meta;

export const Default = (args: any) => (
  <DialogTrigger>
    <IconButton aria-label="Help">
      <IconHelpCircle />
    </IconButton>
    <Tooltip {...args}>
      <Text>For help accessing your account, please contact support.</Text>
    </Tooltip>
  </DialogTrigger>
);