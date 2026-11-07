/** Shared, dependency-free loading indicator with a static reduced-motion state. */
export default function BrandLoader({ label = 'Loading...' }: { label?: string }) {
	return (
		<div className='brand-loader' role='status' aria-live='polite'>
			<div className='brand-loader-orbit' aria-hidden='true'>
				<span className='brand-loader-ring' />
				<span className='brand-loader-core'>HV</span>
			</div>
			<span className='brand-loader-label'>{label}</span>
		</div>
	);
}
