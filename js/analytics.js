/* =========================================================
   MAVIA CONSULTORIA - Vercel Web Analytics
   Arquivo: js/analytics.js
   ========================================================= */

import { inject } from './vendor/analytics.mjs';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect development vs production
  debug: false, // Set to true for debugging
});
