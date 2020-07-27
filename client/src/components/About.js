import React from 'react'
import share from '../src/sharelink.svg'

export const About=()=>{

    return(
        <>
        <div className="row justify-content-center py-2" id="About">
            
            <div className="col-md-4 text-center p-2">
            <img src={share} alt="About" className="svg"></img>
            </div>
            <div className="col-md-6 text-center my-auto">
                <p><strong>Tired of sending long links which look ugly to the eye and take up too much space?</strong></p>
                <p>Well you've come to the right place. Paste the link in the box above and press <em>Shortify</em> to shorten 
                    your link to make it look more appealing.
                </p>
            </div>
        </div>
        <hr />
        </>
    )

}