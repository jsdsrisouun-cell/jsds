import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export function GET() {
  return new ImageResponse(
    (
      <div style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
      }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontSize: 64, fontWeight: 700}}>AI Dream Team</div>
          <div style={{fontSize: 28, fontWeight: 400, marginTop: 12}}>Tools & Demos</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}