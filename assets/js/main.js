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

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Get current page URL
    var url = window.location.href;

    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

    // select file name
    url = url.substr(url.lastIndexOf("/") + 1);

    // If file name not avilable
    if (url == '') {
        url = 'index.html';
    }

    // Loop all menu items
    $('.main_menu li').each(function() {
        // select href
        var href = $(this).find('a').attr('href');
        // Check filename
        if (url === href) {
            // Add active class
            $(this).addClass('select');
        }
    });

    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    // Show/hide menu on scroll
    /*
    if (scrollDistance >= 850) {
    $('nav').fadeIn("fast");
    } else {
    $('nav').fadeOut("fast");
    }
    */
    // Assign active class to nav links while scolling
    $('h2').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('#stickybar li.active').removeClass('active');
            $('#stickybar li').eq(i).addClass('active');
        }
    });
}).scroll();