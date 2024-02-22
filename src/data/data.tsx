import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jordan Website',
  description: 'This is my personal website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'reviews',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Jordan Skinner`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Developer</strong> with over 10 years of software development experience, from front-end applications to back-end solutions using a variety of technology stacks.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Tiny things like air, light and sound bring life more out of it and enables the ambiance for a sustained living.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Full Stack Developer and system administrator with over 10 years of experience in software engineering
  and developing new features and apps for different products and companies by using programming tools
  like React, React-Native, Redux/Toolkit, Vue.js, Angular, JavaScript(+ES6), TypeScript, Node.js, Python,
  Django, Laravel, PHP, Express, HTML5 and CSS. Specialized in Frontend with React, Redux, TypeScript,
  Vue.js and jQuery. Also specialized in large complex data migration and mining projects, refactoring code
  for improved performance, and debugging complex internal and external API integrations.
  `,
  aboutItems: [
    {label: 'Location', text: 'Troy, MI', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Interests', text: 'Football, Basketball, Swimming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of South Florida', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Redux',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Vue.js',
        level: 9.5,
      },
      {
        name: 'jQuery',
        level: 10,
      },
      {
        name: 'Responsive Design',
        level: 8.5,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express.js',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Django',
        level: 8.5,
      },
      {
        name: 'Laravel',
        level: 9,
      },
      {
        name: 'Wordpress',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Chicken Coops',
    description: 'UK’s leading manufacturer of sustainable, maintenance-free chicken coops with an industry-beating 25-year warranty. In 2020, Green Frog Designs and Gardenature merged for Nestra',
    url: 'https://nestera.co.uk/',
    image: porfolioImage2,
    skills: 'Angular, TypeScript, JavaScript, Node.js, Express.js, T-SQL, .Net, Git',
    work: 'Developed a self-guided wizard for creating a dashboard. The front end was done using Angular, and the back end using .Net Core. The database was a SQL server, and T-SQL was used for developing stored procedures.'
  },
  {
    title: 'DriveFlux',
    description: 'Car & Motocycle Lending Service',
    url: 'https://driveflux.com/',
    image: porfolioImage3,
    skills: 'React, TypeScript, JavaScript, Node.js, Express.js,  MySQL, MongoDB',
    work: 'Specialized in large complex data migration and mining projects, refactoring code for improved performance, and debugging complex internal and external API integrations.'
  },
  {
    title: 'Real-Time Call Management and Reporting',
    description: 'Call tracking, attribution, reporting and analytics for markets, digital agencies, call centers, pay per call, and performance networks',
    url: 'https://www.ringba.com/',
    image: porfolioImage1,
    skills: 'React, JavaScript, Python, Django, Lambda, MySQL, Elasticsearch',
    work: 'Developed a project for this company. This included Python web development with Django, API development with API Gateway, as well as working with Lambda, Python, and the Serverless Framework/SAM.'
  },
  {
    title: 'Hotel Management System',
    description:
      'This hotel management project supports essential features such as Guest profiles, Email automation, Housekeeping management, Reservation management, Room management, Group bookings & reservations, Invoicing, Payment processing, and so on.',
    url: 'https://www.stayntouch.com/',
    image: porfolioImage4,
    skills: 'React, TypeScript, Canvas, Node.js, Express.js, PostgreSQL',
    work: 'Refactored the existing code to improve the performance of a heavy React front-end by talking to Node.js and Express.js via REST API. Applied Scrum techniques to the development process.'
  },
  {
    title: 'Ecosystem',
    description: 'Provide an ecosystem of compatible developer control suites, embeddable BI platforms, and business software.',
    url: 'https://www.syncfusion.com/',
    image: porfolioImage5,
    skills: 'React, TypeScript, Material UI, Redux, Node.js, Express.js, MySQL, MongoDB, Elasticsearch',
    work: 'Contributed to the material design UI and developed custom components. Added tests. Used TypeScript, React, and Material UI.'
  },
  {
    title: 'CompareandChoose',
    description: 'CompareandChoose provide partnered with some fantastic suppliers and global brands enabling us to compare many products all around to globe from Australia Campervan Rental to motorhomes in America we have you covered.',
    url: 'https://www.compareandchoose.com/',
    image: porfolioImage6,
    skills: 'Angular, TypeScript, Python, Django, MySQL, Git',
    work: 'Developed messaging features for a cross-platform application with AngularJS and Ionic framework. Created a deployment process with Chef to the Linode VPS instance with Git hooks for deployment.'
  },
  {
    title: 'Hybrid Biker',
    description:
      'Hybrid bikes on the other hand offer the best of all worlds as they take the best features of each type and combine them into one cycle to offer a great balance.',
    url: 'https://hybridbikereview.com/',
    image: porfolioImage7,
    skills: 'Vue.js, TypeScript, Python, Responsive Design, MongoDB, PostgreSQL',
    work: 'The client had an existing store which we then fully re-built, optimized on a new theme with new apps and an enhanced interface with additional features. The client was facing a lot of back-end issues with his site throwing Critical errors every time an update was made. The code was optimized and made compatibile with all future updates. Created multiple pages and sections from scratch. Added new functionalities including Funding pages and Accessing the Database pages. Moroever, used React.js to create front end elements based on the Figma design.'
  },
  {
    title: 'Bookmark',
    description:
      'CityCity provides self-booking platforms for Business and Leisure Travel Agencies.',
    url: 'https://www.citycity.se/',
    image: porfolioImage8,
    skills: 'Vue.js, TypeScript, Laravel, PHP, Python, MySQL, Git',
    work: 'Worked as a backend developer in there since when they build the site. Collaborated with 5 team members to structure database and project using laravel and Python. Used MySQL as a database and built an optimized and flexibility project.'
  },
  {
    title: 'Clerked App',
    description:
      'This app is a healthcare app that lets doctors and patients can schedule the meeting, as well as doctors can take care of the patients with detailed information such as temperature, heart rate, etc.',
    url: 'https://clerked.com/',
    image: porfolioImage9,
    skills: 'React, TypeScript, JavaScript, Node.js, Express.js, Docker, Python, Django',
    work: 'Supported and migrated a global suite of tools for tracking panelist data aggregation from legacy infrastructure to AWS. Created the front end of an invoice management app written in React. It was fully responsive and had a lot of custom inputs and dynamically generated pages.'
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2013',
    location: 'University of South Florida',
    title: "Bachelor's degree in Computer Science",
    content: (
      <p>
        The University of South Florida combines excellent academics with Division I sports and a picturesque campus just
        minutes from South Beach. I've really enjoyed my time there learning from top professors and researchers in my
        field.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2021 - Jan 2024',
    location: 'Narrativ Digital Agency',
    title: 'Full Stack Developer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>
          Worked on the admin and customer portals and rewrote them from Vue 2 to React/TypeScript. Introduced CI/CD for the front end via GitHub Actions.
        </li>
        <li>
          Developed a self-guided wizard for creating a dashboard. The front end was done using Angular, and the back end using .Net Core. The database was a SQL server, and T-SQL was used for developing stored procedures.
        </li>
        <li>
          Contributed to the material design UI and developed custom components. Added tests. Used TypeScript, React, and Material UI.
        </li>
        <li>
          Researched and analyzed 30+ program and system's problems and developed a new program documentation to fix them.
        </li>
        <li>
          Refactored the existing code to improve the performance of a heavy React front-end by talking to Node.js and Express.js via REST API.
        </li>
        <li>
          Worked as a back-end developer with MySQL, MongoDB, Python and Elastic-Search.
        </li>
        <li>
          Developed a project for this company. This included Python web development with Django, API development with API Gateway, as well as working with Lambda, Python, and the Serverless Framework/SAM.
        </li>
        <li>
          Supported and migrated a global suite of tools for tracking panelist data aggregation from legacy infrastructure to AWS.
        </li>
      </ul>
    ),
  },
  {
    date: 'Sep 2017 - Jul 2021',
    location: 'BIAC',
    title: 'Senior Web Developer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>
          Designed, coded and modified 20+ enterprise web applications from layout to function, according to the client's specifications using React.
        </li>
        <li>
          Worked in DevOps with AWS(Amazon Web Services), Docker, Node, and Python development environments and specialized in Jira.
        </li>
        <li>
          Specialized in large complex data migration and mining projects, refactoring code for improved performance, and debugging complex internal and external API integrations.
        </li>
        <li>
          Built a Node.js-based library, which acted as middleware for Express.js and Koa, that automatically captured user errors and sent them to a platform that aggregated and visualized them.
        </li>
        <li>
          Used various technologies, including cloud providers such as AWS, GCP, Azure, GitHub actions, Jira, Grafana, Prometheus, and alert manager.
        </li>
        <li>Lead a team of 8 developers in the development of an enterprise platform using React.</li>
      </ul>
    ),
  },
  {
    date: 'Nov 2013 - Aug 2017',
    location: 'Ladoo',
    title: 'Junior Web Developer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>
          Fixed bugs, designed websites as a junior web developer. And then designed a project and database, reviewed other team member's code as a lead developer.
        </li>
        <li>
          Collaborated with 5 team members to develop, maintain and improve 10+ web-based applications
        </li>
        <li>
          Created the front end of an invoice management app written in React. It was fully responsive and had a lot of custom inputs and dynamically generated pages.
        </li>
        <li>Contributed as a part of the team that developed a new webshop app for a large retailer in Croatia.</li>
        <li>
          Also created a dashboard stats view with charts using the Recharts library.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Josh Lambert',
      text: 'Jordan is a highly skilled developer I had the pleasure working with. He is a colleague who has a great adaptability and flexibility on the different kinds of activities, and therefore, always learning on the latest trends to be relevant. And as a person, he is a great guy you can always trust.',
      image: '/assets/avatars/Maxim.png',
    },
    {
      name: 'Jesica Parker',
      text: 'Jordan is a talented software developer who never gives up when presented with tough technical obstacles. To be honest, I had in-depth discussions a lot with him in terms of technology, architecture, product roadmap, etc and he was very successful in solving several kinds of challenges and difficulties.',
      image: '/assets/avatars/Jesica.png',
    },
    {
      name: 'Jacob Lee',
      text: "I have the opportunity to work with Jordan for about 3 years at BIAC when I was a dev, he is one of the best leader's I have ever worked with, always willing to help out on understanding a bug, a scenario or just a requirement. He has an amazing memory for open tickets, that was really helpful to avoid having duplicated work.",
      image: '/assets/avatars/Roman Kostetski.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am available at any time. Just call me if you need, then I will do my best to help you.',
  items: [
    {
      type: ContactType.Email,
      text: 'jordanskinner072@gmail.com',
      href: 'mailto:jordanskinner072@gmail.com?subject=&body=',
    },
    {
      type: ContactType.Location,
      text: 'Troy, Michigan',
      href: 'https://maps.google.com/maps/ms?ie=UTF8&hl=en&t=h&msa=0&msid=104752267739743366167.0004738f700d65c870a4d&ll=47.650588,-122.354736&spn=1.480197,2.197266&z=7&source=embed',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/jordan-skinner-dev/',
      href: 'https://www.linkedin.com/in/jordan-skinner-dev/',
    },
    // {
    //   type: ContactType.Github,
    //   text: 'prodev08',
    //   href: 'https://github.com/prodev08',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [];
