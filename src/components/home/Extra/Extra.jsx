import React from 'react'
import './Extra.css'
import { Carousel } from 'react-bootstrap';


export const Extra = () => {


    // Crea un contexto que incluye todas las imágenes de la carpeta 'images'
    const imagesContext = require.context('../../../assets/skills', true, /\.(png|jpe?g|svg)$/);

    // Itera sobre el contexto y carga cada imagen en una variable
    const images = imagesContext.keys().map(imagesContext);

    const firstImage = images[0];
    const firstImageName = firstImage.name;
    return (

        <div class='extra_container'>
                <Carousel interval={1500} draggable slidestoshow={2} indicators={false}>

                    {images.map(image => (
                        <Carousel.Item>
                            <h5>{image[0].name}</h5>
                            <img
                                key={image.name}
                                className="skills_icon"
                                src={image}
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        
                    ))}

                </Carousel>          
        </div>


    )
}
