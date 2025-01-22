import React, {useState} from "react";


export default function TextForm({heading, mode,showAlert, btn}) {
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Converted to Upper case", "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Converted to Lower case", "success")

    }
    const handleDeleteClick = ()=>{
        let newText = ''
        setText(newText)
        showAlert("Deleted case", "warning")

    }

  
    const handleReverseClick = () => {
        let newText = text.slice(0).split('').reverse().join('');
        setText(newText)
        showAlert("Converted to Reverse form", "success")
      };

    const handleCopyClick = ()=>{
        var newText = document.getElementById("mybox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        showAlert("Copied to text", "success")

    }
      
    const [text, setText] = useState('')

    // setText("newText") This is to change the text data 
    return (
        <>
        
        <div className="container"  style = {{color: mode === 'dark'?  'white': 'black'}}> 
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" rows = "8" id="mybox" value = {text} onChange={handleOnChange} style = {{backgroundColor: mode === 'dark'? 'grey': 'white', color: mode === 'dark'? 'white': 'black' }}></textarea>
            </div>
            
            <button className={`btn btn-${btn} mx-1`} onClick={handleUpClick}>Convert To UpperCase</button>
            <button className={`btn btn-${btn} mx-1`} onClick={handleLoClick}>Convert To LowerCase</button>
            <button className={`btn btn-${btn} mx-1`} onClick={handleReverseClick}>Reverse The String</button>
            <button className={`btn btn-${btn} mx-1`} onClick={handleCopyClick}>Copy Text</button>
            <button className={`btn btn-${btn}  mx-1`} onClick={handleDeleteClick}>Delete Text</button>
        </div>
        <div className="container my-3" style = {{color: mode === 'dark'?  'white': 'black'}}>
            <h2>Your Summary Here</h2>
            <p>TextArea has {text.trim().length === 0? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter your text above to preview it"}</p>
        </div>
        </>
  );
}

