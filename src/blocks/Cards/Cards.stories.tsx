import type { Meta, StoryObj } from "@storybook/react";
import {
  AvatarBlock,
  AvatarButton,
  Button,
  ButtonGroup,
  Card,
  Description,
  Image,
  Label,
  Text,
  TextHeading,
  TextList,
  TextListItem,
  TextTitlePage,
} from "ui";
import { PricingCard, ProductInfoCard, TestimonialCard } from "./Cards";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "blocks/Cards",
  parameters: { layout: "centered" },
};
export default meta;

export const PricingCardStory: StoryObj<typeof PricingCard> = {
  render: () => (
    <Layout gap="lg" direction="row">
      {[1, 2, 3, 4].map((i) => (
        <LayoutItem key={i}>
          <PricingCard>
            <TextHeading>Look at these rates</TextHeading>
            <TextTitlePage>
              ${5 * (5 - i)}
              <Text elementType="span"> / per month</Text>
            </TextTitlePage>
            <TextList>
              <TextListItem>Something 1</TextListItem>
              <TextListItem>Something 2</TextListItem>
              <TextListItem>Something 3</TextListItem>
              <TextListItem>Something 4</TextListItem>
              <TextListItem>Something 5</TextListItem>
            </TextList>
            <ButtonGroup align="justify">
              <Button>Buy this</Button>
            </ButtonGroup>
          </PricingCard>
        </LayoutItem>
      ))}
    </Layout>
  ),
};

export const ProductInfoCardStory: StoryObj<typeof ProductInfoCard> = {
  render: () => (
    <Layout gap="lg" direction="row">
      <LayoutItem>
        <ProductInfoCard
          asset={<Image alt="Accessibility!" src="https://picsum.photos/250" />}
        >
          <TextHeading>Product</TextHeading>
          <TextTitlePage>$5</TextTitlePage>
          <ButtonGroup align="start">
            <Button variant="secondary">Buy this</Button>
          </ButtonGroup>
        </ProductInfoCard>
      </LayoutItem>
      <LayoutItem>
        <ProductInfoCard
          asset={<Image alt="Accessibility!" src="https://picsum.photos/250" />}
        >
          <TextHeading>Product</TextHeading>
          <TextTitlePage>$5</TextTitlePage>
          <ButtonGroup align="start">
            <Button variant="secondary">Buy this</Button>
          </ButtonGroup>
        </ProductInfoCard>
      </LayoutItem>
    </Layout>
  ),
};

export const TestimonialCardStory: StoryObj<typeof TestimonialCard> = {
  render: () => (
    <Layout type="third" gap="lg" direction="row">
      <LayoutItem size="minor">
        <TestimonialCard>
          <TextHeading>"Something nice"</TextHeading>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </LayoutItem>
      <LayoutItem size="minor">
        <TestimonialCard>
          <TextHeading>"Something nice"</TextHeading>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </LayoutItem>
      <LayoutItem size="minor">
        <TestimonialCard>
          <TextHeading>"Something nice"</TextHeading>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </LayoutItem>
    </Layout>
  ),
};