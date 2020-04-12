function imageJustSize() {
  var mainVisual = document.getElementById('main');
  // var mainVisual2 = document.getElementsByTagName('body');
  var winH = window.innerHeight;
  mainVisual.style.height = winH + 'px';
  // mainVisual2.style.height = winH + 'px';
}

imageJustSize();

window.addEventListener('resize', imageJustSize);
