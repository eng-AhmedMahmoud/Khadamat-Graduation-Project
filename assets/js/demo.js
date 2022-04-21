document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#412529',
    lineColor: '#412529'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight  + 'px';
}, false);
