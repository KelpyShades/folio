import { Content } from '@/app/Global/Strings';
import React from 'react';
import CarouselClient from './Carousel';



const SkillContiner = () => {
  return (
    <div id='skills' className="bg-secondary w-full hover:border-primary dark:hover:border-accent border-borders text-text flex flex-col gap-15 rounded-4xl border-2 px-6 pt-30 pb-10 opacity-90 transition-colors duration-700 ease-in-out">
      <CarouselClient />
      <section className="flex flex-col gap-20 font-mono">
        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-4xl sm:text-5xl font-bold text-white">{Content.Skills.title}</h1>
            <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl"></div>
          </div>
          {/* {Content.Skills.skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-2xl sm:text-3xl font-bold ">{skill.skill} <span className='text-accent font-normal'>{skill.tech}</span></h2>
            </div>
          ))} */}
          <div className='text-accent text-2xl lg:text-2xl sm:text-3xl'>
            {Content.Skills.desc}
          </div>
        </article>
      </section>
      
    </div>
  );
};

export default SkillContiner;
