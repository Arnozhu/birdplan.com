/**
 * Created by Administrator on 2017/1/19.
 */
window.onload = function () {
    var obtn = document.getElementById('video1');
    var obtnb = document.getElementById('video2');
    var obtnc = document.getElementById('video3');
    var obtnd = document.getElementById('video4');
    var ovideo = document.getElementById('video-btn');
    var oatn = document.getElementById('video-area');
    var myVideo = document.getElementById('myVideo');
    var myVideob = document.getElementById('myVideob');
    var myVideod = document.getElementById('myVideod');
    var myVideoc = document.getElementById('myVideoc');
    var oshut = document.getElementById('video-shut');

    obtn.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideob.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideo.play();
    }, false)

    obtnb.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideob.play();
    }, false)

    obtnc.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideob.style.display = 'none';
        myVideod.style.display = 'none';
        myVideoc.play();
    }, false)


    obtnd.addEventListener("click", function () {
        ovideo.style.display = 'block';
        myVideo.style.display = 'none';
        myVideob.style.display = 'none';
        myVideoc.style.display = 'none';
        myVideod.play();
    }, false)

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

