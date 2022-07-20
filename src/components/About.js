import React from 'react'

export default function About(props) {
    
   let mystyle={
    color:props.mode==="light"?"black":"white",
    backgroundColor:props.mode==="light"?"white":"rgb(23 22 80)"
   }
  return (
    <>
        <div className="accordion container mt-5" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the first item's accordion body.</strong> It is <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </>
  )
}
