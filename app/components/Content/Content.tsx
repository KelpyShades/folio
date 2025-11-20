// import { Content } from '@/app/Global/Strings';
import Theme from '@/app/global/Theme';
import AboutMeContainer from './About/AboutMeContainer';
import EducationContainer from './About/EducationContainer';
// import PortfolioContainer from './Portfolio/PortfolioContainer';
import ExperienceContainer from './About/ExperienceContainer';
import GithubGraph from './About/GithubGraph';
import SkillContiner from './About/SkillContiner';

const Content = () => {
  return (
    <main className="relative flex w-[95dvw] flex-col gap-10 lg:w-[calc(95dvw-33rem)] lg:flex-1 lg:p-4">
      <div className="sticky top-10 z-10 flex items-center justify-between">
        <header className="hidden px-4 lg:block">
          <nav aria-label="Main navigation" className="animate-fadeLeft opacity-0">
            <ul className="flex gap-4">
              <li>
                <a className="nav-links" href="#about" aria-label="Navigate to About Me section">
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="nav-links"
                  href="#experience"
                  aria-label="Navigate to Experience section"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="nav-links"
                  href="#education"
                  aria-label="Navigate to Education section"
                >
                  Education
                </a>
              </li>
              <li>
                <a className="nav-links" href="#skills" aria-label="Navigate to Skills section">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-links" href="#projects" aria-label="Navigate to Projects section">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Theme className="hidden lg:block" />
      </div>
      <AboutMeContainer />
      <ExperienceContainer />
      <EducationContainer />
      <SkillContiner />
      <GithubGraph />
    </main>
  );
};

export default Content;
