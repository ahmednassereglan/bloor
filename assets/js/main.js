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




