$(document).ready(function() {
  $('body > header a').pjax('#page', {fragment: '#page', error: function() { alert('error'); }});
});