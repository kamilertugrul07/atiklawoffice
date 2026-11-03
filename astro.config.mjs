// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atiklawoffice.com',
  // "Yazılar" bölümü "Makaleler" oldu; yayındaki eski adresler yenisine yönlenir
  redirects: {
    '/tr/yazilar': '/tr/makaleler/',
    '/tr/yazilar/ticari-uyusmazliklarda-zorunlu-arabuluculuk': '/tr/makaleler/ticari-uyusmazliklarda-zorunlu-arabuluculuk/',
  },
  i18n: {
    locales: ['tr', 'en', 'ru'],
    defaultLocale: 'tr',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR', en: 'en-US', ru: 'ru-RU' },
      },
    }),
  ],
});
