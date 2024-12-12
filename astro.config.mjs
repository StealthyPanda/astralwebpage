import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🚀✨AstralDB',
			social: {
				github: 'https://github.com/StealthyPanda/astraldb',
				linkedin: 'https://www.linkedin.com/in/shaikmohammedtouseef/',
			},
			sidebar: [
				{
					label: 'Setup',
					autogenerate: { directory: 'setup' },
				},
				{
					label: 'Usage',
					items : [
						{ label: 'Starting', slug: 'usage/basic' },
						{ label: 'Concepts', slug: 'usage/concepts' },
						{ label: 'Clients & Endpoints', slug: 'usage/interaction' },
					]
				},
			],
		}),
	],
	site: 'https://stealthypanda.github.io',
	base: 'astralwebpage',
});
