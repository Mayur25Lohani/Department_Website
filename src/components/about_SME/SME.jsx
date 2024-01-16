import React,{ useEffect } from "react";
import "./SME.css";
import '../../index.css'
import sme from '../../assests/SME.png'

const SME = ()=>{
    
    
    return(
        <>
            <section className="sme ">
                <div className="sme-header">
                     <img src={sme} alt="sme_logo" />
                    <div className="sme-heading ">
                        <h1>Society of Metallurgical and Materials Engineers</h1>
                    </div>
                 </div>
                <div className="sme-info">
                    <div className="sme-logo">
                        <img src={sme} alt="sme_logo" />
                    </div>
                    <div className="sme-data">
                        <p>
                            The official departmental society of the Department of Metallurgical
                            & Materials Engineering, IIT Kharagpur, SME strives to ensure the
                            betterment of the UG, PG and RS community of MME students by
                            working on 3 fronts: Research, Academics and Welfare. SME aims to
                            promote Materials Science research among each of the student
                            communitieswhile enabling collaboration, creativity and ideation.
                            The Society of Metallurgical Engineers, IIT Kharagpur, is the
                            conducting body of the annual departmental fest, COMPOSIT,
                            providing a platform for students to showcase their research
                            work, thinking abilities, and reasoning aptitude. SME also works
                            to facilitate MSE research among the UG student community
                            by facilitating coordination between professors' research
                            groups and budding young researchers.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SME ;