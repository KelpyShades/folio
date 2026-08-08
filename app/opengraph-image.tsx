import { ImageResponse } from 'next/og';
import { getPoppinsFonts } from '@/lib/og-fonts';

export const alt = 'Kelvin Appiah — Software Engineer & Product Architect';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        Software Engineer, Product Architect & Technical Lead
      </div>
      <div style={{ fontSize: 36, color: '#222' }}>Kelvin Appiah</div>
    </div>,
    {
      ...size,
      fonts,
    }
  );
}
