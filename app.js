
var consulta = window.matchMedia('(max-width:800px)');
var $burguerButton = document.getElementById("burger-button");
var $menu = document.getElementById("menu");

consulta.addListener(mediaQuery);

function mediaQuery(){
    if (consulta.matches) {
        console.log('media cumple')
        $burguerButton.addEventListener('touchstart', toogleMenu);
    }
    else {
        $burguerButton.removeEventListener('touchstart', toogleMenu);
        console.log('00');
    }
}

mediaQuery();

function toogleMenu(e) {
    $menu.classList.toggle('active');
    $burguerButton.classList.toggle('icon-close');

}
function showMenu(e) {
  $menu.classList.add("active");
  $burguerButton.classList.add("icon-close");
}
function hideMenu(e) {
  $menu.classList.remove("active");
  $burguerButton.classList.remove("icon-close");
}

var bLazy = new Blazy({
  selector: 'img'
});

var $body= document.body;
var hammertime = new Hammer($body);
hammertime.on("swipeleft", function(ev) {
  hideMenu();
    console.log(ev);
});

hammertime.on("swiperight", function(ev) {
  showMenu();
    console.log(ev);
});
// $menu.classList.add('active')
// $menu.classList.remove('active')