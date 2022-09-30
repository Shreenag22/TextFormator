import React ,{useState}from 'react'

export default function Footer(props) {

  const handleonClick= ()=>{
    // console.log(onchange)
    let newtext = text.toUpperCase();
    setText(newtext)  
  };
  const handleOnchange = (event)=>{
    setText(event.target.value)
    
  };

  const [text, setText] = useState('Enter your text');
  return (
  
  <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange}  rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleonClick}>press this button</button>
      {/* <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button> */}
  </div>

 
  )
}
