import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconLogOut = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2.75C3.17862 2.75 3.03025 2.81146 2.92085 2.92085C2.81146 3.03025 2.75 3.17862 2.75 3.33333V12.6667C2.75 12.8214 2.81146 12.9697 2.92085 13.0791C3.03025 13.1885 3.17862 13.25 3.33333 13.25H6C6.41421 13.25 6.75 13.5858 6.75 14C6.75 14.4142 6.41421 14.75 6 14.75H3.33333C2.7808 14.75 2.2509 14.5305 1.86019 14.1398C1.46949 13.7491 1.25 13.2192 1.25 12.6667V3.33333C1.25 2.7808 1.46949 2.2509 1.86019 1.86019C2.2509 1.46949 2.7808 1.25 3.33333 1.25H6C6.41421 1.25 6.75 1.58579 6.75 2C6.75 2.41421 6.41421 2.75 6 2.75H3.33333ZM10.1363 4.13634C10.4292 3.84344 10.9041 3.84344 11.197 4.13634L14.5303 7.46967C14.671 7.61032 14.75 7.80109 14.75 8C14.75 8.19891 14.671 8.38968 14.5303 8.53033L11.197 11.8637C10.9041 12.1566 10.4292 12.1566 10.1363 11.8637C9.84344 11.5708 9.84344 11.0959 10.1363 10.803L12.1893 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H12.1893L10.1363 5.197C9.84344 4.9041 9.84344 4.42923 10.1363 4.13634Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconLogOut, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13543", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLogOut size={size} /> });