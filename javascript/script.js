//Unslider banner

$(document).ready(function(){
	$('.banner').unslider({
			speed:1000,
            delay:2000,
			keys:true,
			dots:true,

	});
});

//Animated scrolling to anchored links

$(document).ready(function(){
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});

$(document).ready(function(){
    $('nav li:first-child').click(function() {
        $('html, body').scrollTo('.brands', 1000, {offset:-60});

});

    $('nav li:nth-child(2)').click(function() {
        $('html, body').scrollTo('.promo', 1000,{offset:-60});
});

    $('nav li:nth-child(3)').click(function() {
        $('html, body').scrollTo('.social-media', 1000,{offset:-60});
});

    $('nav li:nth-child(4)').click(function() {
        $('html, body').scrollTo('.education', 1000,{offset:-60});
});

    $('nav li:nth-child(5)').click(function() {
        $('html, body').scrollTo('.opportunities', 1000,{offset:-60});

});

    $('nav li:last-child, .button').click(function() {
        $('html, body').scrollTo('#contact-page-form', 1000,{offset:-60});

});

});

//switching active states between navigation links

$(document).ready(function(){
    $('li a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
    });
});

/*
$(document).ready(function(){
    var section1Height = $('.brands').height();
    var section2Height = $('.promo').height();
    var section3Height = $('.social-media').height();

    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if(winTop >= section1Height && winTop <= section2Height){
            $('.brands').addClass("active").not().removeClass("active");
        } else if(winTop >= section2Height && winTop <= section3Height){
            $('.promo').addClass("active").not().removeClass("active");
        } else if(winTop >= section3Height){
            $('.social-media').addClass("active").not().removeClass("active");
        }
    });
});
*/














