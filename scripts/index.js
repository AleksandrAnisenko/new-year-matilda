import { locationHashChanged } from './router.js';

window.addEventListener('hashchange', locationHashChanged);

locationHashChanged();