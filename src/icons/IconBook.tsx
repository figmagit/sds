import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconBook = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.33317 2.08325C4.09006 2.08325 3.8569 2.17983 3.68499 2.35174C3.51308 2.52365 3.4165 2.7568 3.4165 2.99992V10.7639C3.70466 10.6457 4.0157 10.5833 4.33317 10.5833H12.5832V2.08325H4.33317ZM14.0832 1.33325C14.0832 0.919038 13.7474 0.583252 13.3332 0.583252H4.33317C3.69223 0.583252 3.07754 0.837864 2.62433 1.29108C2.17112 1.74429 1.9165 2.35898 1.9165 2.99992V12.9999C1.9165 13.6409 2.17112 14.2555 2.62433 14.7088C3.07754 15.162 3.69223 15.4166 4.33317 15.4166H13.3332C13.7474 15.4166 14.0832 15.0808 14.0832 14.6666V1.33325ZM12.5832 12.0833H4.33317C4.09006 12.0833 3.8569 12.1798 3.68499 12.3517C3.51308 12.5236 3.4165 12.7568 3.4165 12.9999C3.4165 13.243 3.51308 13.4762 3.68499 13.6481C3.8569 13.82 4.09006 13.9166 4.33317 13.9166H12.5832V12.0833Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconBook, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13052", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBook size={size} /> });