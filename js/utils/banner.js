$(function() {
$('#slideshow img:gt(0)').hide();
setInterval(function() {
$('#slideshow :first-child')
.fadeOut(4000)
.next('img')
.fadeIn(4000)
.end()
.appendTo('#slideshow');
}, 7000);
});