import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconChevronsLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6.76765 11.899C7.08007 12.2114 7.5866 12.2114 7.89902 11.899C8.21144 11.5866 8.21144 11.08 7.89902 10.7676L6.76765 11.899ZM4 7.99996L3.43431 7.43427C3.1219 7.74669 3.1219 8.25323 3.43431 8.56564L4 7.99996ZM7.89902 5.23231C8.21144 4.91989 8.21144 4.41336 7.89902 4.10094C7.5866 3.78852 7.08007 3.78852 6.76765 4.10094L7.89902 5.23231ZM11.4343 11.899C11.7467 12.2114 12.2533 12.2114 12.5657 11.899C12.8781 11.5866 12.8781 11.08 12.5657 10.7676L11.4343 11.899ZM8.66667 7.99996L8.10098 7.43427C7.95095 7.5843 7.86667 7.78779 7.86667 7.99996C7.86667 8.21213 7.95095 8.41562 8.10098 8.56564L8.66667 7.99996ZM12.5657 5.23231C12.8781 4.91989 12.8781 4.41336 12.5657 4.10094C12.2533 3.78852 11.7467 3.78852 11.4343 4.10094L12.5657 5.23231ZM7.89902 10.7676L4.56569 7.43427L3.43431 8.56564L6.76765 11.899L7.89902 10.7676ZM4.56569 8.56564L7.89902 5.23231L6.76765 4.10094L3.43431 7.43427L4.56569 8.56564ZM12.5657 10.7676L9.23235 7.43427L8.10098 8.56564L11.4343 11.899L12.5657 10.7676ZM9.23235 8.56564L12.5657 5.23231L11.4343 4.10094L8.10098 7.43427L9.23235 8.56564Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconChevronsLeft,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13167",
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
    example: ({ size }) => <IconChevronsLeft size={size} />,
  },
);
