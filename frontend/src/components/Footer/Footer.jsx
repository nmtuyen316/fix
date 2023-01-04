import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsYoutube, BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import logo from '../../img/favicon.ico';
// import { GiCondorEmblem } from "react-icons/gi";
// import { Link } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const [isSmallerThan] = useMediaQuery("(min-width: 468px)");
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Box
        bg="black"
        color="whitesmoke"
        height={isSmallerThan ? "auto" : "auto"}
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
          <Box onClick={handleHome} border={isSmallerThan?"4px solid grey":"0"} borderRadius={"20px"} height={isSmallerThan ?"150px":"130px"} marginTop={"10px"}>
          <SimpleGrid columns={1} spacingX={"auto"} spacingY={"auto"}>
              <img src={logo} width={150} style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "table",
                  translate: isSmallerThan ? "0px -6px" : "0 -20%" 
              }} alt={"logo"} ></img>
            </SimpleGrid>
          </Box>

          <Box as={Flex} flexDirection="column" marginBottom={"15px"}>
          <SimpleGrid columns={1} spacingX={"10px"} spacingY={"10px"}>
            <Heading color={"grey"}>Contact</Heading>
            <Text to="/allproducts?gender=MEN">Sđt: 0359284818 - 0369253220</Text>
            <Text to="/allproducts?gender=WOMEN">Email: eagleteal.repair@gmail.com</Text>
          </SimpleGrid>  
          </Box>


          <Box as={Flex} flexDirection="column" color={"grey"}>
            <Heading>Nextwork</Heading>
            <Box mt="1rem" display={"flex"} gap="1rem" justifyContent={"space-around"}
            >
              <SimpleGrid columns={isSmallerThan ? 2 : 2} spacingX={"30px"} spacingY={"20px"}>
                {/* <Box width={"100%"}>
                  <Link
                    href="https://www.linkedin.com/in/naresh-rajput/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Icon w={9} h={9} as={BsInstagram} />
                  </Link>
                </Box> */}
                <Box width={"95%"}>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100083653755690"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Icon w={9} h={9} my="0rem" as={BsFacebook} bg="black" />
                  </Link>
                </Box>
                <Box width={"95%"}>
                  <Link
                    href="https://www.youtube.com/channel/UCK7NRGzAqAjMySDin87tdCQ"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Icon w={9} h={9} my="0rem" as={BsYoutube} />
                  </Link>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
          <Box mt="1rem" display={"flex"} gap="3rem" justifyContent={"space-around"} position={"absolute"}
            style={{ translate: "473px 90px" }}
          >
          </Box>

        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
