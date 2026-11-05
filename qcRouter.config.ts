import { defineRouter } from '@qubitcodes/qcrouter';
import { webRoutes } from '@/routes/web';
import { apiRoutes } from '@/routes/api';

/** Register the app's pure route lists with the package-owned URL resolver. */
export const portfolioRouter = defineRouter({ web: { routes: webRoutes }, api: { prefix: '/api', routes: apiRoutes } });

