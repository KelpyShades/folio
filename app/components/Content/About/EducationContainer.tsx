import { Content } from '../../../global/Strings';

const EducationContainer = () => {
  return (
    <section
      id="education"
      aria-label="Education"
      className="bg-secondary animate-fadeUp2 hover:border-primary dark:hover:border-accent border-borders text-text flex flex-col gap-10 rounded-4xl border-2 px-6 pt-30 pb-10 opacity-0 transition-colors duration-700 ease-in-out"
    >
      <article className="flex flex-col gap-20 font-mono">
        <header className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-text text-4xl font-bold sm:text-5xl lg:text-4xl">
              {Content.Education.title}
            </h2>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl" aria-hidden="true"></div>
          </div>

          <ul className="flex list-none flex-col gap-8">
            {Content.Education.education.map((education) => (
              <li key={education.title} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold sm:text-3xl lg:text-2xl">{education.title}</h3>
                <p className="hover:text-text text-accent text-2xl transition-colors duration-300 ease-in-out sm:text-3xl lg:text-2xl">
                  {education.desc}
                </p>
              </li>
            ))}
          </ul>
        </header>
      </article>
    </section>
  );
};

export default EducationContainer;
