import { Flex, Image, Link, Button,Text } from "@chakra-ui/react";
import img from '../img/img'
const Page404 = () => {
    return (
        <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}>
            <Image src={img.baotri}
                height={'70vh'} />
                <Text color={'facebook.600'} fontSize={'50px'}>Web đang bảo trì</Text>
            <Button backgroundColor={'cyan.400'}>
                <Link href='https://www.facebook.com/profile.php?id=100083653755690' color={'white'}>Fanpage Eagle Teal</Link>
            </Button>
        </Flex>
    )
}
export default Page404