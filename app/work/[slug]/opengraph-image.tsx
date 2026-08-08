import { ImageResponse } from 'next/og';
import { getSortedProjectsData } from '@/lib/projects';
import { getPoppinsFonts } from '@/lib/og-fonts';

export const alt = 'Project Case Study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const projects = getSortedProjectsData();
  const project = projects.find((p) => p.slug === slug);
  const fonts = await getPoppinsFonts();

  return new ImageResponse(
    <div
      style={{
        background: '#f8f4ee',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        fontFamily: 'Poppins',
      }}
    >
      <div style={{ fontSize: 28, color: '#111' }}>
        Kelvin Appiah | Portfolio
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: '#111',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {project ? `Building ${project.title}` : 'Case Study'}
      </div>
      <div style={{ fontSize: 36, color: '#222' }}>
        {project?.title ? `${project.title} Case Study` : 'Case Study'}
      </div>
    </div>,
    {
      ...size,
      fonts,
    }
  );
}
