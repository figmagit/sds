import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconFolderMinus = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.66659 2.75C2.51188 2.75 2.3635 2.81146 2.25411 2.92085C2.14471 3.03025 2.08325 3.17862 2.08325 3.33333V12.6667C2.08325 12.8214 2.14471 12.9697 2.25411 13.0791C2.3635 13.1885 2.51188 13.25 2.66659 13.25H13.3333C13.488 13.25 13.6363 13.1885 13.7457 13.0791C13.8551 12.9697 13.9166 12.8214 13.9166 12.6667V5.33333C13.9166 5.17862 13.8551 5.03025 13.7457 4.92085C13.6363 4.81146 13.488 4.75 13.3333 4.75H7.33325C7.08249 4.75 6.84831 4.62467 6.70921 4.41603L5.59853 2.75H2.66659ZM1.19345 1.86019C1.58415 1.46949 2.11405 1.25 2.66659 1.25H5.99992C6.25068 1.25 6.48486 1.37533 6.62396 1.58397L7.73464 3.25H13.3333C13.8858 3.25 14.4157 3.46949 14.8064 3.86019C15.1971 4.25089 15.4166 4.7808 15.4166 5.33333V12.6667C15.4166 13.2192 15.1971 13.7491 14.8064 14.1398C14.4157 14.5305 13.8858 14.75 13.3333 14.75H2.66659C2.11405 14.75 1.58415 14.5305 1.19345 14.1398C0.802745 13.7491 0.583252 13.2192 0.583252 12.6667V3.33333C0.583252 2.7808 0.802745 2.2509 1.19345 1.86019ZM5.24992 9.33333C5.24992 8.91912 5.58571 8.58333 5.99992 8.58333H9.99992C10.4141 8.58333 10.7499 8.91912 10.7499 9.33333C10.7499 9.74755 10.4141 10.0833 9.99992 10.0833H5.99992C5.58571 10.0833 5.24992 9.74755 5.24992 9.33333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconFolderMinus, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13507", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFolderMinus size={size} /> });