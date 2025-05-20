// import ShinyText from '@/app/Global/ShinyText';
import { Content } from '@/app/Global/Strings';

import React from 'react';
import { FaDownload } from 'react-icons/fa';

// import CarouselClient from './Carousel';

const AboutMeContainer = () => {
  return (
    <div id='about' className="bg-secondary opacity-0 animate-fadeUp1 hover:border-primary dark:hover:border-accent border-borders text-text flex flex-col gap-15 rounded-4xl border-2 px-6 pt-30 pb-10 transition-colors duration-700 ease-in-out ">
      <section className="flex flex-col gap-20 font-mono">
        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-4xl sm:text-5xl font-bold text-text">{Content.About.title}</h1>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl"></div>
          </div>
          {Content.About.paragraphs.map((paragraph) => (
            <p className="text-accent text-2xl lg:text-2xl sm:text-3xl" key={paragraph.id}>
              {paragraph.p}
            </p>
          ))}
        </article>
      </section>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:bg-borders bg-primary-light text-text-light dark:text-text shadow-custom flex h-[4rem] w-fit items-center justify-center gap-2.5 rounded-2xl px-12 py-2 font-mono text-[1.3rem] lg:text-[1.3rem] sm:text-[1.8rem] transition-all duration-700"
      >
        Download My CV
        <FaDownload />
      </a>
      {/* <HeroIntro /> */}
      {/* <CarouselClient /> */}
    </div>
  );
};

export default AboutMeContainer;
