import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconFolderMinus = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M1.33325 12.6667H0.533252H1.33325ZM2.66659 2V1.2V2ZM5.99992 2L6.66556 1.55624C6.51719 1.33368 6.2674 1.2 5.99992 1.2V2ZM7.33325 4L6.66761 4.44376C6.81598 4.66632 7.06577 4.8 7.33325 4.8V4ZM13.3333 4V3.2V4ZM5.99992 8.53333C5.55809 8.53333 5.19992 8.89151 5.19992 9.33333C5.19992 9.77516 5.55809 10.1333 5.99992 10.1333V8.53333ZM9.99992 10.1333C10.4417 10.1333 10.7999 9.77516 10.7999 9.33333C10.7999 8.89151 10.4417 8.53333 9.99992 8.53333V10.1333ZM13.8666 12.6667C13.8666 12.8081 13.8104 12.9438 13.7104 13.0438L14.8417 14.1752C15.2418 13.7751 15.4666 13.2325 15.4666 12.6667H13.8666ZM13.7104 13.0438C13.6104 13.1438 13.4747 13.2 13.3333 13.2V14.8C13.899 14.8 14.4417 14.5752 14.8417 14.1752L13.7104 13.0438ZM13.3333 13.2H2.66659V14.8H13.3333V13.2ZM2.66659 13.2C2.52514 13.2 2.38948 13.1438 2.28946 13.0438L1.15809 14.1752C1.55817 14.5752 2.10079 14.8 2.66659 14.8V13.2ZM2.28946 13.0438C2.18944 12.9438 2.13325 12.8081 2.13325 12.6667H0.533252C0.533252 13.2325 0.758013 13.7751 1.15809 14.1752L2.28946 13.0438ZM2.13325 12.6667V3.33333H0.533252V12.6667H2.13325ZM2.13325 3.33333C2.13325 3.19188 2.18944 3.05623 2.28946 2.95621L1.15809 1.82484C0.758013 2.22492 0.533252 2.76754 0.533252 3.33333H2.13325ZM2.28946 2.95621C2.38948 2.85619 2.52514 2.8 2.66659 2.8V1.2C2.10079 1.2 1.55817 1.42476 1.15809 1.82484L2.28946 2.95621ZM2.66659 2.8H5.99992V1.2H2.66659V2.8ZM5.33428 2.44376L6.66761 4.44376L7.99889 3.55624L6.66556 1.55624L5.33428 2.44376ZM7.33325 4.8H13.3333V3.2H7.33325V4.8ZM13.3333 4.8C13.4747 4.8 13.6104 4.85619 13.7104 4.95621L14.8417 3.82484C14.4417 3.42476 13.899 3.2 13.3333 3.2V4.8ZM13.7104 4.95621C13.8104 5.05623 13.8666 5.19188 13.8666 5.33333H15.4666C15.4666 4.76754 15.2418 4.22492 14.8417 3.82484L13.7104 4.95621ZM13.8666 5.33333V12.6667H15.4666V5.33333H13.8666ZM5.99992 10.1333H9.99992V8.53333H5.99992V10.1333Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconFolderMinus,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13507",
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
    example: ({ size }) => <IconFolderMinus size={size} />,
  },
);
