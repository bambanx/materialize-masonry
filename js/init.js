(function($){
$(function(){

    var $container = $('#masonry-grid');
    $container.imagesLoaded( function() {
        $container.masonry(
        	{
      columnWidth: '.col',
      itemSelector: '.col',
    });
    });
    
    
});
})(jQuery); // end of jQuery name space

