import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LandingScreen({ setLoggedIn }) {

    return (
       <div class="container">
            <div id="homePage">
                <h1 id="home-tag"> Welcome to PopX</h1>
                <p class="para-home">If you're interested in learning more about our company, please login or register for visit.</p>
                <Link to="/signUp"><button id="home-create" class="btn-all"> Create Account</button></Link>
                <Link to="/login"><button id="home-login" class="btn-all">Already Registered? Login </button></Link>
        </div>
       </div>
    )

}
export default LandingScreen;