import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Iframe from 'react-iframe'
import axios from 'axios'

function MarkerTracking() {
    const location = useLocation()
    const [ htmlCode, setHtmlCode ]  = useState()

    async function handleSendFile() {
        axios.get('/marker')
            .then(function(res) {
                setHtmlCode(res)
                console.log("RES: ", res)
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    useEffect(() => {
        handleSendFile()
        console.log("htmlCode ", htmlCode)
    }, [htmlCode])

    return(
        <div className='marker-container'>
            <div dangerouslySetInnerHTML={{__html: htmlCode}}></div>
        </div>
    )
}

export { MarkerTracking }