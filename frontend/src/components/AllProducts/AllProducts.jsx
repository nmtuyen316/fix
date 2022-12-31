import { useEffect } from "react";
import {
    Flex,
    Box,
    Grid,
    Text,
    useMediaQuery,
} from "@chakra-ui/react"
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductDis from "../ProductsDisplay/ProductDis";
import { getData } from "../../redux/DataReducer/action";

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store?.dataReducer?.products);
    const location = useLocation();
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");
    const [searchParams] = useSearchParams();
    useEffect(() => {
        if (location.search || products?.length === 0) {
            const sortBy = searchParams.get("sortBy");

            const queryParams = {
                params: {
                    category: searchParams.getAll("category"),
                    gender: searchParams.getAll("gender"),
                    colortype: searchParams.getAll("colortype"),
                    sizes: searchParams.getAll("sizes"),
                    _sort: sortBy && "rating",
                    _order: sortBy,
                },
            };
            dispatch(getData(queryParams));
        }
    }, [dispatch, location.search, products?.length, searchParams]);
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
                            return <ProductDis key={item.key} item={item} />;
                        })}
                </Grid>
            </Box>
        </Flex>
    </>
    )
}
export default AllProducts