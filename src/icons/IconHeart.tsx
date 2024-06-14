import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconHeart = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M13.8933 3.07333L13.3275 3.63888L13.3278 3.63915L13.8933 3.07333ZM11.3 1.99878V2.79878V1.99878ZM8.70667 3.07333L9.27235 3.63902L9.27248 3.63888L8.70667 3.07333ZM8 3.78L7.43431 4.34568C7.74673 4.6581 8.25326 4.6581 8.56568 4.34568L8 3.78ZM7.29333 3.07333L6.72765 3.63902V3.63902L7.29333 3.07333ZM2.10666 8.26L1.54098 8.82568H1.54098L2.10666 8.26ZM8 14.1533L7.43431 14.719C7.74673 15.0314 8.25326 15.0314 8.56568 14.719L8 14.1533ZM13.8933 8.26L13.3278 7.69418L13.3276 7.69431L13.8933 8.26ZM14.4592 2.50778C14.0444 2.09279 13.5519 1.76359 13.0098 1.53898L12.3973 3.01712C12.7452 3.16127 13.0613 3.37255 13.3275 3.63888L14.4592 2.50778ZM13.0098 1.53898C12.4677 1.31438 11.8867 1.19878 11.3 1.19878V2.79878C11.6766 2.79878 12.0494 2.87297 12.3973 3.01712L13.0098 1.53898ZM11.3 1.19878C10.7133 1.19878 10.1323 1.31438 9.59019 1.53898L10.2027 3.01712C10.5505 2.87297 10.9234 2.79878 11.3 2.79878V1.19878ZM9.59019 1.53898C9.04814 1.76359 8.55564 2.09279 8.14085 2.50778L9.27248 3.63888C9.5387 3.37255 9.85477 3.16127 10.2027 3.01712L9.59019 1.53898ZM8.14098 2.50764L7.43431 3.21431L8.56568 4.34568L9.27235 3.63902L8.14098 2.50764ZM8.56568 3.21431L7.85902 2.50764L6.72765 3.63902L7.43431 4.34568L8.56568 3.21431ZM7.85902 2.50764C7.02119 1.66982 5.88486 1.19914 4.7 1.19914V2.79914C5.46051 2.79914 6.18988 3.10125 6.72765 3.63902L7.85902 2.50764ZM4.7 1.19914C3.51514 1.19914 2.3788 1.66982 1.54098 2.50764L2.67235 3.63902C3.21012 3.10125 3.93948 2.79914 4.7 2.79914V1.19914ZM1.54098 2.50764C0.703155 3.34547 0.232471 4.4818 0.232471 5.66666H1.83247C1.83247 4.90615 2.13458 4.17678 2.67235 3.63902L1.54098 2.50764ZM0.232471 5.66666C0.232471 6.85152 0.703155 7.98786 1.54098 8.82568L2.67235 7.69431C2.13458 7.15655 1.83247 6.42718 1.83247 5.66666H0.232471ZM14.4589 8.82581C14.8739 8.41102 15.2031 7.91852 15.4277 7.37647L13.9495 6.764C13.8054 7.11189 13.5941 7.42797 13.3278 7.69418L14.4589 8.82581ZM15.4277 7.37647C15.6523 6.83441 15.7679 6.25341 15.7679 5.66666H14.1679C14.1679 6.04323 14.0937 6.41611 13.9495 6.764L15.4277 7.37647ZM15.7679 5.66666C15.7679 5.07991 15.6523 4.49892 15.4277 3.95686L13.9495 4.56933C14.0937 4.91722 14.1679 5.29009 14.1679 5.66666H15.7679ZM15.4277 3.95686C15.2031 3.4148 14.8739 2.92231 14.4589 2.50751L13.3278 3.63915C13.5941 3.90536 13.8054 4.22144 13.9495 4.56933L15.4277 3.95686ZM1.54098 8.82568L7.43431 14.719L8.56568 13.5876L2.67235 7.69431L1.54098 8.82568ZM8.56568 14.719L14.459 8.82568L13.3276 7.69431L7.43431 13.5876L8.56568 14.719Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconHeart,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13522",
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
    example: ({ size }) => <IconHeart size={size} />,
  },
);
