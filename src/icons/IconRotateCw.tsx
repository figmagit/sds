import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconRotateCw = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12600)"><path fillRule="evenodd" clipRule="evenodd" d="M8.73998 2.80326C7.61296 2.6434 6.46452 2.85417 5.46771 3.4038C4.4709 3.95343 3.67973 4.81215 3.21342 5.85055C2.74712 6.88895 2.63093 8.05078 2.88238 9.16096C3.13383 10.2711 3.7393 11.2695 4.60753 12.0057C5.47576 12.7418 6.55973 13.1758 7.69608 13.2423C8.83244 13.3087 9.95962 13.0041 10.9078 12.3742C11.8559 11.7443 12.5737 10.8234 12.9528 9.75009C13.0908 9.35954 13.5193 9.15478 13.9098 9.29277C14.3004 9.43075 14.5051 9.85921 14.3672 10.2498C13.8796 11.6297 12.9568 12.8138 11.7378 13.6236C10.5187 14.4335 9.06951 14.8252 7.60848 14.7397C6.14745 14.6542 4.75378 14.0962 3.63748 13.1498C2.52118 12.2033 1.74273 10.9197 1.41944 9.49231C1.09615 8.06494 1.24552 6.57116 1.84506 5.23607C2.4446 3.90098 3.46182 2.79691 4.74343 2.09025C6.02504 1.38358 7.50161 1.11259 8.95064 1.31812C10.3958 1.52311 11.7355 2.19099 12.7689 3.22149L14.5833 4.93013V2.6666C14.5833 2.25238 14.9191 1.9166 15.3333 1.9166C15.7476 1.9166 16.0833 2.25238 16.0833 2.6666V6.6666C16.0833 7.08081 15.7476 7.4166 15.3333 7.4166H11.3333C10.9191 7.4166 10.5833 7.08081 10.5833 6.6666C10.5833 6.25238 10.9191 5.9166 11.3333 5.9166H13.4429L11.7325 4.30594C11.727 4.30074 11.7215 4.29546 11.7162 4.29009C10.9115 3.48494 9.867 2.96312 8.73998 2.80326Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12600"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconRotateCw, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13600", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconRotateCw size={size} /> });