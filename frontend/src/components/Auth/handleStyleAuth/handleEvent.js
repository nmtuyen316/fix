import $ from "jquery";
import login from '../../../helpers/handleAuth/Login'
import Register from "../../../helpers/handleAuth/Register";

export async function handleSubmitRegister(event,username,password){
    event.preventDefault();
    var completePass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/
    if(password.match(completePass)){
        await Register(username,password)
    }
}
export async function handleSubmitLogin(event, user, password) {  //  prevent buttons in form to reload
    event.preventDefault();
    await login(user,password);
};
export function handleSign_upClick() { // when click Sign Up button, hide the Log In elements, and display the Sign Up elements
    $("#title-login").toggleClass("hidden", true);
    $("#login-fieldset").toggleClass("hidden", true);
    $("#login-form-submit").toggleClass("hidden", true);
    $("#lost-password-link").toggleClass("hidden", true);
    $("#sign_up").toggleClass("active-button", false);
    $("#log_in").removeAttr("disabled");

    $("#title-signup").toggleClass("hidden", false);
    $("#signup-fieldset").toggleClass("hidden", false);
    $("#signup-form-submit").toggleClass("hidden", false);
    $("#log_in").toggleClass("active-button", true);
    $("#sign_up").prop('disabled', true);
};
export function handleLoginClick() { // when click Log In button, hide the Sign Up elements, and display the Log In elements
    $("#title-login").toggleClass("hidden", false);
    $("#login-fieldset").toggleClass("hidden", false);
    $("#login-form-submit").toggleClass("hidden", false);
    $("#lost-password-link").toggleClass("hidden", false);
    $("#sign_up").toggleClass("active-button", true);
    $("#log_in").prop('disabled', true);

    $("#title-signup").toggleClass("hidden", true);
    $("#signup-fieldset").toggleClass("hidden", true);
    $("#signup-form-submit").toggleClass("hidden", true);
    $("#log_in").toggleClass("active-button", false);
    $("#sign_up").removeAttr("disabled");
};