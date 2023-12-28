import React, { useState } from 'react';
import './cover.css';


const Cover = () =>{
return(
    <>
    <section className="cover">
        <div className="section-imgs">
            
            <div className="custom-shape-divider-bottom-1703144822">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"opacity="1" className="shape-fill"></path>
            </svg>
            </div>

            <div className="dep-info">
                <div className="know-dep">
                    <h1>About the Department</h1>                    
                    {/* <div className="show-btn"><a href="https://www.iitkgp.ac.in/department/MT" target='__blank'>Read More</a></div> */}
                </div>
                <div className="dep-content">
                    <div className="show-content">
                       <p>
                       The Department had its inception in 1954. Over the years, the Department has developed excellent expertise in the areas of Extractive and Physical Metallurgy, Manufacturing Processes, Mechanical Behaviour of Materials, Nano-Science and Technology, Modelling and Simulation, Surface Engineering, Powder Metallurgy and Environmental Degradation of Materials. The Department takes pride for its wide spectrum of state of the art laboratories both for teaching and research purposes. Keeping its tradition for producing world class metallurgists, the Department has actively diversified to advanced materials for addressing today’s technological challenges in renewable energy and healthcare. The Department has provided the required manpower for sustainable growth in India’s backbone of steel industry and continues to do so even today with the establishment of “Steel Technology Center” at IIT Kharagpur. The Department aims to establish itself as a global leader in frontier areas of Metallurgical & Materials research and education so that it can effectively cater to the growing needs of industry, academia and research institutions of India. The Department has been publishing, on an average, more than 90 papers per year in peer-reviewed journal over the last 5 years. Similarly, a large number of sponsored and consultancy projects are undertaken per year. Excellence in teaching and research is the key element of this vision and the Department has set clear-cut objectives and strategies to realise this vision.
                       </p>
                    </div>
                </div>
            </div>

        </div>

    </section>
    </>
)
};

export default Cover;

