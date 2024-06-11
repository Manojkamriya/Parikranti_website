
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';



export default function LoginPage() {
 


  return (
    <>
      <h1>This is the login page</h1>
     
     <button>Continue with google</button>
      <br />
      <Link to="/">
        <button><h3>Go Back to Home</h3></button>
      </Link>
      
    </>
  );
}
