window.onload = function () {
    
    var tpb = document.getElementsByClassName('top-banner')[0];
    var close = document.getElementsByClassName('close-banner')[0];
    var Code = document.getElementsByClassName('erweima')[0];
    var jdTel = document.getElementsByClassName('jn-tel')[0];

    var timer = null;

    //手机京东
    jdTel.onmouseover = function () {
        Code.className = 'erweima show';
    }

    jdTel.onmouseout = function () {
        Code.className = 'erweima hide';
    }

    //关闭广告栏
    close.onclick = function () {
        timer = setInterval(function () {
            tpb.style.opacity -= 0.1;
            if(tpb.style.opacity < 0) {        
                tpb.style.display = 'none';
                clearInterval(timer);
            }
        },50);
    }
}