import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import profile from '@/app/assets/images/profile2.png';
import discord from '@/app/assets/svgs/discord.svg';
import github from '@/app/assets/svgs/github.svg';
import gmail from '@/app/assets/svgs/gmail.svg';
import linkedin from '@/app/assets/svgs/linkedin.svg';
import x from '@/app/assets/svgs/x.svg';
import { currentYear } from '@/app/Core/DateClient';
import { Profile } from '@/app/Core/Strings';
import Theme from '@/app/Core/Theme';
import BDateClient from './components/BDateClient';
import TechStack from './TechStack';

const ProfileCard = () => {
  return (
    <aside
      aria-label="Profile information"
      className="bg-secondary-light dark:bg-secondary lg:animate-fadeRight hover:border-tertiary dark:hover:border-accent border-borders-light dark:border-borders h-profile-card-clamp relative flex w-[95dvw] flex-col justify-center gap-20 rounded-4xl border-2 p-8 transition-colors duration-700 ease-in-out sm:gap-25 sm:p-30 lg:sticky lg:top-10 lg:w-[32rem] lg:gap-10 lg:p-8 lg:opacity-0 xl:gap-20"
    >
      <Theme className="absolute top-4 right-4 block sm:p-5 lg:hidden" />
      <div className="flex flex-col items-center gap-8">
        <figure className="flex items-center justify-center">
          <Image
            className="border-borders-light dark:border-borders rounded-4xl border-4 object-cover"
            src={profile}
            width={145}
            height={145}
            priority
            alt={`${Profile.NAME} profile picture`}
          />
        </figure>
        <article className="flex flex-col gap-7 text-center">
          <h1 className="font-poppins text-text-light dark:text-text text-[2.4rem] font-bold sm:text-[3rem] lg:text-[2.4rem]">
            {Profile.NAME}
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] sm:text-[1.8rem] lg:text-[1.3rem]">
              <Suspense>
                <BDateClient />
              </Suspense>{' '}
              {Profile.INTRO}
            </p>
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] sm:text-[1.8rem] lg:text-[1.3rem]">
              Founder{' '}
              <a
                href={Profile.LINK_1}
                className="hover:text-accent text-text-light dark:text-text"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${Profile.ATTR_1} website`}
              >
                {Profile.ATTR_1}
              </a>
            </p>
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] sm:text-[1.8rem] lg:text-[1.3rem]">
              Lead{' '}
              <a
                href={Profile.LINK_2}
                className="hover:text-accent text-text-light dark:text-text"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${Profile.ATTR_2} website`}
              >
                {Profile.ATTR_2}
              </a>
            </p>
          </div>
        </article>
      </div>
      <section aria-label="Technology stack" className="flex flex-wrap gap-4 px-6">
        {Profile.TECHSTACK.map((label, index) => (
          <TechStack key={index} label={label} />
        ))}
      </section>
      <footer className="flex flex-col gap-10">
        <nav aria-label="Social media links" className="flex justify-center gap-8">
          {Profile.SOCIALS.map((social) => {
            let src: string;
            let platformName: string;
            switch (social.src) {
              case 'gmail':
                src = gmail;
                platformName = 'Gmail';
                break;
              case 'github':
                src = github;
                platformName = 'GitHub';
                break;
              case 'linkedin':
                src = linkedin;
                platformName = 'LinkedIn';
                break;
              case 'discord':
                src = discord;
                platformName = 'Discord';
                break;
              case 'x':
                src = x;
                platformName = 'X (Twitter)';
                break;
              default:
                src = '';
                platformName = social.src;
                break;
            }
            return (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${Profile.NAME}'s ${platformName} profile`}
              >
                <figure className="bg-tertiary shadow-custom flex size-16 items-center justify-center rounded-2xl transition-all duration-300 ease-in-out hover:scale-110 sm:size-20 lg:size-16">
                  <Image
                    alt={`${platformName} icon`}
                    height={20}
                    width={20}
                    src={src}
                    className="sm:h-[2.5rem] sm:w-[2.5rem] lg:h-[2rem] lg:w-[2rem]"
                    aria-hidden="true"
                  />
                </figure>
              </Link>
            );
          })}
        </nav>
        <div className="text-accent-light dark:text-accent text-center">
          <time dateTime={currentYear.toString()}>
            <span>&copy; {currentYear}</span> {Profile.FOOTER.rights}
          </time>
          <p className="mt-1">{Profile.FOOTER.loc}</p>
        </div>
      </footer>
    </aside>
  );
};

export default ProfileCard;
