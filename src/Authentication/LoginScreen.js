import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginScreen({ email, password, setLoggedIn }) {
    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");

    function submitHandler(e){
        e.preventDefault();
        if(emailval === ''){
            alert("Please Enter Email!");
        }else if(passval===''){
            alert("Please Enter Password!");
        }else if(emailval === email && passval===password){
            setLoggedIn(true);
        }else{
            alert("User not found!");
        }
    }

    // function submitHandler(e){
    //     e.preventDefault();
    //    if(emailval === email && passval===password){
    //         setLoggedIn(true);
    //     }else{
    //         alert("User not found");
    //     }
    // }

    return (
        <div id='loginPage'>
            <h1 id='login-tag'>Signin to your PopX account</h1>
            <p class="para-login">For information to our website, please login using email</p>
            <form onSubmit={submitHandler}>
                <fieldset>
                <legend>Email Address</legend>
                <input placeholder='Enter email address' type='email' id='login-email' class="input-btn"
                    value={emailval} onChange={(e) => setemailval(e.target.value)} />
                </fieldset>

                <fieldset>
                <legend>Password</legend>
                <input placeholder='Enter password' type='password' id='login-password' class="input-btn"
                    value={passval} onChange={(e) => setpassval(e.target.value)} /><br />
                </fieldset>
                <button id='login-submit' type='submit'>Login</button>
            </form>
            <br />
            Don't have an account ?
            <br />
            <Link to="/signUp"><button id='login-to-register' >Sign Up</button></Link>
        </div>
    )
}
export default LoginScreen;