import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import { GalleryView } from './GalleryView';

type Project = {
  id: string;
  name: string;
  description: string;
  hero_image: string;
  gallery: string[];
  url: string;
  github: string;
  technologies: string[];
  team: string;
  role: string;
  start_date: string;
  end_date: string;
  status: string;
  category: string;
  is_featured: boolean;
  key_features: string[];
  impact: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="bg-secondary animate-fadeUp2 hover:border-primary dark:hover:border-accent border-borders text-text h-project-card-clamp flex w-full flex-col justify-between gap-10 rounded-4xl border-2 p-4 pb-8 opacity-0 transition-colors duration-700 ease-in-out">
      <figure className="relative h-[40%] w-full overflow-hidden rounded-3xl">
        <Image
          src={project.hero_image}
          alt={`${project.name} project preview`}
          fill
          className="object-cover"
        />
      </figure>
      <div className="flex flex-col gap-6 px-6">
        <header className="flex items-center justify-between">
          <h3 className="text-4xl text-white">{project.name}</h3>
          <Badge
            className="text-lg"
            variant="default"
            aria-label={`Project status: ${project.status}`}
          >
            {project.status}
          </Badge>
        </header>
        <div className="flex flex-col gap-1">
          <time
            dateTime={`${project.start_date}/${project.end_date}`}
            className="text-accent text-md"
          >
            {formatDate(project.start_date)} - {formatDate(project.end_date)}
          </time>
          <p className="text-accent text-md">
            {project.team} - {project.role}
          </p>
        </div>
        <p className="text-xl text-white">{project.description}</p>
        <ul className="flex list-none flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology} className="list-none">
              <Chip label={technology} />
            </li>
          ))}
        </ul>
        <section
          aria-label="Key features"
          className="bg-tertiary scrollbar-hide flex max-h-[40%] w-full flex-col gap-2 overflow-y-auto rounded-2xl p-4"
        >
          <ul className="flex flex-col gap-2">
            {project.key_features.map((feature) => (
              <li key={feature} className="text-text text-md">
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section
          aria-label="Project impact"
          className="scrollbar-hide flex w-full flex-col gap-2 rounded-2xl p-4"
        >
          <p className="line-clamp-2">{project.impact}</p>
        </section>
      </div>
      <nav
        aria-label="Project links"
        className="flex flex-wrap justify-evenly gap-2 justify-self-end px-6"
      >
        {project.github && (
          <LinkButton
            href={project.github}
            label="GitHub"
            icon={<FaGithub className="size-8 text-white" aria-hidden="true" />}
            ariaLabel={`View ${project.name} on GitHub`}
          />
        )}
        {project.gallery.length > 0 && (
          <GalleryView gallery={project.gallery} projectName={project.name} />
        )}
        {project.url && (
          <LinkButton
            href={project.url}
            label="Live"
            icon={<FaLink className="size-8 text-white" aria-hidden="true" />}
            ariaLabel={`Visit live ${project.name} project`}
          />
        )}
      </nav>
    </article>
  );
};

export default ProjectCard;

function LinkButton({
  href,
  label,
  icon,
  ariaLabel,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || `Visit ${label}`}
      className="dark:bg-borders bg-primary-light text-text-light dark:text-text shadow-custom flex h-[3.2rem] w-fit items-center justify-center gap-2 rounded-2xl px-10 py-2 font-mono text-[1.1rem] transition-all duration-700 hover:scale-105 sm:text-[1.4rem] lg:text-[1.2rem]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span
      className="bg-borders text-text shadow-custom flex h-[2.5rem] w-fit cursor-default flex-wrap items-center justify-center rounded-md px-5 py-1 font-mono text-[1rem] transition-all duration-300 ease-in-out hover:scale-105 sm:text-[1.4rem] lg:text-[1rem]"
      title={`Technology: ${label}`}
    >
      {label}
    </span>
  );
}

// {

//
//   gallery: [
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/rsm0lzfwzt.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/k15tgoorxr.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/k7pkzytlbt.png',
//     'https://lbvbtthjyvijwkiyaptu.supabase.co/storage/v1/object/public/projects/e7e204ec-76ef-4126-9ce6-e04033a33ff4/gallery/580elyhji8.png'
//   ],
//   url: '',
//   github: '',
//   category: 'crossPlatform',
//   impact: 'huge!'
// },
