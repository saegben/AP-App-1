import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Home = (props) => {
  const navigate = useNavigate();

  return (
        <div>

            <div class="headings">
    
                <div class="title">
                    <p>ACCESS POINT</p>
                </div>
                <div class="title-2">
                    <p>⭒ CLASS OF 2022 ⭒</p>
                </div>
                <div class="subtitle">
                <p>Let's Go Get It!</p>
                </div>
    
            </div>
  

            <div class="container">

                <div class="user-pass">

                    <div class="user-holder">
                        <label for="user" ><b>Username</b></label>
                        <input id="user" name="user" type="username" placeholder="Enter Username"></input>
                    </div>

                    <div class="pass-holder">
                        <label for="pass"><b>Password</b></label>
                        <input id="pass" name="pass" type="password" placeholder="Enter Password"></input>
                    </div>
      
                </div>
  
                <button class="submitButton" onClick={() => navigate("/tabs")}><b>Login</b></button>
                <button class="forgotPassword" type="button" onClick={() => alert('LOL Bozo')}><b>Forgot Password?</b></button>
                
            </div>

        </div>
    );
};

export default Home;