var k=0;
function timecount(){
    k=k+1;
    postMessage(k);
    setTimeout("timecount()",1000);
}
timecount();