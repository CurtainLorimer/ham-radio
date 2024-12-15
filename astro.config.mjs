import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ham.curtainlorimer.com',
  integrations: [
    db(),
    preact(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    })
  ],
  // These were specific redirects we needed for our podcast, if you do not have any routes to redirect, you can safely remove this.
});
