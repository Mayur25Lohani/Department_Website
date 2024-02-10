import React from 'react'
// import '../hodmsg/hod.css'
import './card.css'
const Card = (props) => {
  return (
    <div>
      <div className="hodcard1">
                    <div className="hod-img1">
                        <img src={props.img}  alt="" />
                    </div>
                    <div className="hod-name1">
                        <p>
                        {props.name}
                        </p>
                    </div>
                    <div className="hod-cnt1">
                    <p><i className="fa-solid fa-phone"></i> :  {props.contact}</p>
                            <p className='mailid'><a href = {`mailto: ${props.mail}`} target='__blank'><i className="fa-solid fa-envelope"></i> : {props.mail}</a></p>
                            <button className="btn btn-primary" role="button"><a href={`${props.link}`} target='__blank'>Know More</a></button>
                    </div>
                </div>
    </div>
  )
}

export default Card
