import React from 'react'
import TechnicalMember from './TechnicalMember';
function TechnicalTeam() {
  return (
    <>
       <h1 id="heading">Technical Team</h1> 
    <div className="technical-team">
    <TechnicalMember image='./Images/akshay-joshi.jpeg' name='Akshay Joshi'/>
       <TechnicalMember image='./Images/manoj.jpg' name='Manoj Kamriya'/>
       <TechnicalMember image='./Images/abhishek.jpeg' name='Abhishek Verma'/>
       <TechnicalMember image='./Images/adarsh-patel.jpeg' name='Adarsh Singh Patel'/>
    </div>
    </>
  )
}

export default TechnicalTeam
