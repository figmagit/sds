import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconGitBranch = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M4.8 2C4.8 1.55817 4.44183 1.2 4 1.2C3.55817 1.2 3.2 1.55817 3.2 2H4.8ZM3.2 2V10H4.8V2H3.2ZM13.2 4C13.2 4.66274 12.6627 5.2 12 5.2V6.8C13.5464 6.8 14.8 5.5464 14.8 4H13.2ZM12 5.2C11.3373 5.2 10.8 4.66274 10.8 4H9.2C9.2 5.5464 10.4536 6.8 12 6.8V5.2ZM10.8 4C10.8 3.33726 11.3373 2.8 12 2.8V1.2C10.4536 1.2 9.2 2.4536 9.2 4H10.8ZM12 2.8C12.6627 2.8 13.2 3.33726 13.2 4H14.8C14.8 2.4536 13.5464 1.2 12 1.2V2.8ZM5.2 12C5.2 12.6627 4.66274 13.2 4 13.2V14.8C5.5464 14.8 6.8 13.5464 6.8 12H5.2ZM4 13.2C3.33726 13.2 2.8 12.6627 2.8 12H1.2C1.2 13.5464 2.4536 14.8 4 14.8V13.2ZM2.8 12C2.8 11.3373 3.33726 10.8 4 10.8V9.2C2.4536 9.2 1.2 10.4536 1.2 12H2.8ZM4 10.8C4.66274 10.8 5.2 11.3373 5.2 12H6.8C6.8 10.4536 5.5464 9.2 4 9.2V10.8ZM11.2 6C11.2 7.37913 10.6521 8.70177 9.67696 9.67696L10.8083 10.8083C12.0836 9.53308 12.8 7.80347 12.8 6H11.2ZM9.67696 9.67696C8.70177 10.6521 7.37913 11.2 6 11.2V12.8C7.80347 12.8 9.53308 12.0836 10.8083 10.8083L9.67696 9.67696Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconGitBranch,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13513",
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
    example: ({ size }) => <IconGitBranch size={size} />,
  },
);
