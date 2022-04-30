// import getComp from 'setjs/template/component.js';
// import todo from 'app/site/examples/todo.js';

// export default {
//   templates: ['site/home'],
//   preload: function({success, error}) {
//     $.get('/templates/todo.html', function(todoTxt) {
//       success(todoTxt);
//    }, 'text').fail(error);
//   },
//   comp: function(opts, todoHtml) {
//     var pageComp = getComp('site/home');
//     pageComp.$todo.append(todo.comp().$root);
//     pageComp.$todoHtml[0].innerText = todoHtml;
//     return pageComp;
//   }
// };
import getComp from 'setjs/template/component.js';

export default {
  templates: ['site/home'],
  comp: function () {
    let comp = getComp('site/home', {
      header1: 'Design for life today-and tomorrow',
      description1:
        'The next generation games. your goals. friends and family. Windows 11 was made to bring you close to everything you love',
      imgSource1: '/images/NewSite/RWLSJa.webp',
      buttonTxt1: 'See if your PC is ready',
      // Second
      header2: 'Microsoft Edge',
      description2:
        'World class performance with more privacy, more productivity and more value while your brower',
      imgSource2: '/images/NewSite/RE4rzE2.webp',
      buttonTxt2: 'Download Now',
      // Third
      header3: 'Microsoft One Drive',
      description3:
        'Save your files and photos to OneDrive and access them from any devices , anywhere',
      imgSource3: '/images/NewSite/RE3hD2k.webp',
      buttonTxt3: 'Learn more',
      // fourth
      header4: 'One Note',
      description4: 'Organized your nots and your life.',
      imgSource4: '/images/NewSite/REGxSz.webp',
      buttonTxt4: 'Learn more',
    });
    return comp;
  },
};
