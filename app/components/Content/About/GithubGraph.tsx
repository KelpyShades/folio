import { Suspense } from 'react';
import GithubCalendar from 'react-github-calendar';
import { currentYear } from '@/app/global/DateClient';

const GithubGraph = () => {
  return (
    <section
      id="github-activity"
      aria-label="GitHub contribution activity"
      className="bg-secondary hover:border-primary dark:hover:border-accent border-borders text-text flex w-full justify-center rounded-4xl border-2 px-5 py-5 opacity-90 transition-colors duration-700 ease-in-out"
    >
      <Suspense>
        <GithubCalendar
          theme={{
            dark: ['#161b22', '#333333', '#555555', '#a3a3a3', '#ffffff'],
            light: ['#161b22', '#333333', '#555555', '#a3a3a3', '#ffffff'],
          }}
          year={currentYear}
          username="KelpyShades"
        />
      </Suspense>
    </section>
  );
};

export default GithubGraph;
