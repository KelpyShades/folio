import { ImageResponse } from 'next/og';

export const alt = 'How I Work — Operating Philosophy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
      }}
    >
      <div style={{ fontSize: 28, color: '#111', fontFamily: 'sans-serif' }}>
        Kelvin Appiah | Portfolio
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: '900',
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
        My operational framework for engineering, team leadership, and product strategy.
      </div>
      <div style={{ fontSize: 36, color: '#222' }}>How I Work</div>
    </div>,
    { ...size }
  );
}
