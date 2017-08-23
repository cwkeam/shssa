var bodyWidth = 0;
  $(document).ready(function(){
  $('.logo-container').css('left','0');
  $('.contain-links').css('right','0');
  bodyWidth = $('body').width()
});
$(document).resize(function(){
  bodyWidth = $('body').width()
});

var imagePoint = 1;
setInterval(function(){
  if(imagePoint == 1){
    toSecondImageGallery();
  }
  if(imagePoint == 2){
    toThirdImageGallery();
  }
  if(imagePoint == 3){
    toFirstImageGallery();
  }
  imagePoint++;
  if(imagePoint == 4){
    imagePoint = 1;
  }
},5000);
var once = 0;

// setInterval(function(){
//   if(once == 0){
//     $('.firstimage').css('right','-100%');
//   }else{
//     $('.firstimage').css('right','0');
//   }
//   once++;
//   if(once == 2){
//     once = 0;
//   }
// },2000);
function toSecondImageGallery(){
  $('.secondimage').css('transition','all 2s ease-in-out');
  $('.secondimage').css('right','0');

  $('.firstimage').css('right','100%');

  $('.thirdimage').css('transition','all 0s ease-in-out');
  $('.thirdimage').css('right','-100%');
}
function toThirdImageGallery(){
  $('.thirdimage').css('transition','all 2s ease-in-out');
  $('.thirdimage').css('right','0');
  $('.secondimage').css('right','100%');

  $('.firstimage').css('transition','all 0s ease-in-out');
  $('.firstimage').css('right','-100%');
}
function toFirstImageGallery(){
  $('.firstimage').css('transition','all 2s ease-in-out');
  $('.firstimage').css('right','0');
  $('.thirdimage').css('right','100%');

  $('.secondimage').css('transition','all 0s ease-in-out');
  $('.secondimage').css('right','-100%');
}
(function() {
  bodyWidth = $('body').width()

  var logoContainerWidth = $('.logo-container').width();

var lineMaker = new LineMaker({
position: 'absolute',
lines: [
  {top: 50, left: 67, width: '10vw', height: 3, color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'LeftRight' }},
  {top: 50, left: 67, width: 3, height: '70vh', color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'BottomTop' }},


  {top: 20, left: 0, width: '28vw', height: 3, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'LeftRight' }},
  {top: 20, left: '28vw', width: 3, height: 40, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'TopBottom' }},

  {top: 200, left: 0, width: '50vw', height: 3, color: '#a6c4ed', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'LeftRight' }},

  {top: 0, left: '70vw', width: 4, height: '17vh', color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 800, direction: 'TopBottom' }},
  {top: '17vh', left: bodyWidth*0.7-46, width: 50, height: 4, color: 'rgba(255,255,255,0.7)', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1800, direction: 'RightLeft' }},
]
});
setTimeout(function() {
lineMaker.animateLinesIn();
}, 250);
})();
