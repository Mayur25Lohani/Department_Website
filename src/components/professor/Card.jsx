import React from 'react'
import '../hodmsg/hod.css'
import './card.css'
const card = (props) => {
  return (
    <div>
      <div className="hodcard">
                    <div className="hod-img">
                        <img src=" " alt="" />
                    </div>
                    <div className="hod-name">
                        <p>
                        {props.name}
                        </p>
                    </div>
                    <div className="hod-cnt">
                    <p><i className="fa-solid fa-phone"></i> :  {props.contact}</p>
                            <p><a href = {`mailto: ${props.mail}`} target='__blank'><i className="fa-solid fa-envelope"></i> : {props.mail}</a></p>
                            <button className="button-30" role="button"><a href={`${props.link}`} target='__blank'>Know More</a></button>
                    </div>
                </div>
    </div>
  )
}

export default card
