$( document ).ready(function() {
$('.webdesign, .hosting, .webdevelopment').fadeOut(0);

var service = new Waypoint({
  element: document.getElementById('service'),
  handler: function() {
   $(".webdesign").fadeIn(600);
   $(".hosting").delay(300).fadeIn(600);
   $(".webdevelopment").delay(600).fadeIn(600);
  },
  offset: '60%'
});

});