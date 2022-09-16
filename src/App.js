import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components//TextForm'
import Alert1 from './components/Alert1'
import Alert2 from './components/Alert2'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(false)
  const [alert2, setAlert2] = useState(false)

  // dismissing alert
  const disalert = ((type, msg) => {
    setAlert({
      type: type,
      msg: msg
    })

    setTimeout(() => {
      setAlert(false)
    }, 1000);
  })

  // box alert
  const disalert2 = ((type, msg) => {
    setAlert2({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert2(false)
    }, 1000);

    // or click button to dismiss
  })
  const dismis = () => {
    setAlert2(false)
  }

  // remove all class first
  // const rmclass = () => {
  //   document.body.classList.remove("danger")
  //   document.body.classList.remove("success")
  //   document.body.classList.remove("primary")
  // }
  // mode toggle
  const toggleMode = (cls) => {

    // rmclass(); //call fun to remove class
    // document.body.classList.add(`bg-${cls}`) //pass parameter to body
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      disalert("success", "Light Mode Enabled.!");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(23 22 80)";
      disalert("success", "Dark Mode Enabled.!");

    }
  }
  return (
    <>

      <Router>
        <Navbar title={"Mk_TextAnalyser"} about={"About Us"} mode={mode} toggleMode={toggleMode} />
        <Alert1 alert={alert} disalert={disalert} />
        <div className="container">
          <Alert2 alert={alert2} dismis={dismis} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm head={"text analyser"} mode={mode} disalert2={disalert2} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  )
}
