import { Flex, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import CallOnline from "../components/CallOnline/CallOnline";
const Call = () => {
    const a = useRef();
    const [isClick,setClick] = useState(false);
    const handleOffline=()=>{
        window.location.href= a.current.href;
    }
    const handleOnline = () =>{
        setClick(true);
    }
  return (
    <Flex
      height={"70vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >{isClick ? <CallOnline/> :(
        <>
        <Button
        fontSize={["xs", "sm", "md", "lg", "xl"]}
        bg="black"
        color="whitesmoke"
        width="30%"
        height="45px"
        margin={"20px"}
        _hover={{
            border: "1px solid black",
            background: "#555d5f",
          color: "whitesmoke",
        }}
        onClick={handleOffline}
      >
        <a ref={a} href="tel:+84359284818" target="_blank" rel="noreferrer">Gọi offline (chỉ dùng cho điện thoại)</a>
      </Button>
      <Button
      fontSize={["xs", "sm", "md", "lg", "xl"]}
      bg="black"
      color="whitesmoke"
      width="30%"
      height="45px"
      _hover={{
          border: "1px solid black",
          background: "#555d5f",
          color: "whitesmoke",
        }}
        onClick={handleOnline}
        >
        Gọi online
      </Button>
    </>
            )
    }
    </Flex>
  );
};
export default Call;
