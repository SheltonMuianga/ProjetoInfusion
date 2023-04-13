(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no_js')
    $body.classList.add('js')
    
    var menu= new Menu({
        container:'.header_nav',
        toggleBtn:'.header_btnMenu',
        widthEnabled: 1025
    })
    
    var carouselImgs = new Carousel({
        container: '.slide_image .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    var carouselQuotes = new Carousel({
        container: '.quote_slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()