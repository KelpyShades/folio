import { Profile } from '@/app/Global/Strings';
import Image from 'next/image';
import React from 'react';
import TechStack from './TechStack';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <aside className="bg-secondary border-borders flex min-h-[95dvh] max-h-[96dvh] w-[95dvw] flex-col justify-center gap-15 rounded-4xl border-2 p-8 lg:fixed lg:max-h-[96dvh] lg:min-h-[95dvh] lg:w-[32rem] lg:gap-10">
      <div className="flex flex-col items-center gap-8">
        {/* profile data */}
        <figure className="flex items-center justify-center">
          {/* profile  */}
          <Image
            className="border-borders rounded-4xl border-4"
            src="/profile2.png"
            width={180}
            height={180}
            alt="profile"
          />
        </figure>
        <article className="flex flex-col gap-7 text-center">
          {/* info  */}
          <h1 className="font-poppins text-text text-[2.4rem] font-bold">{Profile.NAME}</h1>
          <div className="flex flex-col gap-1">
            <p className="text-accent font-mono text-[1.3rem]">{Profile.INTRO}</p>
            <p className="text-accent font-mono text-[1.3rem]">{Profile.ATTR_1}</p>
            <p className="text-accent font-mono text-[1.3rem]">{Profile.ATTR_2}</p>
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
          {Profile.SOCIALS.map((social) => (
            <Link key={social.id} href={social.href} target="blank">
              <figure className="bg-tertiary shadow-custom flex size-16 items-center justify-center rounded-2xl">
                <Image alt={social.src.split('/')[1]} height={20} width={20} src={social.src} />
              </figure>
            </Link>
          ))}
        </address>
        <div className="text-accent text-center">
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
