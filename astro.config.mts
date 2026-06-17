import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://rockem.github.io',
  base: 'astro-photography-portfolio',

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [icon()],
});