import angular from "./skills/angular.png"
import bootstrap from "./skills/bootstrap.png"
import css from "./skills/css.png"
import html from "./skills/html.png"
import javascript from "./skills/javascript.png"
import nodejs from "./skills/nodejs.png"
import postgresql from "./skills/postgresql.png"
import react from "./skills/react.png"
import redux from "./skills/redux.png"
import sequelize from "./skills/sequelize.png"
import typescript from "./skills/typescript.png"
import ngrx from "./skills/ngrx.png"
import puppeteer from "./skills/puppeteer.png"
import express from "./skills/express.png"
import github from "./skills/github.png"

// import countriesapp from './proyects/countries-app.PNG'
// import rentten from '/proyects/rentten.PNG'

import { FaReact, FaAngular } from "react-icons/fa";

const imagesContext = require.context('./proyects/rentten', true, /\.(PNG|jpe?g|svg)$/);
const rentten_images= imagesContext.keys().map(imagesContext);

const imagesContext2 = require.context('./proyects/worldcountries', true, /\.(PNG|jpe?g|svg)$/);
const wc_images= imagesContext2.keys().map(imagesContext2);

export const technologies = [
    {
        title: 'CSS',
        image: css,
        link: 'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
        title: 'HTML',
        image: html,
        link: 'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
        title: 'JavaScript',
        image: javascript,
        link: 'https://www.javascript.com'
    },
    {
        title: 'TypeScript',
        image: typescript,
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: 'Bootstrap',
        image: bootstrap,
        link: 'https://getbootstrap.com/'
    },

    {
        title: 'NodeJS',
        image: nodejs,
        link: 'https://nodejs.org/'
    },
    {
        title: 'Redux',
        image: redux,
        link: 'https://redux.js.org/'
    },
    {
        title: 'React',
        image: react,
        link: 'https://reactjs.org/'
    },

    {
        title: 'Angular',
        image: angular,
        link: 'https://angular.io/'
    },
    {
        title: 'NgRx',
        image: ngrx,
        link: 'https://ngrx.io/'
    },
    {
        title: 'Puppeteer',
        image: puppeteer,
        link: 'https://pptr.dev/'
    },

    {
        title: 'PostgreSQL',
        image: postgresql,
        link: 'https://www.postgresql.org/'
    },
    {
        title: 'Sequelize',
        image: sequelize,
        link: 'https://sequelize.org/'
    },
    {
        title: 'Express',
        image: express,
        link: 'https://expressjs.com/'
    },
    {
        title: 'GitHub',
        image: github,
        link: 'https://github.com/'
    },
]


export const proyects = [
    {
        id: 1,
        title: 'RENT-TEN',
        icons: <FaAngular />,
        subtitle: 'Rent or publish places around the world.',
        subsubtitle: 'Filters, Login, Notifications via e-mail, Payment Gateway with MercadoPago, Darkmode, etc..',
        img: rentten_images,
        description: <>This app has been developed as a team with 5 other people using <b>SCRUM</b> as our agile methodology to ensure we deliver maximum value in the shortest possible time. The application is a <b>Single-Page Application (SPA)</b> that allows users to view accommodations around the world, filter them according to their needs and rent them. It has a login system using <b>Auth0</b> and a <b>MercadoPago</b> payment gateway. In addition, it has an admin panel that allows for the deletion and editing of houses and users, as well as a logical deletion system that allows for users to be 'banned' without completely deleting them from the database. On the front-end, <b>Angular</b> along with <b>NgRx</b> has been used to manage the global states of the application and <b>Bootstrap</b>, <b>CSS</b>, and <b>Material</b> for styling. It also has a dark mode. On the back-end, <b>Node.js</b> with <b>Express</b> has been used for routing, and <b>Sequelize</b> as the ORM (Object-Relational Mapping) to interact with the database in <b>PostgreSQL</b>. Libraries such as <b>NodeMailer</b> have also been used to send notifications to users and <b>Cloudinary</b> for image upload. Overall, the application provides an easy-to-use and comprehensive platform for searching, filtering, and renting accommodations around the world.</>,
    
        link: "https://rent-ten.vercel.app/home",
        description_spanish: "SPA (Single-Page Application) que permite a los usuarios visualizar hospedajes en todo el mundo, filtrarlos según sus necesidades y posibilidad de alquilarlos. Cuenta con un sistema de login mediante Auth0 y una pasarela de pagos de MercadoPago. Además, tiene un panel de administrador que permite borrar y editar casas y usuarios, así como un sistema de borrado lógico que permite 'banear' usuarios sin eliminarlos completamente de la base de datos. La aplicación también tiene un modo oscuro. En el front-end, se ha utilizado Angular junto con NgRx para manejar los estados globales de la aplicación y Bootstrap, CSS y Material para el estilado. En el back-end, se ha utilizado Node.js con Express para el enrutamiento, y Sequelize como ORM (Object-Relational Mapping) para interactuar con la base de datos en PostgreSQL. También se han utilizado librerías como NodeMailer para enviar notificaciones a los usuarios y Cloudinary para la carga de imágenes. En general, la aplicación brinda una plataforma fácil de usar y completa para buscar, filtrar y alquilar hospedajes en todo el mundo. Esta aplicación ha sido realizada en equipo junto a 5 personas más utilizando SCRUM como metodología ágil para asegurarnos de entregar un valor máximo en el menor tiempo posible.",
    
        github: "https://github.com/raulereno/rent-ten",
        used: ['typescript', 'css', 'bootstrap', 'angular', 'ngrx', 'express', 'sequelize', 'postgresql']
    },
    {
    id: 2,
    title: 'WORLD COUNTRIES',
    icons: <FaReact />,
    subtitle: 'Explore world countries',
    img: wc_images,
    description: <><b>Single-Page Application (SPA)</b> developed using <b>React</b> and <b>Redux</b> to manage global states. Only <b>CSS</b> has been used to style and design the user interface, without using additional frameworks or libraries. On the back-end, <b>Node.js</b> with <b>Express</b> has been used to develop routing and <b>PostgreSQL</b> as the database to store information. The application itself allows for the visualization of countries and the assignment of activities through a controlled form. Users can use filters and sorting on the page to search and organize information according to their needs, and these can be overlaid on each other to obtain more precise results. <br></br><br></br>Read <a href='https://github.com/Zkcast/SoyHenry-Bootcamp-PI#readme' target='_blank'>README</a> for more info.</>,

    description_spanish: "SPA (Single-Page Application) desarrollada utilizando React y Redux para administrar los estados globales, lo que permite una mayor organización y facilidad en el manejo de la información. Se ha utilizado únicamente CSS para darle formato y diseño a la interfaz de usuario, sin utilizar frameworks o librerías adicionales. En el back-end, se ha utilizado Node.js con Express para desarrollar el enrutamiento y PostgreSQL como base de datos para almacenar la información. La aplicación en sí permite visualizar países del mundo y asignarles actividades mediante un formulario controlado. Los usuarios pueden utilizar filtros y ordenamientos en la página para buscar y organizar la información de acuerdo a sus necesidades, y estos pueden superponerse entre sí para obtener resultados más precisos.",
    link: "https://worldcountries-app.vercel.app/",
    github: "https://github.com/Zkcast/SoyHenry-Bootcamp-PI",
    used: ['react', 'redux', 'nodejs', 'express', 'sequelize','postgresql']
},


];