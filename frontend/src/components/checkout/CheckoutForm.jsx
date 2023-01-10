import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";

export const CheckoutForm = ({
  isLargerThan,
  FormSubmit,
  onChange,
}) => {
  return (
    <>
      <Box width={["95%", "90%", "50%", "50%"]}  m="auto" min-h="100vh">
        <form p="3rem" onSubmit={FormSubmit}>
          <Heading align={"left"} my={"5"}>
            Địa chỉ giao quà<span style={{ color: "red" }}>*</span>
          </Heading>
          <HStack spacing={"10"} my={"5"}>
            <Input
              onChange={onChange}
              type="text"
              name="firstName"
              placeholder="Họ và Tên"
            />
            {/* <Input
              onChange={onChange}
              type="text"
              name="lastName"
              placeholder="Tên lót và Tên"
            /> */}
          </HStack>
          <VStack spacing={"10"} my={"10"}>
            <Input
              onChange={onChange}
              type="text"
              name="addressLine1"
              placeholder="Địa chỉ 1"
            />
            <Input
              onChange={onChange}
              type="text"
              name="addressLine2"
              placeholder="Địa chỉ 2"
            />
          </VStack>
          <HStack spacing={"10"} my={"8"}>
            <Input
              onChange={onChange}
              type="text"
              name="locality"
              placeholder="Tỉnh/Thành phố"
            />
            <Input
              onChange={onChange}
              type="number"
              name="pinCode"
              placeholder="Mã bưu điện"
            />
          </HStack>
          <HStack spacing={"10"} my={"5"}>
            <Input
              onChange={onChange}
              type="text"
              name="state"
              placeholder="Ghi chú"
            />
            {/* <Input
              onChange={onChange}
              type="text"
              name="country"
              placeholder="Country*"
            /> */}
          </HStack>
          <Divider />
          <Heading align={"left"} my={"5"}>
            Thông tin liên lạc<span style={{ color: "red" }}>*</span>
          </Heading>
          <VStack spacing={"8"}>
            <Input
              onChange={onChange}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Input
              onChange={onChange}
              type="number"
              name="mobile"
              placeholder="Số điện thoại"
            />
          </VStack>
          <Button
            mt="2rem"
            width={["95%", "90%", "80%", "80%"]}
            my={"4"}
            bg={isLargerThan ? "black" : "grey"}
            color="whitesmoke"
            p="1.5rem 2rem"
            border={"3px solid beige"}
            _hover={{
              background: "none",
              color: "teal",
              border: "1px solid black",
            }}
            type="submit"
          >
            ĐẶT NHẬN QUÀ
          </Button>
        </form>
      </Box>
    </>
  );
};
