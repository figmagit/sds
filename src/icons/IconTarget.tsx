import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconTarget = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_16025)">
      <path
        d="M13.8667 7.99992C13.8667 11.24 11.2401 13.8666 8.00004 13.8666V15.4666C12.1238 15.4666 15.4667 12.1236 15.4667 7.99992H13.8667ZM8.00004 13.8666C4.75997 13.8666 2.13337 11.24 2.13337 7.99992H0.533374C0.533374 12.1236 3.87631 15.4666 8.00004 15.4666V13.8666ZM2.13337 7.99992C2.13337 4.75985 4.75997 2.13325 8.00004 2.13325V0.533252C3.87631 0.533252 0.533374 3.87619 0.533374 7.99992H2.13337ZM8.00004 2.13325C11.2401 2.13325 13.8667 4.75985 13.8667 7.99992H15.4667C15.4667 3.87619 12.1238 0.533252 8.00004 0.533252V2.13325ZM11.2 7.99992C11.2 9.76723 9.76735 11.1999 8.00004 11.1999V12.7999C10.651 12.7999 12.8 10.6509 12.8 7.99992H11.2ZM8.00004 11.1999C6.23273 11.1999 4.80004 9.76723 4.80004 7.99992H3.20004C3.20004 10.6509 5.34907 12.7999 8.00004 12.7999V11.1999ZM4.80004 7.99992C4.80004 6.23261 6.23273 4.79992 8.00004 4.79992V3.19992C5.34907 3.19992 3.20004 5.34895 3.20004 7.99992H4.80004ZM8.00004 4.79992C9.76735 4.79992 11.2 6.23261 11.2 7.99992H12.8C12.8 5.34895 10.651 3.19992 8.00004 3.19992V4.79992ZM8.53337 7.99992C8.53337 8.29447 8.29459 8.53325 8.00004 8.53325V10.1333C9.17825 10.1333 10.1334 9.17813 10.1334 7.99992H8.53337ZM8.00004 8.53325C7.70549 8.53325 7.46671 8.29447 7.46671 7.99992H5.86671C5.86671 9.17813 6.82183 10.1333 8.00004 10.1333V8.53325ZM7.46671 7.99992C7.46671 7.70537 7.70549 7.46658 8.00004 7.46658V5.86658C6.82183 5.86658 5.86671 6.82171 5.86671 7.99992H7.46671ZM8.00004 7.46658C8.29459 7.46658 8.53337 7.70537 8.53337 7.99992H10.1334C10.1334 6.82171 9.17825 5.86658 8.00004 5.86658V7.46658Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_16025">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconTarget,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13631",
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
    example: ({ size }) => <IconTarget size={size} />,
  },
);
