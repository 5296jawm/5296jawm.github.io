$(function(){
      




     


            //  スキルホバー時の変化エフェクト
         
        
         $('.skill-1').hover(function(){
       
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-1').css('display','none');
            $('.icon-txt-1').css('display','block');
            
        },function(){
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-1').css('display','inline-block');
            $('.icon-txt-1').css('display','none');
        });
    
    
        $('.skill-2').hover(function(){
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-2').css('display','none');
            $('.icon-txt-2').css('display','block');
            
        },function(){
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-2').css('display','inline-block');
            $('.icon-txt-2').css('display','none');
        });
    
    
    
        $('.skill-3').hover(function(){
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-3').css('display','none');
            $('.icon-txt-3').css('display','block');
            
    
        },function(){
            $(this).toggleClass('skill-name').toggleClass('skill-box');
            $('.icon-3').css('display','block');
            $('.icon-txt-3').css('display','none');
        });
    
        
        
        // 各スキルクリック時のエフェクト
        // icon-txt-1,txt-code 
        $('.icon-txt-1').click(function(){
            $('.txt-code,.close-txt-1').css('display','block');
        });
        $('.close-txt-1').click(function(){
            $('.txt-code,.close-txt-1').css('display','none');
        })
    
        $('.icon-txt-2').click(function(){
            $('.txt-res,.close-txt-2').css('display','block');
        });
        $('.close-txt-2').click(function(){
            $('.txt-res,.close-txt-2').css('display','none');
        })
    
        $('.icon-txt-3').click(function(){
            $('.txt-des,.close-txt-3').css('display','block');
        });
        $('.close-txt-3').click(function(){
            $('.txt-des,.close-txt-3').css('display','none');
        })

       

    




});


