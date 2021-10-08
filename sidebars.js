$(document).ready(function() {
  /* global bootstrap: false */
  (function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()

  $('.items-sidebar').click(function() {
    // if (e.which == 13) {
    //   $(this).blur();
    //   sendChat()
    // }
    // if($('.items-sidebar .active') !== null){
    //   $('.items-sidebar .active').removeClass('active');
    //   $(this).addClass('active')
    // }
    
    // $(this).focus();
    // $(this).val('')
    
    // if (document.querySelectorAll('.items-sidebar.active') !== null) {
    //   document.querySelectorAll('.items-sidebar.active').classList.removeClass('active');
    // }
    // $(this).addClass('active')

  });
})