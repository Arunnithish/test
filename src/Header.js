import React, { useState } from 'react';
import './style.css';
import {FaFilter } from 'react-icons/fa';

import Modal from './Model.js';
import Models from './Models';


export default function Header() {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <div className="main-header">
      <h3>Toll Entries / vehicle  </h3>
     

      <form>
        <input className='Input'
          type="text"
          placeholder="Search For vechiles"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </form>

      <div className="buttons">
        <button
        onClick={() => {
          setOpen(!open);
        }}
        >Add new vehicle</button>
        <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
       
        <button
         onClick={() => {
          setOpens(!opens);
        }}
        >Add new tolls
        </button>
       <Models
        opens={opens}
        onCloses={() => {
          setOpens(false);
        }}
       />
        <button>View all tolls</button>
      </div>

    </div>
  );
}
