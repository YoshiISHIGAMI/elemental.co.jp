
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

if((userAgent.indexOf("msie") != -1 && (appVersion.indexOf("msie 8.") != -1 || appVersion.indexOf("msie 9.") != -1)) || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0){

  $(function () {
    $('#btn_play-m1-1 a').attr({href:'http://youtu.be/fem5RriWjeQ',target:'_blank'});
  });

} else {

/** 
 * youtube
 */
var youtubeConfig = {
  player : [
    {
            id : 'm0',
            vId: 'fem5RriWjeQ'
        },
    {
      id : 'm1-1',
      vId: 'fem5RriWjeQ'
    }
  ]
};
var youtubePlayer = {}

function onYouTubeIframeAPIReady() {
  $.each(youtubeConfig.player, function(index) {
    youtubePlayer[this.id] = new YT.Player(this.id, {
    height: '480',
    width: '853',
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

}

var done = false;
function onPlayerStateChange(event) {

}
function stopVideo(id) {
  youtubePlayer[id].stopVideo();
}
function playVideo(id) {
  youtubePlayer[id].playVideo();
}

/** 
 * movie
 */
$(window).load(function () {

  var target = $('.overlay'),
      closeBtn = target.find('.overlay-close'),
      trigger = $('#trigger-overlay');
  trigger.click(function (e) {
    $(target).addClass('open');
    playVideo('m0');
    e.preventDefault();
  });
  closeBtn.click(function () {
    $(target).removeClass('open');
    stopVideo('m0');
  });

  if(!$.cookie('movie')){
    setTimeout(function() {
      $.cookie('movie', 'true');
      $(target).addClass('open');
    setTimeout(function() {
      playVideo('m0');
    }, 500);
    }, 2500);
  }

});

$(function () {
  $('.js-trigger-movie').each(function(index) {
    var self = this,
      target = $($(self).attr('href')),
      closeBtn = target.find('.overlay-close');
    $(self).click(function (e) {
      var anc = $(this).attr('href');
      $(anc).addClass('open');
      setTimeout(function() {
      playVideo($(self).data('controll-id'));
      }, 500);
      e.preventDefault();
    });
    closeBtn.click(function () {
      $(target).removeClass('open');
      stopVideo($(self).data('controll-id'));
    });
  });
});/*End Movie Player*/

}
