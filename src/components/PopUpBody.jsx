import React from "react";
import TextField from "./formComponents/TextField";
import TextAreaField from "./formComponents/TextAreaField";
import SelectField from "./formComponents/SelectField";
import RadioGroup from "./formComponents/RadioGroup";
import { Field } from "redux-form";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const queryTopic = [
  "Internship",
  "Volunteership",
  "Collabration",
  "Partnership",
  "Donations",
  "SDG-17",
  "Issues",
];
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
const PopUpBody = ({ reset, submitting }) => (
  <>
    <div className="outer-cover">
      <div className="redux-container">
        <div className="form-field">
          <label>Full Name</label>
          <Field
            name="name"
            component={TextField}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <Field
            name="email"
            component={TextField}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <Field
            name="phoneNumber"
            component={TextField}
            type="number"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="gender-container">
          <label class="gender-title">Gender</label>
          <div className="radio">
            <Field
              className="gender-category"
              name="gender"
              component={RadioGroup}
              options={genderOptions}
            />
          </div>
        </div>
        <div className="form-field">
          <label>Blood Group</label>
          <Field
            name="bloodGroup"
            className="form-select"
            component={SelectField}
          >
            {bloodGroups.map((group) => (
              <option className="form-selet" key={group} value={group}>
                {group}
              </option>
            ))}
          </Field>
        </div>
        <div className="form-field">
          <label>Address</label>
          <Field
            name="address"
            component={TextField}
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div className="form-field">
          <label>City</label>
          <Field
            name="city"
            component={TextField}
            type="text"
            placeholder="City name"
          />
        </div>
        <div className="form-field">
          <label>State</label>
          <Field
            name="state"
            component={TextField}
            type="text"
            placeholder="State name"
          />
        </div>
        <div className="form-field">
          <label>PIN Code</label>
          <Field
            name="pinCode"
            component={TextField}
            type="number"
            placeholder="Enter your PIN Code"
          />
        </div>
        <div className="form-field">
          <label>Query</label>
          <Field name="queryTopic" component={SelectField}>
            {queryTopic.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </Field>
        </div>
        <div className="form-field" id="text-field">
          <label>Message</label>
          <Field
            name="message"
            component={TextAreaField}
            type="text"
            placeholder="Enter your Message"
          />
        </div>
        <div>
          {/* <button type="button" disabled={submitting} onClick={reset}>
        Reset
      </button> */}
        </div>
        <button className="form_sub" type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </div>
  </>
);

export default PopUpBody;
