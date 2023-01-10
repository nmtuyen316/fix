import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import img from "../../img/img";

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const [trimSlider] = useMediaQuery("(min-width:648px)");
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "0%", md: "0%" });
  const cards = [
    {
      id: 1001,
      image:[img.intro,img.intro2]
    },
    {
      id: 1002,
      image:[img.introKhuyenMai,img.introKhuyenMai2]
    },
  ];

  return (
    <Box
      position={"relative"}
      height={["350px",trimSlider?"500px":"450px","370px","470px","570px","600px"]}
      width={"100%"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {isLargerThan ? (<>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        >
        <BiRightArrowAlt size="40px" />
      </IconButton>
        </>) : ("")}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
          key={card.id}
          height={["350px","500px","360px","460px","560px","660px"]}
          color="whitesmoke"
          position="relative"
          backgroundRepeat="no-repeat"
          // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
          background={`url(${isLargerThan ? (card.image[0]):(card.image[1])}) center/contain no-repeat`}
          backgroundSize={isLargerThan?"90%" : "100%"}
          >
          {/* This is the block if we need to change, to customize the caption */}
                <Button
                  fontSize={["xs", "sm", "md", "lg", "xl"]}
                  bg="black"
                  color="whitesmoke"
                  width="40%"
                  height="45px"
                  position={"absolute"}
                  bottom= "12%"
                  left= "9%"
                  _hover={{
                    border: "1px solid black",
                    background: "#555d5f",
                    color: "whitesmoke",
                  }}
                >
                  <a href="tel:+84369253220">Liên hệ ngay</a>
                </Button>
        </Box>
        ))}
      </Slider>
    </Box>
  );
}
