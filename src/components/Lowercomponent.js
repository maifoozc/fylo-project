import React from "react";
import "../components/Lowercontainer.css";
import pro_1 from "../images/profile-1.jpg";
import pro_2 from "../images/profile-2.jpg";
import pro_3 from "../images/profile-3.jpg";

function Lowercomponent() {
    return (
        <div >
            <div className="Table lowerComponent">
                <div className="row">
                    <div className="col-sm-12 col=md-4 col-lg-4 paper card">
                        <h5>
                            Fylo has improved our team productivity by
                            <br />
                            an order of magnitude. Since making the
                            <br />
                            switch our team has become a well-oiled
                            <br />
                            collaboration machine
                        </h5>

                        <div className="profile">
                            <div className="proPic">
                                <img src={pro_1} />
                            </div>
                            <div>
                                <h6>Satish Patel</h6>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col=md-4 col-lg-4 paper card">
                        <h5>
                            Fylo has improved our team productivity by
                            <br />
                            an order of magnitude. Since making the
                            <br />
                            switch our team has become a well-oiled
                            <br />
                            collaboration machine
                        </h5>

                        <div className="profile">
                            <div className="proPic">
                                <img src={pro_2} />
                            </div>
                            <div>
                                <h6>Bruce McKenzie</h6>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col=md-4 col-lg-4 paper card">
                        <h5>
                            Fylo has improved our team productivity by
                            <br />
                            an order of magnitude. Since making the
                            <br />
                            switch our team has become a well-oiled
                            <br />
                            collaboration machine
                        </h5>

                        <div className="profile">
                            <div className="proPic">
                                <img src={pro_3} />
                            </div>
                            <div>
                                <h6>Iva Boyd</h6>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Lowercomponent;
