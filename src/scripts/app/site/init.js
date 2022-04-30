import { addPage, addPaths } from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
// import office from './pages/office.js';

export default function () {
  addPage('', home);
  addPaths('site', [
    'office',
    'docs',
    'docs/getting-started',
    'docs/templates',
    'docs/pages',
    'docs/architecture',
    'docs/samples',
    'docs/questions',
  ]);
}
