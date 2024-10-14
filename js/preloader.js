$(window).on('load', function() {
    // Sayfa tamamen yüklendiğinde preloader'ı gizle
    $('#preloader').fadeOut('slow', function() {
      // Preloader gizlendikten sonra içerikleri göster
      $('.content').fadeIn('slow');
    });
  });
  