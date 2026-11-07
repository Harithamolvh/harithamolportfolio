import { ImageResponse } from 'next/og';

export const alt = 'Harithamol V H — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Render a readable, opaque share preview in the portfolio's lavender palette. */
export default function OpenGraphImage() {
	return new ImageResponse(
		<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px', background: 'linear-gradient(135deg, #f6f1ff, #c5baf0)', color: '#2b2468' }}>
			<div style={{ display: 'flex', fontSize: 30, marginBottom: 48 }}>{'<Haritha/>'}</div>
			<div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>Harithamol V H</div>
			<div style={{ display: 'flex', fontSize: 40, marginTop: 18 }}>Full Stack Developer</div>
			<div style={{ display: 'flex', fontSize: 24, marginTop: 56 }}>Thoughtful web applications &amp; digital experiences.</div>
			<div style={{ display: 'flex', fontSize: 22, marginTop: 20 }}>harithamol.com</div>
		</div>,
		size,
	);
}
