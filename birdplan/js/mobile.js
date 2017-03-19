/**
 * Created by zhujunlei on 2017/3/19.
 */

window.onload = function () {

    var btn = document.getElementById('header');
    var myVideo = document.getElementById('video');
    var wrap = document.getElementById('wrap');
    var btn2 = document.getElementById('footer');
    var videoTwo = document.getElementById('video-two');
    var content = document.getElementById('content');
    var btna = document.getElementById('a');
    var btnb = document.getElementById('b');
    var btnc = document.getElementById('sidebar');
    var btnd = document.getElementById('guild');



    btna.addEventListener("click", function () {
        $("#a").addClass("a")

    }, false)


    btnb.addEventListener("click", function () {
        $("#b").addClass("b")

    }, false)

    btnd.addEventListener("click", function () {
        $("#guild").addClass("guild-1")

    }, false)

    btnc.addEventListener("click", function () {
        myVideo.pause();
        videoTwo.pause();
        videoTwo.currentTime = 0;
    }, false)


    btn.addEventListener("click", function () {
        wrap.style.background = 'none';
        myVideo.style.width = '100%';
        myVideo.play();
        videoTwo.pause();
        videoTwo.currentTime = 0;
        $(window).scroll(function () {

            var _top = $(window).scrollTop();

            if (_top > 600) {
                myVideo.pause();
            }
        });


    }, false)


    btn2.addEventListener("click", function () {

        content.style.background = 'none';
        videoTwo.style.width = '100%';
        videoTwo.play();
        myVideo.pause();
        myVideo.currentTime = 0;
        $(window).scroll(function () {

            var _top = $(window).scrollTop();

            if (_top < 600) {
                videoTwo.pause();
                $("#scroll").addClass("scroll-a")
            }
        });


    }, false)
}
