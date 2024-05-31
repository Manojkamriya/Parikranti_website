import React from 'react'

const RadioGroup = ({ input, options, meta: { touched, error } }) => (
    <>
      {/* <label>{label}</label> */}
     
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" {...input} value={option.value} checked={input.value === option.value} />
            {option.label}
          </label>
        ))}
        {touched && error && <span>{error}</span>}
      
    </>
  );

export default RadioGroup
