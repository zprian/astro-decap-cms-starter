import { defineConfig } from 'astro/config';
import DecapCMS from 'astro-decap-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    DecapCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'latest',
        },
        // Configure where our media assets are stored & served from
        media_folder: 'public/assets/blog',
        public_folder: '/assets/blog',
        // Configure the content collections
        collections: [
          {
            name: 'aceites',
            label: '🌿 Aceites Esenciales',
            label_singular: 'Aceites Esenciales',
            folder: 'src/pages/aceites',
            create: true,
            delete: true,
            fields: [
              { label: 'Nombre', name: 'title', widget: 'string' },
              { label: 'Imagen', name: 'image', widget: 'image' },
              { label: 'Beneficios', name: 'body', widget: 'markdown' },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ['/src/styles/blog.css'],
    }),
  ],
});
