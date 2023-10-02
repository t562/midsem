$(document).ready(function()
{
   $("#SlideShow1").slideshow(
   {
      interval: 4000,
      type: 'sequence',
      effect: 'slide',
      direction: 'right',
      pagination: false,
      easing: 'easeOutQuad',
      effectlength: 2000
   });
});
