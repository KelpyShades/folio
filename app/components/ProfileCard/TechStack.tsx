const TechStack = (props: { label: string }) => {
  return (
    <span
      className="bg-borders text-text shadow-custom flex h-[3rem] w-fit cursor-default items-center justify-center rounded-md px-5 py-1 font-mono text-[1.2rem] transition-all duration-300 ease-in-out hover:scale-110 sm:text-[1.8rem] lg:text-[1.2rem]"
      title={`Technology: ${props.label}`}
    >
      {props.label}
    </span>
  );
};

export default TechStack;
