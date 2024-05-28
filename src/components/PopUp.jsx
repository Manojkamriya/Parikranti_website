import React from "react";
import "./popUp.css";
export default function PopUp() {
  return (
    <>
      <div className="text-image">
        <img src="/Images/parikranti-image.png" alt="error" />
      </div>
      <h2 className="title">Get In Touch</h2>
      <form>
        <div className="my-fields">
          <div className="field">
            <label for="username">Username</label>
            <input type="text" placeholder="Enter your name" required></input>
          </div>
          <div className="field">
            <label for="Email">Email</label>
            <input type="email" placeholder="Enter your email" required></input>
          </div>
        </div>

        <div className="my-fields">
          <div className="field">
            <label for="phone" id="phone_no">
              Phone Number:
            </label>
            <input
              type="tel"
              placeholder="Enter your contact no."
              required
            ></input>
          </div>
          <div className="field">
            <label for="gender">Gender</label>

            <select name="projects">
              <option value="project1">Male</option>
              <option value="project2">Female</option>
              <option value="project2">Other</option>
            </select>
          </div>
        </div>
        <div className="my-fields">
          <div className="field">
            <label for="username">Address</label>
            <input
              type="text"
              placeholder=" Enter your Address"
              required
            ></input>
          </div>
          <div className="field">
            <label for="username">Name of city</label>
            <input
              type="text"
              placeholder=" Enter name of your city"
              required
            ></input>
          </div>
        </div>
        <div className="my-fields">
          <div className="field">
            <label for="username">State</label>
            <input
              type="text"
              placeholder=" Enter your state name"
              required
            ></input>
          </div>
          <div className="field">
            <label for="pin">PIN Code</label>
            <input
              type="number"
              placeholder=" Enter your PIN Code"
              required
            ></input>
          </div>
        </div>
        <div className="my-fields">
          <div className="field">
            <label for="blood-group">Blood Group</label>
            <select className="form-select" name="projects">
              <option value="project1">A+</option>
              <option value="project2">A-</option>
              <option value="project3">B+</option>
              <option value="project1">B-</option>
              <option value="project2">AB+</option>
              <option value="project3">AB-</option>
              <option value="project1">O+</option>
              <option value="project2">O-</option>
            </select>
          </div>
          <div className="field">
            <label for="query-topic">Query Topic</label>
            <select name="projects">
              <option value="project1">Internship</option>
              <option value="project2">Voluntership</option>
              <option value="project3">Collabration</option>
              <option value="project1">Partnership</option>
              <option value="project2">Donation</option>
              <option value="project3">SDG-17</option>
              <option value="project1">Others</option>
            </select>
          </div>
        </div>

        <label className="form_label" for="message">
          Message:
        </label>
        <textarea
          className="form_textarea"
          rows="4"
          cols="50"
          placeholder="Enter your message"
        ></textarea>
        <button type="submit" className="form_sub">
          Submit
        </button>
      </form>
    </>
  );
}
