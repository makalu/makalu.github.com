---
---

$(window).on 'scroll', (e) ->
  if document.body.scrollTop > ($('section.clients').position().top - 400)
  	$(document.body).addClass('alt-1')
  else
  	$(document.body).removeClass('alt-1')

  if document.body.scrollTop > ($('section.services').position().top - 400)
  	$(document.body).addClass('alt-2')
  else
  	$(document.body).removeClass('alt-2')

  if document.body.scrollTop > ($('section.about').position().top - 400)
  	$(document.body).addClass('alt-3')
  else
  	$(document.body).removeClass('alt-3')

  if document.body.scrollTop > ($('section.contact').position().top - 400)
  	$(document.body).addClass('alt-4')
  else
  	$(document.body).removeClass('alt-4')
