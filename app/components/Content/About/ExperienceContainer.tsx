import { Content } from '@/app/Global/Strings';
import React from 'react';


const ExperienceContainer = () => {
  return (
    <div id='experience' className="bg-secondary opacity-0 animate-fadeUp2 hover:border-accent border-borders text-text flex flex-col gap-10 rounded-4xl border-2 px-6 pt-30 pb-10 transition-colors duration-700 ease-in-out ">
      <section className="flex flex-col gap-20 font-mono">
        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-4xl sm:text-5xl font-bold text-white">{Content.Experience.title}</h1>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl"></div>
          </div>

            {Content.Experience.experience.map((experience) => (
              <div key={experience.title} className="flex flex-col gap-4">
                <h2 className="text-2xl lg:text-2xl sm:text-3xl font-bold ">{experience.title}</h2>
                <p className="text-2xl hover:text-white transition-colors duration-300 ease-in-out lg:text-2xl sm:text-3xl text-accent">{experience.desc}</p>
              </div>
            ))}

        </article>
      </section>
    </div>
  );
};

export default ExperienceContainer;
