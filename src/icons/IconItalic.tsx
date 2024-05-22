import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconItalic = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.98276 1.91665H6.66671C6.25249 1.91665 5.91671 2.25243 5.91671 2.66665C5.91671 3.08086 6.25249 3.41665 6.66671 3.41665H8.91779L5.48029 12.5833H3.33337C2.91916 12.5833 2.58337 12.9191 2.58337 13.3333C2.58337 13.7475 2.91916 14.0833 3.33337 14.0833H5.98258C5.99417 14.0836 6.00574 14.0836 6.01728 14.0833H9.33337C9.74759 14.0833 10.0834 13.7475 10.0834 13.3333C10.0834 12.9191 9.74759 12.5833 9.33337 12.5833H7.08229L10.5198 3.41665H12.6667C13.0809 3.41665 13.4167 3.08086 13.4167 2.66665C13.4167 2.25243 13.0809 1.91665 12.6667 1.91665H10.0175C10.0059 1.91637 9.99433 1.91638 9.98276 1.91665Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconItalic, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13530", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconItalic size={size} /> });