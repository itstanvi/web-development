 async function weather(){
    const cityname=document.querySelector('#search input').value;
    console.log(cityname);
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=757faaceca15cd840edd86f0322ab9d5`;
    const res= await fetch(url);
   // console.log(res);
   var data= await res.json();
   console.log(data.main.temp);
   if(data.code='404'){
    error.style.display="block";
    main.style.display="none";
   }
   else{
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById('city').innerText=data.name;
    document.getElementById('humidity').innerHTML=data.main.humidity+"%";
    document.getElementById('wind').innerHTML=data.wind.speed+"km/h";
    main.style.display="block";
    error.style.display="none";
   }


}

