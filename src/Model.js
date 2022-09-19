import React, { useState } from 'react';
import "./style.css";

export default function Model({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-comp">
      <header className="header">
        <h3>Welcome</h3>
        <button onClick={onClose}>Close Btn</button>
      </header>
      <forms>
        <label className="text" type="required">
          Name
        </label>
        <div></div>
        <div className='Name-input'>
        <input type="text" placeholder="Enter Name" size="50" ></input>
        </div>
        

        <label for="vech" className="text">
          Details
        </label>
        <div className="selectOption">
          <select name="vechile" id="vech">
            <option value="">Select Type</option>
            <option value="Car">Car</option>
            <option value="Jeep">Jeep</option>
            <option value="Bus">Van</option>
          </select>

          <input placeholder="single journey" />
          <input placeholder="Return journey" />
        </div>
        <div className="selectOption">
          <select name="vechile" id="vech">
            <option value="">Select Type</option>
            <option value="Car">Car</option>
            <option value="Jeep">Jeep</option>
            <option value="Bus">Van</option>
          </select>

          <input placeholder="single journey" />
          <input placeholder="Return journey" />
        </div>
        <button className="btn">Add Details</button>
      </forms>
    </div>
  );
}
