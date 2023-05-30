(function() {
  var $menuToggler = $("[data-responsive-toggle]");

  $menuToggler.on("click", function(event) {
    var $el = $(event.currentTarget);
    var navId = $el.data("responsiveToggle");
    var $nav = $("#" + navId);

    $nav.toggleClass("opened");
  });
})();

(function() {
  var font = new FontFaceObserver("museo_sans_cyrl");

  font.load().then(
    function() {
      document.documentElement.className += " font-loaded";
    },
    function() {
      console.log("Font is not available");
    }
  );
})();

(function() {
  var $carousel = $(".js-carousel");

  $carousel.each(function(idx, el) {
    var $el = $(el);
    var $buttons = $el.siblings(".js-carousel-buttons");
    var $prevArrow = $buttons.children(".js-carousel-prev-button");
    var $nextArrow = $buttons.children(".js-carousel-next-button");

    $el.slick({
      prevArrow: $prevArrow,
      nextArrow: $nextArrow
    });
  });
})();

(function() {
  var $modalButton = $(".js-modal-button");
  var $modalClose = $(".js-modal-close");
  var $modal = $(".js-modal");
  var $modalContainer = $(".js-modal-container");
  var $body = $("html,body");
  var $window = $(window);
  var LOCKED_CLASS = "locked";

  $modalButton.on("click", showModal);
  $modalContainer.on("click", preventClose);
  $modalClose.on("click", hideModal);
  $modal.on("click", hideModal);

  function preventClose(event) {
    event.stopPropagation();
  }

  function checkKeycode(event) {
    if (event.keyCode == 27) {
      hideModal(event);
    }
  }

  function showModal(event) {
    event.preventDefault();
    $modal.show();
    $body.addClass(LOCKED_CLASS);

    $window.on("keydown", checkKeycode);
  }

  function hideModal(event) {
    $modal.hide();
    $body.removeClass(LOCKED_CLASS);

    $window.off("keydown", checkKeycode);

    event.preventDefault();
  }
})();
