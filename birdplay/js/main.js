/**
 * Created by Administrator on 2017/1/19.
 */
window.onload = function () {
    var obtn = document.getElementById('video1');

    /*  var obtnc = document.getElementById('video3');
        var obtnd = document.getElementById('video4');  */
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');

    var myVideo = document.getElementById('myVideo');
    var myVideob = document.getElementById('myVideob');

    obtn.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideob.style.display = 'none';
        myVideo.play();
    }, false)

    var myVideo = document.getElementById('myVideo');
    var myVideob = document.getElementById('myVideob');

    var obtnb = document.getElementById('video2');
    obtnb.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';

        myVideob.play();
    }, false)

    var oshut = document.getElementById('video-shut');
    oshut.addEventListener("click", function () {

        ovideo.style.display = 'none';
        myVideob.style.display = 'block';
        myVideo.style.display = 'block';
        myVideo.pause();
        myVideob.pause();
        myVideo.currentTime = 0;
        myVideob.currentTime = 0;
    }, false)
}

