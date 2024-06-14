import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconDribbble = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15737)">
      <path
        d="M6.35449 1.36389C6.09521 1.00613 5.59501 0.926295 5.23726 1.18557C4.8795 1.44484 4.79966 1.94504 5.05893 2.30279L6.35449 1.36389ZM10.2825 13.835C10.3865 14.2644 10.8189 14.5282 11.2483 14.4242C11.6777 14.3202 11.9416 13.8878 11.8376 13.4584L10.2825 13.835ZM13.3614 3.91329C13.6485 3.5775 13.6091 3.0725 13.2733 2.78535C12.9375 2.49819 12.4325 2.53761 12.1454 2.8734L13.3614 3.91329ZM1.4809 6.49357C1.0392 6.50414 0.6897 6.87078 0.70027 7.31248C0.710839 7.75418 1.07748 8.10368 1.51918 8.09311L1.4809 6.49357ZM14.2946 9.33318C14.7216 9.44664 15.1597 9.19246 15.2732 8.76545C15.3867 8.33844 15.1325 7.9003 14.7055 7.78684L14.2946 9.33318ZM8.54004 8.56001L8.27242 7.8061L8.27134 7.80648L8.54004 8.56001ZM2.92537 12.3136C2.67143 12.6751 2.75869 13.1741 3.12026 13.428C3.48182 13.6819 3.98078 13.5947 4.23471 13.2331L2.92537 12.3136ZM13.8667 8.00001C13.8667 11.2401 11.2401 13.8667 8.00004 13.8667V15.4667C12.1238 15.4667 15.4667 12.1237 15.4667 8.00001H13.8667ZM8.00004 13.8667C4.75997 13.8667 2.13337 11.2401 2.13337 8.00001H0.533374C0.533374 12.1237 3.87631 15.4667 8.00004 15.4667V13.8667ZM2.13337 8.00001C2.13337 4.75994 4.75997 2.13334 8.00004 2.13334V0.533343C3.87631 0.533343 0.533374 3.87628 0.533374 8.00001H2.13337ZM8.00004 2.13334C11.2401 2.13334 13.8667 4.75994 13.8667 8.00001H15.4667C15.4667 3.87628 12.1238 0.533343 8.00004 0.533343V2.13334ZM5.05893 2.30279C6.50245 4.29466 7.47122 5.81593 8.24618 7.50596C9.0221 9.19807 9.61782 11.0902 10.2825 13.835L11.8376 13.4584C11.1623 10.6698 10.538 8.66528 9.70057 6.83906C8.8622 5.01075 7.82429 3.39203 6.35449 1.36389L5.05893 2.30279ZM12.1454 2.8734C9.89724 5.50227 6.72103 6.36818 1.4809 6.49357L1.51918 8.09311C6.86571 7.96517 10.6495 7.08442 13.3614 3.91329L12.1454 2.8734ZM14.7055 7.78684C12.2519 7.1349 9.99609 7.19424 8.27242 7.8061L8.80766 9.31392C10.164 8.83245 12.0815 8.74512 14.2946 9.33318L14.7055 7.78684ZM8.27134 7.80648C6.35014 8.49156 4.60858 9.91688 2.92537 12.3136L4.23471 13.2331C5.7915 11.0165 7.28994 9.85512 8.80874 9.31354L8.27134 7.80648Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15737">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconDribbble,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13486",
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
    example: ({ size }) => <IconDribbble size={size} />,
  },
);
