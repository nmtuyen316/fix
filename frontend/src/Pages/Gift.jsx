import "@fontsource/pacifico";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Gift = () => {
  const profileData = useSelector((store)=>store.AuthReducer.profileData)
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"98vw"}
      height={"80vh"}
      backgroundColor={"rgb(208,115,95)"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"90vw"}
        height={"60vh"}
        boxShadow="dark-lg"
        p="6"
        borderRadius={"15px"}
        backgroundColor={"rgb(187,58,44)"}
      >
        <Text 
        fontFamily={"Pacifico"}
        fontSize={"5vw"}
        color={"rgb(219,179,44)"}

        >
            Chúc Mừng Năm Mới "{profileData.name}" <br/>
            Chúng tôi có một món quà giành cho bạn hãy liên hệ ngay để nhận
        </Text>
      </Box>
    </Box>
  );
};
export default Gift;
