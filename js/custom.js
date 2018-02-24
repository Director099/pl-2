'use strict';

$(document).ready( function () {
  $('#table_id').DataTable( {
    "language": {
        "url": '//cdn.datatables.net/plug-ins/1.10.16/i18n/Russian.json'
      }
  });
});

$(document).ready(function(){
  $('#phone').mask('+7 (000) 000-00-00');
});

$(document).ready(function(){

  var toggleMenu = document.querySelector('.navbar-toggler');

  toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('navbar-toggler--close');
  })
});
