/**
 * DeviceMock 1.0.0
 * Licensed under MIT
 */
;(function($) {
   $.fn.easyAudioEffects = function(options) {
      var opts  = $.extend(true, {}, $.fn.easyAudioEffects.defaults, options);
      var $this = $(this);
      var myAudio;
      var polyTmpAudio    = [];
      var polyTmpAudioKey = 0;
      var mySourceSrc     = '';
      var soundSource = {};
      soundSource = {
         ogg : opts.ogg,
         mp3 : opts.mp3
      }
      try {
         myAudio = new Audio("");
         if( myAudio.canPlayType ){
            var canPlayOgg = ("" != myAudio.canPlayType("audio/ogg"));
            var canPlayMp3 = ("" != myAudio.canPlayType("audio/mpeg"));
            if(canPlayOgg && soundSource.ogg != null ){
               // support ogg
               mySourceSrc = soundSource.ogg;
               myAudio.src = mySourceSrc;
            }else if(canPlayMp3 && soundSource.mp3 != null ){
               // support mp3
               mySourceSrc = soundSource.mp3;
               myAudio.src = mySourceSrc;
            } else if( soundSource.ogg == null ||  soundSource.mp3 == null  ) {
               throw "Please specify an audio source";
            }else{
               throw "Also ogg and mp3 also does not support";
            }
         }else{
            throw "canPlayType method does not exist";
         }
      } catch (e) {
         console.log(e);
         myAudio = null;
      }
      function playSound (){
         switch(opts.playType) {
            case 'loop' :
               myAudio.currentTime = 0;
               myAudio.loop = true;
               myAudio.play();
               break;
            case 'gate' :
               myAudio.currentTime = 0;
               myAudio.play();
               break;
            case 'oneShotMonophonic' :
               myAudio.currentTime = 0;
               myAudio.play();
               break;
            case 'oneShotPolyphonic' :
            default :
               if(mySourceSrc != ''){
                  polyTmpAudio[polyTmpAudioKey] = new Audio(mySourceSrc);
                  polyTmpAudio[polyTmpAudioKey].play();
                  //clear memory
                  polyTmpAudio[polyTmpAudioKey].addEventListener('ended', function() {
                     polyTmpAudio[polyTmpAudioKey] = null;
                  });
                  polyTmpAudioKey++;
               }
               break;
         }
      }
      function stopSound (){
         switch(opts.playType) {
            case 'loop' :
               myAudio.pause();
               break;
            case 'gate' :
               myAudio.pause();
               break;
            case 'oneShotMonophonic' :
               break;
            case 'oneShotPolyphonic' :
            default :
               break;
         }
      }
      if(myAudio != null){
         switch( opts.eventType ){
            case 'click' :
               $this.on('mousedown', function(){
                  playSound();
               }).on('mouseup', function(){
                  stopSound();
               });
               break;

            case 'hover' :
            default :
               $this.on({
                  mouseenter : function(){
                     playSound();
                  },
                  mouseleave : function(){
                     stopSound();
                  }
               });
               break;
         }
      }
   };
   $.fn.easyAudioEffects.defaults = {
      ogg : null,
      mp3 : null,
      eventType : 'hover' , // [ hover / click ]
      playType : 'oneShotPolyphonic' // [ oneShotPolyphonic / oneShotMonophonic / gate / loop ]
   };
})(jQuery);