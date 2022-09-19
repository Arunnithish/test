import React, { useState } from 'react';
import "./style.css";

export default function Models({ opens, onCloses }) {
  if (!opens) return null;
  return (
    <div className="modal-comp">
      <header className="header">
        <h3>Add new Entry</h3>
        <button onClick={onCloses}>Close Btn</button>
      </header>
      <forms>
        <label className="text" type="required">
          Select vehicle Type
        </label>
        <div></div>
        <div className="selectOptions">
          <select name="vechile" id="vech">
            <option value="">Select Type</option>
            <option value="Car">Car</option>
            <option value="Jeep">Jeep</option>
            <option value="Bus">Van</option>
          </select>
        </div>
        <label className="text" type="required">
          Vehicle Number
        </label>
        <input type='text' placeholder='Enter your login ID'/>
        <label className="text" type="required">
          Traiff
        </label>
        <input type='text' placeholder='Traiff amount'/>


       
        
        <button className="btn">Add Entry</button>
      </forms>
    </div>
  );
}
