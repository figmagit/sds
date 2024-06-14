import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconSkipForward = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M3.33325 2.66675L3.83301 2.04205C3.59287 1.84994 3.26387 1.81249 2.9867 1.94571C2.70953 2.07892 2.53325 2.35922 2.53325 2.66675H3.33325ZM9.99992 8.00008L10.4997 8.62478C10.6894 8.47296 10.7999 8.24311 10.7999 8.00008C10.7999 7.75705 10.6894 7.5272 10.4997 7.37539L9.99992 8.00008ZM3.33325 13.3334H2.53325C2.53325 13.6409 2.70953 13.9212 2.9867 14.0545C3.26387 14.1877 3.59287 14.1502 3.83301 13.9581L3.33325 13.3334ZM13.4666 3.33341C13.4666 2.89159 13.1084 2.53341 12.6666 2.53341C12.2248 2.53341 11.8666 2.89159 11.8666 3.33341H13.4666ZM11.8666 12.6667C11.8666 13.1086 12.2248 13.4667 12.6666 13.4667C13.1084 13.4667 13.4666 13.1086 13.4666 12.6667H11.8666ZM2.8335 3.29144L9.50016 8.62478L10.4997 7.37539L3.83301 2.04205L2.8335 3.29144ZM9.50016 7.37539L2.8335 12.7087L3.83301 13.9581L10.4997 8.62478L9.50016 7.37539ZM4.13325 13.3334V2.66675H2.53325V13.3334H4.13325ZM11.8666 3.33341V12.6667H13.4666V3.33341H11.8666Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconSkipForward,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13615",
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
    example: ({ size }) => <IconSkipForward size={size} />,
  },
);
