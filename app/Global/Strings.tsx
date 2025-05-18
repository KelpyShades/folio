const bDate = 2004;
let age;
const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth();
const currentDay = new Date().getUTCDate();

if (currentMonth >= 8 && currentDay >= 6) {
  age = currentYear - bDate;
} else {
  age = currentYear - bDate - 1;
}

export const Profile = {
  NAME: 'Kelvin Appiah',

  INTRO: age + ' y/o self-taught software developer',
  ATTR_1: '@404-Not-Null',
  ATTR_2: '@Class-io',
  LINK_1: 'https://404notnull.vercel.app',
  LINK_2: 'https://class-io.vercel.app',
  TECHSTACK: ['Flutter', 'Next.js', 'SQL', 'Tailwind CSS', 'SCSS', 'Dart', 'Typescript'],
  SOCIALS: [
    {
      id: 1,
      href: '',
      src: 'gmail',
    },
    {
      id: 2,
      href: '',
      src: 'github',
    },
    {
      id: 3,
      href: '',
      src: 'linkedin',
    },
    {
      id: 4,
      href: '',
      src: 'discord',
    },
    {
      id: 5,
      href: '',
      src: 'x',
    },
  ],
  FOOTER: {
    rights: 'Kelvin Appiah, All rights reserved.',
    loc: 'Kumasi, Ghana.',
  },
};

export const Content = {
  About: {
    title: '~$ About Kelvin',
    paragraphs: [
      {
        id: 1,
        p: 'Hi, I’m a web and mobile app developer studying at the University of Energy and Natural Resources in Ghana. I’m really into programming and i love the experience in creating wonderful and useful apps. ',
      },
      {
        id: 2,
        p: 'Over the past year, I’ve been lucky enough to work on a bunch of different projects, which have helped me build a solid set of skills. From simple html and css to complex flutter and next.js projects, I’ve learned a lot. Learning new things is a big part of what I do.I love staying up to date with the latest trends in tech. I’m also pretty good at solving problems and communicating with others, which comes in handy when working on team projects. When I’m not coding, you’ll find me wathcing some youtube videos, movies, anime, trying out new things or just playing games. These hobbies help me relax and keep my creative juices flowing, which actually makes me a better problem-solver.',
      },
    ],

  },
  Experience: {
    title: '~$ My Experience',
    experience: [
      {
        title: '> Founder, 404-Not-Null (Current)',
        desc: 'I teamed up with friends to launch a startup, 404-Not-Null, focused on creating solutions for real-world issues. Our first project, Class-io, tackles the hassle of paper-based attendance by digitizing it into an efficient system and we have more projects in the pipeline. As a founder, I’ve stepped up to lead and manage the team, gaining skills in communication, cooperation, and project management. I’m excited to grow this into something big and impactful.',
      },
      {
        title: '> Frontend Developer Intern, Guru Coding Academy (October - December 2023)',
        desc: 'I joined a 3-month internship where I worked on frontend development projects. It was a great chance to dive into software development, collaborate with a team, and get hands-on experience meeting real deadlines. I’m eager to keep building my skills in this field.',
      },
      {
        title: '> Class Projects & Technical Skills',
        desc: 'Through school, I’ve worked on projects using Java, C++, VB.net, C#, and MySQL. From coding Windows Forms applications to managing databases, these experiences have strengthened my programming and problem-solving abilities.',
      },
      {
        title: '> Vice President, Knust SHS Robotics Club (2019-2022)',
        desc: 'Starting as a member and rising to Vice President, I led my team in STEM projects and inspired others to explore IT. In my final year, we won the Best Solar Project at the National STEM Novation Competition 2022, a highlight of my leadership and teamwork journey.',
      },
      {
        title: '> Volunteer, D & H Heavy Duty Mechanics Company Limited (October - December 2022)',
        desc: 'As an apprentice volunteer, I handled routine maintenance on equipment and vehicles. Working with the team taught me the importance of detail and collaboration in getting the job done.',
      },
    ],
  },
  Skills: {
    title: '~$ Tech stack i am familiar with',
    desc: 'Primarily focused on Flutter for mobile apps and Next.js for web apps and sites but i am also prficient in other technologies and i am always eager to explore and learn new ones.',
  },
};

