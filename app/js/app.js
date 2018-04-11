var progressForms = {

  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function() {
    this.$form = $('.form');
    this.$formCard = $('.form__card');
    this.$nextFormBtn = this.$formCard.find('.js-next-form');
    this.fadeOutClassname = 'u-anim--fade-out';
  },
  animateForms: function($thisElem) {
    var $thisCard = $thisElem.parent();
    $thisCard.next().addClass('is-active');
    $thisCard.removeClass('is-active');
  },
  bindEvents: function() {
    this.$nextFormBtn.click(function() {
      progressForms.animateForms($(this));
    });
  }

};

progressForms.init();
