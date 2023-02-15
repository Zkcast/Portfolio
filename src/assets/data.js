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
import sass from "./skills/sass.png"

// import countriesapp from './proyects/countries-app.PNG'
// import rentten from '/proyects/rentten.PNG'

import { FaReact, FaAngular } from "react-icons/fa";

const imagesContext = require.context('./proyects/rentten', true, /\.(PNG|jpe?g|svg)$/);
const rentten_images = imagesContext.keys().map(imagesContext);

const imagesContext2 = require.context('./proyects/worldcountries', true, /\.(PNG|jpe?g|svg)$/);
const wc_images = imagesContext2.keys().map(imagesContext2);

const imagesContext3 = require.context('./proyects/tarquininv', true, /\.(PNG|jpe?g|svg)$/);
const tarquini_images = imagesContext3.keys().map(imagesContext3);

const imagesContext4 = require.context('./proyects/jsongenerator', true, /\.(PNG|jpe?g|svg)$/);
const jsongenerator_images = imagesContext4.keys().map(imagesContext4);

const imagesContext5 = require.context('./proyects/starwars', true, /\.(PNG|jpe?g|svg)$/);
const starwars_images = imagesContext5.keys().map(imagesContext5);

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
    {
        title: 'SASS',
        image: sass,
        link: 'https://sass-lang.com/'
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
        used: ['typescript', 'html', 'css', 'bootstrap', 'angular', 'ngrx', 'express', 'sequelize', 'postgresql']
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
        used: ['react', 'html', 'css', 'redux', 'nodejs', 'express', 'sequelize', 'postgresql']
    },
    {
        id: 3,
        title: 'TARQUINI-INVENTARIO',
        icons: <FaAngular />,
        subtitle: 'Inventory management application',
        img: tarquini_images,
        description: <>Single-page application (SPA) built entirely in <b>Angular</b> (with <b>TypeScript</b>) and <b>Bootstrap</b> on the front-end, <b>NodeJS</b> on the back-end with <b>Express</b>, and <b>Sequelize</b> to connect to a <b>PostgreSQL</b> database.
            It is a very simple tool but it is useful for the purpose it was requested for; organizing the company's inventory a bit. Each sector can have 3 types of items (PCs/notebooks, phones, or "other"), and each item can be filtered in the search bar by barcode to access it more quickly with the scanner directly.
            I deployed it simply in order to be able to show it in my portfolio, since the original application will only be running locally. The data within the app is also faked for demonstration purposes and the features of each are those requested, as it was explicitly requested to be in Spanish and it was not necessary to make it responsive since in practice it will always be used on a PC.
            You can add and/or delete elements and sectors as you wish to test the page.</>,
        description_spanish: "",
        link: "https://tarquini-inventario.vercel.app/",
        github: "https://github.com/Zkcast/Tarquini-Inventario/",
        used: ['angular', 'html', 'css', 'bootstrap', 'nodejs', 'express', 'sequelize', 'postgresql', 'typescript']
    },

    {
        id: 4,
        title: 'JSON-GENERATOR',
        icons: <FaAngular />,
        subtitle: 'App for creating mock data',
        img: jsongenerator_images,
        description: <><b>Phase one of the 'JSON Generator' project</b><br></br><br />
            In this first stage, the basic and main functionality of the application was sought: to introduce the desired number of key / value elements and return a random JSON with X number of objects.
            Where "key" would be the name of it and where "value" a set of possible values, which can be an array of strings, a boolean value (true / false) or a range between two numbers.<br /><br />
            By filling in the desired and entering the number of elements we want, the application allows us to download a JSON which will be an array of randomized objects according to the given options.
            It is very useful in the development stage, giving us thousands of dummy objects to test all the functionality of our application.</>,
        description_spanish: "",
        link: "https://jsongeneratorv1.vercel.app/",
        github: "https://github.com/Zkcast/json-generator",
        used: ['angular', 'html', 'css', 'bootstrap', 'typescript']
    },

    {
        id: 5,
        title: 'STARWARS APP',
        icons: <FaAngular />,
        subtitle: 'Angular/TypeScript Challenge',
        img: starwars_images,
        description: <><b>Angular/TypeScript Challenge</b><br></br><br />
            It is a very simple application to show my skills using <b>Angular</b> framework and its different services, using a hexagonal architecture to give better visibility and functionality to the application. Information is shared through a service that makes requests to an API (<b>http://www.starwapi.vg/</b>) and is managed through another service that returns the information with its respective filters.
            It was created for a challenge for a job application, which required making requests to the API and rendering Star Wars characters.
            It was created with <b>Angular</b> using <b>TypeScript</b>, and <b>SASS</b> was used for styling.</>,
        description_spanish: "",
        link: "https://starwars-app-sigma.vercel.app/",
        github: "https://github.com/Zkcast/starwars-app",
        used: ['angular', 'html', 'typescript', 'sass']
    },


];




// "Phase one of the 'JSON Generator' project
// In this first stage, the basic and main functionality of the application was sought: to introduce the desired number of key / value elements and return a random JSON with X number of objects.
// Where "key" would be the name of it and where "value" a set of possible values, which can be an array of strings, a boolean value (true / false) or a range between two numbers.
// By filling in the desired and entering the number of elements we want, the application allows us to download a JSON which will be an array of randomized objects according to the given options.
// It is very useful in the development stage, giving us thousands of dummy objects to test all the functionality of our application."




// Primera fase del proyecto "JSON Generator"
// En esta primera etapa se busco lograr la funcionalidad básica y principal de la aplicación: introducir la cantidad deseada de elementos clave/valor y retornar un JSON random con X cantidad de objetos.
// Donde "clave" sería el nombre de la misma y donde "valor" un conjunto de posibles valores, que pueden ser un array de strings, un valor booleano (true/false) o un rango entre dos números.
// Al llenar lo deseado e introducir la cantidad de elementos que queremos, la aplicación nos permite descargar un JSON el cual será un array de objetos randomizados según las opciones dadas.
// Es muy útil en etapa de desarrollo, dandonos miles de objetos dummys para probar todas las funcionalidades de nuestro aplicativo.
