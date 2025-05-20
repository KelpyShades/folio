import React from 'react';

const TechStack = (props: { label: string  }) => {
  return (
    <div className="bg-borders text-text hover:scale-110 cursor-default transition-all duration-300 ease-in-out shadow-custom flex h-[3rem] w-fit items-center justify-center rounded-md px-5 py-1 font-mono text-[1.2rem] lg:text-[1.2rem] sm:text-[1.8rem]">
      {props.label}
    </div>
  );
};

export default TechStack;
