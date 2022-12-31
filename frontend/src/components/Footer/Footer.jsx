import {
  Avatar,
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
import { BsGithub, BsLinkedin } from "react-icons/bs";
import logo from '../../img/favicon.ico';
import './footer.css'
// import { GiCondorEmblem } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");

  return (
    <div className="Footer">
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
          <Box as={Flex} flexDirection="column" className="contact">
            <Heading>Liên Hệ</Heading>
            <Text as={Link} to="/allproducts?gender=MEN">Sđt: 0359284818 - 0369253220.</Text>
            <Text as={Link} to="/allproducts?gender=WOMEN">Email: eagleteal.repair@gmail.com</Text>
            <Text as={Link} to="/allproducts?category=shoes" >Shoes Collection</Text>
            <Text as={Link} to="/allproducts?category=clothes">Clothes Collection</Text>
          </Box>

          <Box as={Flex} flexDirection="column" className="infor">
            <Heading>Information</Heading>
          </Box>

          <Box as={Flex} flexDirection="column" className="nextwork">
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
          <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"center"}>
            {/* <a
              href="https://www.linkedin.com/in/naresh-rajput/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsLinkedin} />
            </a> */}
            {/* <a
              href="https://github.com/nmewada01"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon w={9} h={9} my="1rem" as={BsGithub} />
            </a> */}
            {/* <a
              href="https://nmewada01.github.io/portfolio/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Avatar w={10} h={10} my="1rem" bg="white" src={portfolio} />
            </a> */}

          </Box>
            <div className="logo">
              <img src={logo} alt="" width={150}/> 
            </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
