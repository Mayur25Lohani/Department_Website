import React from "react";
import "./hod.css";
import '../../index.css'

import hod from "../../assests/sbsingh.jpeg";

const Hod = () =>{
    return (
        <>
        <section className="hod">

        <div className="hod-container">
            <div className="heading">
                <h1>Message from HOD</h1>
            </div>
            <div className="hod-info">
                <div className="hodcard">
                    <div className="hod-img">
                        <img src={hod} alt="" />
                    </div>
                    <div className="hod-name">
                        <p>
                        Prof. Shiv Brat Singh
                        </p>
                    </div>
                    <div className="hod-cnt">
                    <p><i className="fa-solid fa-phone"></i> :  +91-3222-283290</p>
                            <p><a href="mailto: sbs22@metal.iitkgp.ac.in" target='__blank'><i className="fa-solid fa-envelope"></i> : sbs22@metal.iitkgp.ac.in</a></p>
                            <button className="button-30" role="button"><a href="https://www.iitkgp.ac.in/department/MT/faculty/mt-sbs22" target='__blank'>Know More</a></button>
                    </div>
                </div>
                <div className="msg" id="hod-msg">
                    <p>
                    Since its inception in 1954, our Department is catering to the needs of the nation, especially in the area of human resource development and state of the art research. The Department has been renamed as Department of Metallurgical & Materials engineering from Department of Metallurgical Engineering in 1994, to mark the progress of the Department in the area of exotic materials beyond conventional metals. We are proud that our Department is among the very few Institutes of excellence in India that stills embraces the classical metallurgy like iron and steel research along with advanced materials, which is the need of the nation today. Along with excellence in teaching our faculty members are addressing new important real-world challenges through introducing safer lithium-ion batteries, improved biomaterials and composites. Our faculty members are among the most cited in the world and are nationally and internationally recognized for excellence. Finally, I would like to thank all the sponsors of our research projects and activities in our Department that allow our program to thrive.
                    </p>
                </div>
            </div>
        </div>
        
        
        </section>
        </>
    )
}

export default Hod;