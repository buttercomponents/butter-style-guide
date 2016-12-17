$(document).ready(function(){
    function moveMarker() {
        var activeNav = $('.active a');
        var activewidth = $(activeNav).width();
        var activePadLeft = parseFloat($(activeNav).css('padding-left'));
        var activePadRight = parseFloat($(activeNav).css('padding-right'));
        var totalWidth = activewidth + activePadLeft + activePadRight;
        
        var precedingAnchorWidth = anchorWidthCounter();
        
        // TODO: 
        // Find the total widths of all of the anchors
        // to the left of the active anchor.

        var activeMarker = $('.active-marker');
        $(activeMarker).css('display','block');
        
        $(activeMarker).css('width', totalWidth);

        $(activeMarker).css('left', precedingAnchorWidth);
        
        // TODO: 
        // Using the calculated total widths of preceding anchors,
        // Set the left: css value to that number.
    }
    moveMarker();
    
    function anchorWidthCounter() {
        var anchorWidths = 0;
        var a;
        var aWidth;
        var aPadLeft;
        var aPadRight;
        var aTotalWidth;
        $('.app-menu li').each(function(index, elem) {
            var activeTest = $(elem).hasClass('active');
            if(activeTest) {
                // Break out of the each function.
                return false;
            }

            a = $(elem).find('a');
            aWidth = a.width();
            aPadLeft = parseFloat(a.css('padding-left'));
            aPadRight = parseFloat(a.css('padding-right'));
            aTotalWidth = aWidth + aPadLeft + aPadRight;

            anchorWidths = anchorWidths + aTotalWidth;
        });

        return anchorWidths;
    }
    
    $('.app-menu a').click(function(e) {
        e.preventDefault();
        $('.app-menu li').removeClass('active');
        $(this).parents('li').addClass('active');
        moveMarker();
    });
    
    //simulate loading the cover
    function runExample(){
        setTimeout(function () {
            if($('.card.loading').hasClass('content')){
             var complete_data = '<div class="card__inner"><div></div><div></div><div></div><div></div></div>';
                $('.card.loading > div').fadeOut( "slow", function() {
                    $(this).parent().append(complete_data).toggleClass('content');
                    $(this).remove();
                });
            } else {
                var complete_data = '<div class="item-content"><img src="https://s-media-cache-ak0.pinimg.com/564x/39/7e/fc/397efcbfcbceb38c177102a7d6ff8a61.jpg" alt="" /><div class="item-title">Title Movie</div><div class="item-year">2010</div></div>';
                $('.card.loading > div').fadeOut( "slow", function() {
                    $(this).parent().append(complete_data).toggleClass('content');
                    $(this).remove();
                });
            }
            
            runExample();
        }, 5000);
    }
    runExample();
});