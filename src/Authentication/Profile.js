import React from "react";

function Profile({ email, name, setLoggedIn }) {

    return (
        <>
        <div id="dashboardPage">
            <div class="sett">
                <h1 id="dash-heading">Account Settings</h1>
            </div>

            <div class="dashboard-main">
                <div class="profile-pic">
                    <div class="upload">
                        <img src="https://i.pravatar.cc/75" alt=""/>
                        <div class="round">
                            <input type="file"/>
                            <i class = "fa fa-camera" ></i>
                        </div>
                    </div>
                    <div class = "profile">
                        <h1 id="profile-heading">{name}</h1>
                        <p id="profile-para">{email}</p>
                    </div>
                </div>
                <p id="about-me">Hello, My name is {name}. I am from Gaya,
                 Bihar, India. I have done my B.tech from National Intitute of 
                 Science and Technology Berhampur Odisha, India. </p>
                 <hr/>
            </div>
            <div class="dashboard-btn">
            <button id="dashboard-logout" onClick={() => setLoggedIn(false)}>Log out </button>
            </div>
        
                        
            
        </div>
        </>
    )

}
export default Profile;