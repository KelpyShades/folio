import React from 'react';

const TechStack = (props: { label: string }) => {
  return (
    <div className="bg-borders shadow-custom flex h-[3rem] w-fit items-center justify-center rounded-md px-5 py-1 font-mono text-[1.2rem]">
      {props.label}
    </div>
  );
};

export default TechStack;
