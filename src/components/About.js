import React from 'react'

export default function About({mode}) {
    // const [myStyle, setStyle] =useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    
    let myStyle = {
        color: mode === 'dark' ? 'white' : mode === 'red' ? '#FFD2D2' : mode === 'green' ? '#D2FFD2' : 'black',
        backgroundColor: mode === 'dark' ? '#042743' : mode === 'red' ? '#8B0000' : mode === 'green' ? '#008000' : 'white',
    }
   
  return (
    <div className = "container" style = {myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style ={myStyle}>
                <strong>Manipulate Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style ={myStyle}>
                TextUtils is a utility site for manipulation of typed text based on provided functionality and choice of user
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style ={myStyle}>
            <strong>Word Counter</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style ={myStyle}>
                It also shows the number of words and characters written and tells the minutes required to completely read the text
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style ={myStyle}>
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style ={myStyle}>
                It works with any browser such as Chrome, Firefox, Internet Explorer, and OperaGX
            </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
