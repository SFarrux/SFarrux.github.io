$(function () {
    $('.menu').click(function(){
        $('.header__top').slideToggle()
        $('.header__title').slideToggle()
        $('.fas').toggleClass('hide')
        $('.logo').toggleClass('blur')
    })

    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop()
        if(scroll >= 450){
            $('.top').slideDown(300)
        }
        else{
            $('.top').slideUp(300)
        }
    })
    $('.top').click(function(){
        $('html, body').animate({scrollTop: 0}, 0)
        
    })
    



});