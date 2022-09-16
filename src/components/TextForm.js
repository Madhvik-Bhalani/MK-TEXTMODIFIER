import React, { useState } from 'react'
import './TextForm.css'

export default function TextForm(props) {
    const [text, settext] = useState("")
    const changeHandler = (e) => {
        settext(e.target.value)

    }
    const upperHandler = () => {
        let uptext = text.toUpperCase();
        settext(uptext)
        props.disalert2("success", "converted to uppercase")

    }
    const lowerHandler = () => {
        let lwtext = text.toLowerCase();
        settext(lwtext)
        props.disalert2("success", "converted to lowercase")

    }
    const clearHandler = () => {
        let cltext = ""
        settext(cltext)
        props.disalert2("success", "text cleared")

    }

    const [copybtn, setCopybtn] = useState("Copy Text")
    const copyHandler = () => {
        navigator.clipboard.writeText(text)
        setCopybtn("Text Copied..!")

        setTimeout(() => {
            setCopybtn("Copy Text")
        }, 1500);

    }
    const extraSpaceHandler = () => {
        let newtxt = text.split(/\s+/)

        settext(newtxt.join(" "))
        props.disalert2("success", "extra space removed")

    }

    let btnstatus=text.length===0?true:false;
    return (
        <>

            <div className="mt-5 mb-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ textTransform: "capitalize", fontSize: "22px" }}> <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.head}</h2></label>
                <textarea className="form-control" id="txtbox" rows="9" value={text} onChange={changeHandler} style={{ backgroundColor: props.mode === "light" ? "white" : "#2d406e", color: props.mode === "dark" ? "white" : "black", border: props.mode === "light" ? "1px solid black" : "1px solid white", fontSize: "20px" }}></textarea>

            </div>
            <div className="btns container mt-2">
                <button disabled={btnstatus} className="btn btn-primary mx-1 my-1" onClick={upperHandler}>Uppercase</button>

                <button disabled={btnstatus} className="btn btn-info mx-1 my-1" onClick={lowerHandler}>Lowercase</button>

                <button disabled={btnstatus} className="btn btn-danger mx-1 my-1" onClick={clearHandler}>Clear Text</button>

                <button disabled={btnstatus} className="btn btn-warning mx-1 my-1" onClick={extraSpaceHandler}>RemoveExtra Spaces</button>

                <button disabled={btnstatus} className={`btn btn-${copybtn === "Copy Text" ? "dark" : "success"} mx-1 my-1`} onClick={copyHandler}>{copybtn}</button>
            </div>
            <div className="container mt-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3 className='capit'>◈ Text summary ◈</h3>
                <h4 className='capit'>⇝ {`Words=${text.split(/\s+/).filter((elem) => { return elem.length !== 0 }).length} And char=${text.length}`}</h4>
                <h4 className='capit'>⇝ it can take <strong>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length * 0.008} </strong>Minutes</h4>
                <h4>⇝ Preview :</h4>
                <h4>[ {text.length > 0 ? text : "Enter Text In Textarea For Preview Here.."} ]</h4>
            </div>
        </>
    )
}
