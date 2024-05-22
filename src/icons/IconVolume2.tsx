import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconVolume2 = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.1831 2.75621C12.476 2.46336 12.9509 2.46343 13.2437 2.75637C14.6341 4.1472 15.4152 6.03332 15.4152 7.99995C15.4152 9.96659 14.6341 11.8527 13.2437 13.2435C12.9509 13.5365 12.476 13.5365 12.1831 13.2437C11.8901 12.9508 11.8901 12.476 12.1829 12.183C13.2921 11.0735 13.9152 9.56884 13.9152 7.99995C13.9152 6.43107 13.2921 4.92641 12.1829 3.81687C11.8901 3.52393 11.8901 3.04906 12.1831 2.75621ZM7.6582 2.65731C7.91805 2.7822 8.08331 3.04498 8.08331 3.33329V12.6666C8.08331 12.9549 7.91805 13.2177 7.6582 13.3426C7.39836 13.4675 7.08992 13.4324 6.86479 13.2523L3.73689 10.75H1.33331C0.919099 10.75 0.583313 10.4142 0.583313 9.99995V5.99995C0.583313 5.58574 0.919099 5.24995 1.33331 5.24995H3.73689L6.86479 2.74764C7.08992 2.56753 7.39836 2.53242 7.6582 2.65731ZM6.58331 4.89376L4.4685 6.58561C4.33552 6.69199 4.17028 6.74995 3.99998 6.74995H2.08331V9.24995H3.99998C4.17028 9.24995 4.33552 9.30792 4.4685 9.4143L6.58331 11.1062V4.89376ZM9.82973 5.10954C10.1227 4.8167 10.5975 4.81677 10.8904 5.1097C11.6559 5.87544 12.0859 6.91387 12.0859 7.99662C12.0859 9.07937 11.6559 10.1178 10.8904 10.8835C10.5975 11.1765 10.1227 11.1765 9.82973 10.8837C9.53679 10.5908 9.53672 10.116 9.82957 9.82304C10.3139 9.33859 10.5859 8.68163 10.5859 7.99662C10.5859 7.31161 10.3139 6.65465 9.82957 6.1702C9.53672 5.87727 9.53679 5.40239 9.82973 5.10954Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconVolume2, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13665", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconVolume2 size={size} /> });