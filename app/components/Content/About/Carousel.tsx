'use client';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import figma from '@/app/assets/svgs/figma.svg';
import firebase from '@/app/assets/svgs/firebase.svg';
import github from '@/app/assets/svgs/github.svg';
import flutter from '@/app/assets/svgs/flutter.svg';
import mysql from '@/app/assets/svgs/mysql.svg';
import nextjs from '@/app/assets/svgs/nextjs.svg';
import react from '@/app/assets/svgs/reactjs.svg';
import tailwind from '@/app/assets/svgs/tailwind.svg';
import typescript from '@/app/assets/svgs/typescript.svg';
import zapier from '@/app/assets/svgs/zapier.svg';
import supabase from '@/app/assets/svgs/supabase.svg';
import scss from '@/app/assets/svgs/scss.svg';
import postgresql from '@/app/assets/svgs/postgresql.svg';
import n8n from '@/app/assets/svgs/n8n.svg';

const CarouselClient = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      className="w-full"
      orientation="horizontal"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={figma} className='text-accent' alt="figma" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={firebase} alt="firebase" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={github} alt="github" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={flutter} alt="flutter" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={mysql} alt="mysql" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={nextjs} alt="nextjs" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={react} alt="react" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={tailwind} alt="tailwind" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={typescript} alt="typescript" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={zapier} alt="zapier" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={supabase} alt="supabase" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={scss} alt="scss" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={postgresql} alt="postgresql" width={80} height={80} />
        </CarouselItem>
        <CarouselItem className='basis-1/5 md:basis-1/9'>
          <Image src={n8n} alt="n8n" width={80} height={80} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselClient;
