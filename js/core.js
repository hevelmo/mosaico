$(document).ready(function(){
      /*
      */
      $('.mosaic-bg-img-holder .mosaic-gallery-img').addClass('fade-In');
      $('.mosaic-bg-img-holder .mosaic-gallery-img').each(function () {
            var imgSrc = $(this).children('img').attr('src');
            var styles = {
                  'background': 'url("' + imgSrc + '")',
                  'background-color': '#F9FBFF',
                  'background-position': '50% 50%',
                  'background-size': '90% 90%',
                  'background-repeat': 'no-repeat'
            };
            $(this).css(styles);
            $(this).children('img').hide();
      });
});
