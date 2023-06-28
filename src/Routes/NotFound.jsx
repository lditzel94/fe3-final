import React from 'react'
import lollyPopNotFound from "../assets/Chupetin404.svg"

const NotFound = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={lollyPopNotFound} style={{height:"60vh"}} alt=""/>
        </div>
    )
}

export default NotFound
