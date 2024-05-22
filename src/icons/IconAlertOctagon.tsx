import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconAlertOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_11424)"><path fillRule="evenodd" clipRule="evenodd" d="M4.70971 0.802922C4.85036 0.66227 5.04113 0.583252 5.24004 0.583252H10.76C10.959 0.583252 11.1497 0.66227 11.2904 0.802922L15.197 4.70959C15.3377 4.85024 15.4167 5.04101 15.4167 5.23992V10.7599C15.4167 10.9588 15.3377 11.1496 15.197 11.2902L11.2904 15.1969C11.1497 15.3376 10.959 15.4166 10.76 15.4166H5.24004C5.04113 15.4166 4.85036 15.3376 4.70971 15.1969L0.803044 11.2902C0.662392 11.1496 0.583374 10.9588 0.583374 10.7599V5.23992C0.583374 5.04101 0.662392 4.85024 0.803044 4.70959L4.70971 0.802922ZM5.5507 2.08325L2.08337 5.55058V10.4493L5.5507 13.9166H10.4494L13.9167 10.4493V5.55058L10.4494 2.08325H5.5507ZM8.00004 4.58325C8.41425 4.58325 8.75004 4.91904 8.75004 5.33325V7.99992C8.75004 8.41413 8.41425 8.74992 8.00004 8.74992C7.58583 8.74992 7.25004 8.41413 7.25004 7.99992V5.33325C7.25004 4.91904 7.58583 4.58325 8.00004 4.58325ZM7.25004 10.6666C7.25004 10.2524 7.58583 9.91659 8.00004 9.91659H8.00671C8.42092 9.91659 8.75671 10.2524 8.75671 10.6666C8.75671 11.0808 8.42092 11.4166 8.00671 11.4166H8.00004C7.58583 11.4166 7.25004 11.0808 7.25004 10.6666Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_11424"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconAlertOctagon, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13021", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAlertOctagon size={size} /> });