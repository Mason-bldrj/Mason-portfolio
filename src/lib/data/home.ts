import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Mason';

export const name = 'Baterdene';

export const lastName = 'Baldorj';

export const description =
	'Innovative Electrical Engineer with expertise in power systems and thermal energy distribution. Proficient in full-stack web development (React, Node.js, SQL) and passionate about optimizing technical workflows. Adept at bridging engineering principles with IT solutions to drive efficiency. Seeking roles in IT infrastructure, software development, or energy systems management.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Mason-bldrj' },
	// {
	// 	platform: Platform.Linkedin,
	// 	link: 'https://www.linkedin.com/'
	// },
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'baterdene.bldrj@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/profile.php?id=100015700140083'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs',  'ts','nextjs');
// 'sass', 'svelte',