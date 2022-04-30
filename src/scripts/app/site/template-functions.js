import {addAction} from 'core/acts-funcs.js';

addAction('switchCode', function({$el, arg}) {
  $el.siblings().removeClass('active');
  $el.add($el.siblings('.' + arg)).addClass('active');
});
addAction('Word', function() {
  document.getElementById('Excel').classList.remove('showImg');
  document.getElementById('Power').classList.remove('showImg');
  document.getElementById('Team').classList.remove('showImg');
  document.getElementById('Outlook').classList.remove('showImg');
  document.getElementById('Word').classList.add('showImg');
});
addAction('Excel', function() {
  document.getElementById('Word').classList.remove('showImg');
  document.getElementById('Power').classList.remove('showImg');
  document.getElementById('Team').classList.remove('showImg');
  document.getElementById('Outlook').classList.remove('showImg');
  document.getElementById('Excel').classList.add('showImg');
});
addAction('POwer', function() {
  document.getElementById('Word').classList.remove('showImg');
  document.getElementById('Excel').classList.remove('showImg');
  document.getElementById('Team').classList.remove('showImg');
  document.getElementById('Outlook').classList.remove('showImg');
  document.getElementById('Power').classList.add('showImg');
});
addAction('Team', function() {
  document.getElementById('Word').classList.remove('showImg');
  document.getElementById('Excel').classList.remove('showImg');
  document.getElementById('Power').classList.remove('showImg');  
  document.getElementById('Outlook').classList.remove('showImg');
  document.getElementById('Team').classList.add('showImg');
});
addAction('Outlook', function() {
  document.getElementById('Word').classList.remove('showImg');
  document.getElementById('Excel').classList.remove('showImg');
  document.getElementById('Power').classList.add('showImg');  
  document.getElementById('Outlook').classList.add('showImg');

});
