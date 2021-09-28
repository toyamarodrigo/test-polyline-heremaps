import React, { useRef } from "react";
import {
  useDisclosure,
  HStack,
  Stack,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnMenuRef = useRef();
  const Links = [
    { page: "/", name: "Home" },
    { page: "/about", name: "About" },
    { page: "/contact", name: "Contact" },
  ];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      position="absolute"
      px={{ base: 10, sm: 20, lg: 20, xl: 30 }}
      py={4}
      w="100%"
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        maxW={{ base: "100%", xl: "1152px" }}
        w="100%"
      >
        <Stack alignItems="center" direction="row">
          <HStack
            as={"nav"}
            className="nav-links"
            color="white"
            display={{ base: "none", md: "flex" }}
            spacing={10}
          >
            {Links.map((link, index) => (
              <Link key={index} as={RouterLink} to={`${link.page}`}>
                <Button
                  bgColor="transparent"
                  color={colorMode === "dark" ? "white" : "black"}
                  cursor="pointer"
                  fontWeight="normal"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </Stack>

        <HStack display={{ base: "none", md: "flex" }}>
          <HStack spacing={4}>
            <Link to="/login">
              <Button
                bgColor="transparent"
                color={colorMode === "dark" ? "white" : "black"}
                fontWeight="normal"
              >
                Login
              </Button>
            </Link>
          </HStack>
          <IconButton
            aria-label="color mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            isRound={true}
            padding={0}
            onClick={toggleColorMode}
          />
        </HStack>

        <IconButton
          ref={btnMenuRef}
          aria-label={"Open Menu"}
          backgroundColor="transparent"
          display={{ md: "none" }}
          icon={!isOpen && <HamburgerIcon h={8} w={8} />}
          size={"md"}
          onClick={onOpen}
        />
      </Stack>

      <Drawer finalFocusRef={btnMenuRef} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={colorMode === "dark" ? "white" : "black"} />
          <DrawerHeader
            color={colorMode === "dark" ? "white" : "black"}
            marginBottom={6}
            marginLeft={2}
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Stack marginLeft={4} spacing={6}>
              <VStack>
                <Menu>
                  <MenuButton as={Button} cursor={"pointer"} rounded={"full"} variant={"link"}>
                    <Avatar
                      size={"md"}
                      src={
                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </VStack>
              <VStack
                alignItems="flex-start"
                color={colorMode === "dark" ? "white" : "black"}
                spacing={6}
              >
                {Links.map((link, index) => (
                  <Link key={index} as={RouterLink} to={`${link.page}`}>
                    <Text color={colorMode === "dark" ? "white" : "black"} cursor="pointer">
                      {link.name}
                    </Text>
                  </Link>
                ))}
              </VStack>
              <VStack alignItems="flex-start">
                <IconButton
                  aria-label="color mode"
                  icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                  isRound={true}
                  padding={0}
                  onClick={toggleColorMode}
                />
              </VStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
