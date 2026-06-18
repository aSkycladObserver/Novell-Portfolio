import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://romanetreluyer.com',
<<<<<<< HEAD
=======
	base: '/',
>>>>>>> a946cf20ffddcdfccfd93caf814d9b3743edd843

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [icon()],
});
