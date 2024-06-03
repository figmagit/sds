import clsx from "clsx";
import { IconMenu, IconX } from "icons";
import { AuthenticationContext } from "providers";
import { useContext, useState } from "react";
import {
  Avatar,
  AvatarBlock,
  AvatarButton,
  Button,
  ButtonGroup,
  Description,
  Dialog,
  DialogModal,
  Flex,
  FlexItem,
  IconButton,
  Label,
  Logo,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Navigation,
  NavigationItem,
  Section,
  type SectionProps,
} from "ui";
import "./headers.css";

function HeaderNavigation() {
  const { currentUser, login, logout } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);

  const userButtons = (
    <>
      <Button
        variant="secondary"
        size="sm"
        onPress={() =>
          login({
            avatar: "https://picsum.photos/300",
            name: "Charlie Brown",
            username: "snooptroupe",
          })
        }
      >
        Log in
      </Button>
      <Button
        size="sm"
        onPress={() =>
          login({
            avatar: "https://picsum.photos/300",
            name: "Charlie Brown",
            username: "snooptroupe",
          })
        }
      >
        Register
      </Button>
    </>
  );

  return (
    <>
      <Flex
        direction="column"
        gap="md"
        alignPrimary="center"
        alignSecondary="center"
      >
        <FlexItem className="display-flex-to-none">
          <Flex alignPrimary="center">
            <IconButton
              variant="subtle"
              aria-label="Toggle navigation menu"
              onPress={() => setOpen(true)}
            >
              <IconMenu />
            </IconButton>
          </Flex>
        </FlexItem>
        <FlexItem className="display-none-to-flex">
          <Flex gap="lg" alignSecondary="center">
            <Navigation>
              <NavigationItem isSelected>Home</NavigationItem>
              <NavigationItem>About</NavigationItem>
            </Navigation>
            {currentUser ? (
              <MenuTrigger>
                <AvatarButton
                  src={currentUser.avatar}
                  initials={currentUser.name.charAt(0)}
                />
                <MenuPopover placement="bottom right">
                  <Menu>
                    <MenuItem>
                      <AvatarBlock>
                        <Avatar
                          src={currentUser.avatar}
                          initials={currentUser.name.charAt(0)}
                        />
                        <Label>{currentUser.name}</Label>
                        <Description>View profile</Description>
                      </AvatarBlock>
                    </MenuItem>
                    <MenuItem onAction={logout}>Log out</MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>
            ) : (
              <ButtonGroup>{userButtons}</ButtonGroup>
            )}
          </Flex>
        </FlexItem>
      </Flex>
      <DialogModal isOpen={open}>
        <Dialog className={clsx("navigation-dialog")}>
          <IconButton
            className={clsx("navigation-dialog-close")}
            variant="subtle"
            aria-label="Close navigation menu"
            onPress={() => setOpen(false)}
          >
            <IconX />
          </IconButton>
          <Flex direction="column" alignPrimary="space-between">
            <Navigation>
              <NavigationItem isSelected>Home</NavigationItem>
              <NavigationItem>About</NavigationItem>
            </Navigation>
            {currentUser ? (
              <Flex alignSecondary="center" gap="sm" direction="column">
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Avatar
                      src={currentUser.avatar}
                      initials={currentUser.name.charAt(0)}
                    />
                  </Flex>
                </FlexItem>
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Label>{currentUser.name}</Label>
                  </Flex>
                </FlexItem>
                <FlexItem>
                  <Flex alignPrimary="center">
                    <Button variant="subtle" size="sm" onPress={logout}>
                      Log out
                    </Button>
                  </Flex>
                </FlexItem>
              </Flex>
            ) : (
              <ButtonGroup align="justify">{userButtons}</ButtonGroup>
            )}
          </Flex>
        </Dialog>
      </DialogModal>
    </>
  );
}

export type StandardHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function StandardHeader({ className, ...props }: StandardHeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="stroke"
      padding="sm"
      {...props}
    >
      <Flex container alignPrimary="space-between" alignSecondary="center">
        <FlexItem size="minor">
          <Logo />
        </FlexItem>
        <FlexItem size="major">
          <Flex gap="xl" alignPrimary="end" alignSecondary="center">
            <HeaderNavigation />
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
export type VerticalHeaderProps = Omit<SectionProps, "variant" | "padding">;
export function VerticalHeader({ className, ...props }: VerticalHeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="subtle"
      padding="sm"
      {...props}
    >
      <Flex direction="column" alignSecondary="center" gap="md">
        <Flex alignPrimary="center">
          <Logo />
        </Flex>
        <Flex alignPrimary="center">
          <HeaderNavigation />
        </Flex>
      </Flex>
    </Section>
  );
}