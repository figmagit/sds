import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconInbox = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M14.6668 8.00002H15.4668C15.4668 7.87567 15.4378 7.75303 15.3822 7.64183L14.6668 8.00002ZM10.6668 8.00002V7.20002C10.3993 7.20002 10.1496 7.3337 10.0012 7.55626L10.6668 8.00002ZM9.3335 10V10.8C9.60098 10.8 9.85076 10.6663 9.99914 10.4438L9.3335 10ZM6.66683 10L6.00119 10.4438C6.14956 10.6663 6.39935 10.8 6.66683 10.8V10ZM5.3335 8.00002L5.99914 7.55626C5.85076 7.3337 5.60098 7.20002 5.3335 7.20002V8.00002ZM1.3335 8.00002L0.618162 7.64183C0.562485 7.75303 0.533496 7.87567 0.533496 8.00002H1.3335ZM3.6335 3.40669L4.34883 3.76487L4.34992 3.76269L3.6335 3.40669ZM1.3335 12H0.533496H1.3335ZM12.3668 3.40669L11.6504 3.76269L11.6515 3.76487L12.3668 3.40669ZM11.1735 2.66669L11.1739 1.86669H11.1735V2.66669ZM4.82683 2.66669V1.86669L4.8264 1.86669L4.82683 2.66669ZM14.6668 7.20002H10.6668V8.80002H14.6668V7.20002ZM10.0012 7.55626L8.66786 9.55626L9.99914 10.4438L11.3325 8.44378L10.0012 7.55626ZM9.3335 9.20002H6.66683V10.8H9.3335V9.20002ZM7.33247 9.55626L5.99914 7.55626L4.66786 8.44378L6.00119 10.4438L7.33247 9.55626ZM5.3335 7.20002H1.3335V8.80002H5.3335V7.20002ZM2.91816 3.0485L0.618162 7.64183L2.04883 8.35821L4.34883 3.76487L2.91816 3.0485ZM0.533496 8.00002V12H2.1335V8.00002H0.533496ZM0.533496 12C0.533496 12.5658 0.758257 13.1084 1.15833 13.5085L2.28971 12.3771C2.18969 12.2771 2.1335 12.1415 2.1335 12H0.533496ZM1.15833 13.5085C1.55841 13.9086 2.10103 14.1334 2.66683 14.1334V12.5334C2.52538 12.5334 2.38973 12.4772 2.28971 12.3771L1.15833 13.5085ZM2.66683 14.1334H13.3335V12.5334H2.66683V14.1334ZM13.3335 14.1334C13.8993 14.1334 14.4419 13.9086 14.842 13.5085L13.7106 12.3771C13.6106 12.4772 13.4749 12.5334 13.3335 12.5334V14.1334ZM14.842 13.5085C15.2421 13.1084 15.4668 12.5658 15.4668 12H13.8668C13.8668 12.1415 13.8106 12.2771 13.7106 12.3771L14.842 13.5085ZM15.4668 12V8.00002H13.8668V12H15.4668ZM15.3822 7.64183L13.0822 3.0485L11.6515 3.76487L13.9515 8.35821L15.3822 7.64183ZM13.0833 3.05069C12.9066 2.69526 12.6344 2.39615 12.2971 2.18699L11.4539 3.54676C11.5382 3.59905 11.6063 3.67383 11.6504 3.76269L13.0833 3.05069ZM12.2971 2.18699C11.9598 1.97782 11.5708 1.8669 11.1739 1.86669L11.1731 3.46669C11.2723 3.46674 11.3695 3.49447 11.4539 3.54676L12.2971 2.18699ZM11.1735 1.86669H4.82683V3.46669H11.1735V1.86669ZM4.8264 1.86669C4.42951 1.8669 4.04055 1.97782 3.70325 2.18699L4.54647 3.54676C4.63079 3.49447 4.72803 3.46674 4.82725 3.46669L4.8264 1.86669ZM3.70325 2.18699C3.36595 2.39615 3.09369 2.69526 2.91707 3.05069L4.34992 3.76269C4.39407 3.67383 4.46214 3.59905 4.54647 3.54676L3.70325 2.18699Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconInbox,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13529",
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
    example: ({ size }) => <IconInbox size={size} />,
  },
);
