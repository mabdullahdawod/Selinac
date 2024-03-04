  //reponsive nav 
  $(document).ready(function() {
    $('#inner-menu-link').mouseover(function() {
      $('.inner-menu').toggleClass('visible');
      $('#inner-menu-link').toggleClass('close');
    });
  });

  //reponsive nav 
  $(document).ready(function() {
    $('.toggler').click(function() {
      $('.navigation-bar').toggleClass('visible');
      $('.toggler').toggleClass('close');
    });
  });

 

