$(function() {

    $(".list-icon").click(function () {
        $(".page_link").addClass('panelactive');
        $(".sub_page_link").addClass('panelactive');
    });

    $('.sub_page_link').mouseover(function(){
        $(".page_link").addClass('panelactive');
        $(".sub_page_link").addClass('panelactive');
    });

    $('.sub_page_link').mouseout(function(){
        $(".page_link").removeClass('panelactive');
        $(".sub_page_link").removeClass('panelactive');
    });

    $(".key_win").click(function () {
        $(".key_mac").toggleClass('panelactive');
        $(".mouse").toggleClass('panelactive');
        $(".key_win_img").toggleClass('panelactive');
        $(".win_keyboard_0").toggleClass('panelactive');
    });

    $('.key_win_img').mouseover(function(){
        $(".key_mac").addClass('panelactive');
        $(".mouse").addClass('panelactive');
        // $(".key_win_img").addClass('panelactive');
    });
    
    $(".key_mac").click(function () {
        $(".key_win").toggleClass('panelactive');
        $(".mouse").toggleClass('panelactive');
        $(".key_mac_img").toggleClass('panelactive');
        $(".mac_keyboard_0").toggleClass('panelactive');
    });

    $('.key_mac_img').mouseover(function(){
        $(".key_win").addClass('panelactive');
        $(".mouse").addClass('panelactive');
        // $(".key_mac_img").addClass('panelactive');
    });
    
    // タブ切り替え
    $('.key_win_index li').on('click', function () {
        var win_index = $('li.win_index').index(this);
        console.log($(".key_win_index li").length);
        for(var i = 0; i < $(".key_win_index li").length; i++){
            console.log(".win_keyboard_" + i);
            $(".win_keyboard_" + i).removeClass('panelactive');
            if(i == win_index){
                $(".win_keyboard_" + i).addClass('panelactive');
            }
        }
    });
    $('.key_mac_index li').on('click', function () {
    var mac_index = $('li.mac_index').index(this);
    for(var i = 0; i < $(".key_mac_index li").length; i++){
        console.log(".mac_keyboard_" + i);
        $(".mac_keyboard_" + i).removeClass('panelactive');
        if(i == mac_index){
            $(".mac_keyboard_" + i).addClass('panelactive');
        }
    }
    });

    // ------本文解説
    // -------------------------------
    $(".open1-1").click(function () {
        $(".exp1-1").toggleClass('panelactive');
    });

});