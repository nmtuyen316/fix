import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  //Icon,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import React, { useEffect } from "react";
import { GrLogout } from "react-icons/gr";
//import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";
import { profile,logout } from "../../redux/AuthReducer/action";
import { getLocalData } from "../../utils/localStorage";
const Profile = ({ colorMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.AuthReducer.isAuth);

  const profileData = useSelector((state) => state.AuthReducer?.profileData);
  useEffect(() => {
    if (profileData?.length === 0) {
      const token = localStorage.getItem("token"); //different approaches for getting local storage
      const username = getLocalData("userInfo");
      const payload = {
        username: username,
        token,
      };
      dispatch(profile(payload));
    }
  }, [dispatch, profileData?.length]);

  const logoutHandler = () => {
    const token = localStorage.getItem("token");
    const payload ={
      token
    }
    dispatch(logout(payload)).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div>
      <Menu>
        <MenuButton
          p="0"
          borderRadius={"50%"}
          bg="none"
          color="black"
          as={Button}
          colorScheme="none"
          rightIcon={<ChevronDownIcon ml={"-15px"} fontSize={"20px"} />}
        >
          <Avatar
            size={"sm"}
            name={profileData.length !== 0 ? profileData.name : ""}
            // src={profileData.length !== 0 ? profileData.description : ""}
          />
          <Text
            fontSize={"xs"}
            color={colorMode === "dark" ? "white" : "black"}
          >
            {profileData.length !== 0 ? profileData.name : ""}
          </Text>
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem fontWeight={"bold"}>
              {profileData.length !== 0 ? profileData.name : ""}
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => navigate("/cart")}>
              <BsCartCheck color={"blue"} />
              Cart
            </MenuItem>
            <MenuItem onClick={logoutHandler} color='red.400'>
              <GrLogout />
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Profile;