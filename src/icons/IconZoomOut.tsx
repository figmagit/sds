import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconZoomOut = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.33333 2.75C4.80203 2.75 2.75 4.80203 2.75 7.33333C2.75 9.86464 4.80203 11.9167 7.33333 11.9167C8.566 11.9167 9.68501 11.4301 10.5087 10.6384C10.5274 10.6146 10.5477 10.5916 10.5697 10.5697C10.5916 10.5477 10.6146 10.5274 10.6384 10.5087C11.4301 9.68501 11.9167 8.566 11.9167 7.33333C11.9167 4.80203 9.86464 2.75 7.33333 2.75ZM12.1326 11.0719C12.9373 10.0405 13.4167 8.74289 13.4167 7.33333C13.4167 3.9736 10.6931 1.25 7.33333 1.25C3.9736 1.25 1.25 3.9736 1.25 7.33333C1.25 10.6931 3.9736 13.4167 7.33333 13.4167C8.74289 13.4167 10.0405 12.9373 11.0719 12.1326L13.4697 14.5303C13.7626 14.8232 14.2374 14.8232 14.5303 14.5303C14.8232 14.2374 14.8232 13.7626 14.5303 13.4697L12.1326 11.0719ZM4.58333 7.33333C4.58333 6.91912 4.91912 6.58333 5.33333 6.58333H9.33333C9.74755 6.58333 10.0833 6.91912 10.0833 7.33333C10.0833 7.74755 9.74755 8.08333 9.33333 8.08333H5.33333C4.91912 8.08333 4.58333 7.74755 4.58333 7.33333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconZoomOut, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13681", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconZoomOut size={size} /> });