import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconDollarSign = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15731)">
      <path
        d="M8.8 0.666656C8.8 0.224829 8.44183 -0.133344 8 -0.133344C7.55817 -0.133344 7.2 0.224829 7.2 0.666656H8.8ZM7.2 15.3333C7.2 15.7752 7.55817 16.1333 8 16.1333C8.44183 16.1333 8.8 15.7752 8.8 15.3333H7.2ZM11.3333 4.13332C11.7752 4.13332 12.1333 3.77515 12.1333 3.33332C12.1333 2.8915 11.7752 2.53332 11.3333 2.53332V4.13332ZM4 5.66666H3.2H4ZM6.33333 7.99999V8.79999V7.99999ZM9.66667 7.99999V7.19999V7.99999ZM9.66667 12.6667V13.4667V12.6667ZM4 11.8667C3.55817 11.8667 3.2 12.2248 3.2 12.6667C3.2 13.1085 3.55817 13.4667 4 13.4667V11.8667ZM7.2 0.666656V15.3333H8.8V0.666656H7.2ZM11.3333 2.53332H6.33333V4.13332H11.3333V2.53332ZM6.33333 2.53332C5.50232 2.53332 4.70535 2.86344 4.11773 3.45106L5.2491 4.58243C5.53666 4.29487 5.92667 4.13332 6.33333 4.13332V2.53332ZM4.11773 3.45106C3.53012 4.03867 3.2 4.83564 3.2 5.66666H4.8C4.8 5.25999 4.96155 4.86998 5.2491 4.58243L4.11773 3.45106ZM3.2 5.66666C3.2 6.49767 3.53012 7.29464 4.11773 7.88226L5.2491 6.75089C4.96155 6.46333 4.8 6.07332 4.8 5.66666H3.2ZM4.11773 7.88226C4.70535 8.46987 5.50232 8.79999 6.33333 8.79999V7.19999C5.92667 7.19999 5.53666 7.03844 5.2491 6.75089L4.11773 7.88226ZM6.33333 8.79999H9.66667V7.19999H6.33333V8.79999ZM9.66667 8.79999C10.0733 8.79999 10.4633 8.96154 10.7509 9.24909L11.8823 8.11772C11.2947 7.53011 10.4977 7.19999 9.66667 7.19999V8.79999ZM10.7509 9.24909C11.0385 9.53665 11.2 9.92666 11.2 10.3333H12.8C12.8 9.50231 12.4699 8.70534 11.8823 8.11772L10.7509 9.24909ZM11.2 10.3333C11.2 10.74 11.0385 11.13 10.7509 11.4176L11.8823 12.5489C12.4699 11.9613 12.8 11.1643 12.8 10.3333H11.2ZM10.7509 11.4176C10.4633 11.7051 10.0733 11.8667 9.66667 11.8667V13.4667C10.4977 13.4667 11.2947 13.1365 11.8823 12.5489L10.7509 11.4176ZM9.66667 11.8667H4V13.4667H9.66667V11.8667Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15731">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconDollarSign,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13485",
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
    example: ({ size }) => <IconDollarSign size={size} />,
  },
);
