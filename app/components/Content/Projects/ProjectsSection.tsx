import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { createClient } from '@/utils/supabase/server';
import ProjectCard from './ProjectCard';
// import ProjectCard from './ProjectCard';
import Skeleton from './Skeleton';

const ProjectsSection = async () => {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="flex min-h-dvh w-full flex-col items-center gap-10 p-4"
    >
      <header className="flex flex-col gap-4 self-start px-4">
        <h2 className="text-text text-4xl font-bold sm:text-5xl lg:text-4xl">Projects</h2>
        <div className="bg-accent h-[0.5rem] w-[10rem] rounded-2xl" aria-hidden="true"></div>
      </header>
      <Suspense
        fallback={
          <div
            className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            aria-busy="true"
          >
            <Skeleton />
          </div>
        }
      >
        <ProjectsSectionContent />
      </Suspense>
    </section>
  );
};

export default ProjectsSection;

async function ProjectsSectionContent() {
  const cookieStore = await cookies();

  const supabase = createClient(cookieStore);

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_featured', true);
    
  if (error) {
    console.error(error);
  }

  if (!projects || projects.length === 0) {
    return (
      <output className="text-text/60 block text-center text-lg">
        No projects available at this time.
      </output>
    );
  }

  return (
    <ul className="grid w-full list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.id} className="list-none">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

// {
//   id: 'e7e204ec-76ef-4126-9ce6-e04033a33ff4',
//   name: 'Class-io ',
//   description: 'A class attendance management app for universities',
//   hero_image: 'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/hero.png',
//   gallery: [
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/rsm0lzfwzt.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/k15tgoorxr.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/k7pkzytlbt.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/580elyhji8.png'
//   ],
//   url: '',
//   github: '',
//   technologies: [ 'Flutter', 'Dart', ' Supabase' ],
//   team: 'Solo',
//   role: 'FullStack',
//   start_date: '2025-11-15T00:00:00',
//   end_date: '2025-11-21T00:00:00',
//   status: 'completed',
//   category: 'crossPlatform',
//   is_featured: true,
//   key_features: [ 'FgaceId', ' Geolocation', ' QrCode', ' Excel' ],
//   impact: 'huge!'
// },
