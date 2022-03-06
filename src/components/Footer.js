import React from 'react';
import { ReactComponent as Logo } from "../images/logo.svg";
import "../components/Footer.css";
import Location from "../images/icon-location.svg";
import telephone from "../images/icon-phone.svg";
import mail from "../images/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Facebook } from "../images/facebook.svg";


function Footer() {
    return (
        <div className="footer">
            <div className="logo_footer">
                <Logo />
            </div>
            <div className="Table">

                

                    <div className="row">


                        <div className="col loca">
                            <img src={Location} align="top" />
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis ullamcorper risus, a cursus dolor congue iaculis.</h6>

                        </div>

                        <div className="col conta">

                            <div className='row telepo'>
                                <div className="col tele">
                                    <img src={telephone} />
                                    <p>   +1-543-123-4567</p>
                                </div>
                                <div className="col">
                                    <div className="col tele">
                                        <img src={mail} />
                                        <p>example@fylo.com</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col wher">
                            <div className="about_flex">
                                <p>About us</p>
                                <p>Jobs</p>
                                <p>Press</p>
                                <p>Blog</p>
                            </div>
                        </div>

                        <div className="col cont">
                            <p>Contact us</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                        </div>


                        <div className="col social">


                            <a href=""><FontAwesomeIcon icon={faFacebook} size="x" color='white' /></a>
                            <a href=""><FontAwesomeIcon icon={faTwitter} size="x" color='white' /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} size="x" color='white' /></a>
                        </div>
                    </div>
                </div>

            



        </div>
    )
}

export default Footer;


