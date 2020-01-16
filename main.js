//variabile che incluse gli <a> presenti nella classe hamburger-menu
var hamburgerMenu = $('.hamburger-menu a');
//evento:click
//funzione in cui nascondo la var hamburgerMenu con modalità slow, ma si può mettere anche valore in ms!
hamburgerMenu.click(
  function () {
    $(".hamburger-menu").hide('slow');
  }
);

//creo una variabile nascondi e all'evento click dichiarando nascondi= true si manifesta l'evento show con modalità slow
var nascondi;
$('a').click(
 function() {
  if (nascondi = true) {
    $(".hamburger-menu").show('slow');
    }
  }
);
