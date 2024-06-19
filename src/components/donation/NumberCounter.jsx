import React, {useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
export default function NumberCounter(props) {
    const [counterOn, setCounterOn] = useState(false)
   
  return (
    <>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className='numberCard'>
     <h1>
        {counterOn && <CountUp start={0} end={props.n} duration={3} delay={0} />}+
        
     </h1>
     <p>{props.title}</p>
     </div>
     </ScrollTrigger>
    </>
  )
}

 
