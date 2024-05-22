import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconHome = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.53954 0.741299C7.81038 0.530651 8.18962 0.530651 8.46046 0.741299L14.4605 5.40797C14.6431 5.55006 14.75 5.76854 14.75 5.99998V13.3333C14.75 13.8858 14.5305 14.4158 14.1398 14.8065C13.7491 15.1972 13.2192 15.4166 12.6667 15.4166H3.33333C2.7808 15.4166 2.25089 15.1972 1.86019 14.8065C1.46949 14.4158 1.25 13.8858 1.25 13.3333V5.99998C1.25 5.76854 1.35685 5.55006 1.53954 5.40797L7.53954 0.741299ZM6.75 13.9166H9.25V8.74998H6.75V13.9166ZM10.75 13.9166V7.99998C10.75 7.58577 10.4142 7.24998 10 7.24998H6C5.58579 7.24998 5.25 7.58577 5.25 7.99998V13.9166H3.33333C3.17862 13.9166 3.03025 13.8552 2.92085 13.7458C2.81146 13.6364 2.75 13.488 2.75 13.3333V6.36679L8 2.28346L13.25 6.36679V13.3333C13.25 13.488 13.1885 13.6364 13.0791 13.7458C12.9697 13.8552 12.8214 13.9166 12.6667 13.9166H10.75Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconHome, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13527", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconHome size={size} /> });