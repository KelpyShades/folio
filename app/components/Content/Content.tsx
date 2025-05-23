// import { Content } from '@/app/Global/Strings';
import React from 'react';
import AboutMeContainer from './About/AboutMeContainer';
// import PortfolioContainer from './Portfolio/PortfolioContainer';
import ExperienceContainer from './About/ExperienceContainer';
import SkillContiner from './About/SkillContiner';
import GithubGraph from './About/GithubGraph';
import Theme from '@/app/Global/Theme';

const Content = () => {
  return (
    <main className="flex w-[95dvw] flex-col gap-10 lg:ml-[33rem] lg:w-[calc(95dvw-33rem)] lg:flex-1 lg:p-4">
      <div className='flex justify-between items-center'>
        <header className="hidden px-4 lg:block">
          <nav className="animate-fadeLeft opacity-0">
            <ul className="flex gap-4">
              <li>
                <a className="nav-links" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a className="nav-links" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-links" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-links" href="#portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Theme className='hidden lg:block' />
      </div>
      <AboutMeContainer />
      <ExperienceContainer />
      <SkillContiner />

      {/* <div className="flex flex-col justify-center gap-10 md:flex-row">
        <SkillContiner />
        <SkillContiner />
      </div> */}
      <GithubGraph />
      {/* <PortfolioContainer /> */}
    </main>
  );
};

export default Content;
