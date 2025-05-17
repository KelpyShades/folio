
const bDate = 2004;
let age;
const currentYear = new Date().getUTCFullYear();
const currentMonth = new Date().getUTCMonth();
if (currentMonth >= 8) {
    age = currentYear - bDate;
} else {
    age = currentYear - bDate -1 ;
}



export const Profile = {
    NAME : 'Appiah Kelvin',

    INTRO: age + 'y/o self-taught software developer',
    ATTR_1: 'Founder - @404-Not-Null',
    ATTR_2: 'Lead - @Class-io',
    TECHSTACK: ['Flutter','Next.js','Tailwind CSS','HTML5','SCSS','Dart','MySQL','Typescript'],
    SOCIALS: [
        {
            id: 1,
            href: '',
            src: '/gmail.svg'
        },
        {
            id: 2,
            href: '',
            src: '/github.svg'
        },
        {
            id: 3,
            href: '',
            src: '/linkedin.svg'
        },
        {
            id: 4,
            href: '',
            src: '/discord.svg'
        },
        {
            id: 5,
            href: '',
            src: '/x.svg'
        }
    ],
    FOOTER: {
        rights: 'Appiah Kelvin, All rights reserved.',
        loc: 'Kumasi, Ghana.'
    }
}

export const Content = {
    INTRO: "I'm Appiah Kelvin",
    DESC: "A web and mobile app developer."
}