import React from 'react'
import './Alert1.css'

function Alert1(props) {
    return (props.alert &&
        <>
            <div className={`albox alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong style={{textTransform:"capitalize",fontSize:"16px"}}>{props.alert.type}:{props.alert.msg}</strong>

            </div>
        </>
    )
}

export default Alert1