// App Images
// import artGalleryPic from './components/assets/project-pics/artGallery.png';
// import moonbasePic from './components/assets/project-pics/moonbase.png';
// import progressiveBudgetPic from './components/assets/project-pics/progressiveBudget.png';
// import fitnessTrackerPic from './components/assets/project-pics/fitnessTracker.png';
// import techBlogPic from './components/assets/project-pics/techBlog.png';
// import teamProfilePic from './components/assets/project-pics/teamProfile.png';
// import noteTakerPic from './components/assets/project-pics/noteTaker.png';
// import weatherPic from './components/assets/project-pics/weather.png';
// import employeeManagementPic from './components/assets/project-pics/employeeManagement.gif';

// Minified App Images
import artGalleryPic from './components/assets/project-pics/min/artGallery.png';
import moonbasePic from './components/assets/project-pics/min/moonbase.png';
import progressiveBudgetPic from './components/assets/project-pics/min/progressiveBudget.png';
import fitnessTrackerPic from './components/assets/project-pics/min/fitnessTracker.png';
import techBlogPic from './components/assets/project-pics/min/techBlog.png';
import teamProfilePic from './components/assets/project-pics/min/teamProfile.png';
import noteTakerPic from './components/assets/project-pics/min/noteTaker.png';
import weatherPic from './components/assets/project-pics/min/weather.png';
import employeeManagementPic from './components/assets/project-pics/employeeManagement.gif';

// Demo Gifs
// import artGalleryGif from './components/assets/project-gifs/artGallery.gif';
// import moonbaseGif from './components/assets/project-gifs/moonbase.gif';
// import progressiveBudgetGif from './components/assets/project-gifs/progressiveBudget.gif';
// import fitnessTrackerGif from './components/assets/project-gifs/fitnessTracker.gif';
// import techBlogGif from './components/assets/project-gifs/techBlog.gif';
// import teamProfileGif from './components/assets/project-gifs/teamProfile.gif';
// import noteTakerGif from './components/assets/project-gifs/noteTaker.gif';
// import weatherGif from './components/assets/project-gifs/weather.gif';
// import employeeManagementGif from './components/assets/project-gifs/employeeManagement.gif';

export const projects = [
    {
        id: 1,
        title: "3d Art Gallery",
        description: "Enjoy the paintings of the Rijksmuseum up close and in 3D! See how light reflects off the oil! Experience time in the depths of each individual crack!",
        pic: artGalleryPic,
        // gif: artGalleryGif,
        appUrl: "https://argibson02.github.io/3d-gallery-walk/",
        gitUrl: "https://github.com/argibson02/3d-gallery-walk",
        technology: "HTML, CSS, JavaScript, jQuery, Materialize CSS, Rijksmuseum API, three.js, jimp, QR Code Generator API",
        // detailed: "Enjoy the paintings of the Rijksmuseum up close and in 3D! See how light reflects off the oil! Experience time in the depths of each individual crack!",
    },
    {
        id: 2,
        title: "Moonbase",
        description: "Moonbase is a dedicated investment forum with integrated stock data",
        pic: moonbasePic,
        // gif: moonbaseGif,
        appUrl: "https://guarded-chamber-67294.herokuapp.com/",
        gitUrl: "https://github.com/argibson02/moonbase",
        technology: "CSS, JavaScript, bcrypt, dotenv, Express.js, Handlebars, MySQL2, Node.js, nodemon, Sequelize, MySQL, Finnhub stock API, Axios, Cheerio, Bootstrap",
        // detailed: "Moonbase is a dedicated investment forum with integrated stock data",
    },
    {
        id: 3,
        title: "Progressive Web App Budget Tracker",
        description: "This is a budget tracker web app that utilizes progressive web application features!",
        pic: progressiveBudgetPic,
        // gif: progressiveBudgetGif,
        appUrl: "https://fast-dusk-57055.herokuapp.com/",
        gitUrl: "https://github.com/argibson02/Progressive-Budget",
        technology: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, IndexedDB, Webpack-pwa-manifest",
        // detailed: "This is a budget tracker web app that utilizes progressive web application features!",
    },
    {
        id: 4,
        title: "Fitness Tracker",
        description: "This is a Fitness Tracker webapp built with MongoDB, Express.js, and Node.js.",
        pic: fitnessTrackerPic,
        // gif: fitnessTrackerGif,
        appUrl: "https://ancient-scrubland-94310.herokuapp.com/",
        gitUrl: "https://github.com/argibson02/Fitness-Tracker",
        technology: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose",
        // detailed: "This is a Fitness Tracker webapp built with MongoDB, Express.js, and Node.js.",
    },
    {
        id: 5,
        title: "The Echo Chamber",
        description: "This is a mock tech blog built with MySQL, Sequelize, Express.js, and Node.js. Discuss your topics here!",
        pic: techBlogPic,
        // gif: techBlogGif,
        appUrl: "https://hidden-headland-04885.herokuapp.com/",
        gitUrl: "https://github.com/argibson02/Tech-Blog",
        technology: "HTML, CSS, JavaScript, Node.js, Express.js, MySQL2, Sequelize, Dotenv, Handlebars, Brcypt",
        // detailed: "This is a mock tech blog built with MySQL, Sequelize, Express.js, and Node.js. Discuss your topics here!",
    },
    {
        id: 6,
        title: "Team Profile Generator",
        description: "This is an HTML/CSS generator intended to be used to quickly build a team profile page.",
        pic: teamProfilePic,
        // gif: teamProfileGif,
        appUrl: "https://argibson02.github.io/Team-Profile-Generator/",
        gitUrl: "https://github.com/argibson02/Team-Profile-Generator",
        technology: "HTML, CSS, JavaScript, jQuery, Node.js, Express.js, Jest, Inquirer, Materialize",
        // detailed: "This is an HTML/CSS generator intended to be used to quickly build a team profile page.",
    },
    {
        id: 7,
        title: "Note Taker Web App",
        description: "This is a note-taking app that utilizes Node.js, Express.js, and Heroku for persistent data storage.",
        pic: noteTakerPic,
        // gif: noteTakerGif,
        appUrl: "https://protected-badlands-46826.herokuapp.com/",
        gitUrl: "https://github.com/argibson02/Note-Taker",
        technology: "HTML, CSS, JavaScript, Node.js, Express.js",
        // detailed: "This is a note-taking app that utilizes Node.js, Express.js, and Heroku for persistent data storage.",
    },
    {
        id: 8,
        title: "Weather Dashboard",
        description: "This weather dashboard allows you to find a 5-day forecast for any city! Find previously entered locations with the recently searched city buttons.",
        pic: weatherPic,
        // gif: weatherGif,
        appUrl: "https://argibson02.github.io/Weather-Dashboard/",
        gitUrl: "https://github.com/argibson02/Weather-Dashboard",
        technology: "HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather APIs",
        // detailed: "This weather dashboard allows you to find a 5-day forecast for any city without being bombarded with ads! You can also search previously entered locations with ease by pressing on the recently searched buttons.",
    },
    {
        id: 9,
        title: "Employee Management System",
        description: "This is MySQL based management system with add, view, update, and delete capabilities for employees, roles, and departments.",
        pic: employeeManagementPic,
        // gif: employeeManagementGif,
        appUrl: "https://watch.screencastify.com/v/t9ArJJyTC8rqW6wRb9by",
        gitUrl: "https://github.com/argibson02/Employee-Management-System",
        technology: "JavaScript, Node.js, MySQL, Inquirer, Console.table, MySQL2",
        // detailed: "This is MySQL based management system with add, view, update, and delete capabilities for employees, roles, and departments.",
    }
];