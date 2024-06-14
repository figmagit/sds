import figma from "@figma/code-connect";
import { Icon, IconProps } from "ui";
export const IconDroplet = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M7.99992 1.79333L8.56561 1.22765C8.41549 1.07753 8.21187 0.993241 7.99957 0.993335C7.78727 0.993429 7.58372 1.0779 7.43374 1.22815L7.99992 1.79333ZM11.7733 5.56667L11.2076 6.13235L11.2078 6.13254L11.7733 5.56667ZM8.00326 14.6725V13.8725V14.6725ZM4.23326 5.56667L4.79876 6.13254L4.79944 6.13185L4.23326 5.56667ZM7.43424 2.35902L11.2076 6.13235L12.3389 5.00098L8.56561 1.22765L7.43424 2.35902ZM11.2078 6.13254C11.8421 6.76642 12.2741 7.57418 12.4493 8.45364L14.0184 8.14111C13.7815 6.95125 13.1969 5.8584 12.3388 5.0008L11.2078 6.13254ZM12.4493 8.45364C12.6244 9.3331 12.5348 10.2448 12.1918 11.0733L13.6701 11.6853C14.1342 10.5644 14.2554 9.33097 14.0184 8.14111L12.4493 8.45364ZM12.1918 11.0733C11.8488 11.9018 11.2677 12.61 10.5222 13.1083L11.4112 14.4385C12.4199 13.7644 13.206 12.8063 13.6701 11.6853L12.1918 11.0733ZM10.5222 13.1083C9.77659 13.6065 8.89999 13.8725 8.00326 13.8725V15.4725C9.21649 15.4725 10.4025 15.1127 11.4112 14.4385L10.5222 13.1083ZM8.00326 13.8725C7.10652 13.8725 6.22993 13.6065 5.48436 13.1083L4.59534 14.4385C5.60405 15.1127 6.79003 15.4725 8.00326 15.4725V13.8725ZM5.48436 13.1083C4.7388 12.61 4.15775 11.9018 3.81472 11.0733L2.33641 11.6853C2.80051 12.8063 3.58663 13.7644 4.59534 14.4385L5.48436 13.1083ZM3.81472 11.0733C3.47169 10.2448 3.38209 9.3331 3.55725 8.45364L1.98807 8.14111C1.75109 9.33097 1.87231 10.5644 2.33641 11.6853L3.81472 11.0733ZM3.55725 8.45364C3.73241 7.57418 4.16446 6.76642 4.79876 6.13254L3.66776 5.0008C2.80959 5.8584 2.22505 6.95125 1.98807 8.14111L3.55725 8.45364ZM4.79944 6.13185L8.56611 2.35852L7.43374 1.22815L3.66707 5.00148L4.79944 6.13185Z"
      fill="var(--svg-fill-color)"
    />
  </Icon>
);
figma.connect(
  IconDroplet,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13488",
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
    example: ({ size }) => <IconDroplet size={size} />,
  },
);
