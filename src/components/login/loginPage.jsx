import React from 'react'
import {Link} from 'react-router-dom'

export default function login_page() {
  return (
   <> <h1 >
      This is login page
    </h1>
    <button> continue with google</button>
    <br></br>
    <Link to="/"><button><h3>Go Back to Home</h3></button></Link>
    </>
  )
}
