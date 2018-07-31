(function($){
  $(function() {
    $('#nav-icon1').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);