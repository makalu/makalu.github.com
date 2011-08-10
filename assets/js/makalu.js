$(document).ready(function() {
  $('input[placeholder],textarea[placeholder]').placeholder();
  
  $("a[href*='http']").not("[rel='external'], [rel*=internal], [href*='" + document.location.hostname + "']").each(function() {
    $(this).attr('rel', 'external');
  })
  
  // Record click-throughs to external sites
  $("a[rel=external]").click(function(e) {
    e.preventDefault();
    window.open($(this).attr('href'), '_blank');
  });
});