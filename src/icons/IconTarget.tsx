import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconTarget = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12523)"><path fillRule="evenodd" clipRule="evenodd" d="M8.00004 2.08325C4.73236 2.08325 2.08337 4.73223 2.08337 7.99992C2.08337 11.2676 4.73236 13.9166 8.00004 13.9166C11.2677 13.9166 13.9167 11.2676 13.9167 7.99992C13.9167 4.73223 11.2677 2.08325 8.00004 2.08325ZM0.583374 7.99992C0.583374 3.90381 3.90393 0.583252 8.00004 0.583252C12.0962 0.583252 15.4167 3.90381 15.4167 7.99992C15.4167 12.096 12.0962 15.4166 8.00004 15.4166C3.90393 15.4166 0.583374 12.096 0.583374 7.99992ZM8.00004 4.74992C6.20512 4.74992 4.75004 6.20499 4.75004 7.99992C4.75004 9.79484 6.20512 11.2499 8.00004 11.2499C9.79497 11.2499 11.25 9.79484 11.25 7.99992C11.25 6.20499 9.79497 4.74992 8.00004 4.74992ZM3.25004 7.99992C3.25004 5.37657 5.37669 3.24992 8.00004 3.24992C10.6234 3.24992 12.75 5.37657 12.75 7.99992C12.75 10.6233 10.6234 12.7499 8.00004 12.7499C5.37669 12.7499 3.25004 10.6233 3.25004 7.99992ZM8.00004 7.41659C7.67788 7.41659 7.41671 7.67775 7.41671 7.99992C7.41671 8.32208 7.67787 8.58325 8.00004 8.58325C8.32221 8.58325 8.58337 8.32208 8.58337 7.99992C8.58337 7.67775 8.32221 7.41659 8.00004 7.41659ZM5.91671 7.99992C5.91671 6.84933 6.84945 5.91659 8.00004 5.91659C9.15063 5.91659 10.0834 6.84933 10.0834 7.99992C10.0834 9.15051 9.15063 10.0833 8.00004 10.0833C6.84945 10.0833 5.91671 9.15051 5.91671 7.99992Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12523"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTarget, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13631", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTarget size={size} /> });