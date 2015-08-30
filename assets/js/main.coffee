---
---

$('.accordion > a').on 'click', (e) ->
  e.preventDefault()
  $(this).parent().toggleClass('expanded')