import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  ysu,
  fastapi,
  postgresql,
  tensorflow,
  aws,
  graphql,
  trumbullindustries,
  snapbrillia,
  facemask,
  salesprediction,
  movierec,
  drivingfocus,
  chatbot,
  shippingrate,
  supervisor,
  professor,
  ceo,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    external: true,
    url: "/abhishekShahResumeMay.pdf",
  },
    {
    id: "linkedin",
    title: "LinkedIn",
    external: true,
    url: "https://www.linkedin.com/in/isabhishekshah/",
  },
  
];

const services: TService[] = [
  {
    title: "Full-Stack Software Engineer",
    icon: web,
  },
  {
    title: "AI / Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Cloud & DevOps Engineer",
    icon: backend,
  },
  {
    title: "E-Commerce Systems Engineer / Architect",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript (ES6+)",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Fast API",
    icon: fastapi,
  },
  {
    name: "Graph QL",
    icon: graphql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
    {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
    {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer/ Web Developer",
    companyName: "Trumbull Industries",
    icon: trumbullindustries,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Project & Team Leadership: Managed a team of 4 overseas developers to achieve 95% on-time sprint delivery across 10+ projects; implemented Agile practices, boosting productivity by 30% and cut scope changes by 25%.",
      "Full-Stack Web & E-commerce Development: Built responsive UIs (HTML5, CSS3, JavaScript, jQuery) and scalable backends (PHP/CodeIgniter) handling 1 M+ monthly requests; streamlined BigCommerce API integration for 35% faster data sync and optimized MySQL schemas/queries to reduce execution time by 20%.",
      "SEO & Performance Optimization: Applied structured-data and PHP-driven SEO improvements to lift organic traffic by 45% and achieve a 90+ PageSpeed score, reducing bounce rates by 30%.",
      "Data Analytics & Cloud Automation: Developed Tableau dashboards for real-time insights (50% faster reporting) and automated AWS deployments (EC2, Lambda, API Gateway) to cut release time by 40%.",
      "Conversational AI & Shipping-Rate Automation: Deployed a Rasa-based chatbot with Python backend and BigCommerce webhooks—deflecting 60% of support tickets and reducing response times from 4 hrs to under 5 min—and built a LightGBM model (Pandas, Airflow) to predict shipping rates (+25% accuracy), currently containerizing it in FastAPI on AWS for real-time quotes.",
    ],
  },
  {
    title: "Web Developer Intern",
    companyName: "Snapbrillia",
    icon: snapbrillia,
    iconBg: "#E6DEDD",
    date: "April 2022 - Sep 2022",
    points: [
      "As a self-starter, effectively collaborated with a team in an agile-based environment and actively participated in daily scrum meetings to report progress on assigned tasks.",
      "Showcased proficiency in collaborating with the design team to develop JavaScript, HTML, and CSS components for the b2c website and implemented them with logic utilizing the React JS framework, resulting in a seamless and efficient user experience.",
      "Effectively detected and resolved bugs across the b2b/b2c website, while managing wait time to ensure a smooth user experience.",
      "Followed a structured software development life cycle (SDLC) approach, incorporating continuous integration/continuous delivery (CI/CD) practices, leading to an efficient and effective software development process.",
      "Ensured code compliance with quality requirements by conducting comprehensive unit testing using Jest, achieving a 100% success rate, and resolving all reported bugs within an average of 24 hours to maintain an exceptional user experience.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    companyName: "Youngstown State University",
    icon: ysu,
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2022",
    points: [
      "Developed innovative and ethical driving simulation software using eye-tracking technology to simulate complex scenarios, demonstrating expertise in software development and ethical research.",
      "Won first place in the University of Queensland's Three-Minute Research Thesis competition by presenting cutting-edge research on ethical dilemmas in driving simulations, showcasing strong communication and presentation skills.",
      "Developed scalable and customizable stochastic simulation software to create realistic driving experiences, while analyzing the visual focus of over 20 drivers.",
      "Utilized C# Job System and Burst Compiler to distribute processing across CPU cores in Artificial Intelligence (AI) Traffic Controller script, resulting in 30% faster simulation times.",
      "Utilized statistical analysis to gather synthetic data on human gaze patterns to simulate sight perception for neural network training, resulting in an accuracy of 90% on real-world data.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    companyName: "Youngstown State University",
    icon: ysu,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Dec 2020",
    points: [
      "Performed data pre-processing and data engineering techniques, such as data cleaning, feature scaling, and normalization, to prepare the time series dataset for analysis.",
      "Applied 12 different machine learning (ML) algorithms using Python, showcasing proficiency in the field.",
      "Successfully imputed missing data in 7 scenarios, resulting in a reduction of up to 30% in the root mean squared error (RMSE), highlighting the ability to analyze and recover valuable information in raw datasets.",
      "Used data visualization tools, such as Matplotlib and ggplot, to explore and visualize the dataset, and gain insights into the patterns of missing data.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Abhi contributed to Snapbrillia’s website with React, UI components, bug fixes, and a strong focus on user experience.",
    name: "Ninh Tran",
    designation: "CEO",
    company: "Snapbrillia",
    image: ceo,
  },
    {
    testimonial:
      "Abhi advanced autonomous vehicle research at YSU, developing AI simulations, analyzing complex data, and mastering modern cloud/web technologies.",
    name: "Dr. John R. Sullins",
    designation: "Professor",
    company: "YSU",
    image: professor,
  },
  {
    testimonial:
      "Abhi demonstrated leadership, initiative, attention to detail, and creative problem-solving—skills that strongly enhance his technology and project work.",
    name: "Ellen W. Banks",
    designation: "Supervisor",
    company: "Maag Library",
    image: supervisor,
  },
];

const projects: TProject[] = [
  {
    name: "AI-Powered Shipping Rate Prediction",
    description:
      "Machine learning model that predicts optimal shipping rates with +25% accuracy; deployed on AWS with FastAPI for real-time e-commerce integration.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: shippingrate,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Rasa-Based Conversational AI Chatbot",
    description:
      "AI chatbot integrated with BigCommerce, deflecting 60%+ of support tickets and reducing response time from 4 hours to under 5 minutes.",
    tags: [
      {
        name: "rasa",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "bigcommerce",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Face Mask Detection System",
    description:
      "Real-time face mask detection system using TensorFlow and MobileNet with 95%+ accuracy; optimized for low latency and edge deployment.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: facemask,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Future Sales Prediction (Kaggle)",
    description:
      "Top-performing time-series sales forecasting model using Gradient Boosting and advanced feature engineering; optimized for business accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "lightgbm",
        color: "green-text-gradient",
      },
      {
        name: "feature-engineering",
        color: "pink-text-gradient",
      },
    ],
    image: salesprediction,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Collaborative Filtering for Movie Recommendations",
    description:
      "User-based recommendation engine utilizing Tanimoto, Pearson, and Euclidean similarity metrics to deliver personalized movie recommendations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "recommendation-system",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: movierec,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Drivers’ Visual Focus Analysis on Complex Road Networks",
    description:
      "Driving simulation platform integrating eye-tracking with AI-based traffic modeling; achieved 90%+ accuracy in gaze prediction; published research.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity3d",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: drivingfocus,
    sourceCodeLink: "https://github.com/",
  },
];



export { services, technologies, experiences, testimonials, projects };
