import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconRewind = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M7.33325 12.6666L6.8421 13.2981C7.08328 13.4857 7.41026 13.5195 7.68473 13.3852C7.95921 13.251 8.13325 12.9721 8.13325 12.6666H7.33325ZM1.33325 7.99992L0.842099 7.36844C0.64723 7.52 0.533252 7.75305 0.533252 7.99992C0.533252 8.24679 0.64723 8.47984 0.842099 8.6314L1.33325 7.99992ZM7.33325 3.33325H8.13325C8.13325 3.02771 7.95921 2.74884 7.68473 2.6146C7.41026 2.48036 7.08328 2.51418 6.8421 2.70177L7.33325 3.33325ZM14.6666 12.6666L14.1754 13.2981C14.4166 13.4857 14.7436 13.5195 15.0181 13.3852C15.2925 13.251 15.4666 12.9721 15.4666 12.6666H14.6666ZM8.66658 7.99992L8.17543 7.36844C7.98056 7.52 7.86658 7.75305 7.86658 7.99992C7.86658 8.24679 7.98056 8.47984 8.17543 8.6314L8.66658 7.99992ZM14.6666 3.33325H15.4666C15.4666 3.02771 15.2925 2.74884 15.0181 2.6146C14.7436 2.48036 14.4166 2.51418 14.1754 2.70177L14.6666 3.33325ZM7.8244 12.0351L1.8244 7.36844L0.842099 8.6314L6.8421 13.2981L7.8244 12.0351ZM1.8244 8.6314L7.8244 3.96473L6.8421 2.70177L0.842099 7.36844L1.8244 8.6314ZM6.53325 3.33325V12.6666H8.13325V3.33325H6.53325ZM15.1577 12.0351L9.15774 7.36844L8.17543 8.6314L14.1754 13.2981L15.1577 12.0351ZM9.15774 8.6314L15.1577 3.96473L14.1754 2.70177L8.17543 7.36844L9.15774 8.6314ZM13.8666 3.33325V12.6666H15.4666V3.33325H13.8666Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconRewind,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13598",
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
    example: ({ size }) => <IconRewind size={size} />,
  },
);
