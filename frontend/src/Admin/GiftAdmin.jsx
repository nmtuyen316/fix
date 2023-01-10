import "@fontsource/pacifico";
import { Box, Image, Text } from "@chakra-ui/react";
import { useState,useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { animation,animationfly,animationflyin } from "../theme/animation";
import { getGiftsData } from "../redux/GiftsReducer/action";
import { useEffect } from "react";
const GiftAdmin = () => {
  const dispatch = useDispatch();
  const gift = useSelector((store)=>store.giftsReducer.gift)
  const prevClick = useRef();
  const nextClick = useRef();
  const fly = useRef();
  const temp = useRef();
  const box = useRef();
  const [isAnimationFly, onAnimattionFly] = useState(false);
  const [isAnimationIn, onAnimationIn] = useState(false);
  useEffect(()=>{
    console.log(gift)
    if( Object.keys(gift).length===0){
      const token = localStorage.getItem("token")
      const payload = {
        token
      }
      dispatch(getGiftsData(payload))
    }
  },[dispatch,gift])
  const handleClick = async() => {
    prevClick.current.style = `
        display:none;`;
    nextClick.current.style = `
        display:block;`;
    temp.current.style = `
        display:block;`;
    fly.current.style = `
    display:block;`;
    box.current.style = `
    display: flex;
    align-items: center;
    justify-content: center;`;
    onAnimattionFly(true);
    onAnimationIn(true);
  };
  return (
    <>
      <Box height={"100vh"} position={"relative"}>
        <Image
          onClick={handleClick}
          ref={prevClick}
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture1.png?v=1672973329429"
          height={"65vh"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"120px"}
          animation={animation}
          zIndex={4}
        ></Image>
        <Image
          ref={temp}
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture3.png?v=1672973348329"
          height={"68vh"}
          position={"absolute"}
          top={"48%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          display={"none"}
          zIndex={3}
        ></Image>
        <Box
          ref={fly}
          animation={isAnimationFly ? animationfly : ""}
          height={"20vh"}
          width={"20vw"}
          position={"absolute"}
          top={"45%"}
          left={"40%"}
          backgroundColor={"white"}
          border={"1px solid"}
          display={"none"}
          zIndex={1}
        ></Box>
        <Image
          ref={nextClick}
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture2.png?v=1672973341344"
          display={"none"}
          height={"82vh"}
          position={"absolute"}
          top={"41%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={0}
        ></Image>
        <Box
          ref={box}
          display={"none"}
          width={"80%"}
          height={"70%"}
          boxSizing={"border-box"}
          position={"absolute"}
          top={"7%"}
          left={"10%"}
          paddingLeft={"15px"}
          paddingRight={"15px"}
          borderRadius={"15px"}
          boxShadow='dark-lg' 
          p='6'
          backgroundColor={"white"}
          animation={isAnimationIn ? animationflyin : ""}
          zIndex={97}
        >
          <Text 
          fontFamily={`'Pacifico',sans-serif`}
          fontSize={'6xl'}
          >
            {gift?.name}
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default GiftAdmin;
