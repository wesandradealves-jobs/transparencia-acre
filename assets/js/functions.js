jQuery(document).ready(function () {
    $('.tab li a').click(function (event) {
        el = $(this).parent().index() + 1;
        id = $(this).closest(".tab").attr("id");
        $(this).addClass("active");
        $(this).closest(".tab").find("a").not(this).removeClass("active");
        $(".tab--container." + id + " .tbody > *:not(:nth-child(" + el + "))").hide();
        $(".tab--container." + id + " .tbody > *:nth-child(" + el + ")").show();
    });
    var lastScrollTop = 0;

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            if ($(window).width() <= '767') {
                $(".toggle").removeClass("toggle");
                $("body").css("overflow","auto");
            }
        // } else {
    
        // }
        }
        lastScrollTop = st;
    }); 
    $("header:not([class]) nav > div > a").click(function () {
        if ($(window).width() <= '1366') {
            $(this).closest("nav").find(".toggle").not($(this).parent()).removeClass("toggle");
            $(this).parent().addClass("toggle");
            $("body").css("overflow","none");
            $('html, body').animate({scrollTop:0},500);
        }
    });
    $(".grid > li> div").click(function () {
        if ($(window).width() <= '767') {
            $(this).find("ul").fadeIn();
        }
    });
 	$(document).mouseup(function (e){
 		var container = $(".grid > li");
		if (!container.is(e.target) // if the target of the click isn't the container...
		&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
            $(".grid > li > div ul").fadeOut();
		}
	});
 	$(document).mouseup(function (e){
 		var container = $("header,#mobileNavigation");
		if (!container.is(e.target) // if the target of the click isn't the container...
		&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
            $(".toggle").removeClass("toggle");
            $(".tcon-transform").removeClass("tcon-transform");
            $("body").css("overflow","auto");
		}
	});
});

function mobileNavigation() {
    $("#mobileNavigation").toggleClass("toggle");
}

$(window).resize(function () {
    $(".tcon-transform").removeClass("tcon-transform");
    $(".toggle").removeClass("toggle");
    $("body").css("overflow","auto");
});

