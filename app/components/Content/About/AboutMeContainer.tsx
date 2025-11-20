// import ShinyText from '@/app/Global/ShinyText';

import { FaDownload } from 'react-icons/fa';
import { Content } from '@/app/global/Strings';

const AboutMeContainer = () => {
  return (
    <section
      id="about"
      aria-label="About me"
      className="bg-secondary border-borders animate-fadeUp1 hover:border-primary dark:hover:border-accent text-text flex flex-col gap-15 rounded-4xl border-2 px-6 pt-30 pb-10 opacity-0 transition-colors duration-700 ease-in-out"
    >
      <article className="flex flex-col gap-20 font-mono">
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-text text-4xl font-bold sm:text-5xl lg:text-4xl">
              {Content.About.title}
            </h2>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl" aria-hidden="true"></div>
          </div>
          {Content.About.paragraphs.map((paragraph) => (
            <p
              className="text-accent hover:text-text text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl"
              key={paragraph.id}
            >
              {paragraph.p}
            </p>
          ))}
        </header>
      </article>
      <a
        href={Content.About.resume}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume"
        className="dark:bg-borders bg-primary-light text-text-light dark:text-text shadow-custom flex h-[4rem] w-fit items-center justify-center gap-2.5 rounded-2xl px-12 py-2 font-mono text-[1.3rem] transition-all duration-700 hover:scale-105 sm:text-[1.8rem] lg:text-[1.3rem]"
      >
        Download My Resume
        <FaDownload aria-hidden="true" />
      </a>
    </section>
  );
};

export default AboutMeContainer;
