window.onload = function () {
    
    var tpb = document.getElementsByClassName('top-banner')[0];
    var close = document.getElementsByClassName('close-banner')[0];


    //关闭广告栏
    close.onclick = function () {
        tpb.className = 'hide';
    }
}