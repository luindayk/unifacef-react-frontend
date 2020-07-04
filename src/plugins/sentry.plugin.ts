import { configs } from '../configs';
import { configureScope, init } from '@sentry/browser';
(() => {

  // Desativa o plugin em localhost
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  const { sentry } = configs;
  if (!sentry) {
    return;
  }

  init({ dsn: sentry });
  configureScope(scope => {
  });

})();