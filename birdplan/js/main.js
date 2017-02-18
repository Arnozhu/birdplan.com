/**
 * Created by Administrator on 2017/1/19.
 */
window.onload = function () {
    var obtn = document.getElementById('video1');

    var obtnc = document.getElementById('video3');

    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');

    var myVideo = document.getElementById('myVideo');
    var myVideob = document.getElementById('myVideob');

    obtn.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideob.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideo.play();
    }, false)

    var myVideo = document.getElementById('myVideo');
    var myVideob = document.getElementById('myVideob');
    var obtnb = document.getElementById('video2');
    obtnb.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideob.play();
    }, false)

    var myVideoc = document.getElementById('myVideoc');
    var obtnc = document.getElementById('video3');
    obtnc.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideob.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.play();
    }, false)

    var obtnd = document.getElementById('video4');
    var myVideod = document.getElementById('myVideod');
    var myVideo = document.getElementById('myVideo');
    obtnd.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideob.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideod.play();
    }, false)




    var oshut = document.getElementById('video-shut');
    oshut.addEventListener("click", function () {

        ovideo.style.display = 'none';
        myVideob.style.display = 'block';
        myVideo.style.display = 'block';
        myVideod.style.display = 'block';
        myVideoc.style.display = 'block';
        myVideo.pause();
        myVideob.pause();
        myVideod.pause();
        myVideoc.pause();
        myVideo.currentTime = 0;
        myVideob.currentTime = 0;
        myVideoc.currentTime = 0;
        myVideod.currentTime = 0;
    }, false)
}

