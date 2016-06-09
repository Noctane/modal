$(document).ready(function() {


(function() {
  //Fade in
  $('.card').hide();
  $('.card').each(function(i) {
    setTimeout(function() {
      $('.card').eq(i).fadeIn(800);
    }, 400 * i);
  })
})();

(function() {
  // Modules links
  $('.go').hide();
  $('.mod-link').hover(function() {
    $(this).find($('.go')).toggle().toggleClass('is_open');
  })
})();
  // scroll

(function() {
  $(window).scroll(function(){
      var scrollPosition = $(this).scrollTop();
      console.log(scrollPosition);

      if (scrollPosition > $('.steps').offset().top - $(window).height() /1.6) {
        $('.step-list li').each(function(i) {
            setTimeout(function() {
              $('.step').eq(i).addClass('is_showing');
              $('.caption').eq(i).addClass('is_visible');
            }, 200 * i);
        })
      }
  })
})();


  (function() {

    var myModal = {

      init: function() {
        this.cacheDom();
        this.render();
      },
      cacheDom: function() {
        this.$el = $('.j_modal-wrapper');
        this.$btn = this.$el.find('.modal-btn');
        this.$box = this.$btn.siblings('.j_modal');
        this.$close = this.$el.find('.j_modal-close');
      },
      trigger: function() {
        this.$btn.on('click', function(e) {
          e.preventDefault();
          $(this).siblings('.j_modal').fadeIn();
        })
      },
      close: function() {
        this.$close.on('click', function() {
          myModal.$box.fadeOut();
        })
      },
      render: function() {
        this.trigger();
        this.close();
      }
    };

    myModal.init();
  })()



});
