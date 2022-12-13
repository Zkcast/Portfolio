import React, { useRef, useState } from 'react'
import { Card, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { proyects } from '../../../assets/data'
import { Link } from 'react-router-dom';
import './ModalContent.css'
import githubicon from '../../../assets/githubicon.png'
import { FaUnlink, FaGithub } from "react-icons/fa";


export const ModalContent = (props) => {


    const { id } = useParams()
    let [imageIndex, setImageIndex] = useState(0);

    const proyect = proyects.find(proyect => proyect.id == Number(id))

    const handleIndex = (e) => {
        if (e.target.name == 'back' && imageIndex >= 1) (setImageIndex(imageIndex - 1))
        if (e.target.name == 'forward' && imageIndex < (proyect.img.length - 1)) (setImageIndex(imageIndex + 1))
    }

    console.log(proyect)

    return (

        <div className='modal_box'>
            <div className="text-center">
                <div className="proyect_body">
                    <h2 className="card-title text-info">{proyect.title} </h2>
                    <h4 className="card-subtitle mb-2 text-muted">{proyect.subtitle}</h4>
                    <br></br>
                    <div>
                        <a href={proyect.link} target='_blank' className="card-link">&#128279; Visit page</a><a href={proyect.github} target='_blank' className="card-link"> 
                        <img className='icon' src={githubicon}/> Visit GitHub</a>
                    </div>
                    <hr></hr>

                    <p className="card-body">
                        {proyect.description}
                    </p>
                    <div className='slider'>
                        <a name='back' onClick={handleIndex} className={imageIndex == 0 ? 'navBoton-disabled' : 'navBoton'}>&#x276E;</a>
                        <div className="proyect_photo">
                            <img className='proyect_photo' src={proyect.img[imageIndex]}></img>
                        </div>
                        <a name='forward' onClick={handleIndex} className={imageIndex == (proyect.img.length - 1) ? 'navBoton-disabled' : 'navBoton'}>&#x276F;</a>

                    </div>


                </div>
            </div>
        </div>

    )
}


