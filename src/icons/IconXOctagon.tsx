import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconXOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12924)"><path fillRule="evenodd" clipRule="evenodd" d="M4.70966 0.803166C4.85032 0.662514 5.04108 0.583496 5.24 0.583496H10.76C10.9589 0.583496 11.1497 0.662514 11.2903 0.803166L15.197 4.70983C15.3376 4.85048 15.4167 5.04125 15.4167 5.24016V10.7602C15.4167 10.9591 15.3376 11.1498 15.197 11.2905L11.2903 15.1972C11.1497 15.3378 10.9589 15.4168 10.76 15.4168H5.24C5.04108 15.4168 4.85032 15.3378 4.70966 15.1972L0.802998 11.2905C0.662346 11.1498 0.583328 10.9591 0.583328 10.7602V5.24016C0.583328 5.04125 0.662346 4.85048 0.802998 4.70983L4.70966 0.803166ZM5.55066 2.0835L2.08333 5.55082V10.4495L5.55065 13.9168H10.4493L13.9167 10.4495V5.55082L10.4493 2.0835H5.55066ZM5.46967 5.46983C5.76256 5.17694 6.23743 5.17694 6.53033 5.46983L8 6.9395L9.46967 5.46983C9.76256 5.17694 10.2374 5.17694 10.5303 5.46983C10.8232 5.76273 10.8232 6.2376 10.5303 6.53049L9.06066 8.00016L10.5303 9.46983C10.8232 9.76273 10.8232 10.2376 10.5303 10.5305C10.2374 10.8234 9.76256 10.8234 9.46967 10.5305L8 9.06082L6.53033 10.5305C6.23743 10.8234 5.76256 10.8234 5.46967 10.5305C5.17677 10.2376 5.17677 9.76273 5.46967 9.46983L6.93934 8.00016L5.46967 6.53049C5.17677 6.2376 5.17677 5.76273 5.46967 5.46983Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12924"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconXOctagon, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13673", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconXOctagon size={size} /> });