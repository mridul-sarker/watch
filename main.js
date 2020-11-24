
var secs = document.querySelector('.secs');
var mnts = document.querySelector('.mnts');
var hours = document.querySelector('.hours');

function clock(){
   var d =new Date();
   var sec=d.getSeconds();
   var secmove =((sec/60)*360)+90; 
    secs.style.transform=`rotate(${secmove}deg)`;
    //mnts
    var mnt = d.getMinutes();
    var mntmove = ((mnt/60)*360)+90;
    mnts.style.transform = `rotate(${mntmove}deg)`;
    //hour
    var hour =d.getHours();
    var hourmove= ((hour/12)*360)+90;
    hours.style.transform =`rotate(${hourmove}deg)`;
}
setInterval(clock,1000);


console.log(clock);