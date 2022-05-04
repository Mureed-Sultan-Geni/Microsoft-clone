import getCompt from 'setjs/template/component.js';

export default {
  templates: ['site/notify'],
  comp: function () {
    let page = getCompt('site/notify');
    return page;
  },
};
