var getElement = document.getElementById('test');
function fadeOut(elem, speed){
if(!elem.style.opacity){
    elem.style.opacity = 1;
}
var desvanecer = setInterval(function(){
    elem.style.opacity -= .02;
    if(elem.style.opacity < 0){
        clearInterval(desvanecer);
    }
}, speed / 50);
}
fadeOut(getElement, 500);
