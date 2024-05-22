import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPower = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.99992 0.583252C8.41413 0.583252 8.74992 0.919038 8.74992 1.33325V7.99992C8.74992 8.41413 8.41413 8.74992 7.99992 8.74992C7.58571 8.74992 7.24992 8.41413 7.24992 7.99992V1.33325C7.24992 0.919038 7.58571 0.583252 7.99992 0.583252ZM4.2835 3.89617C4.57644 4.18901 4.57651 4.66389 4.28367 4.95683C3.54961 5.69112 3.04977 6.62659 2.84734 7.64494C2.6449 8.66329 2.74897 9.71881 3.14638 10.678C3.54379 11.6372 4.2167 12.4571 5.08002 13.0339C5.94334 13.6107 6.95831 13.9185 7.99659 13.9185C9.03486 13.9185 10.0498 13.6107 10.9132 13.0339C11.7765 12.4571 12.4494 11.6372 12.8468 10.678C13.2442 9.71881 13.3483 8.66329 13.1458 7.64494C12.9434 6.62659 12.4436 5.69112 11.7095 4.95683C11.4167 4.66389 11.4167 4.18901 11.7097 3.89617C12.0026 3.60332 12.4775 3.6034 12.7703 3.89634C13.7141 4.84043 14.3568 6.04317 14.617 7.35248C14.8773 8.6618 14.7435 10.0189 14.2326 11.2522C13.7216 12.4854 12.8564 13.5395 11.7465 14.2811C10.6365 15.0227 9.33152 15.4185 7.99659 15.4185C6.66166 15.4185 5.3567 15.0227 4.24672 14.2811C3.13673 13.5395 2.27157 12.4854 1.76061 11.2522C1.24965 10.0189 1.11585 8.6618 1.37612 7.35248C1.63639 6.04317 2.27905 4.84043 3.22284 3.89634C3.51568 3.6034 3.99055 3.60332 4.2835 3.89617Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPower, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13592", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPower size={size} /> });