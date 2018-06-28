$(document).ready(function() {
    $('main').hide().fadeIn(500);

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

$(function() {
    $("#mainmenuLoad").load("layout/main__menu.html"); 
    $("#imageModal").load("layout/image__modal.html");

    $('img.img-fluid').on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
        $('#enlargeImageModal').modal('show');
    });
    
});