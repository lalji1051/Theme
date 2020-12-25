$(document).ready(function () {
    var myCarousels = $(".with-indicator");
    myCarousels.each(function (index, element) {
        var myCarousel = $("#" + $(element).attr('id'));
        myCarousel.append("<ol class='carousel-indicators'></ol>");
        var indicators = $("#" + $(element).attr('id') + " .carousel-indicators");
        $("#" + $(element).attr('id') + " .carousel-inner").children(".carousel-item").each(function (index) {
            console.log(index);
            (index === 0) ?
                indicators.append("<li data-target='#" + $(element).attr('id') + "' data-slide-to='" + index + "' class='active'></li>") :
                indicators.append("<li data-target='#" + $(element).attr('id') + "' data-slide-to='" + index + "'></li>");
        });
    });

    (function ($) {
        "use strict";

        // Toggle the side navigation
        $("#sidebarToggle").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("sb-sidenav-toggled");
        });
    })(jQuery);

    // var path = window.location.href;
    // $('.sb-sidenav-menu a').each(function () {
    //     if (this.href.replace("#", "") === path) {
    //         var li = $(this).clone();
    //         $('li').removeClass('active selected');
    //         //Check Whether the menu has sub-menu
    //         if ($(this).closest('ul').hasClass('sub-navigation')) {
    //             var parent = $(this).closest('ul').parents('li').find('a').find('span').text();
    //             $(this).parents('li').addClass('active selected'); 
    //             $("#breadcrumbs").append('<li class="breadcrumb-item">' + parent + '</li>');
    //             $("#breadcrumbs").append('<li class="breadcrumb-item">' + li.text() + '</li>');
    //             //this is a parent element
    //         }
    //         else {
    //             $(this).parent().addClass('active selected');
    //             $("#breadcrumbs").append('<li class="breadcrumb-item">' + li.text() + '</li>');
    //         }
    //     }
    // });

    var tableData = $('#staticData').find("tbody").html();

    var dataCount = $('#staticData').attr("data-list");

    $('.staticTable').find("tbody").append(tableData);

    for (i = 0; i < dataCount; i++) {
        //  html = html + tableData;
        $('.staticTable').find("tbody").append(tableData);
    }
    if ($('.staticTable').length > 0) {
        $('.staticTable').DataTable({
            autoWidth: false,
            language: {
                paginate: {
                    next: '<i class="fa fa-chevron-right"></i>',
                    previous: '<i class="fa fa-chevron-left"></i>'
                }
            },
            "searching": false,
            "order": [[1, "asc"]],

            "dom": '<"top">t<"table-bottom rounded-bottom"<"left"i><"right"lp>><"clear">'
        });
    }
});


var $window = $(window);
var $body = $('html');

function navigation() {
    var topOffset = 56;
    var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (width < 991.85) {
        $('div.navbar-collapse').addClass('collapse');
        //topOffset = 100; // 2-row-menu
    } else {
        $('div.navbar-collapse').removeClass('collapse');
    }

    var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
        $("#page-wrapper").css("min-height", (height) + "px");
    }

}

$(document).ready(function () {
    $('#theme-option li').click(function () {
        var color = $(this).attr("data-style");
        $('body').removeClass();
        $('body').addClass('theme-' + color)
        localStorage.setItem('current', color);
    });
    if (localStorage.getItem('current')) {
        $('body').addClass('theme-' + localStorage.getItem('current'))
    }

    navigation();

    $(".navbar-nav li a").click(function () {
        if ($('.navbar-collapse').hasClass("show")) {
            $('.navbar-collapse').addClass("collapse");
            $('.navbar-collapse').removeClass("show");
            $('.navbar-collapse').css('height', 'auto');
        } else {
            $('.navbar-collapse').removeClass("collapse");
            $('.navbar-collapse').addClass("in");
            $('.navbar-collapse').css('show', '0');
        }

        $('.navbar-collapse').css('height', '0');
    });
})
$(window).resize(function () {
    navigation();
})



function customizer() {
    var $cusHtml = '<div class="customizer-wrapper">';
    $cusHtml += '<a href="#" class="customizer-toggle"><i class="fa fa-cog"></i></a>';
    $cusHtml += '<div class="inner custom-scroll">';
    $cusHtml += '<div class="" id="sidebar-setting">';
    $cusHtml += '<h5 class="mb-20">Theme Color</h5>';
    $cusHtml += '<button class="cus-radio blue active" data-target="theme" data-color="blue"><i class="icon"></i>Blue</button>';
    $cusHtml += '<button class="cus-radio dark" data-target="theme" data-color="dark"><i class="icon"></i>dark</button>';
    $cusHtml += '<button class="cus-radio primary" data-target="theme" data-color="primary"><i class="icon"></i>primary</button>';
    $cusHtml += '<button class="cus-radio secondary" data-target="theme" data-color="secondary"><i class="icon"></i>secondary</button>';
    $cusHtml += '<button class="cus-radio indigo" data-target="theme" data-color="indigo"><i class="icon"></i>indigo</button>';
    $cusHtml += '<button class="cus-radio purple" data-target="theme" data-color="purple"><i class="icon"></i>purple</button>';
    $cusHtml += '<button class="cus-radio pink" data-target="theme" data-color="pink"><i class="icon"></i>pink</button>';
    $cusHtml += '</div>';
    $cusHtml += '</div>';
    $cusHtml += '</div>';

    $('body').prepend($cusHtml)

    $window.on('load', function () {
        var customizerWrapper = $('.customizer-wrapper'),
            customizerToggle = $('.customizer-toggle'),
            customRadioNotColor = $('.cus-radio:not(.color)');

        customizerToggle.on('click', function (e) {
            e.preventDefault();
            customizerWrapper.toggleClass('open');
        });




        /*Side Header & Top Header*/
        customRadioNotColor.on('click', function (e) {
            //debugger;
            e.preventDefault();
            var $this = $(this),
                $target = $this.data('target'),
                $color = $this.data('color');
            if ($target == 'theme') {
                $body.removeClass(function (index, className) {
                    return (className.match(/\btheme-\S+/g) || []).join(' ');
                });
            }

            $this.closest('.customizer-wrapper').find('.cus-radio').removeClass('active');
            $this.addClass('active');
            $body.addClass($target + '-' + $color);
        });

    });

}
customizer();