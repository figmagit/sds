import type { Meta, StoryObj } from "@storybook/react";
import { placeholder } from "images";
import { Image, Picture, PictureSource } from "primitives";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "SDS Primitives/Image",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Image> = {
  args: { size: "medium" },
  render: (args) => (
    <div
      style={{
        height: "calc(100vh - 2rem)",
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
    >
      <Image src={placeholder} {...args} />
    </div>
  ),
};

export const SrcSet: StoryObj<typeof Image> = {
  render: (args) => (
    <Image
      src={placeholder}
      srcSet={`${placeholder} 500w, ${placeholder} 1001w`}
      sizes="(max-width: 700px) 500w, 1000w"
      {...args}
    />
  ),
};

export const DefaultPicture: StoryObj<typeof Picture> = {
  args: {},
  argTypes: {},
  render: () => (
    <Picture>
      <PictureSource media="(max-width: 499px)" srcSet={placeholder} />
      <PictureSource media="(min-width: 500px)" srcSet={placeholder} />
      <Image src={placeholder} alt="Magical thing" />
    </Picture>
  ),
};
