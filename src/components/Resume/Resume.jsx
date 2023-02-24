import React from 'react'
import './Resume.css'
import { Col, Row } from 'react-bootstrap'
import spanishicon from '../../assets/icons/spanishicon.png'
import englishicon from '../../assets/icons/englishicon.png'
import pdfspanish from '../../assets/pdf/resumespanish.pdf'

export const Resume = () => {

    let section_text = 'mt-3 mx-4 text-white'
    let experience_title = ''

    const descargarPDF = () => {
        window.open(pdfspanish);
    }

    return (
        <div>
            <div className='resume_container mx-5 px-3 mt-4 fontType'>
                <div className='info_container'>
                    {/* --------------------------------- */}

                    <Row className='text-white pt-1 experience_container'>
                        <Col>
                            <h5>EZEQUIEL CASTIONI</h5>
                        </Col>
                        <span className='text-secondary'>|</span>
                        <Col>
                            <h5 className='text-brown'>SOFTWARE DEVELOPER</h5>
                        </Col>
                    </Row>
                    <Row className={section_text}>
                        EXPERIENCIA
                    </Row>

                    <hr></hr>


                    {/* --------------------------------- */}


                    <Col className='text-brown'>
                        <Row>
                            AWAQ (España / Colombia) - www.somosawaq.org
                            <div className='date text-white text-secondary'>
                                Ene 2023 / Actualidad
                            </div>
                        </Row>
                        <Row className='text-white'>
                            DevOps Trainee
                        </Row>
                    </Col>
                    <Col className='experience_text mb-3 mx-2'>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Colaboración con ONG
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Aprendiendo sobre integración del CRM Salesforce con la plataforma
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Desarrollo de aplicaciones dentro del mismo para lograr automatizacion de procesos y diferentes eventos
                        </Row>
                    </Col>
                    {/* --------------------------------- */}
                    <Col className='text-brown'>
                        <Row>
                            DIGITALIA (Peru) Proyecto REDLO (www.redlo.com.pe)
                            <div className='date text-white text-secondary'>
                                Ene 2023 / Actualidad
                            </div>
                        </Row>
                        <Row className='text-white'>
                            Front-End Developer
                        </Row>
                    </Col>
                    <Col className='experience_text mb-3 mx-2'>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Utilicé React para procesar y mostrar datos de un servidor Django. Realicé filtros y organización de datos para asegurarme de que se presentara de acuerdo con los objetivos del proyecto y el diseño visual creado en Figma.
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Implementación de conceptos fundamentales de React, como componentes, propiedades, estados, ciclo de vida y hooks.

                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Manejo de metodos HTTP para la comunicación entre cliente/servidor
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Experiencia utilizando React Router DOM.
                        </Row>
                        <Row className='text-brownest' lg={12} md={12} xs={12} sm={12}>
                            • Stack usado :  HTML, CSS, JavaScript Bootstrap, React.
                        </Row>
                    </Col>
                    {/* --------------------------------- */}

                    <Row className={`${section_text} mt-4`}>
                        Freelance / Proyectos propios
                    </Row>

                    <hr></hr>
                    {/* --------------------------------- */}

                    <Col className='experience_text mb-3'>
                        <Row className='text-brown' lg={12} md={12} xs={12} sm={12}>
                            Northern Lights - www.northern-lights-seven.vercel.app/
                            <div className='date text-white text-secondary' style={{ fontSize: '14px' }}>
                                Feb 2023 / Actualidad
                            </div>
                        </Row>
                        <div className='mx-2'>
                            <Row lg={12} md={12} xs={12} sm={12}>
                                • SPA presentacional y futuro e-commerce hecha en React, utilizando react-bootstrap para el estilado.
                            </Row>
                            <Row lg={12} md={12} xs={12} sm={12}>
                                • Manejo de metodos HTTP para la comunicación entre cliente/servidor
                            </Row>
                            <Row lg={12} md={12} xs={12} sm={12}>
                                • Experiencia utilizando React Router DOM.
                            </Row>
                            <Row className='text-brownest' lg={12} md={12} xs={12} sm={12}>
                                • Stack usado :  HTML, CSS, JavaScript Bootstrap, React.
                            </Row>
                        </div>
                    </Col>
                    {/* --------------------------------- */}


                    <Col className='experience_text mb-3'>
                        <Row className='text-brown' lg={12} md={12} xs={12} sm={12}>
                            Tarquini Inventario - www.tarquini-inventario.vercel.app
                            <div className='date text-white text-secondary' style={{ fontSize: '14px' }}>
                                Dec 2022 / Feb 2023
                            </div>
                        </Row>
                        <div className='mx-2'>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • App full stack hecha en Angular con TypeScript para organizar el inventario de la empresa de forma más visual y dinámica; permite asignar el
                            stock de elementos a usuarios y/o sectores y clasificarlos según tipo,
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12}>
                            • Servidor hecho en NodeJs junto a Express, y sequelize como ORM para interactuar con una base de datos PostgreSQL
                        </Row>
                        <Row className='text-brownest' lg={12} md={12} xs={12} sm={12}>
                            • Stack usado: TypeScript, Angular, CSS, NodeJS, Express, Sequelize, PostgreSQL
                        </Row>
                        </div>
                    </Col>

                    {/* --------------------------------- */}

                    <Row className={`${section_text} mt-4`}>
                        Experiencia relevante
                    </Row>

                    <hr></hr>


                    <Col className='experience_text mb-2'>
                        <Row className='text-brown' lg={12} md={12} xs={12} sm={12}>
                            Técnico en sistemas y redes @ Tarquini Revestimientos (Dec 2017 - Ene 2017)
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12} className=''>
                        • Mantenimiento diario de equipos informáticos, impresoras y redes locales. Configuración, armado y optimización de hardware/software.
                        Orientación a empleados e instalación de cámaras de seguridad en red.
                        </Row>
                    </Col>

                    <Col className='experience_text mb-4'>
                        <Row className='text-brown' lg={12} md={12} xs={12} sm={12}>
                            Técnico en sistemas y redes - Encargado @ Ezmifi Computación (Dec 2014 - Dec 2017)
                        </Row>
                        <Row lg={12} md={12} xs={12} sm={12} className=''>
                            • Soporte técnico, incluyendo atención al público, instalación, reparación y mantenimiento de hardware y software, manejo de stock, servicio
                            técnico a domicilio y control diario del trabajo realizado para clientes particulares y empresas con hasta 50 equipos informáticos y redes de
                            trabajo en sistemas Windows y Linux.
                        </Row>
                    </Col>

                    <hr className='my-0'></hr>

                    <Row className='mb-3'>
                        <Col lg={3} className="container px-3 mx-3 idiomas-cont">
                            <Row>
                                <Col>
                                    <h5 className={section_text}>Idiomas</h5>
                                    <ul className="list-unstyled text-left text-white">
                                        <li><img className='icon mx-2' width='8px' src={spanishicon}></img>Español: nativo</li>
                                        <li className="mb-0"><img className='icon mx-2' width='8px' src={englishicon}></img>Inglés: C1 Advanced</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='text-white'>
                            <Row className='d-flex justify-content-center'>
                                <h5 className={section_text}>Stack</h5>
                            </Row>
                            <Row className='d-flex justify-content-around mx-4'>
                                <button className='jsts text-white rounded border-0 m-2'>JavaScript</button>
                                <button className='jsts text-white rounded border-0 m-2'>TypeScript</button>
                                <button className='bg-info text-white rounded border-0 m-2'>CSS</button>
                                <button className='bg-info text-white rounded border-0 m-2'>HTML</button>
                                <button className='bg-info text-white rounded border-0 m-2'>Bootstrap</button>
                                <button className='bg-info text-white rounded border-0 m-2'>React</button>
                                <button className='bg-info text-white rounded border-0 m-2'>Redux</button>
                                <button className='bg-info text-white rounded border-0 m-2'>Angular</button>
                                <button className='bg-info text-white rounded border-0 m-2'>NgRx</button>
                                <button className='bg-danger text-white rounded border-0 m-2'>NodeJS</button>
                                <button className='bg-danger text-white rounded border-0 m-2'>Express</button>
                                <button className='bg-danger text-white rounded border-0 m-2'>Sequelize</button>
                                <button className='bg-danger text-white rounded border-0 m-2'>PostgreSQL</button>
                                <button className='bg-danger text-white rounded border-0 m-2'>Puppeteer</button>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='my-2 text-end d-flex justify-content-end'>
                <button onClick={descargarPDF} className='btn btn-secondary mx-5 mb-2 mt-1 btn-sm'>Descargar PDF</button>
            </div>
        </div>
    )
}
