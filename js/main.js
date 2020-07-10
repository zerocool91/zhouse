$(document).ready(function() {
  $("#language-toggler").click(function() {
    $("#language-menu").toggleClass("show");
  });

  $("#hero-slider").owlCarousel({
    loop:true,
    dots:true,
    items:1,
    nav:true
  });

  $("#apartaments-slider").owlCarousel({
    loop:true,
    dots:true,
    items:1,
    responsive: {
      768: {
        nav:true
      }
    }
  });

  $("#areas-slider").owlCarousel({
    loop:true,
    dots:true,
    items: 1
  });

  $("#show-common-modal").on("click", function(){
    $("#modal-common-areas").modal();
    $("#modal-areas-slider").owlCarousel({
      loop: true,
      dots: true,
      items: 1
    });
  });

  function prev(){
    $("#instagram-slider").find(".owl-item").removeClass("last-items");
    $("#instagram-slider").find(".owl-item").removeClass("before-last-items");
  }
  function next() {
    $("#instagram-slider .owl-item.active").eq(-1).addClass("last-items");
    $("#instagram-slider .owl-item:not(.active)").addClass("last-items");

    $("#instagram-slider .owl-item.active").eq(-2).addClass("before-last-items");
    $("#instagram-slider .owl-item.active").eq(0).addClass("before-last-items");
  }

  let onInitialize = function() {
    let original = $("#instagram-slider .owl-item.center img").attr("src");
    $(".inst-large").empty().html('<img src="'+original+'"></img>');
  }

  $("#instagram-slider").owlCarousel({
    loop:true,
    center: true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    onInitialized: onInitialize,
    responsive: {
      0: {
        items: 5,
        margin: 10
      },
      1023: {
        items: 8,
        margin:30,
        onTranslate: prev,
        onTranslated: next
      }
    }
  });

  $("#instagram-slider").on('click', 'img', function(e) {
    e.preventDefault();
    let original = $(this).attr('src');
    $(".inst-large").empty().html('<img src="'+original+'"></img>');
  });

  $(".contact-button").on("click", function() {
    $("#contact-form").modal({
      showClose: false
    });
  });

  let eraseInput = function(element) {
    let defaultValue = element.val();
    element.on("focus", function() {
      if( $(this).val() === defaultValue ) {
        $(this).val('');
      };
    });
    element.on("blur", function() {
      if( !$(this).val() ) {
        $(this).val(defaultValue);
      };
    });
  };

  eraseInput( $("#name") );
  eraseInput( $("#surname") );
});
