import { render } from '@testing-library/react';
import React from 'react'
import { proyects } from '../../assets/data'
import './Proyects.css'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Proyects = (props) => {


    const imagesContext = require.context('../../assets/proyects/rentten', true, /\.(PNG|png|jpe?g|svg)$/);
    const rentten = imagesContext.keys().map(imagesContext);

    const imagesContext2 = require.context('../../assets/skills', true, /\.(png|jpe?g|svg)$/);

    const skills = imagesContext2.keys().map(key => {
        const fileName = key.split('/').pop();
        return {
            name: fileName,
            image: imagesContext2(key)
        };
    });


    const getIcons = (n) => {
        return skills.filter(skill => proyects[n].used.some(s => skill.name.includes(s)));
    }




    return (



        <div className='proyects-gallery'>

            {proyects.map((proyect, i) => {
                return (
                    <div className='container_div'>
                    <h5 className='card-title text-info'>{proyect.title}</h5> 
                    <div className='proyect_container'>
                    <p style={{color: 'grey'}}>{proyect.subtitle}</p>
                        <div className='proyect_div'>
                            <img className='card' src={proyect.img[0]} />
                            <p className='subtitle'>
                                <Link to={`/proyects/${proyect.id}`}> <button name={i} type="button" class="btn btn-info">Know more</button></Link>
                                </p>

                        </div>
                        {getIcons(i).map((e) => {
                            return (
                                <img title={e.name.slice(0, e.name.indexOf('.'))} className='tech_icon' src={e.image}></img>

                            )
                        })}
                    </div>
                    </div>

                )
            })}
        </div>

    )
}


// {
//     title: 'Rent-Ten',
//     icons: <FaAngular />,
//     subtitle: 'Rent or publish places around the world.',
//     subsubtitle: 'Filters, Login, Notifications via e-mail, Payment Gateway with MercadoPago, Darkmode, etc..',
//     img: rentten_images,
//     desctiption: "Made with Angular/NgRx, Boostrap, Express, Sequelize, PostgreSQL",
//     link: "https://rent-ten.vercel.app/home",
//     github: "https://github.com/raulereno/rent-ten",
//     used: "TypeScript. CSS/Bootstrap. Angular/NgRx. Express. Sequelize. PostgreSQL"
// },