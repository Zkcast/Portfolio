import React from 'react'
import { Description } from './Description/Description'
import { Extra } from './Extra/Extra'
import './Home.css'

export const Home = () => {
    return (
        <div className="home_container">   
        <div className="description_component"><Description></Description></div>
        <div className="extra_component"><Extra></Extra></div>
        <br></br>
        </div>
    )
}
