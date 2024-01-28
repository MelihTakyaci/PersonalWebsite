window.addEventListener('scroll', function() {
    var scrollPercentage = window.scrollY / this.window.innerHeight * 2 ;
    var opacity = 1 - scrollPercentage;

    opacity = Math.min(1, Math.max(0, opacity));

    document.getElementById('Mint').style.opacity = opacity;
  });