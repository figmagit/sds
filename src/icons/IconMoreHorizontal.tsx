import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMoreHorizontal = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.33341 8.08337C3.37944 8.08337 3.41675 8.04606 3.41675 8.00004C3.41675 7.95402 3.37944 7.91671 3.33341 7.91671C3.28739 7.91671 3.25008 7.95402 3.25008 8.00004C3.25008 8.04606 3.28739 8.08337 3.33341 8.08337ZM1.91675 8.00004C1.91675 7.21764 2.55101 6.58337 3.33341 6.58337C4.11582 6.58337 4.75008 7.21764 4.75008 8.00004C4.75008 8.78244 4.11582 9.41671 3.33341 9.41671C2.55101 9.41671 1.91675 8.78244 1.91675 8.00004ZM8.00008 8.08337C8.04611 8.08337 8.08342 8.04606 8.08342 8.00004C8.08342 7.95402 8.04611 7.91671 8.00008 7.91671C7.95406 7.91671 7.91675 7.95402 7.91675 8.00004C7.91675 8.04606 7.95406 8.08337 8.00008 8.08337ZM6.58342 8.00004C6.58342 7.21764 7.21768 6.58337 8.00008 6.58337C8.78248 6.58337 9.41675 7.21764 9.41675 8.00004C9.41675 8.78244 8.78248 9.41671 8.00008 9.41671C7.21768 9.41671 6.58342 8.78244 6.58342 8.00004ZM12.6667 8.08337C12.7128 8.08337 12.7501 8.04606 12.7501 8.00004C12.7501 7.95402 12.7128 7.91671 12.6667 7.91671C12.6207 7.91671 12.5834 7.95402 12.5834 8.00004C12.5834 8.04606 12.6207 8.08337 12.6667 8.08337ZM11.2501 8.00004C11.2501 7.21764 11.8843 6.58337 12.6667 6.58337C13.4492 6.58337 14.0834 7.21764 14.0834 8.00004C14.0834 8.78244 13.4492 9.41671 12.6667 9.41671C11.8843 9.41671 11.2501 8.78244 11.2501 8.00004Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMoreHorizontal, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4049:13563", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMoreHorizontal size={size} /> });