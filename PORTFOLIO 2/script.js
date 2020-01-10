$(function(){



    
    $('.header-wrapper').vegas({

        overlay: '/js/vegas/dist/overlays/03.png',
        transition: 'burn', 
        transitionDuration:5000,
        delay: 4000,
        animation: 'random',
        animationDuration: 6000,
        slides: [
        
        { src: 'http://drive.google.com/uc?export=view&id=1MNNcYpzZshn0FN8Co6yGtd2DdPsULMug' },
        { src: 'http://drive.google.com/uc?export=view&id=1NY3olwNegvWk2ZMvdq_5HHDOv097fNoF' },
        { src: 'http://drive.google.com/uc?export=view&id=1c8q7qyw0lMyIT3ltXE91xEQpuTVcDQT0' },
        { src: 'http://drive.google.com/uc?export=view&id=1qw1QDIBbixvTn72RqqCms4CorggM8xnK' },
        { src: 'http://drive.google.com/uc?export=view&id=1X25yDo7geH45DPQtOv997TNVcZm36X9M' },
        ]
       
    });

    $(".header-bg").ripples({
        resolution: 200,
        dropRadius: 40,
        perturbance: 0.05,
        interactive: true,
        crossOrigin: ""
    });
        
    


    
});