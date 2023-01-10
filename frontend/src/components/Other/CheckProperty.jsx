export const checkFormEmpty = (form) => {
  const {
    firstName,
    // lastName,
    addressLine1,
    locality,
    pinCode,
    // state,
    // country,
    email,
    mobile,
  } = form;
  if (
    !firstName ||
    // !lastName ||
    !addressLine1 ||
    !locality ||
    !pinCode ||
    // !state ||
    // !country ||
    !email ||
    !mobile
  ) {
    return { status: false, message: "Vui lòng điền các trường bắt buộc" };
  }
  return { status: true };
};
export const checkMobile = (num) => {
  if (num.length !== 10) {
    return {
      status: false,
      message: "Vui lòng cung cấp số điện thoại di động hợp lệ gồm 10 chữ số",
    };
  }
  return { status: true };
};
export const checkPinCode = (num) => {
  if (num.length !== 6) {
    return { status: false, message: "Vui lòng cung cấp mã pin hợp lệ gồm 6 chữ số" };
  }
  return { status: true };
};
export const checkEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return { status: false, message: "Vui lòng cung cấp email hợp lệ" };
  }
  return { status: true };
};
export const checkPassword = (password) => {
  const errors = [];
  if (password.length < 6) {
    errors.push("Mật khẩu ít nhất 6 kí tự");
  }
  if (password.length > 16) {
    errors.push("Mật khẩu không quá 16 ký tự");
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push("Mật khẩu có ít nhất một chữ thường");
  }
  if (password.search(/[A-Z]/i) < 0) {
    errors.push("Mật khẩu có ít nhất một chữ hoa");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("Mật khẩu có ít nhất một số");
  }
  if (password.search(/[!@#$%^&*]/) < 0) {
    errors.push("Mật khẩu có ít nhất một ký tự đặc biệt(! @ # $ % ^ & *)");
  }
  if (errors.length > 0) {
    return { status: false, message: errors.join(", ") };
  }
  return { status: true };
};
export const checkSignupForm = ({
  name,
  username,
  email,
  password,
  mobile,
}) => {
  console.log(name, username, email, password, mobile);
  if (!name || !username || !email || !password || !mobile) {
    return { status: false, message: "Vui lòng điền tất cả các trường" };
  } else {
    return { status: true };
  }
};
export const checkLoginForm = ({ email, password }) => {
  if (!email || !password) {
    return { status: false, message: "Vui lòng điền tất cả các trường" };
  }
  return { status: true };
};
export const setToast = (
  toast,
  title,
  status,
  duration = 2000,
  description
) => {
  toast({
    title,
    description,
    status,
    duration,
    isClosable: true,
    position: "top",
  });
};
export const checkCharacter = (str) => {
  if (str[0] !== str[0].toUpperCase()) {
    return {
      status: false,
      message: `Viết hoa chữ cái đầu tiên trong "${str}"`,
    };
  }
  return { status: true };
};
