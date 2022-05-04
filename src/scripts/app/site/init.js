import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
// import home from './pages/home.js';
import youtube from './pages/youtube.js';
// import video from './pages/video.js';
// import notify from './pages/notify';

export default function() {
  addPage('', youtube);
  addPaths('site', [
    'video',
    'notify'
  ]);
}
