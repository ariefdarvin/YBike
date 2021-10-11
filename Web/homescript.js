$(function(){
    $('.next').click(function(){
        let currentImage = $('.current')
        let nextImage = currentImage.next()

        if(nextImage.length != 0){
            currentImage.removeClass('current').css('z-index', -10)
            nextImage.addClass('current').css('z-index', 10)
        }
        else{
            let firstImage = currentImage.prevAll().last()
            currentImage.removeClass('current').css('z-index', -10)
            firstImage.addClass('current').css('z-index', 10)
        }
    })

    $('.prev').click(function(){
        let currentImage = $('.current')
        let prevImage = currentImage.prev()
        if(prevImage.length != 0){
            currentImage.removeClass('current').css('z-index', -10)
            prevImage.addClass('current').css('z-index', 10)
        }
        else{
            let lastImage = currentImage.nextAll().last()
            currentImage.removeClass('current').css('z-index', -10)
            lastImage.addClass('current').css('z-index', 10)
        }
    })
})