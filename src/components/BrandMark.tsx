import Image from 'next/image';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';

/** Display the approved bold italic code wordmark with a star above the i. */
export default function BrandMark() {
	return <Image className='brand-mark' src={route('brandLogo')} width={2172} height={724} sizes='120px' alt='Harithamol VH' preload />;
}
