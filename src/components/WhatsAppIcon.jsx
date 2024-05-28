import React from 'react'
import './icon.css'
export default function WhatsAppIcon() {
  return (
    <>
        <button className='wp-icon'> <a href="https://wa.me/916267785438" rel="noreferrer" target="_blank">
       <img id="icon" src='/Images/whatsapp-icon.png' alt="icon" />
        <span className='text'>Start a conversation</span></a>
        </button>

{/* <a href="https://wa.me/916267785438" rel="noreferrer" target="_blank" className="wp-icon">
<img id="icon" src="/Images/whatsapp-icon.png" alt="WhatsApp Icon" />
<span className="text">Start a conversation</span>
</a> */}
</>
  )
}
