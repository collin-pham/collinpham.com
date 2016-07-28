/* exported openNav, closeNav, smoothScroll, gamble */

// Mobile Nav Bar Functions
function openNav () {
  document.getElementById('SideNav').style.width = '40%'
} 
function closeNav () {
  document.getElementById('SideNav').style.width = '0%'
}
// Make sure nav is closed on load
closeNav()

// Make a pretty scrolling function.
function smoothScroll (id) {
  var target = document.querySelector('a[id=' + id + ']').getBoundingClientRect().top
  var speed = setInterval(function() { 
    target = document.querySelector('a[id=' + id + ']').getBoundingClientRect().top
    
    if (target > 8) {
      window.scrollBy(0, 7)
    } else {
      window.scrollBy(0, 1)
    }

    if (target <= 0) {
      clearInterval(speed)
      target = 0
    }
  }, 1)
}

// Got to a random project or blog post.
function gamble () {
  var anchors = [
    './index.html#Eddard',
    './index.html#Rex',
    './index.html#Sentiment%20Analysis',
    './index.html#Computer%20Network',
    './blog.html#me'
  ]

  location.replace(anchors[Math.floor(Math.random() * anchors.length)])
  closeNav()
}
