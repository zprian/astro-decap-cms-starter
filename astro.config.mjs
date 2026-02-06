import { defineConfig } from 'astro/config';
import decapCms from 'astro-decap-cms'; // O la integración que ya tenías

export default defineConfig({
  site: 'https://yoga-akaal.netlify.app',
  integrations: [decapCms()],
});
