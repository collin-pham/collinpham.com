//Set Landing Page Height.
if (screen.availHeight + 'px' >= screen.availWidth + 'px') {
  document.getElementById('blog-landing-page').style.height = screen.availHeight + 'px'
} else {
  document.getElementById('blog-landing-page').style.height = screen.availWidth + 'px'
}
