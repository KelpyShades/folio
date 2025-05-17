// import { Content } from '@/app/Global/Strings';
import React from 'react';
import HeroIntroContainer from './HeroIntroContainer';

const Body = () => {
  return (
    <aside className="flex lg:flex-1 w-[95dvw] flex-col gap-12 lg:ml-[33rem] lg:p-4">
      <header className="hidden px-4 lg:block">
        <nav>
          <ul className="flex gap-4">
            <li>
              <a className="nav-links" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-links" href="#">
                About Me
              </a>
            </li>
            <li>
              <a className="nav-links" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <HeroIntroContainer />
    </aside>
  );
};

export default Body;
