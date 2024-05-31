import React from 'react';
import {Form, reduxForm } from 'redux-form';
import PopUpBody from './PopUpBody';
import './popUp.css'
const submit = values =>{
  // alert(JSON.stringify(values));
  console.log(values);
};
const PopUpForm = ({ handleSubmit }) => (
    <>
  <Form onSubmit={handleSubmit(submit)}>
  <div className="text-image">
        <img src="/Images/parikranti-image.png" alt="error" />
      </div>
      <h2 className="title">Get In Touch</h2>
    <PopUpBody/>
   
  </Form>
   
  </>
);
const Validate = values => {
  
  const requiredFields = ['name', 'email', 'phoneNumber', 'gender', 'bloodGroup', 'city', 'state', 'pinCode', 'queryTopic'];
const errors = {};

requiredFields.forEach(field => {
  if (!values[field]) {
    errors[field] = 'Required Field';
  }
});

  return errors;
};

export default reduxForm({
  form: 'PopUpForm',
  validate: Validate,
 
})(PopUpForm);
