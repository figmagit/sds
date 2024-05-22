import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconUserX = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12639)"><path fillRule="evenodd" clipRule="evenodd" d="M5.66663 2.75C4.60808 2.75 3.74996 3.60812 3.74996 4.66667C3.74996 5.72521 4.60808 6.58333 5.66663 6.58333C6.72517 6.58333 7.58329 5.72521 7.58329 4.66667C7.58329 3.60812 6.72517 2.75 5.66663 2.75ZM2.24996 4.66667C2.24996 2.77969 3.77965 1.25 5.66663 1.25C7.5536 1.25 9.08329 2.77969 9.08329 4.66667C9.08329 6.55364 7.5536 8.08333 5.66663 8.08333C3.77965 8.08333 2.24996 6.55364 2.24996 4.66667ZM11.4696 4.803C11.7625 4.51011 12.2374 4.51011 12.5303 4.803L13.6666 5.93934L14.803 4.803C15.0959 4.51011 15.5707 4.51011 15.8636 4.803C16.1565 5.0959 16.1565 5.57077 15.8636 5.86366L14.7273 7L15.8636 8.13634C16.1565 8.42923 16.1565 8.9041 15.8636 9.197C15.5707 9.48989 15.0959 9.48989 14.803 9.197L13.6666 8.06066L12.5303 9.197C12.2374 9.48989 11.7625 9.48989 11.4696 9.197C11.1767 8.9041 11.1767 8.42923 11.4696 8.13634L12.606 7L11.4696 5.86366C11.1767 5.57077 11.1767 5.0959 11.4696 4.803ZM0.917345 10.2507C1.55809 9.60997 2.42714 9.25 3.33329 9.25H7.99996C8.90612 9.25 9.77516 9.60997 10.4159 10.2507C11.0567 10.8915 11.4166 11.7605 11.4166 12.6667V14C11.4166 14.4142 11.0808 14.75 10.6666 14.75C10.2524 14.75 9.91663 14.4142 9.91663 14V12.6667C9.91663 12.1583 9.71469 11.6708 9.35525 11.3114C8.9958 10.9519 8.50829 10.75 7.99996 10.75H3.33329C2.82496 10.75 2.33745 10.9519 1.978 11.3114C1.61856 11.6708 1.41663 12.1583 1.41663 12.6667V14C1.41663 14.4142 1.08084 14.75 0.666626 14.75C0.252412 14.75 -0.083374 14.4142 -0.083374 14V12.6667C-0.083374 11.7605 0.276595 10.8915 0.917345 10.2507Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12639"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconUserX, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13660", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUserX size={size} /> });