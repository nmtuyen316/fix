import {
    Flex,
    Box,
    Grid,
    Text,
    useMediaQuery,
} from "@chakra-ui/react"
import { useSelector } from "react-redux";
import ProductDis from "../ProductsDisplay/ProductDis";
import { getData } from "../../redux/DataReducer/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store?.dataReducer?.products);
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");
    useEffect(()=>{
        if(products?.length===0){
            dispatch(getData());
        }
    },[dispatch,products?.length])
    return (<>
        <Box fontSize={'50px'}>
            <Text>ET Shop</Text>
        </Box>
        <Flex flexDirection={isLargerThan ? "row" : "column"}>
            <Box width={isLargerThan ? "100%" : "100%"}>
                <Grid
                    templateColumns={
                        isLargerThan ? "repeat(4, 1fr)" : "repeat(2, 1fr)"
                    }
                    gap={"5px"}
                >
                    {products?.length > 0 &&
                        products?.map((item) => {
                            return <ProductDis key={item._id} item={item} />;
                        })}
                </Grid>
            </Box>
        </Flex>
    </>
    )
}
export default AllProducts