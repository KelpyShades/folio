import { Profile } from '@/app/Global/Strings';
import Image from 'next/image';
import React from 'react';
import TechStack from './TechStack';
import Link from 'next/link';
import profile from '@/app/assets/images/profile2.png';
import gmail from '@/app/assets/svgs/gmail.svg';
import github from '@/app/assets/svgs/github.svg';
import linkedin from '@/app/assets/svgs/linkedin.svg';
import discord from '@/app/assets/svgs/discord.svg';
import x from '@/app/assets/svgs/x.svg';
import Theme from '@/app/Global/Theme';

const ProfileCard = () => {
  return (
    <aside className="relative bg-secondary-light dark:bg-secondary lg:opacity-0 lg:animate-fadeRight hover:border-tertiary dark:hover:border-accent border-borders-light dark:border-borders flex max-h-[96dvh] min-h-[95dvh] w-[95dvw] flex-col justify-center gap-20 sm:gap-25 rounded-4xl border-2 p-8 sm:p-30 lg:p-8 transition-colors duration-700 ease-in-out lg:fixed lg:max-h-[96dvh] lg:min-h-[95dvh] lg:w-[32rem] lg:gap-10 xl:gap-20">
        <Theme className='block absolute top-4 right-4 lg:hidden sm:p-5' />
      <div className="flex flex-col items-center gap-8">
        {/* profile data */}
        <figure className="flex items-center justify-center">
          {/* profile  */}
          <Image
            className="border-borders-light dark:border-borders sm:w-[25rem] sm:h-[25rem] lg:w-[18rem] lg:h-[18rem] rounded-4xl border-4"
            src={profile}
            width={180}
            height={180}
            priority
            alt="profile"
          />
        </figure>
        <article className="flex flex-col gap-7 text-center">
          {/* info  */}
          <h1 className="font-poppins text-text-light dark:text-text text-[2.4rem] lg:text-[2.4rem] sm:text-[3rem] font-bold">{Profile.NAME}</h1>
          <div className="flex flex-col gap-1">
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] lg:text-[1.3rem] sm:text-[1.8rem]">{Profile.INTRO}</p>
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] lg:text-[1.3rem] sm:text-[1.8rem]">
              Founder{' '}
              <a
                href={Profile.LINK_1}
                className="hover:text-accent text-text-light dark:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Profile.ATTR_1}
              </a>
            </p>
            <p className="text-accent-light dark:text-accent font-mono text-[1.3rem] lg:text-[1.3rem] sm:text-[1.8rem]">
              Lead{' '}
              <a
                href={Profile.LINK_2}
                className="hover:text-accent text-text-light dark:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Profile.ATTR_2}
              </a>
            </p>
          </div>
        </article>
      </div>
      <section className="flex flex-wrap gap-4 px-6">
        {/* tech stack */}
        {Profile.TECHSTACK.map((label) => (
          <TechStack key={label} label={label} />
        ))}
      </section>
      <footer className="flex flex-col gap-10">
        {/* footer */}
        <address className="flex justify-center gap-8">
          {/* socials */}
          {Profile.SOCIALS.map((social) => {
            let src;
            switch (social.src) {
              case 'gmail':
                src = gmail;
                break;
              case 'github':
                src = github;
                break;
              case 'linkedin':
                src = linkedin;
                break;
              case 'discord':
                src = discord;
                break;
              case 'x':
                src = x;
                break;
              default:
                break;
            }
            return (
              <Link key={social.id} href={social.href} target="blank">
                <figure className="bg-tertiary shadow-custom flex size-16 sm:size-20 lg:size-16 items-center justify-center rounded-2xl transition-all duration-300 ease-in-out hover:scale-110">
                  <Image alt={social.src} height={20} width={20} src={src} className='sm:w-[2.5rem] sm:h-[2.5rem] lg:w-[2rem] lg:h-[2rem]' />
                </figure>
              </Link>
            );
          })}
        </address>
        <div className="text-accent-light dark:text-accent text-center">
          {/* text  */}
          <time>
            <span>&copy; {new Date().getUTCFullYear()}</span> {Profile.FOOTER.rights}
          </time>
          <address>{Profile.FOOTER.loc}</address>
        </div>
      </footer>
    </aside>
  );
};

export default ProfileCard;
