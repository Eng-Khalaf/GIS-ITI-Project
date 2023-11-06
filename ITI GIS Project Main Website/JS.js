var dynamicTextDiv = document.querySelector('.container');

function resizeDynamicTextDiv() {
  var screenWidth = window.innerWidth;
  dynamicTextDiv.style.width = screenWidth + 'px';
}

window.addEventListener('resize', resizeDynamicTextDiv);

resizeDynamicTextDiv();
