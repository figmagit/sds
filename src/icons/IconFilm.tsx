import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconFilm = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15769)">
      <path
        d="M5.46665 1.33333C5.46665 0.891504 5.10847 0.533332 4.66665 0.533332C4.22482 0.533332 3.86665 0.891504 3.86665 1.33333H5.46665ZM3.86665 14.6667C3.86665 15.1085 4.22482 15.4667 4.66665 15.4667C5.10847 15.4667 5.46665 15.1085 5.46665 14.6667H3.86665ZM12.1333 1.33333C12.1333 0.891504 11.7751 0.533332 11.3333 0.533332C10.8915 0.533332 10.5333 0.891504 10.5333 1.33333H12.1333ZM10.5333 14.6667C10.5333 15.1085 10.8915 15.4667 11.3333 15.4667C11.7751 15.4667 12.1333 15.1085 12.1333 14.6667H10.5333ZM1.33331 7.2C0.891485 7.2 0.533313 7.55817 0.533313 8C0.533313 8.44183 0.891485 8.8 1.33331 8.8V7.2ZM14.6666 8.8C15.1085 8.8 15.4666 8.44183 15.4666 8C15.4666 7.55817 15.1085 7.2 14.6666 7.2V8.8ZM1.33331 3.86667C0.891485 3.86667 0.533313 4.22484 0.533313 4.66667C0.533313 5.10849 0.891485 5.46667 1.33331 5.46667V3.86667ZM4.66665 5.46667C5.10847 5.46667 5.46665 5.10849 5.46665 4.66667C5.46665 4.22484 5.10847 3.86667 4.66665 3.86667V5.46667ZM1.33331 10.5333C0.891485 10.5333 0.533313 10.8915 0.533313 11.3333C0.533313 11.7752 0.891485 12.1333 1.33331 12.1333V10.5333ZM4.66665 12.1333C5.10847 12.1333 5.46665 11.7752 5.46665 11.3333C5.46665 10.8915 5.10847 10.5333 4.66665 10.5333V12.1333ZM11.3333 10.5333C10.8915 10.5333 10.5333 10.8915 10.5333 11.3333C10.5333 11.7752 10.8915 12.1333 11.3333 12.1333V10.5333ZM14.6666 12.1333C15.1085 12.1333 15.4666 11.7752 15.4666 11.3333C15.4666 10.8915 15.1085 10.5333 14.6666 10.5333V12.1333ZM11.3333 3.86667C10.8915 3.86667 10.5333 4.22484 10.5333 4.66667C10.5333 5.10849 10.8915 5.46667 11.3333 5.46667V3.86667ZM14.6666 5.46667C15.1085 5.46667 15.4666 5.10849 15.4666 4.66667C15.4666 4.22484 15.1085 3.86667 14.6666 3.86667V5.46667ZM2.78665 2.13333H13.2133V0.533332H2.78665V2.13333ZM13.2133 2.13333C13.5741 2.13333 13.8666 2.42584 13.8666 2.78667H15.4666C15.4666 1.54218 14.4578 0.533332 13.2133 0.533332V2.13333ZM13.8666 2.78667V13.2133H15.4666V2.78667H13.8666ZM13.8666 13.2133C13.8666 13.5742 13.5741 13.8667 13.2133 13.8667V15.4667C14.4578 15.4667 15.4666 14.4578 15.4666 13.2133H13.8666ZM13.2133 13.8667H2.78665V15.4667H13.2133V13.8667ZM2.78665 13.8667C2.42582 13.8667 2.13331 13.5742 2.13331 13.2133H0.533313C0.533313 14.4578 1.54216 15.4667 2.78665 15.4667V13.8667ZM2.13331 13.2133V2.78667H0.533313V13.2133H2.13331ZM2.13331 2.78667C2.13331 2.42584 2.42582 2.13333 2.78665 2.13333V0.533332C1.54216 0.533332 0.533313 1.54218 0.533313 2.78667H2.13331ZM3.86665 1.33333V14.6667H5.46665V1.33333H3.86665ZM10.5333 1.33333V14.6667H12.1333V1.33333H10.5333ZM1.33331 8.8H14.6666V7.2H1.33331V8.8ZM1.33331 5.46667H4.66665V3.86667H1.33331V5.46667ZM1.33331 12.1333H4.66665V10.5333H1.33331V12.1333ZM11.3333 12.1333H14.6666V10.5333H11.3333V12.1333ZM11.3333 5.46667H14.6666V3.86667H11.3333V5.46667Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15769">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconFilm,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13502",
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
    example: ({ size }) => <IconFilm size={size} />,
  },
);
