import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        // console.log("Upper case was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick= ()=>{
        // console.log("Upper case was clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("Onchange")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert to lowercase</button>
    </div>
    <div className="container my-3" >
        <h1>Summary</h1>
        <p>total number of words:{text.split(' ').length} and Total number of charecters is: {text.length}</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
