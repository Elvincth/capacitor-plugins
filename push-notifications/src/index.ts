import { registerPlugin } from '@capacitor/core';

import type { PushNotificationsPlugin } from './definitions';

const PushNotifications = registerPlugin<PushNotificationsPlugin>(
  'PushNotifications',
  {
    web: () => import('./web').then(m => new m.PushNotificationsWeb()),
  },
);

export { PushNotifications };
