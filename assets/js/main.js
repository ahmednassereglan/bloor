$( document ).ready(function() {
    console.log( "ready!" );

    // down list in home 
    $('#open_home_list').click(function() {
        $('.overlay').css({
            'display':'block'
        });
        $('.downlist__home').css({
            'display':'block'
        });
        $('#open_home_list').css({"border": "1px solid #fff" , "color": "#fff"});
    });

    $('.downlist__home .close').click(function() {
        $('.overlay').css({
            'display':'none'
        });
        $('.downlist__home').css({
            'display':'none'
        });
        $('#open_home_list').css({"border": "1px solid #b1b1b1" , "color": "#b1b1b1"});
    });

    // down list in home footer 
    $('#open_footer_search').click(function() {
        $('.overlay').css({
            'display':'block'
        });
        $('.downlist__footer').css({
            'display':'block'
        });
        $('.__footer').css({"z-index": "7"});
    });

    $('.downlist__footer .close').click(function() {
        $('.overlay').css({
            'display':'none'
        });
        $('.downlist__footer').css({
            'display':'none'
        });
        $('.__footer').css({"z-index": "1"});
    });
    
    $('.downlist__footer .done').click(function() {
        $('.overlay').css({
            'display':'none'
        });
        $('.downlist__footer').css({
            'display':'none'
        });
        $('.__footer').css({"z-index": "1"});
    });

    // down list in profile (notification) 

    $('#open_profile_notif').click(function() {
        $('#open_profile_notif .icon').addClass("active");

        $('.overlay').css({
            'display':'block'
        });

        $('.notif_profile').css({
            'display':'block'
        });
    });

    $('.notif_profile .close').click(function() {
        $('.overlay').css({
            'display':'none'
        });
        $('.notif_profile').css({
            'display':'none'
        });
        $('#open_profile_notif .icon').removeClass("active");
    });

    $('.overlay').click(function() {
        $('.overlay').css({
            'display':'none'
        });
        $('.notif_profile').css({
            'display':'none'
        });
        $('#open_profile_notif .icon').removeClass("active");
    });

    // down list in profile (notification) 

    $('#open_profile_opinion').click(function() {
        $('#open_profile_opinion .icon').addClass("active");

        $('.s_overlay').css({
            'display':'block'
        });

        $('.list_add_opinion').css({
            'display':'block'
        });
    });

    $('.form_add_opinion .btn_submit').click(function() {
        $('.s_overlay').css({
            'display':'none'
        });
        $('.list_add_opinion').css({
            'display':'none'
        });
        $('#open_profile_opinion .icon').removeClass("active");
    });

    $('.s_overlay').click(function() {
        $('.s_overlay').css({
            'display':'none'
        });
        $('.list_add_opinion').css({
            'display':'none'
        });
        $('#open_profile_opinion .icon').removeClass("active");
    });

    // rate and review
    $('.rate_a_review .send_review').click(function() {
        $('.s_overlay').css({
            'display':'none'
        });
        $('.rate_a_review').css({
            'display':'none'
        });
    });
    $('.rate_a_review .close').click(function() {
        $('.s_overlay').css({
            'display':'none'
        });
        $('.rate_a_review').css({
            'display':'none'
        });
    });

    $('.s_overlay').click(function() {
        $('.s_overlay').css({
            'display':'none'
        });
        $('.rate_a_review').css({
            'display':'none'
        });
    });


    // down list in FAQs Qeustions

    $('.right__details .right__info .info__question').click(function() {
        $(this).toggleClass('active').siblings();
    });

    // on hover in star

    // $(".comment_up .right .icon").hover(function () {
    //     if($(this).hasClass("add")){

    //     }else{
    //         // $(this).siblings('.fal , .fa').addClass("fa").removeClass("fal");
    //         $(".fal").not(this).removeClass("fa").addClass("fal");
    //     }
        
        
    // });

    /********** submit in form  ****************/

    $('form').keypress((e) => {
        if (e.which === 13) {
            $('form').submit();
        }
    })


    /**********  show/hide password  ****************/
    
    const togglePasswordEye = '<i class="fa fa-eye field_icon"></i>';
    const togglePasswordEyeSlash = '<i class="fa fa-eye-slash field_icon"></i>';

    $(togglePasswordEyeSlash).insertAfter('input[type=password]');
    $('input[type=password]').addClass('hidden-pass-input')

    $('body').on('click', '.field_icon', function (e) {
        let password = $(this).prev('.hidden-pass-input');

        if (password.attr('type') === 'password') {
            password.attr('type', 'text');
            $(this).addClass('fa-eye').removeClass('fa-eye-slash');
        } else {
            password.attr('type', 'password');
            $(this).addClass('fa-eye-slash').removeClass('fa-eye');
        }
    })

    /*********************** Tabs in chat profile   *******************/

 
});

// functions

// chat
function openChat(evt, chatName) {
    var i, chat_person, chat_header;
    chat_person = document.getElementsByClassName("chat_person");
    for (i = 0; i < chat_person.length; i++) {
      chat_person[i].style.display = "none";
    }
    chat_header = document.getElementsByClassName("chat_header");
    for (i = 0; i < chat_header.length; i++) {
      chat_header[i].className = chat_header[i].className.replace(" active", "");
    }
    document.getElementById(chatName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openRate(chatName) {
    var i, chat_person, chat_header;
    
    chat_person = document.getElementsByClassName("rate_a_review");
    for (i = 0; i < chat_person.length; i++) {
      chat_person[i].style.display = "none";
    }
    var over = document.getElementById("rate_overlay");
    over.style.display = "block";
    // chat_header = document.getElementsByClassName("chat_header");
    // for (i = 0; i < chat_header.length; i++) {
    //   chat_header[i].className = chat_header[i].className.replace(" active", "");
    // }
    document.getElementById(chatName).style.display = "block";
    // evt.currentTarget.className += " active";
}

// href
function goToURL(url) {
    location.href = url;
}




