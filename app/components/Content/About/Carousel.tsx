// import Autoplay from 'embla-carousel-autoplay';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from '@/components/ui/carousel';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import clerk from '../../../assets/svgs/clerk.svg';
import figma from '../../../assets/svgs/figma.svg';
import firebase from '../../../assets/svgs/firebase.svg';
import flutter from '../../../assets/svgs/flutter.svg';
import github from '../../../assets/svgs/github.svg';
import mysql from '../../../assets/svgs/mysql.svg';
import n8n from '../../../assets/svgs/n8n.svg';
import nextjs from '../../../assets/svgs/nextjs.svg';
import postgresql from '../../../assets/svgs/postgresql.svg';
import react from '../../../assets/svgs/reactjs.svg';
import scss from '../../../assets/svgs/scss.svg';
import supabase from '../../../assets/svgs/supabase.svg';
import tailwind from '../../../assets/svgs/tailwind.svg';
import typescript from '../../../assets/svgs/typescript.svg';
import zapier from '../../../assets/svgs/zapier.svg';

const CarouselClient = () => {
  const technologies = [
    { name: 'Figma', src: figma },
    { name: 'Firebase', src: firebase },
    { name: 'GitHub', src: github },
    { name: 'Flutter', src: flutter },
    { name: 'MySQL', src: mysql },
    { name: 'Next.js', src: nextjs },
    { name: 'React', src: react },
    { name: 'Tailwind CSS', src: tailwind },
    { name: 'TypeScript', src: typescript },
    { name: 'Zapier', src: zapier },
    { name: 'Supabase', src: supabase },
    { name: 'SCSS', src: scss },
    { name: 'PostgreSQL', src: postgresql },
    { name: 'n8n', src: n8n },
    { name: 'Clerk', src: clerk },
  ];

  return (
    <div>
      <Marquee
        aria-label="Technologies"
        gradient={true}
        gradientColor={'#171717'}
        gradientWidth={150}
        speed={50}
      >
        <ul className="flex list-none gap-8">
          {technologies.map((tech) => (
            <li key={tech.name} className="list-none">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={50}
                height={50}
                className={tech.name === 'Clerk' ? 'mr-8' : ''}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default CarouselClient;
