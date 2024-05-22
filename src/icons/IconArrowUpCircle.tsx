import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowUpCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12843)"><path fillRule="evenodd" clipRule="evenodd" d="M8.00004 2.08325C4.73236 2.08325 2.08337 4.73223 2.08337 7.99992C2.08337 11.2676 4.73236 13.9166 8.00004 13.9166C11.2677 13.9166 13.9167 11.2676 13.9167 7.99992C13.9167 4.73223 11.2677 2.08325 8.00004 2.08325ZM0.583374 7.99992C0.583374 3.90381 3.90393 0.583252 8.00004 0.583252C12.0962 0.583252 15.4167 3.90381 15.4167 7.99992C15.4167 12.096 12.0962 15.4166 8.00004 15.4166C3.90393 15.4166 0.583374 12.096 0.583374 7.99992ZM4.80304 7.46959L7.46971 4.80292C7.7626 4.51003 8.23748 4.51003 8.53037 4.80292L11.197 7.46959C11.4899 7.76248 11.4899 8.23736 11.197 8.53025C10.9041 8.82314 10.4293 8.82314 10.1364 8.53025L8.75004 7.14391L8.75004 10.6666C8.75004 11.0808 8.41425 11.4166 8.00004 11.4166C7.58583 11.4166 7.25004 11.0808 7.25004 10.6666L7.25004 7.14391L5.8637 8.53025C5.57081 8.82314 5.09594 8.82314 4.80304 8.53025C4.51015 8.23736 4.51015 7.76248 4.80304 7.46959Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12843"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconArrowUpCircle, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13038", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUpCircle size={size} /> });