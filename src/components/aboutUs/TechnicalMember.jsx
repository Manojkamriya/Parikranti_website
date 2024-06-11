import React from 'react'

export default function TechnicalMember(props) {
  return (
   
     <div className="technical-member">
     <img src={props.image} alt="member"/>
     <p>{props.name}</p>
 </div>
  )
}
