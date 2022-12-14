import React from 'react'
import { proyects } from '../../assets/data'
import './Proyects.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';


export const Proyects = (props) => {

    const imagesContext = require.context('../../assets/proyects/rentten', true, /\.(PNG|png|jpe?g|svg)$/);
    const rentten = imagesContext.keys().map(imagesContext);
    const imagesContext2 = require.context('../../assets/skills', true, /\.(png|jpe?g|svg)$/);

    const skills = (imagesContext2.keys().map(key => {
        const fileName = key.split('/').pop();
        return {
            name: fileName,
            image: imagesContext2(key)
        };
    })).filter(e => !e.name.startsWith('javascript')).filter(e => !e.name.startsWith('github'))

    const backup = proyects
    let [filteredProyects, setFiltered] = useState(proyects)
    let [selectedTechs, setSelectedTechs] = useState([])

    const getIcons = (n) => {
        return skills.filter(skill => proyects[n].used.some(s => skill.name.includes(s)));
    }

    // const applyfilter = (e) => {
    //     if (e.target.id == 'clean') {setFiltered(backup); setSelectedTechs([]); return}

    //     if (selectedTechs.length < 1) {
    //         setFiltered(backup)
    //     } else {
    //         setFiltered(proyects.filter(p => p.used.some(t => selectedTechs.includes(t))))
    //     }
    // }

    // const handleCheck = (e) => {
    //     if (!selectedTechs.includes(e.target.id)) {
    //         setSelectedTechs([...selectedTechs, e.target.id])
    //     } else {
    //         console.log(selectedTechs.filter((t) => t !== e.target.id))
    //         setSelectedTechs(selectedTechs.filter((t) => t !== e.target.id))
    //     }
    // }

    return (

        <div>

            {/* <div className='checkbox_div'>
                {skills.map((s) => {
                    return (
                        <div class="form-check">

                            <input
                                onChange={handleCheck}
                                type="checkbox"
                                class="form-check-input"
                                id={s.name.slice(0, s.name.indexOf('.'))}
                                name={s.name}
                                checked={selectedTechs.some((t) => s.name.startsWith(t))} />

                            <label
                                class="form-check-label"
                                for="check1">
                                {s.name[0].toUpperCase()}{s.name.slice(1, s.name.indexOf('.'))}
                            </label>

                        </div>)
                })}
                <Button size="sm" onClick={applyfilter} variant='info'>
                    Apply filters
                </Button>

            </div> */}




            <div className='proyects-gallery'>

                {filteredProyects.map((proyect, i) => {
                    return (
                        <div className='container_div'>
                            <h5 className='card-title text-info'>{proyect.title}</h5>
                            <div className='proyect_container'>
                                <p style={{ color: 'grey' }}>{proyect.subtitle}</p>
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

                {/* <Alert show={filteredProyects.length == 0} variant='danger'>
                    <p>
                        There is no project with those technologies
                    </p>
                    <div className="d-flex justify-content-center">
                        <Button id='clean' onClick={applyfilter}variant='outline-danger'>
                            Clean filters
                        </Button>
                    </div>
                </Alert> */}

            </div>
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