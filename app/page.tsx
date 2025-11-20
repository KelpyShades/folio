import Content from './components/Content/Content';
import ProjectsSection from './components/Content/Projects/ProjectsSection';
import ProfileCard from './components/ProfileCard/ProfileCard';

export default function Home() {
  return (
    <>
      <section
        aria-label="Main content"
        className="flex items-center justify-center gap-10 py-6 max-lg:flex-col lg:items-start lg:justify-center"
      >
        <ProfileCard />
        <Content />
      </section>
      <ProjectsSection />
    </>
  );
}
