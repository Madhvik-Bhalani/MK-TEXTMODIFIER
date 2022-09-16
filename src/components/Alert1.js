import React from 'react'


function Alert1(props) {
    return (props.alert &&
        <>
            <div style={{
                position: "fixed",
                width: "100%",
                height: "37px",
                padding: "7px 0 7px 0"
            }} className={`albox alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong style={{ textTransform: "capitalize", fontSize: "16px" }}>{props.alert.type}:{props.alert.msg}</strong>

            </div>
        </>
    )
}

export default Alert1