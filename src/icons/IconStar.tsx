import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconStar = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.99994 0.583252C8.28541 0.583252 8.54612 0.745306 8.67247 1.00128L10.5581 4.82143L14.7751 5.4378C15.0575 5.47908 15.292 5.67709 15.38 5.94859C15.4681 6.2201 15.3944 6.51804 15.1899 6.71719L12.1392 9.68861L12.8591 13.8865C12.9074 14.1679 12.7917 14.4522 12.5607 14.62C12.3298 14.7878 12.0235 14.8099 11.7709 14.6771L7.99994 12.694L4.22903 14.6771C3.97634 14.8099 3.67012 14.7878 3.43914 14.62C3.20816 14.4522 3.09247 14.1679 3.14073 13.8865L3.86072 9.68861L0.809974 6.71719C0.605511 6.51804 0.531806 6.2201 0.619839 5.94859C0.707872 5.67709 0.942383 5.47908 1.2248 5.4378L5.44174 4.82143L7.32741 1.00128C7.45376 0.745306 7.71448 0.583252 7.99994 0.583252ZM7.99994 3.02769L6.61247 5.83855C6.50332 6.05969 6.29243 6.21303 6.04841 6.2487L2.94458 6.70237L5.18991 8.88932C5.36681 9.06162 5.44756 9.30997 5.40581 9.55337L4.87608 12.642L7.65085 11.1828C7.86939 11.0679 8.13049 11.0679 8.34903 11.1828L11.1238 12.642L10.5941 9.55337C10.5523 9.30997 10.6331 9.06162 10.81 8.88932L13.0553 6.70237L9.95147 6.2487C9.70745 6.21303 9.49657 6.05969 9.38741 5.83855L7.99994 3.02769Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconStar, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13623", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconStar size={size} /> });