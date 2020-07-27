import React from 'react'
import logo_img from'../src/linkshortener.svg'

export const Logo=()=>{
    return (
        <div className="text-center">
            <img src={logo_img} alt="Link Shortener Logo" className="svg"></img>
        </div>
    )
}
