import React from "react";
import "./topcontainer.css";
import illustrationImg from "../images/illustration-intro.png";


function TopContainer() {
    return (
        <div
            className="topcontainer">
            <div className="topImage">
                <img src={illustrationImg} alt="illustration-intro" />
            </div>
            <div className="topHeader" >
                <h1>
                    All your files in one secure location,
                    <br />
                    accessible anywhere.
                </h1>

                <h5>Fylo stores all your most impotant files in one secure location. <br />
                    Access them wherever you need, share and collaborate with <br />
                    friends family, and co-workers.
                </h5>

                <button className="topButton">Get started</button>

            </div>
        </div>
    );
}

export default TopContainer;
