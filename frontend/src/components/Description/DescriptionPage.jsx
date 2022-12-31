import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/DataReducer/action";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { addToCart } from "../../redux/CartReducer/action";
import Navbar from "../Navbar/Navbar";
// import { BsBagFill } from "react-icons/bs";
const DescriptionPage = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.dataReducer.products);
  const dispatch = useDispatch();
  const [currentProducts, setCurrentProducts] = useState({});
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [size, setSize] = useState(null);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  useEffect(() => {
    if (id) {
      const cur = products.find((item) => item._id === id);
      cur && setCurrentProducts(cur);
    }
  }, [id, products]);

  const handleCart = () => {
    let payload = {
      ...currentProducts,
      size,
    };

    dispatch(addToCart(payload));
  };
  return (
    <div key={currentProducts._id}>
      <Navbar /> <br />
      <Flex
        justify={"space-between"}
        flexDirection={isLargerThan ? "row" : "column"}
      >
<Box width={["100%", "100%", "60%", "60%"]} min-height={"100vh"}>
          {/* ------------------------------ 1 image------------------------------------ */}
          <Box>
            <Image w={"100%"} src={currentProducts.images?.[0]} />
          </Box>

          {/* --------------------------------------------------------------------- */}
        </Box>

        {/* ------------------------------details Box------------------------------------ */}
        <Box
          width={["100%"]}
          min-height={"100vh"}
          textAlign={"left"}
          my={"6"}
        >
          <Box>
            <Heading>{currentProducts.name}</Heading>
            <Box mx={"4"} my={"6"} fontSize={["sm", "md", "lg", "xl"]}>
              <Text fontSize={"lg"}>
                MRP :
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  {currentProducts.final_price} ET
                </span>
              </Text>
              <Badge color={"grey"} fontWeight={"bold"}>
                incl. of taxes and duties
              </Badge>
            </Box>
            <Box>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                textAlign="left"
                mx={"4"}
                fontWeight={"bold"}
              >
                Select Size
              </Text>
              <Flex gap={"2rem"} my={"5"} mx={"4"}>
                {currentProducts.sizes?.map((size) => (
                  <Button
                    key={size}
                    _hover={{
                      border: "1px solid black",
                      bg: "none",
                      color: "blue",
                    }}
                    onClick={() => setSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Flex>
            </Box>
            <Box mt="3rem" align={"left"}>
              <Button
                width={["100%", "100%", "70%", "70%"]}
                bg="black"
                color={"whitesmoke"}
                colorScheme={"blackAlpha"}
                disabled={!size}
                onClick={handleCart}
                >
                {!size ? "Please Select A Size" : "ADD TO BAG"}
              </Button>
            </Box>
          </Box>
          <hr />
          {/* ------------------------------details Box End------------------------------------ */}

          {/* ------------------------------description Box------------------------------------ */}
          <Box mt={"5rem"} align={"left"} mx={"4"}>
            <Badge ml="1" fontSize="1rem" colorScheme="blackAlpha">
              Description :
            </Badge>

            <UnorderedList spacing={"3"} my={"4"}>
              <ListItem fontSize={"md"} fontWeight={"semibold"}>
                Colour : {currentProducts.color}{" "}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default DescriptionPage;
