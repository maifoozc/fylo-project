import React from 'react';
import showcaseIMG from "../images/illustration-stay-productive.png";
import arrow from  '../images/icon-arrow.svg';
import "../components/Showcase.css";
function Showcase() {
  return (
    <div >
        <div className='Table'>

        <div className="row showcase">
            <div className="col">
                <img src={showcaseIMG} />
            </div>


            <div className="col-">
                <h1>Stay productive,<br/>
                 wherever you are</h1>
                 <h5>Never let location be an issue when accessing your files. Fylo has you<br/>
                 covered for all of your file storage needs</h5>
                 <h5>Securely share files and folders, family and collegues for live<br/>
                 collaboration. No email attachments required.</h5>
                 <h5 className='hyper text-decoration-underline color'>See how Fylo works<span><img src={arrow}/></span></h5>
            </div>
        </div>


        </div>
    
    </div>
  )
}

export default Showcase;