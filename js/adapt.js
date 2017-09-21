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

// Got to a random project or blog post.
function gamble () {
  var anchors = [
    './index.html#Local%20Technologies',
    './index.html#Eddard',
    './index.html#Rex',
    './index.html#Sentiment%20Analysis',
    './index.html#Computer%20Network',
    './blog.html#me'
  ]

  location.replace(anchors[Math.floor(Math.random() * anchors.length)])
  closeNav()
}
