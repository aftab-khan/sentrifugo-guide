$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });

    $('#scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('a[href^="#"]').on('click', function(e) {
        $('.main_menu div a').each(function() {
            $(this).removeClass('select');
        })
        $(this).addClass('select');
    });

    SyntaxHighlighter.all();
    $('#sidebar ul li a').not('#side-download-link').click(function(e) {
        e.preventDefault();
        $.scrollTo($(this).attr('href'), 500);
        $('.active').removeClass('active');
        //$(this).parent().addClass('active');
    });
    var $sections = $('#main .scrolltrack'); // all content sections
    var $navs = $('#sidebar > ul > li').not('#side-download-link'); // all nav sections

    var topsArray = $sections.map(function() {
        return $(this).position().top - 80; // make array of the tops of content
    }).get(); //   sections, with some padding to
    //   change the class a little sooner
    var len = topsArray.length; // quantity of total sections
    var currentIndex = 0; // current section selected

    topsArray[len - 1] = topsArray[len - 1] - 210;
    var getCurrent = function(top) { // take the current top position, and see which
        for (var i = 0; i <= len; i++) { // index should be displayed
            if (top > topsArray[i] && topsArray[i + 1] && top < topsArray[i + 1]) {
                return i;
            }
        }
    };
    //smoothscroll

});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
    }
}
});