import { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeInUp, fadeIn } from 'react-animations'
import './handleStyleAuth/AuthStyle.css'
import { handleLoginClick,handleSign_upClick,handleSubmit } from './handleStyleAuth/handleEvent';

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