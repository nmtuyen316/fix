import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
//import swal from "sweetalert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
//import { LOGIN_S } from "../redux/AuthReducer/actionType";
import { ViewIcon } from "@chakra-ui/icons";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const pathRoute = location.state?.from?.pathname || "/";
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye((prev) => !prev);
  };
  const loginHandler = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      dispatch(login(params, toast))
      .then((res) => {
        navigate(pathRoute, { replace: true });
      })
    }
  };

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textTransform={"uppercase"}>
              Đăng nhập tài khoản của bạn
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Tên đăng nhập</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Mật khẩu</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"}>Bạn quên mật khẩu?</Link>
                </Stack>
                <Button
                  bg={"black"}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={loginHandler}
                >
                  {loading ? <Spinner /> : "Đăng nhập"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Bạn chưa có tài khoản?
                  <RouterLink to="/register" color={"blue.400"}>
                    Đăng ký
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;

// swal({
//   text: "Login Success",
//   icon: "success",
// });
