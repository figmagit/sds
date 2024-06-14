import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconBookmark = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M12.6667 14L12.2017 14.651C12.4455 14.8252 12.7663 14.8485 13.0327 14.7113C13.2992 14.5742 13.4667 14.2997 13.4667 14H12.6667ZM7.99999 10.6667L8.46499 10.0157C8.18683 9.817 7.81316 9.817 7.535 10.0157L7.99999 10.6667ZM3.33333 14H2.53333C2.53333 14.2997 2.70081 14.5742 2.96726 14.7113C3.23372 14.8485 3.55447 14.8252 3.79832 14.651L3.33333 14ZM4.66666 2V1.2V2ZM11.3333 2V1.2V2ZM13.1317 13.349L8.46499 10.0157L7.535 11.3177L12.2017 14.651L13.1317 13.349ZM7.535 10.0157L2.86834 13.349L3.79832 14.651L8.46499 11.3177L7.535 10.0157ZM4.13333 14V3.33333H2.53333V14H4.13333ZM4.13333 3.33333C4.13333 3.19188 4.18952 3.05623 4.28954 2.95621L3.15817 1.82484C2.75809 2.22492 2.53333 2.76754 2.53333 3.33333H4.13333ZM4.28954 2.95621C4.38956 2.85619 4.52521 2.8 4.66666 2.8V1.2C4.10087 1.2 3.55824 1.42476 3.15817 1.82484L4.28954 2.95621ZM4.66666 2.8H11.3333V1.2H4.66666V2.8ZM11.3333 2.8C11.4748 2.8 11.6104 2.85619 11.7105 2.95621L12.8418 1.82484C12.4417 1.42476 11.8991 1.2 11.3333 1.2V2.8ZM11.7105 2.95621C11.8105 3.05623 11.8667 3.19188 11.8667 3.33333H13.4667C13.4667 2.76754 13.2419 2.22492 12.8418 1.82484L11.7105 2.95621ZM11.8667 3.33333V14H13.4667V3.33333H11.8667Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconBookmark,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13055",
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
    example: ({ size }) => <IconBookmark size={size} />,
  },
);
