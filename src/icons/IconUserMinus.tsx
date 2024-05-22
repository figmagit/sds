import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconUserMinus = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12643)"><path fillRule="evenodd" clipRule="evenodd" d="M5.66669 2.75C4.60814 2.75 3.75002 3.60812 3.75002 4.66667C3.75002 5.72521 4.60814 6.58333 5.66669 6.58333C6.72523 6.58333 7.58335 5.72521 7.58335 4.66667C7.58335 3.60812 6.72523 2.75 5.66669 2.75ZM2.25002 4.66667C2.25002 2.77969 3.77971 1.25 5.66669 1.25C7.55366 1.25 9.08335 2.77969 9.08335 4.66667C9.08335 6.55364 7.55366 8.08333 5.66669 8.08333C3.77971 8.08333 2.25002 6.55364 2.25002 4.66667ZM10.5834 7.33333C10.5834 6.91912 10.9191 6.58333 11.3334 6.58333H15.3334C15.7476 6.58333 16.0834 6.91912 16.0834 7.33333C16.0834 7.74755 15.7476 8.08333 15.3334 8.08333H11.3334C10.9191 8.08333 10.5834 7.74755 10.5834 7.33333ZM0.917406 10.2507C1.55815 9.60997 2.4272 9.25 3.33335 9.25H8.00002C8.90618 9.25 9.77522 9.60997 10.416 10.2507C11.0567 10.8915 11.4167 11.7605 11.4167 12.6667V14C11.4167 14.4142 11.0809 14.75 10.6667 14.75C10.2525 14.75 9.91669 14.4142 9.91669 14V12.6667C9.91669 12.1583 9.71475 11.6708 9.35531 11.3114C8.99586 10.9519 8.50835 10.75 8.00002 10.75H3.33335C2.82502 10.75 2.33751 10.9519 1.97807 11.3114C1.61862 11.6708 1.41669 12.1583 1.41669 12.6667V14C1.41669 14.4142 1.0809 14.75 0.666687 14.75C0.252473 14.75 -0.083313 14.4142 -0.083313 14V12.6667C-0.083313 11.7605 0.276657 10.8915 0.917406 10.2507Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12643"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconUserMinus, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13658", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUserMinus size={size} /> });