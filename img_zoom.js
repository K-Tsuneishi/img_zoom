// Vanilla JSでの書き始め
document.addEventListener('DOMContentLoaded', function() {
    // /* ...ここに処理を書く... */
    // $('.contents').each(function(i,elem){
    //     let bgContentsPOS = $(elem).offset().top;
    //     window,addEventListener('scroll load resize', function(){
    //         const timing = 100;
    //         const windowHeight = $(window).height();
    //         const scrollTop = $(window).scrollTop();        
    //         if(scrollTop >= bgContentsPOS - windowHeight + timing ){
    //             $(elem).classList.add('showClass');
    //         }else{
    //             $(elem).classList.remove('showClass');
    //         }
    //     })
    // });

    window.addEventListener('scroll',function(){
        const header = document.getElementsByClassName('header')[0];
        header.classList.toggle("scroll",window.scrollY > 450);
    });

    function adjustMain(){
        let elem = document.getElementById('main');
        let rect = Math.abs(elem.getBoundingClientRect().y);
        document.querySelectorAll('.flowerImg').forEach((elem,i) =>  {
            elem.style.width = (rect / 10) + 33 + 'vw';
        })
    }

    window.addEventListener('scroll', function(){
        adjustMain();
    });
    window.addEventListener('load', function(){
        adjustMain();
    });

    const bgImg = document.getElementById('bgImage');
    bgImg.add
});
