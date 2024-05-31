import React from 'react'
const SelectField = ({ input, label, meta: { touched, error }, children }) => (
    <>
      {/* <label>{label}</label> */}
  
        <select {...input}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
    </>
  );

export default SelectField
