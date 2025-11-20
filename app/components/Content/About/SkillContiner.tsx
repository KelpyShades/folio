import { Content } from '@/app/Core/Strings';
import CarouselClient from './Carousel';

const SkillContiner = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and technologies"
      className="bg-secondary hover:border-primary dark:hover:border-accent border-borders text-text flex w-full flex-col gap-15 rounded-4xl border-2 px-6 pt-30 pb-10 opacity-90 transition-colors duration-700 ease-in-out"
    >
      <CarouselClient />
      <article className="flex flex-col gap-20 font-mono">
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-4xl">
              {Content.Skills.title}
            </h2>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl" aria-hidden="true"></div>
          </div>
          <p className="text-accent text-2xl sm:text-3xl lg:text-2xl">{Content.Skills.desc}</p>
          <dl className="flex flex-col gap-4">
            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Languages:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.languages}
              </dd>
            </div>

            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Basics:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.basics}
              </dd>
            </div>

            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">
                Mobile (Cross-Platform):
              </dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.mobile}
              </dd>
            </div>
            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Web:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.web}
              </dd>
            </div>

            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Backend:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.backend}
              </dd>
            </div>

            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Tools:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.tools}
              </dd>
            </div>

            <div>
              <dt className="gap-4 text-2xl font-bold sm:text-3xl lg:text-2xl">Other:</dt>
              <dd className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                {Content.Skills.other}
              </dd>
            </div>
          </dl>
        </header>
      </article>
    </section>
  );
};

export default SkillContiner;
