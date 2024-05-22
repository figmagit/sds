import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconColumns = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.86019 1.86019C2.2509 1.46949 2.7808 1.25 3.33333 1.25H12.6667C13.2192 1.25 13.7491 1.46949 14.1398 1.86019C14.5305 2.2509 14.75 2.7808 14.75 3.33333V12.6667C14.75 13.2192 14.5305 13.7491 14.1398 14.1398C13.7491 14.5305 13.2192 14.75 12.6667 14.75H3.33333C2.7808 14.75 2.2509 14.5305 1.86019 14.1398C1.46949 13.7491 1.25 13.2192 1.25 12.6667V3.33333C1.25 2.7808 1.46949 2.2509 1.86019 1.86019ZM3.33333 2.75C3.17862 2.75 3.03025 2.81146 2.92085 2.92085C2.81146 3.03025 2.75 3.17862 2.75 3.33333V12.6667C2.75 12.8214 2.81146 12.9697 2.92085 13.0791C3.03025 13.1885 3.17862 13.25 3.33333 13.25H7.25V2.75H3.33333ZM8.75 2.75V13.25H12.6667C12.8214 13.25 12.9698 13.1885 13.0791 13.0791C13.1885 12.9698 13.25 12.8214 13.25 12.6667V3.33333C13.25 3.17862 13.1885 3.03025 13.0791 2.92085C12.9697 2.81146 12.8214 2.75 12.6667 2.75H8.75Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconColumns, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13185", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconColumns size={size} /> });