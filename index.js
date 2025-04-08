let count=0;
document.getElementById("incrse").onclick=function(){
    count=count+2;
    document.getElementById("counter").textContent=count;
}
document.getElementById("dcrse").onclick=function(){
    count=count-1;
    document.getElementById("counter").textContent=count;
}
document.getElementById("rset").onclick=function(){
    count=0;
    document.getElementById("counter").textContent=count;
}