import { Section, type SectionProps } from "ui";

export type StandardFooterProps = Omit<SectionProps, "variant" | "padding">;
export function StandardFooter({ className, ...props }: StandardFooterProps) {
  return (
    <Section elementType="footer" variant="stroke" padding="sm" {...props} />
  );
}