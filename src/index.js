import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name="Priya";
let currTime=new Date();
currTime=currTime.getHours();
let greeting='';
const cssStyle={};
if(currTime>=1 && currTime<12)
{
  greeting="Good Morning";
  cssStyle.color="green";
}
else if(currTime>=12 && currTime<19)
{
  greeting="Good Afternoon";
  cssStyle.color="orange";
}
else
{
  greeting="Good Night";
  cssStyle.color="black";
  
}
ReactDOM.render(
    <div>
    <h1>Hello {name},<span style={cssStyle}>{greeting}</span></h1>
    </div> ,
  document.getElementById('root')
);


