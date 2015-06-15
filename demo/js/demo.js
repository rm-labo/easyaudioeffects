$(function() {
   //------
   SyntaxHighlighter.all();

   //------
   $('body').addClass('loaded');

   //------
   var ankerOffset = $('#nav').height();
   var pagetopID   = "#pagetop";
   var hashOffset;
   $('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').click(function(){
      if($(this).attr("href") == pagetopID){
         hashOffset  = 0 ;
      }else{
         var hash = this.hash;
         hashOffset = $(hash).offset().top ;
         hashOffset = hashOffset - ankerOffset;
      }
      $("html,body").stop().animate({
         scrollTop: hashOffset
      }, 1000 , "easeOutQuart");

      return false;
   });

   //------
   var HEADER_H = $('#main-visual').height();
   $(window).bind("resize load scroll",function(){
      scrollUi();
   });
   function scrollUi(){
      var scrolled = $(window).scrollTop();
      switch_pos = HEADER_H;
      if( switch_pos <= scrolled ){
         console.log('test');
         $('body').addClass('js-switch');
      } else {
         $('body').removeClass('js-switch');
      }
   }

   draw();

});

window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
    return function(callback){
        window.setTimeout(callback, 1000 / 36);
    };
})();

var canvas, ctx, time;
var circles = [];
var max = 80;
canvas = document.getElementById("c");
ctx = canvas.getContext("2d");

function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var circle = {
  x: 0,
  y: Math.sin(this.x*Math.PI/180),
}

var createCircles = function(){
  var randCol = "rgba("+getRandomInt(70, 150)+","+getRandomInt(70, 150)+","+getRandomInt(190, 200)+" ,.5)";
  var randA = getRandomArbitrary(10,210);
  var radius = getRandomInt(6,40);
  var x = getRandomInt(0, canvas.width);
   if(circles.length < max){
      circles.push({
         x: x,
         y: circle.y,
         r: radius,
         c: randCol,
         a: randA
      });
   }
}
var updateCircles = function(){
   var i = circles.length;
   while(i--){
      var c = circles[i];
      c.y = Math.sin(c.x*Math.PI/180);
      if(c.y >= 0){
         c.y = canvas.height/2 - (c.y-0) * c.a;
      }
      if(c.y < 0){
         c.y = canvas.height/2 + (0 - c.y) * c.a;
      }
      c.x++;
      if(c.x > canvas.width-30){
         circles.splice(i, 1);
      }
   }
}
var renderCircles = function(){
   var i = circles.length;
   while(i--){
      var c = circles[i];
      ctx.beginPath();
      ctx.arc(c.x,c.y, c.r, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = c.c;
      ctx.shadowBlur = 20;
      ctx.shadowColor = c.c;
      ctx.fill();
   }
}
function draw(){
   ctx.globalCompositeOperation = "xor";
   ctx.clearRect(0,0,canvas.width, canvas.height);
   ctx.globalCompositeOperation = 'lighter';
         //Call our super awesome animation method, because setTimeout is for suckers
         requestAnimFrame(draw);
         var now = new Date().getTime();
         //var dt = now - (time || now);
         time = now;
      createCircles();
      updateCircles();
      renderCircles();
}


