import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconUnlock = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.53216 2.58349C9.01636 2.20353 8.37778 2.02878 7.74038 2.09316C7.10298 2.15755 6.51224 2.45647 6.08284 2.93191C5.65345 3.40734 5.41602 4.02537 5.41667 4.66601L5.41667 6.58343H12.6667C13.8173 6.58343 14.75 7.51617 14.75 8.66677V13.3334C14.75 14.484 13.8173 15.4168 12.6667 15.4168H3.33333C2.18274 15.4168 1.25 14.484 1.25 13.3334V8.66677C1.25 7.51617 2.18274 6.58343 3.33333 6.58343H3.91667V4.66715M3.33333 8.08343C3.01117 8.08343 2.75 8.3446 2.75 8.66677V13.3334C2.75 13.6556 3.01117 13.9168 3.33333 13.9168H12.6667C12.9888 13.9168 13.25 13.6556 13.25 13.3334V8.66677C13.25 8.3446 12.9888 8.08343 12.6667 8.08343H3.33333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconUnlock, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13654", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUnlock size={size} /> });