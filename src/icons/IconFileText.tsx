import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconFileText = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.5267 1.19352C2.9174 0.802822 3.4473 0.583328 3.99984 0.583328H9.33317C9.53208 0.583328 9.72285 0.662346 9.8635 0.802998L13.8635 4.803C14.0042 4.94365 14.0832 5.13442 14.0832 5.33333V13.3333C14.0832 13.8859 13.8637 14.4158 13.473 14.8065C13.0823 15.1972 12.5524 15.4167 11.9998 15.4167H3.99984C3.4473 15.4167 2.9174 15.1972 2.5267 14.8065C2.136 14.4158 1.9165 13.8859 1.9165 13.3333V2.66666C1.9165 2.11413 2.136 1.58422 2.5267 1.19352ZM3.99984 2.08333C3.84513 2.08333 3.69675 2.14479 3.58736 2.25418C3.47796 2.36358 3.4165 2.51195 3.4165 2.66666V13.3333C3.4165 13.488 3.47796 13.6364 3.58736 13.7458C3.69676 13.8552 3.84513 13.9167 3.99984 13.9167H11.9998C12.1545 13.9167 12.3029 13.8552 12.4123 13.7458C12.5217 13.6364 12.5832 13.488 12.5832 13.3333V6.08333H9.33317C9.13426 6.08333 8.94349 6.00431 8.80284 5.86366C8.66219 5.72301 8.58317 5.53224 8.58317 5.33333L8.58317 2.08333H3.99984ZM10.0832 3.14399L11.5225 4.58333H10.0832L10.0832 3.14399ZM4.58317 6C4.58317 5.58578 4.91896 5.25 5.33317 5.25H6.6665C7.08072 5.25 7.4165 5.58578 7.4165 6C7.4165 6.41421 7.08072 6.75 6.6665 6.75H5.33317C4.91896 6.75 4.58317 6.41421 4.58317 6ZM4.58317 8.66666C4.58317 8.25245 4.91896 7.91666 5.33317 7.91666H10.6665C11.0807 7.91666 11.4165 8.25245 11.4165 8.66666C11.4165 9.08088 11.0807 9.41666 10.6665 9.41666H5.33317C4.91896 9.41666 4.58317 9.08088 4.58317 8.66666ZM4.58317 11.3333C4.58317 10.9191 4.91896 10.5833 5.33317 10.5833H10.6665C11.0807 10.5833 11.4165 10.9191 11.4165 11.3333C11.4165 11.7475 11.0807 12.0833 10.6665 12.0833H5.33317C4.91896 12.0833 4.58317 11.7475 4.58317 11.3333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconFileText, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13500", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFileText size={size} /> });