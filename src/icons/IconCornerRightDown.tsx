import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconCornerRightDown = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M7.23243 9.43433C6.92001 9.12191 6.41348 9.12191 6.10106 9.43433C5.78864 9.74675 5.78864 10.2533 6.10106 10.5657L7.23243 9.43433ZM10.0001 13.3334L9.43439 13.899C9.58442 14.0491 9.78791 14.1334 10.0001 14.1334C10.2123 14.1334 10.4157 14.0491 10.5658 13.899L10.0001 13.3334ZM13.8991 10.5657C14.2115 10.2533 14.2115 9.74675 13.8991 9.43433C13.5867 9.12191 13.0801 9.12191 12.7677 9.43433L13.8991 10.5657ZM2.66675 1.86669C2.22492 1.86669 1.86675 2.22486 1.86675 2.66669C1.86675 3.10851 2.22492 3.46669 2.66675 3.46669V1.86669ZM7.33341 2.66669V1.86669V2.66669ZM10.0001 5.33335H10.8001H10.0001ZM6.10106 10.5657L9.43439 13.899L10.5658 12.7677L7.23243 9.43433L6.10106 10.5657ZM10.5658 13.899L13.8991 10.5657L12.7677 9.43433L9.43439 12.7677L10.5658 13.899ZM2.66675 3.46669H7.33341V1.86669H2.66675V3.46669ZM7.33341 3.46669C7.82849 3.46669 8.30328 3.66335 8.65335 4.01342L9.78472 2.88205C9.13459 2.23192 8.25283 1.86669 7.33341 1.86669V3.46669ZM8.65335 4.01342C9.00341 4.36349 9.20008 4.83828 9.20008 5.33335H10.8001C10.8001 4.41394 10.4348 3.53218 9.78472 2.88205L8.65335 4.01342ZM9.20008 5.33335V13.3334H10.8001V5.33335H9.20008Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconCornerRightDown,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13471",
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
    example: ({ size }) => <IconCornerRightDown size={size} />,
  },
);
