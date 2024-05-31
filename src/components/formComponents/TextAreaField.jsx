import React from 'react'

const TextAreaField = ({ input, label, meta: { touched, error } }) => (
    <>
      {/* <label>{label}</label> */}

        <textarea {...input} placeholder='Enter your message' />
        {touched && error && <span>{error}</span>}
     
    </>
  );
  export default TextAreaField