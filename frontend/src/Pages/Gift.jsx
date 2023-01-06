import { 
    Box, 
    Image,
    keyframes, 
} from "@chakra-ui/react";
import { useRef } from "react";
import { motion } from 'framer-motion';
const animationSwing = keyframes`
    0%{transform: rotate(-3deg)}
    50%{transform:rotate(3deg)}
    100%{transform: rotate(-3deg)}
`;
const animation = `${animationSwing} 2s ease-in-out infinite`;
const Gift = () => {
    const prevClick = useRef();
    const nextClick = useRef();
    const handleClick = () =>{
        prevClick.current.style = `
        display:none;`
        nextClick.current.style = `
        display:block;`
    }
  return (
    <>
      <Box height={"100vh"} position={"relative"}>
        <Image 
        as={motion.image}
        animation={animation}
        onClick={handleClick}
        ref={prevClick}
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture1.png?v=1672973329429"
          height={"65vh"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={2}
        ></Image>
          <Image 
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture3.png?v=1672973348329"
          height={"68vh"}
          position={"absolute"}
          top={"48.5%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={1}
          ></Image>
        <Image
        ref={nextClick}
          src="https://cdn.glitch.global/a001b4bd-7c31-4b89-baf1-a07f3e16f388/Picture2.png?v=1672973341344"
          display={"none"}
          height={"82vh"}
          position={"absolute"}
          top={"41.5%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={0}
        ></Image>
      </Box>
    </>
  );
};
export default Gift;
