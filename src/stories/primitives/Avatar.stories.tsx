import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "layout";
import { Avatar, AvatarBlock, AvatarButton, AvatarGroup } from "primitives";
import "react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "SDS Primitives/Avatar",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
type GroupStory = StoryObj<typeof AvatarGroup>;

export const Image: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar src="https://placehold.co/200/f0f0f0/ddd?text=SDS" size="small" />
      <Avatar src="https://placehold.co/200/f0f0f0/ddd?text=SDS" />
      <Avatar
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
        square
        size="large"
      />
    </Flex>
  ),
};

export const Initials: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <Avatar initials="JA" size="small" />
      <Avatar initials="JA" size="medium" />
      <Avatar initials="JA" square size="large" />
    </Flex>
  ),
};

export const Buttons: Story = {
  args: {},
  render: () => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarButton
        square
        size="small"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
      <AvatarButton square src="https://placehold.co/200/f0f0f0/ddd?text=SDS" />
      <AvatarButton
        size="large"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
    </Flex>
  ),
};

export const Group: GroupStory = {
  args: {
    spacing: "200",
    max: 3,
  },
  argTypes: {
    spacing: {
      options: [
        "100",
        "200",
        "300",
        "negative-100",
        "negative-200",
        "negative-300",
      ],
      control: {
        type: "select",
      },
    },
  },
  render: (args) => (
    <Flex alignPrimary="center" gap="200" alignSecondary="center">
      <AvatarGroup {...args}>
        <Avatar initials="JA" />
        <Avatar src="https://placehold.co/200/f0f0f0/ddd?text=SDS" />
        <Avatar initials="LO" />
        <Avatar src="https://placehold.co/200/f0f0f0/ddd?text=SDS" />
        <Avatar initials="WM" />
        <Avatar src="https://placehold.co/200/f0f0f0/ddd?text=SDS" />
      </AvatarGroup>
    </Flex>
  ),
};

export const Block: Story = {
  args: {},
  render: () => (
    <AvatarBlock title="Full Name" description="@fullname420">
      <AvatarButton
        square
        size="large"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
    </AvatarBlock>
  ),
};