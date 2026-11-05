import { BarChart3, Boxes, CircleDollarSign, LayoutDashboard, Package, Search } from 'lucide-react';

interface ProjectPreviewProps { title: string; index: number; category: string; }

/** Explicitly illustrative UI artwork; it is not presented as a production screenshot. */
export default function ProjectPreview({ title, index, category }: ProjectPreviewProps) {
	const commerce = index % 3 === 0;
	return (
		<div role='img' className={'project-preview preview-' + index % 3} aria-label={'Illustrative interface preview for ' + title}>
			<div className='preview-browser'><span /><span /><span /><i>{title.toLowerCase().replaceAll(' ', '')}.app</i><Search size={8} /></div>
			<div className='preview-app'>
				<div className='preview-sidebar'><div className='preview-logo'>{title.slice(0, 1)}</div><LayoutDashboard /><Boxes /><CircleDollarSign /><Package /><span /></div>
				<div className='preview-content'>
					<div className='preview-title'><span>{title}<small>{commerce ? 'Your store, beautifully connected.' : 'Everything in one place.'}</small></span><div className='preview-avatar' /></div>
					{commerce ? <div className='preview-products'>{[0, 1, 2].map((item) => <div key={item}><div className={'product-object object-' + item} /><span /><small /></div>)}</div> : <><div className='preview-metrics'><div><small>Overview</small><strong>24.8k</strong></div><div><small>Activity</small><strong>+18.6%</strong></div><div><small>Progress</small><strong>92%</strong></div></div><div className='preview-chart'><div><BarChart3 size={11} /> Activity overview</div><div className='chart-bars'>{[35, 52, 44, 68, 49, 76, 66, 88, 75, 95].map((height, i) => <i key={i} style={{ height: height + '%' }} />)}</div></div></>}
					<div className='preview-bottom'><span>{category}</span><span>•••</span></div>
				</div>
			</div>
			<span className='preview-disclaimer'>ILLUSTRATIVE INTERFACE</span>
		</div>
	);
}
