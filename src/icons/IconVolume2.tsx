import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconVolume2 = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M7.33331 3.33329H8.13331C8.13331 3.02576 7.95704 2.74546 7.67986 2.61225C7.40269 2.47903 7.07369 2.51648 6.83356 2.70859L7.33331 3.33329ZM3.99998 5.99995V6.79995C4.18164 6.79995 4.35789 6.73813 4.49974 6.62465L3.99998 5.99995ZM1.33331 5.99995V5.19995C0.891485 5.19995 0.533313 5.55813 0.533313 5.99995H1.33331ZM1.33331 9.99996H0.533313C0.533313 10.4418 0.891485 10.8 1.33331 10.8L1.33331 9.99996ZM3.99998 9.99996L4.49974 9.37526C4.35789 9.26178 4.18164 9.19995 3.99998 9.19995V9.99996ZM7.33331 12.6666L6.83356 13.2913C7.07369 13.4834 7.40269 13.5209 7.67986 13.3877C7.95704 13.2544 8.13331 12.9741 8.13331 12.6666H7.33331ZM13.2791 2.72102C12.9667 2.40855 12.4602 2.40848 12.1477 2.72085C11.8352 3.03322 11.8352 3.53975 12.1475 3.85222L13.2791 2.72102ZM12.1475 12.1477C11.8352 12.4602 11.8352 12.9667 12.1477 13.2791C12.4602 13.5914 12.9667 13.5914 13.2791 13.2789L12.1475 12.1477ZM10.9257 5.07435C10.6134 4.76189 10.1068 4.76181 9.79438 5.07418C9.48191 5.38656 9.48184 5.89309 9.79421 6.20555L10.9257 5.07435ZM9.79421 9.78769C9.48184 10.1002 9.48191 10.6067 9.79438 10.9191C10.1068 11.2314 10.6134 11.2314 10.9257 10.9189L9.79421 9.78769ZM6.83356 2.70859L3.50022 5.37526L4.49974 6.62465L7.83307 3.95798L6.83356 2.70859ZM3.99998 5.19995H1.33331V6.79995H3.99998V5.19995ZM0.533313 5.99995V9.99996H2.13331V5.99995H0.533313ZM1.33331 10.8H3.99998V9.19995H1.33331V10.8ZM3.50022 10.6247L6.83356 13.2913L7.83307 12.0419L4.49974 9.37526L3.50022 10.6247ZM8.13331 12.6666V3.33329H6.53331V12.6666H8.13331ZM12.1475 3.85222C13.2474 4.95238 13.8652 6.44432 13.8652 7.99995H15.4652C15.4652 6.02006 14.6789 4.12123 13.2791 2.72102L12.1475 3.85222ZM13.8652 7.99995C13.8652 9.55558 13.2474 11.0475 12.1475 12.1477L13.2791 13.2789C14.6789 11.8787 15.4652 9.97985 15.4652 7.99995H13.8652ZM9.79421 6.20555C10.2691 6.68062 10.5359 7.32487 10.5359 7.99662H12.1359C12.1359 6.90061 11.7006 5.84947 10.9257 5.07435L9.79421 6.20555ZM10.5359 7.99662C10.5359 8.66837 10.2691 9.31262 9.79421 9.78769L10.9257 10.9189C11.7006 10.1438 12.1359 9.09263 12.1359 7.99662H10.5359Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconVolume2,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13665",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVolume2 size={size} />,
  },
);
