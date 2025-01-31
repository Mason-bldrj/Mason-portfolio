import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Pinecone Academy',
		description: '',
		location: 'Ulaanbaatar,Mongolia',
		logo: Assets.Unknown,
		name: '',
		organization: '',
		period: { from: new Date(2023, 9, 17), to: new Date(2024, 8, 27) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['javascript','typescript','nextjs','MERN']
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];

export const title = 'Education';
