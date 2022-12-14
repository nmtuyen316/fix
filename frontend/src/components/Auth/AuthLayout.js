import { useState } from 'react';
import './handleStyleAuth/AuthStyle.css'
import {
    handleLoginClick,
    handleSign_upClick,
    handleSubmitRegister,
    handleSubmitLogin
    // CheckPassRegister 
} from './handleStyleAuth/handleEvent';
import MessagePass from './components/messagePass.component';

//component AuthLayout
function AuthLayout() {
    //--------- Login screen swicth -----
    const [userNameLogin, setUserNameLogin] = useState('')
    const [passwordLogin, setpasswordLogin] = useState('')
    //--------- Register ----------------
    const [usernameRegister, setUserNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    return (
        <>
            <div style={{ overflow: 'hidden' }} >
                <div className="panel shadow1">
                    <form className="login-form">
                        <div className="panel-switch">
                            <button className="active-button" id="sign_up" type="button" onClick={handleSign_upClick}>Sign Up</button>
                            <button id="log_in" type="button" disabled="" onClick={handleLoginClick}>Log in</button>
                        </div>
                        <h1 className=" fadeInUp" id="title-login">Welcome Back</h1>
                        <h1 className=" fadeInUp hidden" id="title-signup">Welcome !</h1>
                        <fieldset id="login-fieldset">
                            <input
                                className="login"
                                id="username_in"
                                name="username"
                                type="textbox"
                                required
                                placeholder="Username"
                                value={userNameLogin}
                                onChange={(e) => { setUserNameLogin(e.target.value) }}
                            />
                            <input
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
                            <input
                                className="login"
                                id="username_up"
                                name="username"
                                type="textbox"
                                required
                                placeholder="Username"
                                value={usernameRegister}
                                onChange={(e) => { setUserNameRegister(e.target.value) }}
                            />
                            <input
                                className="login"
                                id="password_up"
                                name="password"
                                type="password"
                                placeholder="Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                required
                                value={passwordRegister}
                                onChange={(e) => {
                                    setPasswordRegister(e.target.value)
                                }}
                            />
                            <MessagePass passwordRegister={passwordRegister} />
                        </fieldset>
                        <input
                            className="login_form button animate4"
                            id="login-form-submit"
                            type="submit"
                            value="Log in"
                            onClick={(e) => handleSubmitLogin(e, userNameLogin, passwordLogin)}
                        />
                        <input
                            className="login_form button animate4 hidden"
                            id="signup-form-submit"
                            type="submit"
                            value="Sign up"
                            onClick={(e) => handleSubmitRegister(e, usernameRegister, passwordRegister)}
                        />
                        <p><a className=" fadeIn animate5" id="lost-password-link" href='hear'>I forgot my login or password (!)</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthLayout