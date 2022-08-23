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

                <div class="two-col">

                    <div class="col1">
                        <label for="username" ><b>Username</b></label>
                        <input id="username" name="username" type="text" placeholder="Enter Username"></input>
                    </div>

                    <div class="col2">
                        <label for="pass"><b>Password</b></label>
                        <input id="pass" name="pass" type="password" placeholder="Enter Password"></input>
                    </div>
      
                </div>
  
                <button class="submitButton" onClick={() => navigate("/tabs")}><b>Login</b></button>
                <button type="button" onClick={() => alert('LOL Bozo')} class="forgotPassword"><b>Forgot Password?</b></button>
                
            </div>

        </div>
    );
};

export default Home;