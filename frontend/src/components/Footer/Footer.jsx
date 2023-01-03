import {
  Avatar,
  border,
  Box,
  Flex,
  Heading,
  Icon,
  TagLeftIcon,
  // Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import portfolio from "../../img/portfolio.png";
import { BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import logo from '../../img/favicon.ico';
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div>
      <Box
        bg="black"
        color="whitesmoke"
        height={isSmallerThan ? "50vh" : "50vh"}
        pt="3rem"
        lineHeight="2rem"
      >
        <Flex
          justify={"space-evenly"}
          width={["100%", "100%", "100%", "100%"]}
          textAlign={isSmallerThan ? "left" : "center"}
          fontSize={["sm", "md", "md", "md"]}
          flexDirection={isSmallerThan ? "row" : "column"}
        >
          <Box border={"4px solid grey"} borderRadius={"20px"} height={"150px"} marginTop={"10px"}>
            <img src={logo} width={150} style={{translate:"0px -6px"}} ></img>
          </Box>

          <Box as={Flex} flexDirection="column" className="contact">
            <Heading color={"grey"}>Liên Hệ</Heading>
            <Text as={Link} to="/allproducts?gender=MEN">Sđt: 0359284818 - 0369253220.</Text>
            <Text as={Link} to="/allproducts?gender=WOMEN">Email: eagleteal.repair@gmail.com</Text>
            <Text as={Link} to="/allproducts?category=shoes" >Shoes Collection</Text>
            <Text as={Link} to="/allproducts?category=clothes">Clothes Collection</Text>
          </Box>

          <Box as={Flex} flexDirection="column" color={"grey"}>
            <Heading>Information</Heading>
          </Box>

          <Box as={Flex} flexDirection="column" color={"grey"}>
            <Heading>Nextwork</Heading>
          </Box>

          {/* {isSmallerThan ? (
            <Box>
              <Heading>Support</Heading>
              <Text>Help</Text>
              <Text>Customer Service</Text>
              <Text>Shipping</Text>
              <Text>Order Tracker</Text>
              <Text>Returns & Exchanges</Text>
            </Box>
          ) : null} */}

          {/* {isLargerThan ? (
            <Box>
              <Heading>Company Info</Heading>
              <Text>About Us</Text>
              <Text>Entity Details</Text>
              <Text>Careers</Text>
              <Text>Company Apps</Text>
            </Box>
          ) : null} */}
          <Box mt="1rem" display={"flex"} gap="3rem" justifyContent={"space-around"} position={"absolute"}
            style={{translate:"515px 19px"}}
          >
            <a
              href="https://www.linkedin.com/in/naresh-rajput/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsInstagram} />
            </a>
            <a
              href="https://github.com/nmewada01"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsFacebook} bg="black"/>
            </a>
            
          </Box>

          <Box mt="1rem" display={"flex"} gap="3rem" justifyContent={"space-around"} position={"absolute"}
            style={{translate:"473px 90px"}} 
          >
            <a
              href="https://nmewada01.github.io/portfolio/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsYoutube} />
            </a>
          </Box>

        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
