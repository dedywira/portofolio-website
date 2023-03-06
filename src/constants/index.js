import {
    research,
    uiux,
    graphic,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    photoshop,
    illustrator,
    premiere,
    aviana,
    cuscapi,
    waiterapp,
    pelaga,
    hale,
  } from "../assets";
  
  export const navLinks = [
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
  ];
  
  const services = [
    {
      title: "UI/UX Design",
      icon: uiux,
    },
    {
      title: "User Research & Testing",
      icon: research,
    },
    {
      title: "Graphic Design",
      icon: graphic,
    },
    {
      title: "Web Develoment",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe Photoshop",
      icon: photoshop,
    },
    {
      name: "Adobe Illustrator",
      icon: illustrator,
    },
    {
      name: "Adobe Premiere Pro",
      icon: premiere,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "PT Aviana Sinar Abadi (Internship)",
      place: "Denpasar, Bali",
      icon: aviana,
      iconBg: "#383E56",
      date: "July 2020 - September 2020",
      points: [
        "Helping senior developers and supervisor to design and develop new features for WordPress plugin project.",
        "Learning and using industry-standard web development tools and technologies.",
        "Learning the best practices and methodologies of the technology & software development company.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Cuscapi Berhad",
      place: "Denpasar, Bali",
      icon: cuscapi,
      iconBg: "#E6DEDD",
      date: "July 2021 - June 2022",
      points: [
        "Create wireframes, mockups, and prototypes, based on customer journey and coordinate with product manager to present it to stakeholders.",
        "Keep up with the latest UI/UX trends, update the design guideline, and proactively share it to the developer team to maintain the quality of the company products.",
        "Conduct user testing with product team to understand end-user requirements and meeting client expectations.",
        "Contributed to solving day to day tickets (improvement, bug, and task) for production environment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Waiter App",
      description:
        "E-waiter is a mobile app for recording customer orders effectively to the kitchen without write it on paper and sent the data immediately to POS system in restaurant businesses. This project focused on redesigning the old UI for better look and user experience.",
      tags: [
        {
          name: "UI/UX Design",
          color: "blue-text-gradient",
        },
        {
          name: "Mobile App Design",
          color: "green-text-gradient",
        },
      ],
      image: waiterapp,
      source_code_link: "https://www.behance.net/gallery/161132487/Waiter-Mobile-App-Redesign-Ewaiter",
    },
    {
      name: "Pelaga Eco Park",
      description:
        "Pelaga Eco Park is a recreation spot that contains culinary restaurants and camping ground that offer a refreshing experience in nature located in Badung, Bali. Currently, they want to grow their business with a digital presence with a website to attract more visitors.",
      tags: [
        {
          name: "UI/UX Design",
          color: "blue-text-gradient",
        },
        {
          name: "Website Design",
          color: "green-text-gradient",
        },
      ],
      image: pelaga,
      source_code_link: "https://www.behance.net/gallery/160209769/Eco-tourism-Spot-Website-Landing-Page-Design",
    },
    {
      name: "Hale E-Commerce",
      description:
        "Hale is a skincare company dedicated to providing simple, safe, effective, and reasonably priced skincare product. The primary goal for the website is to increase revenue through online transactions and provide a unique and innovative shopping experience.",
      tags: [
        {
          name: "UI/UX Design",
          color: "blue-text-gradient",
        },
        {
          name: "Website Design",
          color: "green-text-gradient",
        },
      ],
      image: hale,
      source_code_link: "https://www.behance.net/gallery/163143365/Skincare-E-commerce-Website-Design",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };