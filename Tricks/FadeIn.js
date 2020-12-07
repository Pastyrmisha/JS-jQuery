//var1

function fadeIn(elem, speed){
    if(elem.style){
        elem.style.opacity= '0';
    }
    window.fadetimer= setInterval(function(){
        elem.style.opacity= +(elem.style.opacity)+.02;
        if(elem.style.opacity> 1){
            clearInterval(fadetimer);
        }
    },
    speed);
}



//var2
// It's works!

function fadeIn(el, time) {
    el.style.opacity = 0;
  
    let last = +new Date();

    let tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  };
  
  
  fadeIn(newLay, 300);
