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
  
  function showThanks() {
    $('#contact').addClass('flipped');
    $('#contact-thanks').click(function() {
      $('#contact').removeClass('flipped');
      $('form input[type=text], textarea').val('');
    });
    $('p.submit').removeClass('disabled');
  }
  
  $('form').submit(function(e) {
    e.preventDefault();
    if ($('#message').val() && $('#name').val() && $('#email').val()) {
      $('p.submit').addClass('disabled');
      
      if ($.browser.msie && window.XDomainRequest) {
        // Use Microsoft XDR
        xdr = new XDomainRequest();        
        xdr.open("get", $(this).attr('action') + '?' + $(this).serialize());
        xdr.send();
        showThanks();
      } else {
        $.ajax({
          url: $(this).attr('action'),
          type: $(this).attr('method'),
          data: $(this).serialize(),
          success: function() {},
          error: function() {},
          complete: function() { showThanks(); }
        });
      }
    } else {
      alert('Please fill in all the fields.');
    }
  });
});