import React from "react";
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../img/favicon.ico";
//import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { DarkModeBtn } from "../DarkMode/DarkModeBtn";
import { useSelector, useDispatch } from "react-redux";
import SideMenu from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import { profile } from "../../redux/AuthReducer/action";
import { getLocalData } from "../../utils/localStorage";

const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const cart = useSelector((store) => store.cart.cart);
  const { colorMode } = useColorMode();
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#027bff",
    textDecoration: "none",
    transition: "0.5s",
    borderBottom: "2px solid black",
  };
  React.useEffect(() => {
    if (profileData?.length === 0) {
      const token = localStorage.getItem("token"); //different approaches for getting local storage
      const username = getLocalData("userInfo");
      const payload = {
        username: username,
        token,
      };
      dispatch(profile(payload));
    }
  }, [dispatch, profileData?.length]);

  const handleHome = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleSignup = () => {
    navigate("/register");
  };
  const handleLogin =() =>{
    navigate("/login");
  };
  return (
    <div className="Navbar" 
    style={{backgroundColor:colorMode === "dark" ? "black" : "aquamarine",
            position:'sticky',
            top:0,
            zIndex:999}}>
      <Flex fontWeight="bold">
        <HStack onClick={handleHome} cursor={"pointer"}>
          <Image width={["110px"]} ml={"5%"} src={logo} alt="logo" />
        </HStack>
        <Spacer />
        {isLargerThan ? (
          <HStack>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                Trang chủ
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/gift"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                my="4"
                mx="2"
              >
                Quà tặng
              </Text>
            </NavLink>
          </HStack>
        ) : null}

        <Spacer />

        <HStack>
          {auth ? (
            <>
              <Box>
                <Text color={"rgba(110, 6, 6, 0.922)"}>
                  {profileData.length !== 0 ? profileData.point : ""} Điểm ET
                </Text>
              </Box>
              <Box>
                <Profile colorMode={colorMode} />
              </Box>
            </>
          ) : (
            location.pathname ==="/register"?
            <Button
            bg={"black"}
            color={"whitesmoke"}
            border={"1px solid beige"}
            _hover={{
              bg: "#555d5f",
              color: "teal",
            }}
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
          :
            <Button
              bg={"black"}
              color={"whitesmoke"}
              border={"1px solid beige"}
              _hover={{
                bg: "#555d5f",
                color: "teal",
              }}
              onClick={handleSignup}
            >
              Đăng ký
            </Button>
          )}
          {isLargerThan && 
          <>
            <Box mr={["5", "6", "7", "9"]}>
              {" "}
              <DarkModeBtn />
            </Box>
            <Box>
              <Flex
                onClick={handleCart}
                alignItems={"center"}
                alignContent={"center"}
                justifyContent={"center"}
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
              </Flex>
            </Box>
          </>}
          <Box> {!isLargerThan && <SideMenu colorMode={colorMode} />}</Box>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;

//BsSearch Icon
