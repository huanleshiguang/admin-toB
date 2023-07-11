import { App } from 'vue';

import { setupPermissionDirective } from './permission';

export function setupGlobalDirective(app: App) {
  app.use(setupPermissionDirective);
}
