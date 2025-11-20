const Skeleton = () => {
  return (
    <article
      className="bg-secondary animate-fadeUp2 hover:border-primary dark:hover:border-accent border-borders text-text h-project-card-clamp flex w-full flex-col justify-between gap-10 rounded-4xl border-2 p-4 pb-8 opacity-0 transition-colors duration-700 ease-in-out"
      aria-busy="true"
      aria-label="Loading project card"
    >
      <div className="relative h-[40%] w-full overflow-hidden rounded-3xl" aria-hidden="true">
        <div className="bg-borders h-full w-full animate-pulse rounded-3xl" />
      </div>
      <div className="flex flex-col gap-6 px-6">
        <div className="flex items-center justify-between" aria-hidden="true">
          <div className="bg-borders h-9 w-36 animate-pulse rounded-md" />
          <div className="bg-borders h-7 w-20 animate-pulse rounded-2xl" />
        </div>
        <div className="bg-borders h-6 w-48 animate-pulse rounded-md" aria-hidden="true" />
        <div className="bg-borders h-6 w-32 animate-pulse rounded-md" aria-hidden="true" />
        <div className="bg-borders h-14 w-full animate-pulse rounded" aria-hidden="true" />
        <div className="flex flex-wrap gap-2" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-borders h-6 w-20 animate-pulse rounded-md" />
          ))}
        </div>
        <div
          className="bg-tertiary scrollbar-hide flex max-h-[40%] w-full flex-col gap-2 overflow-y-auto rounded-2xl p-4"
          aria-hidden="true"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-borders h-5 w-3/4 animate-pulse rounded" />
          ))}
        </div>
        <div
          className="scrollbar-hide flex w-full flex-col gap-2 overflow-y-auto rounded-2xl p-4"
          aria-hidden="true"
        >
          <div className="bg-borders h-6 w-full animate-pulse rounded" />
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-2 justify-self-end px-6" aria-hidden="true">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-borders h-10 w-28 animate-pulse rounded-2xl" />
        ))}
      </div>
    </article>
  );
};

export default Skeleton;
