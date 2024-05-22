import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMic = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12683)"><path fillRule="evenodd" clipRule="evenodd" d="M6.05562 0.722082C6.57134 0.206357 7.27082 -0.083374 8.00016 -0.083374C8.72951 -0.083374 9.42898 0.206357 9.94471 0.722082C10.4604 1.23781 10.7502 1.93728 10.7502 2.66663V7.99996C10.7502 8.72931 10.4604 9.42878 9.94471 9.9445C9.42898 10.4602 8.72951 10.75 8.00016 10.75C7.27082 10.75 6.57134 10.4602 6.05562 9.9445C5.53989 9.42878 5.25016 8.72931 5.25016 7.99996V2.66663C5.25016 1.93728 5.53989 1.23781 6.05562 0.722082ZM8.00016 1.41663C7.66864 1.41663 7.3507 1.54832 7.11628 1.78274C6.88186 2.01716 6.75016 2.3351 6.75016 2.66663V7.99996C6.75016 8.33148 6.88186 8.64942 7.11628 8.88384C7.3507 9.11826 7.66864 9.24996 8.00016 9.24996C8.33168 9.24996 8.64963 9.11826 8.88405 8.88384C9.11847 8.64942 9.25016 8.33148 9.25016 7.99996V2.66663C9.25016 2.33511 9.11847 2.01716 8.88405 1.78274C8.64963 1.54832 8.33168 1.41663 8.00016 1.41663ZM3.3335 5.91663C3.74771 5.91663 4.0835 6.25241 4.0835 6.66663V7.99996C4.0835 9.03872 4.49614 10.0349 5.23066 10.7695C5.96518 11.504 6.9614 11.9166 8.00016 11.9166C9.03893 11.9166 10.0351 11.504 10.7697 10.7695C11.5042 10.0349 11.9168 9.03872 11.9168 7.99996V6.66663C11.9168 6.25241 12.2526 5.91663 12.6668 5.91663C13.081 5.91663 13.4168 6.25241 13.4168 6.66663V7.99996C13.4168 9.43655 12.8461 10.8143 11.8303 11.8301C10.993 12.6675 9.90964 13.2024 8.75016 13.3645V14.5833H10.6668C11.081 14.5833 11.4168 14.9191 11.4168 15.3333C11.4168 15.7475 11.081 16.0833 10.6668 16.0833H5.3335C4.91928 16.0833 4.5835 15.7475 4.5835 15.3333C4.5835 14.9191 4.91928 14.5833 5.3335 14.5833H7.25016V13.3645C6.09069 13.2024 5.00738 12.6675 4.17 11.8301C3.15418 10.8143 2.5835 9.43655 2.5835 7.99996V6.66663C2.5835 6.25241 2.91928 5.91663 3.3335 5.91663Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12683"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMic, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13555", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMic size={size} /> });