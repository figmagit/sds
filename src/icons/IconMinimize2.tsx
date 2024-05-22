import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMinimize2 = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.5303 1.46967C14.8232 1.76256 14.8232 2.23744 14.5303 2.53033L11.144 5.91667H13.3333C13.7475 5.91667 14.0833 6.25245 14.0833 6.66667C14.0833 7.08088 13.7475 7.41667 13.3333 7.41667H9.33333C8.91912 7.41667 8.58333 7.08088 8.58333 6.66667V2.66667C8.58333 2.25245 8.91912 1.91667 9.33333 1.91667C9.74755 1.91667 10.0833 2.25245 10.0833 2.66667V4.85601L13.4697 1.46967C13.7626 1.17678 14.2374 1.17678 14.5303 1.46967ZM1.91667 9.33333C1.91667 8.91912 2.25245 8.58333 2.66667 8.58333H6.66667C7.08088 8.58333 7.41667 8.91912 7.41667 9.33333V13.3333C7.41667 13.7475 7.08088 14.0833 6.66667 14.0833C6.25245 14.0833 5.91667 13.7475 5.91667 13.3333V11.144L2.53033 14.5303C2.23744 14.8232 1.76256 14.8232 1.46967 14.5303C1.17678 14.2374 1.17678 13.7626 1.46967 13.4697L4.85601 10.0833H2.66667C2.25245 10.0833 1.91667 9.74755 1.91667 9.33333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMinimize2, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13554", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinimize2 size={size} /> });