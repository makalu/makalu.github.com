---
---

$window = $(window)
$body = $('body')
$sections = $('section')

if $body.attr('id') == 'home'
  windowHeight = $(window).height()
  offset = (windowHeight / 3.33)
  direction = 'down'
  lastScrollTop = 0

  $(window).on 'resize', (e) ->
    windowHeight = $(window).height()
    offset = (windowHeight / 2.5)

  $(window).on 'scroll', (e) ->
    scrollTop = $window.scrollTop()
    direction = if lastScrollTop < scrollTop then 'down' else 'up'

    $sections.each (i, section) =>
      className = $(section).attr('class').split(' ')[0]

      if scrollTop > ($(section).position().top - (if direction == 'down' then offset else offset / 2))
        $body.addClass("#{className}-active")
      else
        $body.removeClass("#{className}-active")

      if scrollTop + windowHeight > ($(section).position().top + windowHeight - (offset / 1.5))
        $body.addClass("#{className}-visible")

    lastScrollTop = scrollTop

scrollTo = (element, to, duration) ->
  return if duration < 0
  difference = to - element.scrollTop
  perTick = difference / duration * 10

  setTimeout(->
    element.scrollTop = element.scrollTop + perTick
    return if element.scrollTop == to
    scrollTo(element, to, duration - 10)
  , 10)

$('.contact-link').on 'click', (e) =>
  e.preventDefault()
  scrollTo(document.body, $('.contact').position().top, 333)
