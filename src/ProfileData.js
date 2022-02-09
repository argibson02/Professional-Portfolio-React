// Minified App Images
import artGalleryPic from './components/assets/project-pics/min/artGallery.png';
import moonbasePic from './components/assets/project-pics/min/moonbase.png';
import progressiveBudgetPic from './components/assets/project-pics/min/progressiveBudget.png';
import fitnessTrackerPic from './components/assets/project-pics/min/fitnessTracker-sq.png';
import techBlogPic from './components/assets/project-pics/min/techBlog-sq.jpg';
import teamProfilePic from './components/assets/project-pics/min/teamProfile-sq.jpg';
import noteTakerPic from './components/assets/project-pics/min/noteTaker-sq.jpg';
import weatherPic from './components/assets/project-pics/min/weather-sq.jpg';
import cryptocraftPic from './components/assets/project-pics/min/cryptocraft.png';

// Demo Gifs
// import artGalleryGif from './components/assets/project-gifs/artGallery.gif';
// import moonbaseGif from './components/assets/project-gifs/moonbase.gif';
// import progressiveBudgetGif from './components/assets/project-gifs/progressiveBudget.gif';
// import fitnessTrackerGif from './components/assets/project-gifs/fitnessTracker.gif';
// import techBlogGif from './components/assets/project-gifs/techBlog.gif';
// import teamProfileGif from './components/assets/project-gifs/teamProfile.gif';
// import noteTakerGif from './components/assets/project-gifs/noteTaker.gif';
// import weatherGif from './components/assets/project-gifs/weather.gif';
// import cryptocraftPic from './components/assets/project-gifs/min/cryptocraft.gif';

export const projects = [
    {
        id: 1,
        title: '3d Art Gallery',
        description: 'Enjoy the paintings of the Rijksmuseum up close and in 3D! See how light reflects off the oil! Experience time in the depths of each individual crack!',
        pic: artGalleryPic,
        appUrl: 'https://argibson02.github.io/3d-gallery-walk/',
        gitUrl: 'https://github.com/argibson02/3d-gallery-walk',
        technology: 'HTML, CSS, JavaScript, jQuery, Materialize CSS, Rijksmuseum API, three.js, jimp, QR Code Generator API',
    },
    {
        id: 2,
        title: 'Cryptocraft',
        description: 'Cryptocraft is a cryptocurrency investing simulation and a great risk-free way for anyone to explore investing in crypto.',
        pic: cryptocraftPic,
        appUrl: 'https://crypto-craft.herokuapp.com/',
        gitUrl: 'https://github.com/gulpinhenry/cryptocraft',
        technology: 'JavaScript, NodReact, JavaScript, CSS, Material UI, Node.js, Express.js, MongoDB, Mongoose.js, GraphQL, Chart.js, Axios, CryptoWatch Market API Inquirer.',
    },
    {
        id: 3,
        title: 'Moonbase',
        description: 'Moonbase is a dedicated investment forum with integrated stock data',
        pic: moonbasePic,
        appUrl: 'https://guarded-chamber-67294.herokuapp.com/',
        gitUrl: 'https://github.com/argibson02/moonbase',
        technology: 'CSS, JavaScript, bcrypt, dotenv, Express.js, Handlebars, MySQL2, Node.js, nodemon, Sequelize, MySQL, Finnhub stock API, Axios, Cheerio, Bootstrap',
    },
    {
        id: 4,
        title: 'Progressive Web App Budget Tracker',
        description: 'This is a budget tracker web app that utilizes progressive web application features!',
        pic: progressiveBudgetPic,
        appUrl: 'https://fast-dusk-57055.herokuapp.com/',
        gitUrl: 'https://github.com/argibson02/Progressive-Budget',
        technology: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, IndexedDB, Webpack-pwa-manifest',
    },
    {
        id: 5,
        title: 'Fitness Tracker',
        description: 'This is a Fitness Tracker webapp built with MongoDB, Express.js, and Node.js.',
        pic: fitnessTrackerPic,
        appUrl: 'https://ancient-scrubland-94310.herokuapp.com/',
        gitUrl: 'https://github.com/argibson02/Fitness-Tracker',
        technology: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose',
    },
    {
        id: 6,
        title: 'The Echo Chamber',
        description: 'This is a mock tech blog built with MySQL, Sequelize, Express.js, and Node.js. Discuss your topics here!',
        pic: techBlogPic,
        appUrl: 'https://hidden-headland-04885.herokuapp.com/',
        gitUrl: 'https://github.com/argibson02/Tech-Blog',
        technology: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL2, Sequelize, Dotenv, Handlebars, Brcypt',
    },
    {
        id: 7,
        title: 'Team Profile Generator',
        description: 'This is an HTML/CSS generator intended to be used to quickly build a team profile page.',
        pic: teamProfilePic,
        appUrl: 'https://argibson02.github.io/Team-Profile-Generator/',
        gitUrl: 'https://github.com/argibson02/Team-Profile-Generator',
        technology: 'HTML, CSS, JavaScript, jQuery, Node.js, Express.js, Jest, Inquirer, Materialize',
    },
    {
        id: 8,
        title: 'Note Taker Web App',
        description: 'This is a note-taking app that utilizes Node.js, Express.js, and Heroku for persistent data storage.',
        pic: noteTakerPic,
        appUrl: 'https://protected-badlands-46826.herokuapp.com/',
        gitUrl: 'https://github.com/argibson02/Note-Taker',
        technology: 'HTML, CSS, JavaScript, Node.js, Express.js',
    },
    {
        id: 9,
        title: 'Weather Dashboard',
        description: 'This weather dashboard allows you to find a 5-day forecast for any city! Find previously entered locations with the recently searched city buttons.',
        pic: weatherPic,
        appUrl: 'https://argibson02.github.io/Weather-Dashboard/',
        gitUrl: 'https://github.com/argibson02/Weather-Dashboard',
        technology: 'HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather APIs',
    },
];
