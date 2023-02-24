import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import styles from './NavBar.css'
import profileim from '../../assets/profileimg.jpg'
import { Modal, Button, Image } from 'react-bootstrap';

export const NavBar = (props) => {

    const [activelink, setActiveLink] = useState('home')

    const location = useLocation();

    const [showModal, setShowModal] = React.useState(false);
    const [modalImage, setModalImage] = React.useState(null);


    const handleShowModal = () => {
        setModalImage(profileim);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const colapse = (e) => {
        setActiveLink(e.target.name)
        document.getElementById("navbarTogglerDemo01").className = "collapse navbar-collapse";
    }

    return (
        <div className='navbar_container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a disabled className='logo' style={{ fontSize: '30px', marginTop: '0.2rem' }}>{"{EC}"}        </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul className="nav navbar-nav mx-auto">
                            <Link to='/'>
                                <li onClick={colapse} className="nav-item">
                                    <a name="home" className={location.pathname == '/' ? "nav-link active link-bg-celeste" : "nav-link"}>Home</a>
                                </li>
                            </Link>
                            <Link to='/skills'>
                                <li onClick={colapse} className="nav-item">
                                    <a name="skills" className={location.pathname == '/skills' ? "nav-link active link-bg-celeste" : "nav-link"}>Skills</a>
                                </li>
                            </Link>

                            <Link to='/projects'>
                                <li onClick={colapse} className="nav-item">
                                    <a name="projects" className={location.pathname == '/projects' ? "nav-link active link-bg-celeste" : "nav-link"}>Projects</a>
                                </li>
                            </Link>

                            <Link to='/contact'>
                                <li onClick={colapse} className="nav-item">
                                    <a name="contact" className={location.pathname == '/contact' ? "nav-link active link-bg-celeste" : "nav-link"}>Contact</a>
                                </li>
                            </Link>

                            <Link to='/resume'>
                                <li onClick={colapse} className="nav-item">
                                    <a name="resume" className={location.pathname == '/resume' ? "nav-link active link-bg-celeste" : "nav-link"}>Resume/CV</a>
                                </li>
                            </Link>

                        </ul>
                        <img onClick={() => handleShowModal()} className='profile_img' src={profileim}></img>

                    </div>

                </div>
            </nav>


            <Modal show={showModal} onHide={handleCloseModal}>
            <Image fluid className="rounded-circle" src={modalImage} alt="My Imaasdge" />

            </Modal>
        </div>
    )
}
