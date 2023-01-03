import {
  Box,
} from "@chakra-ui/react";
import { useSelector} from "react-redux";
import Carousel from "../components/Carousel/Carousel";
import Loading from "../components/Loading/Loading";
import AllProducts from "../components/AllProducts/AllProducts";

const Home = () => {
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Box w="95%" m="auto">
          <Carousel />
          <AllProducts/>
        </Box>
      )}
    </div>
  );
};

export default Home;
