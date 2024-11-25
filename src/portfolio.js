/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Anwar",
  title: "Hi all, I'm Muhammad Anwar",
  subTitle: emoji(
    "Stuck in repetitive, time-consuming tasks? 🤔 Here I am! I’ll automate your work so what takes hours can be done in minutes—or even seconds. A passionate Computer Scientist specializing in Machine Learning 🧠, I love solving problems, creating smart solutions, and adding value to people’s lives. Currently exploring cloud technologies to expand my skills and make an even greater impact!🚀"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MuhammadAnwarBadat",
  linkedin: "http://www.linkedin.com/in/mmohamed-anwar",
  gmail: "anwarbadat1997.ab@gmail.com",
  medium: "https://medium.com/@mohamedanwar.ma",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop robust data-driven applications and backend systems using Python, SQL, and NoSQL"),
    emoji("⚡ Design and deploy microservices using technologies like Nginx, Apache, Digital Ocean and Docker for scalable, high-performance applications"),
    emoji("⚡ Build and optimize data pipelines, ETL processes, and Machine Learning Models using Apache Kafka, Apache Spark, and H2O.ai for efficient processing, analysis, and real-time streaming."),
    emoji("⚡ Integrate cloud platforms like AWS, GCP, and manage services for seamless deployment and scalability")
  ],

  /* Got icons from the given urls https://www.svgrepo.com/vectors/ and 
  https://brandfetch.com/ and https://techicons.dev/icons/ */

  softwareSkills: [
    {
      skillName: "Python",
      customIconPath: "python.svg"  
    },
    {
      skillName: "Django",
      customIconPath: "django.svg"  
    },
    {
      skillName: "FastAPIs",
      customIconPath: "FastAPI.svg"  
    },
    {
      skillName: "Flask",
      customIconPath: "flask.svg"  
    },
    {
      skillName: "Pandas",
      customIconPath: "Pandas.svg"
    },
    {
      skillName: "Numpy",
      customIconPath: "numpy.svg"
    },
    {
      skillName: "Plotly",
      customIconPath: "Plotly.svg"
    },
    {
      skillName: "Tensorflow",
      customIconPath: "tensorflow.svg"
    },
    {
      skillName: "Keras",
      customIconPath: "Keras.svg"
    },
    {
      skillName: "PyTorch",
      customIconPath: "pytorch.svg"
    },
    {
      skillName: "Hugging Face",
      customIconPath: "Hugging-face.svg"
    },
    {
      skillName: "OpenAI",
      customIconPath: "openai.svg"
    },
    {
      skillName: "LangChain",
      customIconPath: "LangChain.svg"
    },
    {
      skillName: "OpenCV",
      customIconPath: "opencv.svg"
    },
    {
      skillName: "Ultralytics",
      customIconPath: "Ultralytics.svg"
    },
    {
      skillName: "ApacheAirflow",
      customIconPath: "Apache-airflow.svg"  
    },
    {
      skillName: "ApacheKafka",
      customIconPath: "kafka.svg"  
    },
    {
      skillName: "ApacheSpark",
      customIconPath: "Apache-spark.svg"  
    },
    {
      skillName: "Docker",
      customIconPath: "docker.svg"
    },
    {
      skillName: "sql-database",
      customIconPath: "database.svg"
    },
    {
      skillName: "AWS",
      customIconPath: "aws.svg"  
    },
    {
      skillName: "GCP",
      customIconPath: "google-cloud.svg"  
    },
    {
      skillName: "HTML",
      customIconPath: "html.svg"
    },
    {
      skillName: "JS",
      customIconPath: "js.svg"
    },
    {
      skillName: "WordPress",
      customIconPath: "wordpress.svg"
    },
    {
      skillName: "H2O.ai",
      customIconPath: "H2O.ai.svg"
    }
  ],
  display: true  
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NED University of Engineering and Technology",
      logo: require("./assets/images/NED_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "Research thesis focused on the classification of Diabetic Retinopathy using CNN for medical image analysis",
      descBullets: [
        "Took courses about Data Structures & Algorithms, Machine Learning, Artificial Intelligence, ... ",
        "Held leadership and creative roles, including Vice President at TEDxUIT, managing events like TEDxFEST, and Graphics Designer at GDG Pakistan, contributing to Android Seekho and DevFest."
      ]
    },
    {
      schoolName: "AMAL ACADEMY",
      logo: require("./assets/images/amalLogo.png"), // Replace with the actual logo file
      subHeader: "Career-Pre Fellow Certificate by Stanford University accredated institute",
      duration: "November 2021 - Feburary 2022",
      desc: "a prestigious 3-month fellowship by Stanford University and Acumen, focusing on business communication, leadership, and problem-solving.",
      descBullets: [
        "Invested 150 hours in skill development, enhancing teamwork and strategic thinking.",
        "Successfully raised funds for the Edhi Foundation through a targeted social media campaign."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI and Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Scraping and Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "75%"
    },
    {
      Stack: "Containerization & Microservices",
      progressPercentage: "65%"
    },
    {
      Stack: "Data Engineering and Cloud Platforms",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Server4sale",
      companylogo: require("./assets/images/s4sLogo.png"),
      date: "December 2023 – Present",
      desc: "Specialized in database design, data transformation, and developing AI/ML web applications with a focus on R&D in LLMs and Generative AI.",
      descBullets: [
        "Design database schemas and build pipelines for data scraping, cleaning, and meaningful transformation.",
        "Develop and deploy AI/ML-powered web applications tailored to real-world use cases.",
        "Created customized WordPress sites, and conducted R&D in LLMs and generative AI to drive innovative solutions."
      ]
    },
    {
      role: "Python Developer and Graphic Designer",
      company: "FIVERR",
      companylogo: require("./assets/images/fiverrLogo.png"),
      date: "Dec 2020 – May 2023",
      desc: "Experienced in desktop app development, big data analytics, and predictive modeling to enhance decision-making and efficiency.",
      descBullets: [
        "Develop desktop GUI applications with Python, leveraging big data tools like NumPy, Pandas, and SciPy.",
        "Deliver data analysis and predictive modeling using Excel, Power BI, Tableau, and Python, achieving improved decision-making efficiency and accuracy.",
        "Excel in client management, communication, and negotiation to drive successful project outcomes."
      ]
    },
    {
      role: "Data Science and Business Analytics Intern",
      company: "THE SPARKS FOUNDATION (TSF)",
      companylogo: require("./assets/images/sparkLogo.png"),
      date: "Sep 2023 – Oct 2023",
      desc: "Skilled in leveraging Tableau and Python for data-driven insights and predictive modeling across diverse projects.",
      descBullets: [
        "Conduct exploratory analyses and build ML predictions using Python and Tableau.",
        "Develop decision tree models and predictive frameworks for stock market trends and COVID-19 analysis."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some major projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "ORGANIZATIONS I’VE SUPPORTED WITH DATA INSIGHTS AND TECH SOLUTIONS.",
  projects: [
    {
      image: require("./assets/images/1.png"),
      projectName: "NAVTCC Data Monitoring and Reporting",
      projectDesc: "Led a comprehensive data analysis project for NAVTCC, involving Data Processing Workflow to provide actionable insights on KPIs, while recommending future course trends to enhance educational outcomes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://navttc.gov.pk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/3.png"),
      projectName: "Classification of Diabetic Retinopathy by CNN",
      projectDesc: "Developed a Convolutional Neural Network (CNN)-based system to classify diabetic retinopathy in retinal images, providing accurate diagnostic support for POB Eye Hospital Karachi.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pobtrust.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/2.png"),
      projectName: "Multicrop Pest Identification System",
      projectDesc: "Developed a pest identification system for sugarcane, tomato, potato, and apple leaves to assist the Sindh Forest and Agriculture Department in crop protection and management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sindhforests.gov.pk/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Achievements, and Professional Recognitions",

  achievementsCards: [
    {
      title: "Google Certified Data Analyst",
      subtitle:
        "Earned the Google Certified Data Analyst credential, demonstrating expertise in data analysis, visualization, and insights generation using industry-standard tools and methodologies.",
      image: require("./assets/images/5.png"),
      imageAlt: "Google Data Analyst Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pQE1f6dwnj8UC7BPEos_Q9gslr844r6Q/view?usp=sharing"
        }
      ]
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      subtitle:
        "Completed the IBM Data Engineering Professional Certificate, showcasing proficiency in building data pipelines, ETL processes, and managing databases for scalable data solutions.",
      image: require("./assets/images/4.png"),
      imageAlt: "IBM Data Engineer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kT-hH6ZpM9GWGSK2aIERl06usbITC33S/view?usp=sharing"
        }
      ]
    },

    {
      title: "Hackathon Recognition",
      subtitle:
        "Recognized for outstanding performance and innovative solutions in Lablab AI Hackathons, receiving appreciation from mentors and PhDs for contributions to AI-driven projects.",
      image: require("./assets/images/10.png"),
      imageAlt: "Lablab AI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NwK1nb1piv-Jc4oO8UvmKVWqt12ARsmI/view?usp=sharing"
        },
        {
          name: "Project Presentation",
          url: "https://storage.googleapis.com/lablab-static-eu/presentations/submissions/clris8iv1000p2v72h9ywov19/clris8iv1000p2v72h9ywov19-1705920736679_ksb8f0xzu.pdf"
        },
        {
          name: "Project Demo",
          url: "https://lablab.ai/event/nextgen-gpt-ai-hackathon/nextgen-nexus/ecolife360"
        }
      ]
    },

    {
      title: "Vice President at TEDxUIT",
      subtitle: "CoServed as Vice President of TEDxUIT, leading event management, team coordination, and community initiatives, including TEDxFEST 2023, panel discussions, and TEDx Circles for impactful storytelling and engagement.",
      image: require("./assets/images/8.png"),
      imageAlt: "TEDxUIT Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Certificate of Recognition",
          url: "https://drive.google.com/file/d/1tt-fSbdBbBN-g486PnxB1XICnJfANoQU/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@mohamedanwar.ma/eat-that-frog-with-a-pomodoro-550643a3747d",
      title: "Eat that Frog with a Pomodoro",
      description:
        "er put off till tomorrow what may be done day after tomorrow just as well. — Mark Twain —"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable
  // resumeSection
};
