
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

var bLazy = new Blazy({
  selector: 'img'
});

// $menu.classList.add('active')
// $menu.classList.remove('active')