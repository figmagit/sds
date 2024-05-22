import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconTv = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12509)"><path fillRule="evenodd" clipRule="evenodd" d="M4.13633 0.802922C4.42922 0.510029 4.9041 0.510029 5.19699 0.802922L8 3.60593L10.803 0.802922C11.0959 0.510029 11.5708 0.510029 11.8637 0.802922C12.1566 1.09582 12.1566 1.57069 11.8637 1.86358L9.81065 3.91659H13.3333C14.4839 3.91659 15.4167 4.84933 15.4167 5.99992V13.3333C15.4167 14.4838 14.4839 15.4166 13.3333 15.4166H2.66666C1.51607 15.4166 0.583328 14.4838 0.583328 13.3333V5.99992C0.583328 4.84933 1.51607 3.91659 2.66666 3.91659H6.18933L4.13633 1.86358C3.84344 1.57069 3.84344 1.09582 4.13633 0.802922ZM2.66666 5.41659C2.3445 5.41659 2.08333 5.67775 2.08333 5.99992V13.3333C2.08333 13.6554 2.3445 13.9166 2.66666 13.9166H13.3333C13.6555 13.9166 13.9167 13.6554 13.9167 13.3333V5.99992C13.9167 5.67775 13.6555 5.41659 13.3333 5.41659H2.66666Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12509"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTv, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13648", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTv size={size} /> });