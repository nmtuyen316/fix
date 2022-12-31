import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { AiOutlineStar } from "react-icons/ai";

const ProductDis = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, color, images, final_price } =
    item;
  const handleDes = () => {
    navigate(`/description/${_id}`);
  };

  return (
    <div>
      <Box
        key={_id}
        width={"95%"}
        m="auto"
        onClick={handleDes}
        my={"3"}
      >
        <Box overflow={"hidden"} position={"relative"}>
          <Image src={images[0]} alt={name} />
        </Box>
        <Box
          textAlign={"left"}
          color={"darkgrey"}
          fontSize={["xs", "sm", "md", "md"]}
        >
          <Text>{name}</Text>
          <Text>{color}</Text>
        </Box>
        <Flex
          justify={"left"}
          gap={"2rem"}
          fontWeight={"medium"}
          align={"center"}
        >
        </Flex>
        <HStack justify={"left"}>
          <Text fontWeight={"semibold"} fontSize={["sm", "md", "lg", "xl"]}>
            {final_price} ET
          </Text>
        </HStack>
      </Box>
    </div>
  );
};

export default ProductDis;
