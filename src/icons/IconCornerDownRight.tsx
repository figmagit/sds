import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCornerDownRight = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.66669 1.91669C3.0809 1.91669 3.41669 2.25247 3.41669 2.66669V7.33335C3.41669 7.84169 3.61862 8.3292 3.97807 8.68864C4.33751 9.04809 4.82502 9.25002 5.33335 9.25002H11.5227L9.46969 7.19702C9.1768 6.90412 9.1768 6.42925 9.46969 6.13636C9.76258 5.84346 10.2375 5.84346 10.5304 6.13636L13.8637 9.46969C14.1566 9.76258 14.1566 10.2375 13.8637 10.5304L10.5304 13.8637C10.2375 14.1566 9.76258 14.1566 9.46969 13.8637C9.1768 13.5708 9.1768 13.0959 9.46969 12.803L11.5227 10.75H5.33335C4.4272 10.75 3.55815 10.3901 2.91741 9.7493C2.27666 9.10855 1.91669 8.23951 1.91669 7.33335V2.66669C1.91669 2.25247 2.25247 1.91669 2.66669 1.91669Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconCornerDownRight, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13466", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerDownRight size={size} /> });