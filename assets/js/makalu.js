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
  
  $('form').submit(function(e) {
    e.preventDefault();
    if ($('#message').val() && $('#name').val() && $('#email').val()) {
      $('p.submit').addClass('disabled');
      $.ajax($(this).attr('action'), {
        type: $(this).attr('method'),
        data: $(this).serialize(),
        success: function() {},
        error: function() { /*alert('An error occurred when sending your message. Please try again.');*/ },
        complete: function() {
          $('#contact').addClass('flipped');
          $('#contact-thanks').click(function() {
            $('#contact').removeClass('flipped');
            $('form input[type=text], textarea').val('');
          });
          $('p.submit').removeClass('disabled');
        }
      });
    } else {
      alert('Please fill in all the fields.');
    }
  });
});