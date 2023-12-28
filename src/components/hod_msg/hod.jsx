import React, { useState } from 'react';
import './hod.css';
import hod from '../../assests/karrabi_mam.png';




const Hod = ()=>{
    return(
        <>
        <section className="msg-of-hod">

        <div className="heading">
            <h1>Message from HOD</h1>
        </div>
            <div className="hod-msg">
                <div className="card">
                        <img src={hod} alt="Logo" />
                        <div className="hod-info">
                            <h3>Head of Depatment</h3>
                            <h4>Prof. Karabi Das</h4>
                            <p><i class="fa-solid fa-phone"></i> : +91-3222-283254</p>
                            <p><a href="mailto: karabi@metal.iitkgp.ac.in" target='__blank'><i class="fa-solid fa-envelope"></i> : karabi@metal.iitkgp.ac.in</a></p>
                            <button class="button-30" role="button"><a href="https://www.iitkgp.ac.in/department/MT/faculty/mt-karabi" target='__blank'>Know More</a></button>
                        </div>                  
                </div>
                <div className="msg">
                    <p>Since its inception in 1954, our Department is catering to the needs of the nation, especially in the area of human resource development and state of the art research. The Department has been renamed as Department of Metallurgical & Materials engineering from Department of Metallurgical Engineering in 1994, to mark the progress of the Department in the area of exotic materials beyond conventional metals. We are proud that our Department is among the very few Institutes of excellence in India that stills embraces the classical metallurgy like iron and steel research along with advanced materials, which is the need of the nation today. Along with excellence in teaching our faculty members are addressing new important real-world challenges through introducing safer lithium-ion batteries, improved biomaterials and composites. Our faculty members are among the most cited in the world and are nationally and internationally recognized for excellence. Finally, I would like to thank all the sponsors of our research projects and activities in our Department that allows our program to thrive.</p>
                </div>
            </div>
            </section>
        
        </>
    )
};

export default Hod;