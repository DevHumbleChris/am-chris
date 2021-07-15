const Projects = [
  {
    name: 'Montflix',
    technologiesUsed: [
      'NodeJS',
      'Express',
      'Pug',
      'TMDB API'
    ],
    imgPath: 'montflix.png',
    projectInfo: [
      'Used Node; Express framework to create controllers that enabled in fetching data from the TMDB API (The Movie Database).',
      'Used PUG template engine and Bootstrap to beautifully design the whole website.'
    ],
    description: 'Monflix is web based app that keeps you with trend about mvoies and series.',
    githubLink: 'https://github.com/DevHumbleChris/montflix',
    webLink: 'https://montflix.herokuapp.com/'
  },
  {
    name: 'Montana Foods',
    technologiesUsed: [
      'VueJS',
      'Tailwind CSS',
      'Vuex',
      'Vue Routes'
    ],
    imgPath: 'montana-foods.png',
    projectInfo: [
      'Completely built with VueJS, Tailwind CSS, a bit of Vanilla CSS and (Edaman && The Meal DB) APIS was used as a source of data.',
      'Vue Routes was used to create multiples views for the web application and vuex was used as centralised store for data'
    ],
    description: 'Montana-Foods is a web app that enables people to search different food recipes, watch YouTube Cooking Tutorials, give information about its equivalent food and much more!',
    githubLink: 'https://github.com/DevHumbleChris/montana-foods',
    webLink: 'https://montana-foods.web.app/'
  },
  {
    name: 'Rock, Papers And Scissors',
    technologiesUsed: [
      'JavaScript',
      'Vanilla CSS'
    ],
    imgPath: 'rps-game.png',
    projectInfo: [
      'Completely built with pure JavaScript (Vanilla) and CSS',
      'Orientation for smaller display was put in place'
    ],
    description: 'Choose Rock and Scissors a number of times and you would definetly win.',
    githubLink: 'https://glitch.com/edit/#!/montana-rpsgame',
    webLink: 'https://montana-rpsgame.glitch.me/'
  },
  {
    name: 'Vue Poll App',
    technologiesUsed: [
      'VueJS',
      'Vue Routes',
      'Vuex',
      'Vue-ChartJS',
      'Tailwind CSS'
    ],
    imgPath: 'vue-poll-app.png',
    projectInfo: [
      'Poll app made with VueJS Framework and Tailwind CSS',
      'Vuex was used to centralised data and vue routes was used to create vote (routes & views) and results (routes & views)',
      'Results data visualization was possible through use of Vue-ChartJS package library'
    ],
    description: 'Tried to create my own poll app and its turned out great.',
    githubLink: 'https://github.com/DevHumbleChris/vue-poll-app',
    webLink: 'https://vue-poll-app.web.app/'
  }
]

export default Projects
