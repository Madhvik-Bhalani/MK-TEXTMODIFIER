import React from 'react'
import ReactDOM from 'react-dom'
import './Alert2.css'

function Aldiv(props) {
    return (props.alert && <>
        <div className={`alertdiv alert-dismissible fade show alert alert-${props.alert.type}`}>
            <h2 style={{ textTransform: "capitalize" }}>{props.alert.msg}:</h2>
            <h2 style={{ textTransform: "capitalize" }}>◉_◉   {props.alert.type}</h2>
            <button className={`btn btn-${props.alert.type === "warning" ? "danger" : "success"}`} onClick={props.dismis}>okay</button>
        </div>
    </>)
}
function Backdiv(props) {

    return props.alert && <div className='backdrop' />

}

function Alert2(props) {
    return (
        <>
            {ReactDOM.createPortal(<Aldiv alert={props.alert} dismis={props.dismis} />, document.getElementById("error-root"))}
            {ReactDOM.createPortal(<Backdiv alert={props.alert} />, document.getElementById("backdrop-root"))}
        </>
    )
}
export default Alert2