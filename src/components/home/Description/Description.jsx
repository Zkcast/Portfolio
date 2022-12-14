import React from 'react'
import { Link } from 'react-router-dom'
import './Description.css'
import { FaRegEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export const Description = () => {
    return (
        // <div className="description_container"><h1>description component</h1></div>
        <div>


            <div className="card text-left">
                <div className="card-body">
                    <h2 className="card-title text-info">Ezequiel Castioni</h2>
                    <h4 className="card-subtitle mb-2 text-muted">Fullstack developer</h4>
                    <hr></hr>
                    <p className="card-text">
                        I am a <b>fullstack javascript</b> developer from Buenos Aires, Argentina with experience in technologies such as <b>react</b>, <b>angular</b>, <b>nodejs</b>, <b>express</b> and <b>sequelize</b>. I enjoy working on large-scale projects and am constantly looking for new challenges and opportunities to improve my skills. I also have experience working in teams using agile methodologies like <b>Scrum</b>, using relational databases like <b>PostgreSQL</b>, and handling <b>CSS</b> and <b>Bootstrap</b> styles to design attractive and functional user interfaces.
                    </p>
                    {/* <Link to='/about'><a className="card-link">learn more about me</a></Link> */}
                    <Link to='/contact'><button type="button" class="btn btn-info">Contact me</button></Link>
                </div>
            </div>

            <nav className="bg-transparent">
                <ul className="nav justify-content-start p-3">
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            <FaRegEnvelope />
                            </Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/zkcast" className="nav-link" target='_blank'>
                            <FaGithub />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://linkedin.com/in/castioniezequiel" className="nav-link" target='_blank'>
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
