import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState('Enter your text here');

    const handleUpCLick = ()=>{
        console.log("Button was clicked",text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("Change");
        setText(event.target.value);
        // console.log("text=",text);
    }

    return (
    <div>
      
  <div className="mb-3">
    <h2>{props.heading}</h2>
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary" onClick={handleUpCLick}>Convert to Uppercase</button>
    </div>
    </div>
  )
}
