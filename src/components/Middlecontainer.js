import React from 'react';
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import accessAnywhereImg from "../images/icon-access-anywhere.svg";
import securityIcon from "../images/icon-security.svg";
import collaboration from "../images/icon-collaboration.svg";
import anyFile from "../images/icon-any-file.svg";
import  "./Middlecontainer.css";

function Middlecontainer() {
    return (
        <div className='middleContainer'>
        <div className="Table">
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={accessAnywhereImg} alt="" />
                    <h3>Access your files, anywhere</h3>
                    <h5>The ability to use a smartphone, tablet, or computer<br />
                        to access your account means your files follow you<br />
                        everywhere
                    </h5>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={securityIcon} alt="" />
                    <h3>Security you can trust</h3>
                    <h5>2-factor authentication and user-controlled encryption are<br />
                            just a couple of security features we allow to help<br />
                        secure your files.
                    </h5>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={collaboration} alt="" />
                    <h3>Real-time collaboration</h3>
                    <h5>Securely share files and folders with friends, family and <br />
                        collegues for live collaboration. No email attachments<br />
                        required.
                    </h5>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img src={anyFile} alt="" />
                    <h3>Store any type of file</h3>
                    <h5>Wheather you're sharing holidays photos or work<br />
                            documents, Fylo has you covered allowing for all file<br />
                        types to be securely stored and shared.
                    </h5>
                </div>
                
            </div>

            

        </div>
        </div>
    )
}

export default Middlecontainer;