$(document).ready(function(){

    var main_offset = $('#pre-main-wrapper').offset().top/2 - 50;
    var sec_main_offset = $("#main-wrapper").offset().top/2 + 200;

	$(window).on('scroll', function(){
		
        if($(window).scrollTop() > main_offset && $('.box_left').hasClass('hidden')){
        	 
        	$('.box_left').removeClass('hidden');

        	$("#pre-main h2").fadeIn(800);
        	$("#pre-main h2").css('margin-top', '40px');
            $("#pre-main img").slideDown(800);
            
        	$(".box_left").fadeIn(500, "linear");

            $(".pre_box_left").animate({
               left: "118px"
              
            }, 1000);

            $(".profile_image img").animate({
                width: "60px",
                height: "60px"
            }, 1000);

        	$(".profile_image").animate({
                left: "-275px"
        	}, 1000);

           
           
        	
          
        	$("#p_left").animate({
                fontSize: "15px"
        	
            },1000);

            $(".fa-star").animate({
                fontSize: "15px"
            
            },1000);

            $("#p_right").animate({
                fontSize: "15px"
            
            },1000);
            
            



            $(".box_right").fadeIn(300, "linear");
    	    $('.pre_box_right').animate({
                left: "950px"  
    	    }, 1000);

            $(".box_left p").fadeIn(300, "linear");
            
        }

        if($(window).scrollTop() > sec_main_offset && $('.container').hasClass('hidden')){
            
            $('.container').removeClass('hidden');
            $('#what_we_offer_tittle').show().animate({
                fontSize: '40px',
            },500).animate({
                fontSize: '35px',
            },100);

            
            setTimeout(function(){

                $("#container_first").fadeIn('slow', 'swing', function(){

                    $(this).css('transition', 'all .2s ease-in-out');
                });

            }, 300);    
            
            
            
           
            setTimeout(function(){

                $("#container_second").fadeIn('slow', 'swing', function(){
                    $(this).css('transition', 'all .2s ease-in-out');
                });

            }, 500);

            setTimeout(function(){
                $("#container_third").fadeIn('slow', 'swing', function(){
                    $(this).css('transition', 'all .2s ease-in-out');
                });
            }, 700);
            

        }
	});


	var headerOffSet = $('#banner div').offset().top;
	$('#header-wrapper').wrap('<div class="header-wrapper-placeholder"></div>');
	 
	$('.header-wrapper-placeholder').height($('#header-wrapper').outerHeight());
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
	    if(scrollPos >= headerOffSet){
			
			$('#header-wrapper').addClass('fixed');
			 
				
		}else{
			
			$('#header-wrapper').removeClass('fixed');
			 
		}

	 });
	
});
