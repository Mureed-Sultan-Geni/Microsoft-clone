import getCompt from 'setjs/template/component.js';

export default {
  templates: ['site/office'],
  comp: function () {
    let page = getCompt('site/office', {});
    return page;
  },
};
