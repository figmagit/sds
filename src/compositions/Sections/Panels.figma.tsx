import { figma } from "@figma/code-connect";
import { Flex, FlexItem, Section } from "layout";
import { Image } from "primitives";
import { Panel } from "./Panels";

figma.connect(Panel, "<FIGMA_URL_SECTION_PANEL_IMAGE_CONTENT>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ padding, gap, children }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <Image
          src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
        <FlexItem size="half">
          <Flex direction="column" gap="600">
            {children}
          </Flex>
        </FlexItem>
      </Panel>
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_URL_SECTION_PANEL_IMAGE_CONTENT_REVERSE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ padding, gap, children }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <FlexItem size="half">
          <Flex direction="column" gap="600">
            {children}
          </Flex>
        </FlexItem>
        <Image
          src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
      </Panel>
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_URL_SECTION_PANEL_IMAGE_DOUBLE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
  },
  example: ({ padding, gap }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <Image
          src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
        <Image
          src="https://placehold.co/560x320/f0f0f0/ddd?text=SDS"
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
      </Panel>
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_URL_SECTION_PANEL_IMAGE_IMAGE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
  },
  example: ({ padding }) => (
    <Section padding={padding}>
      <Panel type="auto">
        <FlexItem size="full">
          <Image
            src="https://placehold.co/1200x320/f0f0f0/ddd?text=SDS"
            alt="Always use image alt"
            aspectRatio="fill"
            size="medium"
          />
        </FlexItem>
      </Panel>
    </Section>
  ),
});