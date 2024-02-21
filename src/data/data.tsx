import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-8.jpg';
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
  title: 'James Website',
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
  name: `I'm James`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Software Engineer</strong> based United States, currently
        working at <strong className="text-stone-100">Toptal</strong> helping develop website, mobile-first, domain
        registrar and site builder.
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
  description: `A Senior Software Engineer with 10+ years of experience in Full stack development, with a strong command of 5+ programming languages such as JavaScript, PHP, TypeScript, C#, and Java, as well as proficiency in designing and implementing efficient algorithms and data structures. Experience spans various domains, including Microsoft and AWS, enabling me to adapt quickly to rapid changes and contribute effectively to diverse projects. Focusing on detail and passion for creating visually appealing and user-friendly experiences. Technically proficient and analytical solver with a calm and focused demeanor. When not working, nice sportsman.`,
  aboutItems: [
    {label: 'Location', text: 'Seattle, WA', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Interests', text: 'Volleyball, Swimming, Climbing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Miami', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'WordPress',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 5,
      },
      {
        name: 'Django',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Client Relationship Management System',
    description: '(CRMS)',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Hotel Management System',
    description:
      'This hotel management project supports essential features such as Guest profiles, Email automation, Housekeeping management, Reservation management, Room management, Group bookings & reservations, Invoicing, Payment processing, and so on.',
    url: 'https://www.stayntouch.com/',
    image: porfolioImage2,
  },
  {
    title: 'DriveFlux',
    description: 'Car & Motocycle Lending Service',
    url: 'https://driveflux.com/',
    image: porfolioImage3,
  },
  {
    title: 'Online Learning Platform',
    description:
      'An online learning platform is a webspace or portal for educational content and resources that offers a student everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Real-time communication project',
    description: '',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'E-Commerce Website',
    description: 'It’s for a client in the fashion industry.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Clerked App',
    description:
      'This app is a healthcare app that lets doctors and patients can schedule the meeting, as well as doctors can take care of the patients with detailed information such as temperature, heart rate, etc.',
    url: 'https://clerked.com/',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2015',
    location: 'University of Miami',
    title: "Master's degree in Computer Science",
    content: (
      <p>
        The University of Miami combines excellent academics with Division I sports and a picturesque campus just
        minutes from South Beach. I've really enjoyed my time there learning from top professors and researchers in my
        field.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2019 - Present',
    location: 'Toptal',
    title: 'Senior Software Engineer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>Built initial structures of 10+ web applications and development environment.</li>
        <li>
          Systems Architect with a focus on infrastructure, Kubernetes, Terraform, Docker, CICD pipeline, and Linux.
        </li>
        <li>
          Developed and maintained 30֡ web applications for internal teams built with React, Angular, Node.js, and
          Laravel while providing high test coverage of unit testing, and end-to-end testing.
        </li>
        <li>
          Developed and maintained robust and scalable web applications using Java and Spring Boot, ensuring high
          performance and reliability.
        </li>
        <li>Worked on 10+ serverless web applications with AWS Lambda, AWS DynamoDB, AWS S3, AWS SNS, and so on.</li>
        <li>Mentored 20+ new members of the team.</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2018 - Dec 2028',
    location: 'Toptal',
    title: 'Full Stack Developer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>
          Developed and maintained software applications for various clients, ranging from startups to enterprise-level
          organizations.
        </li>
        <li>Completed 10+ web applications, and platforms using MERN, MEAN, and Laravel.</li>
        <li>
          Extensive experience in cross-platform mobile app development using React Native, delivering seamless user
          experiences on both iOS and Android platforms.
        </li>
        <li>
          Introduced WebRTC to ensure smooth 100% real-time communication, such as video conferencing and real-time data
          updates.
        </li>
        <li>Implemented 100% effective and scalable RESTful APIs.</li>
        <li>Created 5+ serverless systems by using AWS Lambda</li>
      </ul>
    ),
  },
  {
    date: 'Apr 2016 - Dec 2017',
    location: 'Newsela',
    title: 'Software Engineer',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>
          Designed and developed 10֡ RESTful APIs using Node.JS, Express, Spring Boot, Nest, PHP, Laravel, Python,
          MongoDB, PostgreSQL, MySQL, Redis, Amazon Web Services, Microsoft Azure and Google Cloud Platform.
        </li>
        <li>
          Translated 20+ Figma, Adobe XD designs to pixel-perfect and fully responsive design using JavaScript,
          TypeScript and its libraries, HTML, CSS and SCSS, and LESS - CSS preprocessors.
        </li>
        <li>
          Developed complicated user interfaces which relied on using web sockets for real-time communication between
          browser and AWS services.
        </li>
        <li>Wrote 100% unit test using Jest.</li>
      </ul>
    ),
  },
  {
    date: 'Sep 2015 - Mar 2016',
    location: 'Google',
    title: 'Software Engineer Intern',
    content: (
      <ul className="ml-4" style={{listStyleType: 'disc'}}>
        <li>Collaborated well with a software development team of 10 members.</li>
        <li>Prepared and submitted 50+ reports and other documentation to assist development team members.</li>
        <li>Partnered 50+ team members to learn best practices in software design.</li>
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
      text: 'James is a highly skilled developer I had the pleasure working with. He is a colleague who has a great adaptability and flexibility on the different kinds of activities, and therefore, always learning on the latest trends to be relevant. And as a person, he is a great guy you can always trust.',
      image: '/assets/avatars/Maxim.png',
    },
    {
      name: 'Jesica Parker',
      text: 'James is a talented software developer who never gives up when presented with tough technical obstacles. To be honest, I had in-depth discussions a lot with him in terms of technology, architecture, product roadmap, etc and he was very successful in solving several kinds of challenges and difficulties.',
      image: '/assets/avatars/Jesica.png',
    },
    {
      name: 'Jacob Lee',
      text: "I have the opportunity to work with James for about 3 years at Toptal when I was a dev, he is one of the best leader's I have ever worked with, always willing to help out on understanding a bug, a scenario or just a requirement. He has an amazing memory for open tickets, that was really helpful to avoid having duplicated work.",
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
      text: 'jsoft.star@outlook.com',
      href: 'mailto:jsoft.star@outlook.com?subject=&body=',
    },
    {
      type: ContactType.Location,
      text: 'Seattle, WA',
      href: 'https://maps.google.com/maps/ms?ie=UTF8&hl=en&t=h&msa=0&msid=104752267739743366167.0004738f700d65c870a4d&ll=47.650588,-122.354736&spn=1.480197,2.197266&z=7&source=embed',
    },
    // {
    //   type: ContactType.LinkedIn,
    //   text: 'Mariano',
    //   href: 'https://www.linkedin.com/in/marianoDuh/',
    // },
    {
      type: ContactType.Github,
      text: 'prodev08',
      href: 'https://github.com/prodev08',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [];
