;(function () {
  // 0.默认隐藏返回顶部
$('.gotop').hide()


$(window).scroll(function() {

  let top =$('html').scrollTop()
  
  if(top>200){
    $('.gotop')
    .stop()
    .fadeIn()
  } else {
    $('.gotop')
    .stop()
    .fadeOut()
  }
})
  // 2.点击返回顶部
  $('.gotop').click(function(){
    $('html').animate({
      scrollTop:0
    })
  })

  // 意见反馈功能
  // 3.点击展开
$('.suggest').click(function(){
  $('.sugform').slideDown()
})
$('.close').click(function(){
  $('.sugform').slideUp()
})

  // 自动轮播
 function autoPlay(){
  let $last = $('.wblist').last()
  let $wbdesc=$('.wbdesc')
  $wbdesc.prepend($last)
  let height=$last.outerHeight(true)
  console.log(height)
  $wbdesc.css('top',-height)
  $wbdesc.delay(2000).animate({top:0},function(){
    autoPlay()
  })
 }
 autoPlay()
})()
