import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconFramer = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15781)">
      <path
        d="M3.3335 10.6667H2.5335C2.5335 10.8788 2.61778 11.0823 2.76781 11.2324L3.3335 10.6667ZM3.3335 6V5.2C2.89167 5.2 2.5335 5.55817 2.5335 6H3.3335ZM12.6668 6V6.8C13.1087 6.8 13.4668 6.44183 13.4668 6H12.6668ZM12.6668 1.33333H13.4668C13.4668 0.891504 13.1087 0.533332 12.6668 0.533332V1.33333ZM3.3335 1.33333V0.533332C3.00993 0.533332 2.71822 0.728246 2.59439 1.02719C2.47057 1.32612 2.53901 1.67022 2.76781 1.89902L3.3335 1.33333ZM12.6668 10.6667V11.4667C12.9904 11.4667 13.2821 11.2718 13.4059 10.9728C13.5298 10.6739 13.4613 10.3298 13.2325 10.101L12.6668 10.6667ZM8.00016 15.3333L7.43448 15.899C7.66328 16.1278 8.00737 16.1963 8.30631 16.0724C8.60525 15.9486 8.80016 15.6569 8.80016 15.3333H8.00016ZM4.1335 10.6667V6H2.5335V10.6667H4.1335ZM3.3335 6.8H12.6668V5.2H3.3335V6.8ZM13.4668 6V1.33333H11.8668V6H13.4668ZM12.6668 0.533332H3.3335V2.13333H12.6668V0.533332ZM2.76781 1.89902L12.1011 11.2324L13.2325 10.101L3.89918 0.767647L2.76781 1.89902ZM12.6668 9.86666H8.00016V11.4667H12.6668V9.86666ZM2.76781 11.2324L7.43448 15.899L8.56585 14.7676L3.89918 10.101L2.76781 11.2324ZM8.80016 15.3333V10.6667H7.20016V15.3333H8.80016ZM3.3335 11.4667H8.00016V9.86666H3.3335V11.4667Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15781">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconFramer,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13508",
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
    example: ({ size }) => <IconFramer size={size} />,
  },
);
