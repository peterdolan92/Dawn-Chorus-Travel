import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f4f1ea',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            width: '52%',
            height: '52%',
            borderRadius: '50%',
            background: '#2f5d3a',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
