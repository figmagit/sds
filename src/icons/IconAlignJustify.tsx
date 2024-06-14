import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconAlignJustify = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M14 7.46667C14.4418 7.46667 14.8 7.10849 14.8 6.66667C14.8 6.22484 14.4418 5.86667 14 5.86667V7.46667ZM2 5.86667C1.55817 5.86667 1.2 6.22484 1.2 6.66667C1.2 7.10849 1.55817 7.46667 2 7.46667V5.86667ZM14 4.8C14.4418 4.8 14.8 4.44183 14.8 4C14.8 3.55817 14.4418 3.2 14 3.2V4.8ZM2 3.2C1.55817 3.2 1.2 3.55817 1.2 4C1.2 4.44183 1.55817 4.8 2 4.8V3.2ZM14 10.1333C14.4418 10.1333 14.8 9.77516 14.8 9.33333C14.8 8.89151 14.4418 8.53333 14 8.53333V10.1333ZM2 8.53333C1.55817 8.53333 1.2 8.89151 1.2 9.33333C1.2 9.77516 1.55817 10.1333 2 10.1333V8.53333ZM14 12.8C14.4418 12.8 14.8 12.4418 14.8 12C14.8 11.5582 14.4418 11.2 14 11.2V12.8ZM2 11.2C1.55817 11.2 1.2 11.5582 1.2 12C1.2 12.4418 1.55817 12.8 2 12.8V11.2ZM14 5.86667H2V7.46667H14V5.86667ZM14 3.2H2V4.8H14V3.2ZM14 8.53333H2V10.1333H14V8.53333ZM14 11.2H2V12.8H14V11.2Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconAlignJustify,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13025",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlignJustify size={size} />,
  },
);
