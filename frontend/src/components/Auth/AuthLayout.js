import { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeInUp, fadeIn } from 'react-animations'
import './handleStyleAuth/AuthStyle.css'
import { handleLoginClick, handleSign_upClick, handleSubmitLogin, handleSubmitRegister,CheckPassRegister } from './handleStyleAuth/handleEvent';

//animation
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInAnimation = keyframes`${fadeIn}`
const InputAnimation = styled.input`
        animation:1s ${fadeInUpAnimation};
    `;
const H1Animation = styled.h1`
        animation: 1s ${fadeInAnimation};
    `;
//component AuthLayout
function AuthLayout() {
    //--------- Login screen swicth -----
    const [userNameLogin, setUserNameLogin] = useState('')
    const [passwordLogin, setpasswordLogin] = useState('')
    //--------- Register ----------------
    const [usernameRegister, setUserNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [passComfirmRegister, setpassComfirmRegister] = useState('')
    return (
        <div style={{ overflow: 'hidden' }} >
            <div className="panel shadow1">
                <form className="login-form">
                    <div className="panel-switch">
                        <button className="active-button" id="sign_up" type="button" onClick={handleSign_upClick}>Sign Up</button>
                        <button id="log_in" type="button" disabled="" onClick={handleLoginClick}>Log in</button>
                    </div>
                    <H1Animation className=" fadeInUp" id="title-login">Welcome Back !</H1Animation>
                    <H1Animation className=" fadeInUp hidden" id="title-signup">Welcome !</H1Animation>
                    <fieldset id="login-fieldset">
                        <InputAnimation 
                            className="login" 
                            id="username_in" 
                            name="username" 
                            type="textbox" 
                            required 
                            placeholder="Username" 
                            value={userNameLogin} 
                            onChange={(e) => { setUserNameLogin(e.target.value) }} 
                        />
                        <InputAnimation 
                            className="login" 
                            id="password_in" 
                            name="password" 
                            type="password" 
                            required 
                            placeholder="Password" 
                            value={passwordLogin} 
                            onChange={(e) => { setpasswordLogin(e.target.value) }} 
                        />
                    </fieldset>
                    <fieldset className="hidden" id="signup-fieldset">
                        <InputAnimation 
                            className="login" 
                            id="username_up" 
                            name="username" 
                            type="textbox" 
                            required
                            placeholder="Username" 
                            value={usernameRegister} 
                            onChange={(e) => { setUserNameRegister(e.target.value) }} 
                        />
                        <InputAnimation 
                            className="login" 
                            id="password_up" 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                            required
                            value={passwordRegister} 
                            onChange={(e) => {
                                setPasswordRegister(e.target.value) 
                                CheckPassRegister(e.target.value)
                            }} 
                        />
                        <InputAnimation 
                            className="login" 
                            id="confirm_password_up" 
                            name="password" 
                            type="password" 
                            placeholder="Confirm password" 
                            
                            value={passComfirmRegister} onChange={e => setpassComfirmRegister(e.target.value)} 
                        />
                    </fieldset>
                    <InputAnimation 
                        className="login_form button animate4" 
                        id="login-form-submit" 
                        type="submit" 
                        value="Log in" 
                        onClick={(e) => handleSubmitLogin(e, userNameLogin, passwordLogin)} 
                    />
                    <InputAnimation 
                        className="login_form button animate4 hidden" 
                        id="signup-form-submit" 
                        type="submit" 
                        value="Sign up" 
                        onClick={(e) => handleSubmitRegister(e, usernameRegister, passwordRegister)} 
                    />
                    {/* <p><a className=" fadeIn animate5" id="lost-password-link" href='hear' onClick={(e) => handleSubmit(e, userNameLogin, passwordLogin)} >I forgot my login or password (!)</a></p> */}
                </form>
            </div>
        </div>
    )
}

export default AuthLayout