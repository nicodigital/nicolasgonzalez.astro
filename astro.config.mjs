import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
// import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind(), icon()],
  output: 'hybrid',
  // Site y Base son para colocar un Build en producción - En este caso también configurar HOME_URL en .env
  // Aqui va el dominio
  // site: 'https://nicolook.com/astro',
  // site: 'http://localhost:4321',

  // Aqui va el folder, en caso de root -> /
  // base: '/astro',
  // base: '/',

  prefetch: true,
  adapter: vercel(),
});