import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tabs.css";

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const Tabs = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <button class="logout-button" onClick={() => navigate(-1)}>Logout</button>
      
        <div class="tab">
            <button class="tablinks" onClick={(event) => openTab(event, 'Topics')}>Topics</button>
            <button class="tablinks" onClick={(event) => openTab(event, 'Messages')}>Messages</button>
            <button class="tablinks" onClick={(event) => openTab(event, 'Steps')}>Steps</button>
        </div>


        <div id="Topics" class="tabcontent">
            <div class="heading">
                <h1>Search Topics</h1>
            </div>

            <div class="search-container">
                <input type="search-box" id="search-box" name="search-box" placeholder="Type Keywords"></input>
                <button class="search-button">Search</button>
            </div>
        </div>


        <div id="Messages" class="tabcontent">
            <h3>Messages</h3>
            <p>NO CONTENT</p> 
        </div>

        <div id="Steps" class="tabcontent">
            <h3>Steps</h3>
            <p>NO CONTENT</p>
        </div>
    </div>
  );
};

export default Tabs;