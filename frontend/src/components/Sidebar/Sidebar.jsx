import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Button,
  Text,
  Box,
  Flex,
  Icon
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DarkModeBtn } from "../DarkMode/DarkModeBtn";
export default function SideMenu({ colorMode }) {
  const cart = useSelector((store) => store.cart.cart);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button colorScheme="blackAlpha" bg="none" color="black" onClick={onOpen}>
        <GiHamburgerMenu color={colorMode === "dark" ? "white" : "black"} />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Eagle Teal</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Flex my={4} mx={2}>
                <DarkModeBtn />
                <Text mx={4}>{colorMode === "dark" ? "Light" : "Dark"} Mode</Text>
              </Flex>
              <Link to="/cart">
                <Flex
                  onClick={handleCart}
                  alignItems={"center"}
                >
                  <Icon w={6} h={6} my="4" mx="3" as={BsBag} cursor={"pointer"} />
                  <Text
                    position="relative"
                    top="-15px"
                    left="-25px"
                    borderRadius="50%"
                    p="0rem 0.3rem"
                    bg="blue.500"
                    color="white"
                  >
                    {cart ? cart.length : 0}
                  </Text>
                  <Text>
                    Cart
                  </Text>
                </Flex>
              </Link>
              <Link to="/">
                <Text my="4" mx="2">
                  Home
                </Text>
              </Link>
              <Box>
              </Box>
              {/* <Link to="/men">
                <Text my="4" mx="2">
                  Men
                </Text>
              </Link> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
