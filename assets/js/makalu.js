$(document).ready(function() {
  $('input[placeholder],textarea[placeholder]').placeholder();
  
  $("a[href*='http']").not("[rel='external'], [rel*=internal], [href*='" + document.location.hostname + "'], .zoom").each(function() {
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
  
  Zoom.init();
});

var Zoom = {
  left: null,
  top: null,
  width: null,
  height: null,
  
  init: function() {
    $('#zoomOverlay, #zoomContainer').click(function(e) {
      e.preventDefault();
      Zoom.close();
    });
    
    $('a.zoom').live('click', function(e) {
      e.preventDefault();
      if ($(this).attr('href') == '#') return;
      Zoom.open($(this).find('img'), $(this).attr('href'));
    });
  },
  open: function(thumb, src) {
    Zoom.left = thumb.offset().left;
    Zoom.top = thumb.offset().top;
    Zoom.width = thumb.width();
    Zoom.height = thumb.height();
  
    $('#zoomContainer').css({
      left: Zoom.left,
      top: Zoom.top - $(window).scrollTop(),
      width: thumb.parents('.zoom').width(),
      height: thumb.parents('.zoom').height()
    }).show();
  
    $('<img />')
      .attr({'src': src})
      .appendTo('#zoomLoader')
      .load(function() {
        var width = $(this).width();
        var height = $(this).height();
        var ratio = height / width;
        if (width > ($(window).width() - 40)) {
          width = $(window).width() - 40;
          height = width * ratio;
        }
        if (height > ($(window).height() - 40)) {
          height = $(window).height() - 40;
          width = height / ratio;
        }
        $('#zoomOverlay').fadeIn(250);
        $('#zoomContainer').animate({
          left: ($(window).width() / 2) - (width / 2),
          top: ($(window).height() / 2) - (height / 2),
          width: width,
          height: height
        }, {
          duration: 250,
          easing: 'easeOutQuad',
          complete: function() {
            $(this).addClass('zoomed');
          }
        });
        $('#zoomImage').append(this);
      });
  },
  close: function() {
    $('#zoomOverlay').hide();
    $('#zoomContainer').removeClass('zoomed').animate({
      left: Zoom.left,
      top: Zoom.top - $(window).scrollTop(),
      width: Zoom.width,
      height: Zoom.height
    }, {
      duration: 250,
      easing: 'easeInQuad',
      complete: function() {
        $('#zoomContainer').hide();
        $('#zoomImage').html('');
      }
    });
  }
}