/* youtube */
var youtubeConfig = {
  player : [
    {
      id : 'movie_01',
      vId: 'Cd3-Bz3y_Hs'
    },
    {
      id : 'movie_02',
      vId: 'cEIS4XWCK0g'
    },
    {
      id : 'movie_03',
      vId: 'R8ADBpBkWQU'
    },
    {
      id : 'movie_04',
      vId: '_utkkmN6C4M'
    },
    {
      id : 'movie_05',
      vId: '8gXd8UI9kHk'
    },
    {
      id : 'movie_06',
      vId: 'PUrHijnkGhM'
    },
    {
      id : 'movie_07',
      vId: 'cup6FQTqMoA'
    },
    {
      id : 'movie_08',
      vId: '6YwU9A-KL08'
    },
    {
      id : 'movie_09',
      vId: 'GBTKb4mYemI'
    },
    {
      id : 'movie_10',
      vId: 'Z31Kc94WjyI'
    },
    {
      id : 'movie_11',
      vId: 'R8Y2M1WqaT0'
    }
  ]
};
var youtubePlayer = {}

function onYouTubeIframeAPIReady() {
  $.each(youtubeConfig.player, function(index) {
    youtubePlayer[this.id] = new YT.Player(this.id, {
      height: '360',
      width: '640',
      videoId: this.vId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        "rel":0,
      }
    });
  });
}

function onPlayerReady(event) {
  // event.target.mute();
}

var done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //  setTimeout(stopVideo, 6000);
  //  done = true;
  // }
}
function stopVideo(id) {
  youtubePlayer[id].stopVideo();
}
function playVideo(id) {
  youtubePlayer[id].playVideo();
}
$(function(){

  $('#modal_movie').on('show.bs.modal', function (event) {
    var wH = $(window).height();
    var button = $(event.relatedTarget);
    var margin_left = button.data('margin_left');
    var modal = $(this);
    modal.find('#movie_portfolio').css('margin-left', margin_left);
  });
  $('#modal_web-print').on('show.bs.modal', function (event) {
    var wH = $(window).height();
    var button = $(event.relatedTarget);
    var margin_left = button.data('margin_left');
    var modal = $(this);
    modal.find('#print_portfolio').css('margin-left', margin_left);
  });

  $('.js-trigger-movie').each(function(index) {
    var self = this,
      target = $($(self).attr('href')),
      closeBtn = target.find('.close');
    $(self).click(function (e) {
      var anc = $(this).attr('href');
      setTimeout(function() {
      playVideo($(self).data('controll-id'));
      }, 500);
      e.preventDefault();
    });
    $('.close').click(function () {
      stopVideo($(self).data('controll-id'));
    });
    // $('#modal_movie').on('show.bs.modal', function (event) {
    //   var wH = $(window).height();
    //   var button = $(event.relatedTarget)
    //   var margin_left = button.data('margin_left');
    //   var modal = $(this);
    //   modal.find('#portfolio').css('margin-left', margin_left);
    // });
  });

  var controller = $.superscrollorama();
  controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
  controller.addTween('#fade-it-works', TweenMax.from( $('#fade-it-works'), .5, {css:{opacity: 0}}));
  controller.addTween('#fade-it-elements', TweenMax.from( $('#fade-it-elements'), .5, {css:{opacity: 0}}));
  controller.addTween('#fade-it-thought', TweenMax.from( $('#fade-it-thought'), .5, {css:{opacity: 0}}));
  
});
