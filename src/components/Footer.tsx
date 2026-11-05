import { Sparkles } from 'lucide-react';

/** A quiet closing line inside a thin glass bar. */
export default function Footer() {
	return <footer className='portfolio-footer glass-inset'><span>THANK YOU FOR VISITING</span><Sparkles size={14} strokeWidth={1} /><small>© {new Date().getFullYear()} Harithamol V H</small></footer>;
}
