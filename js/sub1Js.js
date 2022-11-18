$(document).ready(function(){

    $(".gnb > li >ul").hide();

    $(".gnb h2").mouseover(function(){
    	$("header").stop().animate({height:320}, 300);
    	$(".gnb > li > ul").fadeIn();
    });

    $("header").mouseleave(function(){
    	$("header").stop().animate({height:123}, 300);
    	$(".gnb > li > ul").fadeOut("fast");
    }); //header


    $(".prev").click(function(){
    	$(".slide li:last").prependTo(".slide");
    	$(".slide").css({marginLeft:-1400}).animate({marginLeft:0});
    });

    $(".next").click(function(){
    	$(".slide").animate({marginLeft:-1400}, 800, function(){
    		$(".slide li:first").appendTo(".slide");
    		$(".slide").css({marginLeft:0});
    	})
    });


    $(".goup").click(function(){
    	$("html, body").animate({
    		scrollTop : 0
    	}, 800);
    	return false;
    });


    $(window).scroll(function(){
        var scTop = $(this).scrollTop();

        if( scTop > 800) {
            $(".goup").animate({"right":"30px"}, 1200)
        }
        
    });
    

}); //ready