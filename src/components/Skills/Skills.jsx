import React from 'react'
import './Skills.css'
import { technologies } from '../../assets/data.js'
import { Link } from 'react-router-dom'

export const Skills = () => {


    const imagesContext = require.context('../../assets/skills', true, /\.(png|jpe?g|svg)$/);
    const images = imagesContext.keys().map(imagesContext);

    return (
        <div>
            
            <div className='skills_descr'>
                <p style={{ color: 'grey' }} className="card-text">These are the technologies that I currently master and have used in real projects with a team and/or for individual projects. To see the projects where they have been implemented, go to the <Link to='/projects'>Projects / Experience</Link> section.</p>
            </div>
            <div className="photo-gallery">
                {technologies.map(data => (
                    <div className="photo-container">
                        <a target='_blank' href={data.link}><img className='skills_icons' src={data.image} alt="Foto 1" /></a>
                        <p className='card-text'>{data.title}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
