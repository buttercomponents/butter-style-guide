$(document).ready(function(){
    function moveMarker(nav) {
        var activeNav = $(nav + ' .active a');
        var aWidth =  $(activeNav).width();
        var precedingAnchorWidth =  anchorWidthCounter(nav);

        // TODO:
        // Find the total widths of all of the anchors
        // to the left of the active anchor.

        var activeMarker = $(nav + ' .active-marker');
        $(activeMarker).css('display','block');
        $(activeMarker).css('width', aWidth);
        $(activeMarker).css('left', precedingAnchorWidth);

        // TODO:
        // Using the calculated total widths of preceding anchors,
        // Set the left: css value to that number.
    }

    moveMarker('.main-menu');
    moveMarker('.shows-menu');

    function anchorWidthCounter(nav) {
        var anchorWidths = 0;
        var a;
        var aWidth;
        var aMarginLeft;
        var aMarginRight;
        var aTotalWidth;
        $(nav + ' li').each(function(index, elem) {
            var activeTest = $(elem).hasClass('active');
            if(activeTest) {
                // Break out of the each function.
                return false;
            }

            a = $(elem).find('a');
            aWidth = a.width();
            aMarginLeft = parseFloat(a.css('margin-left'));
            aMarginRight = parseFloat(a.css('margin-right'));
            aTotalWidth = aWidth + aMarginLeft + aMarginRight;
            anchorWidths = anchorWidths + aTotalWidth;
        });

        return anchorWidths;
    }


    $('.main-menu a').click(function(e) {
        e.preventDefault();
        $('.main-menu li').removeClass('active');
        $(this).parents('li').addClass('active');
        moveMarker('.main-menu');
    });

    $('.shows-menu a').click(function(e) {
        e.preventDefault();
        $('.shows-menu li').removeClass('active');
        $(this).parents('li').addClass('active');
        moveMarker('.shows-menu');
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

    //dropdown-example
    function selectItem(dropdown, item) {
        var selected = $(dropdown).find(".drop-head .select-item .selected"),
            items =  $(dropdown).find(" .items li"),
            text = $(item).text();

            $(selected).text(text);
            $(dropdown).removeClass('active');

            $(items).each(function (i) {
                $(this).removeClass('active');
            });

            $(item).addClass('active');
    };
    // open dropdown
    $('#dropdown-example .select-item').click(function () {
        $('#dropdown-example').toggleClass('active');
    });
    // select item
    $('#dropdown-example .items li').click(function () {
      selectItem('#dropdown-example', this);
    });

    $( "#dropdown-search-example .search-input input[type=text]" ).focus(function() {
        $("#dropdown-search-example" ).addClass('active');
    });

    $( "#dropdown-search-example .search-input input[type=text]" ).blur(function() {
        $("#dropdown-search-example" ).removeClass('active');
    });

    // Row for settings
    // open dropdown
    $('#dropdown-row-example .select-item').click(function () {
        $('#dropdown-row-example').toggleClass('active');
    });
    // select item
    $('#dropdown-row-example .items li').click(function () {
      selectItem('#dropdown-row-example', this);
    });


});
