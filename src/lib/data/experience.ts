import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Full stack developer',
		company: 'ViraSoft Solution LLC',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Ulaanbaatar , Mongolia',
		period: { from: new Date("08.27.2024") },
		skills: getSkills('ts', 'js'),
		name: 'Full stack developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: 'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

export const title = 'Experience';
