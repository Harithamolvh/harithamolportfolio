import BrandLoader from '@/components/BrandLoader';

/** Show the brand while a route is pending; Next.js removes it when content is ready. */
export default function Loading() {
	return <div className='brand-loading-page'><BrandLoader label='Loading portfolio...' /></div>;
}
