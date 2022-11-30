import $ from 'jquery'
import { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeInUp, fadeIn } from 'react-animations'
import './handleStyleAuth/AuthStyle.css'
import login from './handleAuth/Login';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInAnimation = keyframes`${fadeIn}`
const InputAnimation = styled.input`
        animation:1s ${fadeInUpAnimation};
    `;
const H1Animation = styled.h1`
        animation: 1s ${fadeInAnimation};
    `;

function AuthLayout({handleReponse}) {
    //--------- Login screen swicth -----
    const [user, setuser] = useState('')
    const [password, setpassword] = useState('')
    async function handleSubmit(event, user, password) {  //  prevent buttons in form to reload
        event.preventDefault();
        await login(user,password);
        if(localStorage.getItem('user')) window.location.assign('/');
    };
    function handleSign_upClick() { // when click Sign Up button, hide the Log In elements, and display the Sign Up elements
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
    function handleLoginClick() { // when click Log In button, hide the Sign Up elements, and display the Log In elements
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

    return (
        <div style={{ overflow: 'hidden' }} >
            <div className="panel shadow1">
                <form className="login-form">
                    <div className="panel-switch  fadeIn">
                        <button className="active-button" id="sign_up" type="button" onClick={handleSign_upClick}>Sign Up</button>
                        <button id="log_in" type="button" disabled="" onClick={handleLoginClick}>Log in</button>
                    </div>
                    <H1Animation className=" fadeInUp animate1" id="title-login">Welcome Back !</H1Animation>
                    <H1Animation className=" fadeInUp animate1 hidden" id="title-signup">Welcome !</H1Animation>
                    <fieldset id="login-fieldset">
                        <InputAnimation className="login  fadeInUp animate2" id="username_in" name="username" type="textbox" required="" placeholder="Username" value={user} onChange={(e) => { setuser(e.target.value) }} />
                        <InputAnimation className="login  fadeInUp animate3" id="password_in" name="password" type="password" required="" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </fieldset>
                    <fieldset className="hidden" id="signup-fieldset">
                        <InputAnimation className="login fadeInUp animate2" id="username_up" name="username" type="textbox" required="" placeholder="Username" value={user} onChange={(e) => { setuser(e.target.value) }} />
                        <InputAnimation className="login fadeInUp animate3" id="password_up" name="password" type="password" placeholder="Password" required="" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <InputAnimation className="login fadeInUp animate3" id="confirm_password_up" name="password" type="password" placeholder="Confirm password" required="" />
                    </fieldset>
                    <InputAnimation className="login_form button  fadeInUp animate4" id="login-form-submit" type="submit" value="Log in" onClick={(e) => handleSubmit(e, user, password)} />
                    <InputAnimation className="login_form button  fadeInUp animate4 hidden" id="signup-form-submit" type="submit" value="Sign up" onClick={(e) => handleSubmit(e, user, password)} />
                    <p><a className=" fadeIn animate5" id="lost-password-link" href='hear' onClick={(e) => handleSubmit(e, user, password)} >I forgot my login or password (!)</a></p>
                </form>
            </div>
        </div>
    )
}

export default AuthLayout