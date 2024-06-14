import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconCoffee = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15685)">
      <path
        d="M12.6666 5.33329V4.53329V5.33329ZM12.6666 10.6666V11.4666V10.6666ZM11.9999 9.86663C11.5581 9.86663 11.1999 10.2248 11.1999 10.6666C11.1999 11.1085 11.5581 11.4666 11.9999 11.4666V9.86663ZM1.33325 5.33329V4.53329C0.891424 4.53329 0.533252 4.89147 0.533252 5.33329H1.33325ZM1.33325 11.3333H0.533252H1.33325ZM4.79992 0.666626C4.79992 0.224798 4.44175 -0.133374 3.99992 -0.133374C3.55809 -0.133374 3.19992 0.224798 3.19992 0.666626H4.79992ZM3.19992 2.66663C3.19992 3.10845 3.55809 3.46663 3.99992 3.46663C4.44175 3.46663 4.79992 3.10845 4.79992 2.66663H3.19992ZM7.46658 0.666626C7.46658 0.224798 7.10841 -0.133374 6.66658 -0.133374C6.22476 -0.133374 5.86658 0.224798 5.86658 0.666626H7.46658ZM5.86658 2.66663C5.86658 3.10845 6.22476 3.46663 6.66658 3.46663C7.10841 3.46663 7.46658 3.10845 7.46658 2.66663H5.86658ZM10.1333 0.666626C10.1333 0.224798 9.77508 -0.133374 9.33325 -0.133374C8.89142 -0.133374 8.53325 0.224798 8.53325 0.666626H10.1333ZM8.53325 2.66663C8.53325 3.10845 8.89142 3.46663 9.33325 3.46663C9.77508 3.46663 10.1333 3.10845 10.1333 2.66663H8.53325ZM11.9999 6.13329H12.6666V4.53329H11.9999V6.13329ZM12.6666 6.13329C13.1617 6.13329 13.6365 6.32996 13.9865 6.68003L15.1179 5.54866C14.4678 4.89853 13.586 4.53329 12.6666 4.53329V6.13329ZM13.9865 6.68003C14.3366 7.03009 14.5333 7.50489 14.5333 7.99996H16.1333C16.1333 7.08054 15.768 6.19878 15.1179 5.54866L13.9865 6.68003ZM14.5333 7.99996C14.5333 8.49503 14.3366 8.96982 13.9865 9.31989L15.1179 10.4513C15.768 9.80114 16.1333 8.91938 16.1333 7.99996H14.5333ZM13.9865 9.31989C13.6365 9.66996 13.1617 9.86663 12.6666 9.86663V11.4666C13.586 11.4666 14.4678 11.1014 15.1179 10.4513L13.9865 9.31989ZM12.6666 9.86663H11.9999V11.4666H12.6666V9.86663ZM1.33325 6.13329H11.9999V4.53329H1.33325V6.13329ZM11.1999 5.33329V11.3333H12.7999V5.33329H11.1999ZM11.1999 11.3333C11.1999 11.8284 11.0033 12.3032 10.6532 12.6532L11.7846 13.7846C12.4347 13.1345 12.7999 12.2527 12.7999 11.3333H11.1999ZM10.6532 12.6532C10.3031 13.0033 9.82832 13.2 9.33325 13.2V14.8C10.2527 14.8 11.1344 14.4347 11.7846 13.7846L10.6532 12.6532ZM9.33325 13.2H3.99992V14.8H9.33325V13.2ZM3.99992 13.2C3.50485 13.2 3.03005 13.0033 2.67999 12.6532L1.54862 13.7846C2.19874 14.4347 3.0805 14.8 3.99992 14.8V13.2ZM2.67999 12.6532C2.32992 12.3032 2.13325 11.8284 2.13325 11.3333H0.533252C0.533252 12.2527 0.898489 13.1345 1.54862 13.7846L2.67999 12.6532ZM2.13325 11.3333V5.33329H0.533252V11.3333H2.13325ZM3.19992 0.666626V2.66663H4.79992V0.666626H3.19992ZM5.86658 0.666626V2.66663H7.46658V0.666626H5.86658ZM8.53325 0.666626V2.66663H10.1333V0.666626H8.53325Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15685">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconCoffee,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13183",
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
    example: ({ size }) => <IconCoffee size={size} />,
  },
);
