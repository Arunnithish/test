import React from 'react';
import './style.css';
import Header from './Header.js';
import Table from './Table.js';


export default function App() {
  

  return (
    <div>
      <h2>Toll Management Application</h2>
      <p className="br"></p>
      <Header/>
      <Table />
      
    </div>
  );
}
