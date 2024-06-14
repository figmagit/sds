import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconFilePlus = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M9.33317 1.33333L9.89886 0.767643C9.74883 0.617614 9.54534 0.533328 9.33317 0.533328V1.33333ZM3.99984 1.33333V0.533328V1.33333ZM2.6665 2.66666H1.8665H2.6665ZM2.6665 13.3333H1.8665H2.6665ZM13.3332 5.33333H14.1332C14.1332 5.12116 14.0489 4.91767 13.8989 4.76764L13.3332 5.33333ZM9.33317 5.33333H8.53317C8.53317 5.77516 8.89134 6.13333 9.33317 6.13333V5.33333ZM7.19984 12C7.19984 12.4418 7.55801 12.8 7.99984 12.8C8.44166 12.8 8.79984 12.4418 8.79984 12H7.19984ZM8.79984 7.99999C8.79984 7.55817 8.44166 7.19999 7.99984 7.19999C7.55801 7.19999 7.19984 7.55817 7.19984 7.99999H8.79984ZM5.99984 9.19999C5.55801 9.19999 5.19984 9.55817 5.19984 10C5.19984 10.4418 5.55801 10.8 5.99984 10.8V9.19999ZM9.99984 10.8C10.4417 10.8 10.7998 10.4418 10.7998 10C10.7998 9.55817 10.4417 9.19999 9.99984 9.19999V10.8ZM9.33317 0.533328H3.99984V2.13333H9.33317V0.533328ZM3.99984 0.533328C3.43404 0.533328 2.89142 0.758089 2.49134 1.15817L3.62271 2.28954C3.72273 2.18952 3.85839 2.13333 3.99984 2.13333V0.533328ZM2.49134 1.15817C2.09126 1.55824 1.8665 2.10087 1.8665 2.66666H3.4665C3.4665 2.52521 3.52269 2.38956 3.62271 2.28954L2.49134 1.15817ZM1.8665 2.66666V13.3333H3.4665V2.66666H1.8665ZM1.8665 13.3333C1.8665 13.8991 2.09127 14.4417 2.49134 14.8418L3.62271 13.7105C3.52269 13.6104 3.4665 13.4748 3.4665 13.3333H1.8665ZM2.49134 14.8418C2.89142 15.2419 3.43404 15.4667 3.99984 15.4667V13.8667C3.85839 13.8667 3.72273 13.8105 3.62271 13.7105L2.49134 14.8418ZM3.99984 15.4667H11.9998V13.8667H3.99984V15.4667ZM11.9998 15.4667C12.5656 15.4667 13.1083 15.2419 13.5083 14.8418L12.377 13.7105C12.2769 13.8105 12.1413 13.8667 11.9998 13.8667V15.4667ZM13.5083 14.8418C13.9084 14.4417 14.1332 13.8991 14.1332 13.3333H12.5332C12.5332 13.4748 12.477 13.6104 12.377 13.7105L13.5083 14.8418ZM14.1332 13.3333V5.33333H12.5332V13.3333H14.1332ZM13.8989 4.76764L9.89886 0.767643L8.76748 1.89901L12.7675 5.89901L13.8989 4.76764ZM8.53317 1.33333L8.53317 5.33333H10.1332L10.1332 1.33333L8.53317 1.33333ZM9.33317 6.13333H13.3332V4.53333H9.33317V6.13333ZM8.79984 12V7.99999H7.19984V12H8.79984ZM5.99984 10.8H9.99984V9.19999H5.99984V10.8Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconFilePlus,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13501",
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
    example: ({ size }) => <IconFilePlus size={size} />,
  },
);
