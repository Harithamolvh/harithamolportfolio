/** Presentation copy derived from the existing portfolio; no new client metrics. */
export const PROCESS_STEPS = [
	{ title: 'Discover', text: 'Understand the people, the product, and the problem worth solving.' },
	{ title: 'Architect', text: 'Shape clear interfaces, thoughtful data models, and a resilient foundation.' },
	{ title: 'Build', text: 'Turn the plan into reliable, carefully crafted web experiences.' },
	{ title: 'Deliver', text: 'Test the details, ship with confidence, and keep improving.' },
] as const;

/** Existing experience and delivery figures, presented as count-up milestones. */
export const PORTFOLIO_STATS = [
	{ value: 5, suffix: '+', label: 'Years of experience' },
	{ value: 15, suffix: '+', label: 'Applications delivered' },
	{ value: 4, suffix: '', label: 'Engineering teams' },
	{ value: 100, suffix: '%', label: 'Client blockers resolved' },
] as const;

