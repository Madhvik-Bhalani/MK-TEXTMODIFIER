import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    const [modebtn, setModebtn] = useState("Enable Dark Mode")
    const modeHandler = () => {
        props.toggleMode();
        if (modebtn === "Enable Dark Mode") {
            setModebtn("Enable Light Mode")
        } else {

            setModebtn("Enable Dark Mode")
        }
        document.title = "MK-Dark Mode"
        setTimeout(() => {

            document.title = "MK-Text Analyser"
        }, 1700);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode === "dark" ? "dark" : "light"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.about}</Link>
                            </li>


                        </ul>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={modeHandler} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "dark" ? "white" : "black" }}>{modebtn}</label>
                        </div>
                    </div>

                    {/* custom color palate  */}
                    {/* <div>

                        <button className="btn btn-primary mx-2" onClick={()=>props.toggleMode("primary")} style={{height:
                        "25px",width:"12px"}}></button>
                        <button className="btn btn-danger mx-2" onClick={()=>props.toggleMode("danger")} style={{height:
                        "25px",width:"12px"}}></button>
                        <button className="btn btn-success mx-2" onClick={()=>props.toggleMode("success")} style={{height:
                        "25px",width:"12px"}}></button>
                    </div> */}

                </div>
            </nav>
        </>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "TextUtils",
    about: "About"
}