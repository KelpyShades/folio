import React from 'react';
import HeroIntro from './HeroIntro';
import { FaDownload } from 'react-icons/fa';
import { Content } from '@/app/Global/Strings';
// import Image from 'next/image';

const HeroIntroContainer = () => {
  return (
    <div className="bg-secondary border-borders p-6 text-text flex flex-col gap-20 rounded-4xl border-2 opacity-75 lg:min-h-[80dvh] lg:justify-between lg:p-8">
      {/* <div className="flex w-[90%] self-center bg-amber-100 opacity-50 py-20 overflow-hidden">
        <Image src="/x.svg" alt="X" width={100} height={100} />
        <Image src="/github.svg" alt="X" width={100} height={100} />
        <Image src="/discord.svg" alt="X" width={100} height={100} />
        <Image src="/gmail.svg" alt="X" width={100} height={100} />
        <Image src="/linkedin.svg" alt="X" width={100} height={100} />
        <Image src="/github.svg" alt="X" width={100} height={100} />
        <Image src="/linkedin.svg" alt="X" width={100} height={100} />
        <Image src="/x.svg" alt="X" width={100} height={100} />
      </div> */}
      <div className="flex lg:hidden flex-col gap-14">
        <article
          id="intro"
          className={`font-mono text-5xl flex flex-col gap-4 font-bold transition-all duration-1000 lg:text-8xl`}
        >
          <h1 className="overflow-hidden">{Content.INTRO}</h1>
          <h2 className="w-full overflow-hidden">{Content.DESC}</h2>
        </article>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span
            className={`bg-borders shadow-custom flex h-[3rem] w-fit items-center justify-center gap-2.5 rounded-2xl px-6 py-2 font-mono text-[1.3rem] transition-all duration-700`}
          >
            Download CV
            <FaDownload />
          </span>
        </a>
      </div>
      <HeroIntro />
    </div>
  );
};

export default HeroIntroContainer;
