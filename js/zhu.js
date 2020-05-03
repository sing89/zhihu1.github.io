var a=new Array("image/主页/20.gif","image/主页/21.gif","image/主页/23.gif");
var b=0;
var c=new Array("这是我高中的挚友，都是我的小弟来的，被我智商碾压，够沙雕的","一群可爱有趣的小伙伴，经历了很多，也成长了很多","回家乡的路上，它没见证我成长，但它寄存着我的根")
function test(){
    b++;
    if(b==a.length){
        b=0;
    }
    document.getElementById('zhao').src=a[b];
    document.getElementById('2').innerHTML=c[b];
}