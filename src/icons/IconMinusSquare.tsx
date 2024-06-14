import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconMinusSquare = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M5.33333 7.2C4.89151 7.2 4.53333 7.55817 4.53333 8C4.53333 8.44183 4.89151 8.8 5.33333 8.8V7.2ZM10.6667 8.8C11.1085 8.8 11.4667 8.44183 11.4667 8C11.4667 7.55817 11.1085 7.2 10.6667 7.2V8.8ZM3.33333 2.8H12.6667V1.2H3.33333V2.8ZM12.6667 2.8C12.9612 2.8 13.2 3.03878 13.2 3.33333H14.8C14.8 2.15513 13.8449 1.2 12.6667 1.2V2.8ZM13.2 3.33333V12.6667H14.8V3.33333H13.2ZM13.2 12.6667C13.2 12.9612 12.9612 13.2 12.6667 13.2V14.8C13.8449 14.8 14.8 13.8449 14.8 12.6667H13.2ZM12.6667 13.2H3.33333V14.8H12.6667V13.2ZM3.33333 13.2C3.03878 13.2 2.8 12.9612 2.8 12.6667H1.2C1.2 13.8449 2.15513 14.8 3.33333 14.8V13.2ZM2.8 12.6667V3.33333H1.2V12.6667H2.8ZM2.8 3.33333C2.8 3.03878 3.03878 2.8 3.33333 2.8V1.2C2.15513 1.2 1.2 2.15513 1.2 3.33333H2.8ZM5.33333 8.8H10.6667V7.2H5.33333V8.8Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconMinusSquare,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13559",
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
    example: ({ size }) => <IconMinusSquare size={size} />,
  },
);
