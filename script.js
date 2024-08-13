//window.alert("hello world");

function clock(){
    //xwindow.alert("hello");
   const d=new Date;
   //console.log(d)
   let h=d.getHours();
   let m=d.getMinutes();
   let s=d.getSeconds();
   console.log(h,m,s);
   let h_rotation=30*h+0.5*m;
   let m_rotation=6*m;
   let s_rotation=6*s; 
   hr.style.transform=`rotate(${h_rotation}deg)`;
   min.style.transform=`rotate(${m_rotation}deg)`;
   sec.style.transform=`rotate(${s_rotation}deg)`;
   dc.innerHTML=`${h}:${m}:${s}`;
   

   const ame=d.toLocaleTimeString("en-US",{
    timeZone:"America/Los_Angeles",
   });
   console.log(ame)

}
clock();
setInterval(clock,1000);