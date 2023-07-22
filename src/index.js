import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";

function ncard(val){
  return (
    <Card 
      imgsrc= {val.imgscr}
      title = {val.title}
      sname = {val.sname}
      links = {val.links}
    />
  );
}
ReactDOM.render(
  <>
    <h1 className='heading_style'>List of Top 5 Netflix Series</h1>
    
    
    {Sdata.map(ncard)}    
  </>,
  document.getElementById('root')
);