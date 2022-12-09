// Project detailed data.

const projectDetails = [
  {
    id: 0,
    language: ["Java", "SQL"],
    tech: ["Spring Boot", "MySQL", "MyBatis Plus", "Redis", "Nginx"],
    description: `Protigue Eats is an online food ordering web app featuring 
      Frontend Backend Separation.
      There are management webpages for restaurants and ordering webpages for mobile clients.
      I built the backend server with Java and Spring Boot framework.
      To improved development efficiency and connection speed of database,
      I used MyBatis-Plus as development tool and Druid as datasource.
      I also optimized ordering experience with Redis caching popular meals.`,
  },
  {
    id: 1,
    language: ["Vue", "Javascript", "HTML", "CSS"],
    tech: ["Vue.js", "Tailwind CSS"],
    src: "https://github.com/sunnysherrysunny/sunny-portfolio",
    demo: "https://sunnyguan.netlify.app/",
    description: `This portfolio is a Single Page Application and features responsive design.
    I developed it on Vue.js and utilized Vue-Router to handle transitions between different views.
    I also used Tailwind CSS to beautify the webpage and switch between dark and light modes.`,
  },
  {
    id: 2,
    language: ["Java", "SQL", "Vue", "Javascript", "Shell"],
    tech: ["Spring Boot", "Spring Security", "MySQL", "MyBatis Plus", "Vue.js"],
    description: `S-Log is my personal blog. It is still under construction. 
    I am building this blog's frontend on Vue.js and backend on Spring Boot. 
    Estimated deployment time is Nov 2022-Dec 2022.`,
  },
  {
    id: 3,
    language: ["Python"],
    tech: ["OpenCV", "NumPy"],
    src: "https://github.com/sunnysherrysunny/Dirt-Drift",
    description: `Dirt Drift is a Python racing game featuring real-world physics simulation.
      To allow users to create and import custom racing tracks,
      I utilized OpenCV to process track images into game data.
      I also implemented a game AI based on a backtracking algorithm and used NumPy
      module to accelerate collision calculation.`,
  },
  {
    id: 4,
    language: ["C", "Shell"],
    tech: ["POSIX Threads", "TCP/IP"],
    description: `I wrote this Linux proxy server in C and based on TCP/IP. 
    To enable concurrent client visits, I implemented multi-threading with POSIX Threads.
    I also tested this proxy on real-world browsers such as Firefox`,
  },
];

export default projectDetails;
