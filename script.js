let apikey="f1bcf58798c954ec54931caa6884ff66"
let searchbox=document.querySelector("#cityname");
let searchbtn=document.querySelector("#searchbtn");
let cityname=document.querySelector("#citynameheading")
let temparature=document.querySelector("#temp");
let windspeed=document.querySelector("#wind")
let humidity=document.querySelector("#humidity")
let visibility=document.querySelector("#visibility")
let descriptionicon=document.querySelector("#description-section");
let date=document.querySelector("#date");
let detailsSection=document.querySelector(".detail-section");
let useCurrentLocation=document.querySelector("#usecur")
let fivedaysforcastsection=document.querySelector(".fivedaysforcast")
let headingof5days=document.querySelector(".headingof5days")
let main=document.querySelector("main");


searchbtn.addEventListener("click",()=>{
    
    if(searchbox.value===""){
        alert("Please enter a city name");
        location.reload();
    }
    // main.classList.remove("h-screen")
    let cityname=searchbox.value.trim();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`).then((res)=>{
        return res.json()
    }).then((res)=>{
        updateUi(res);
    }).catch((err)=>{
        alert(err);
    })
    
})


function updateUi(data){
    main.classList.remove("h-screen")
   detailsSection.classList.remove("hidden");
   detailsSection.classList.add("flex");
//    console.log(data);
   headingof5days.classList.remove("hidden")
   fivedaysforcastsection.classList.remove("hidden")
   fivedaysforcastsection.classList.add("flex")
   console.log(data)
   console.log(data.weather[0].description)
   searchbox.value=""
   cityname.innerHTML=data.name
   temparature.innerHTML=Math.floor(data.main.temp)+"°"
   windspeed.innerHTML=data.wind.speed+"Km/h";
   humidity.innerHTML=data.main.humidity+"%";
   visibility.innerHTML=data.visibility/1000+"Km";
   let des=data.weather[0].description;
   let strdate=new Date();
   //    console.log(strdate.toDateString)
   date.innerHTML=strdate.toDateString()
   let weathericon=getWetherIcon(data.weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`


   let lat=data.coord.lat
   let lon=data.coord.lon
   fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`).then((res)=>{
    return res.json()
   }).then((res)=>{
    console.log(res)
    updateUiCityForcastOne(res)
    updateUiCityForcastTwo(res)
    updateUiCityForcastThree(res)
    updateUiCityForcastFour(res)
    updateUiCityForcastFive(res)
   }).catch((err)=>{
    alert(err);
   })
}


function updateUiCityForcastOne(data){
    let city=document.querySelector("#citynamefor1");
    let date=document.querySelector("#datefor1");
    let descriptionicon=document.querySelector("#description-sectionfor1")
    let temp=document.querySelector("#tempfo1")
    let windspeed=document.querySelector("#windfor1")
    let humidity=document.querySelector("#humidityfor1");
    let visibility=document.querySelector("#visibilityfor1")

    city.innerHTML=data.city.name;
    date.innerHTML=data.list[3].dt_txt;
    temp.innerHTML=Math.floor(data.list[3].main.temp)+"°"
    windspeed.innerHTML=data.list[3].wind.speed+"Km/h";
    humidity.innerHTML=data.list[3].main.humidity+"%";
    visibility.innerHTML=data.list[3].visibility/1000+"Km";
    let des=data.list[3].weather[0].description;

     let weathericon=getWetherIcon(data.list[3].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}


function updateUiCityForcastTwo(data){
    let city=document.querySelector("#citynamefor2");
    let date=document.querySelector("#datefor2");
    let descriptionicon=document.querySelector("#description-sectionfor2")
    let temp=document.querySelector("#tempfor2")
    let windspeed=document.querySelector("#windfor2")
    let humidity=document.querySelector("#humidityfor2");
    let visibility=document.querySelector("#visibilityfor2")
    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[11].dt_txt;
    temp.innerHTML=Math.floor(data.list[11].main.temp)+"°"
    windspeed.innerHTML=data.list[11].wind.speed+"Km/h";
    humidity.innerHTML=data.list[11].main.humidity+"%";
    visibility.innerHTML=data.list[11].visibility/1000+"Km";
    let des=data.list[11].weather[0].description;

     let weathericon=getWetherIcon(data.list[11].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}

function updateUiCityForcastThree(data){
    let city=document.querySelector("#citynamefor3");
    let date=document.querySelector("#datefor3");
    let descriptionicon=document.querySelector("#description-sectionfor3")
    let temp=document.querySelector("#tempfor3")
    let windspeed=document.querySelector("#windfor3")
    let humidity=document.querySelector("#humidityfor3");
    let visibility=document.querySelector("#visibilityfor3")

    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[19].dt_txt;
    temp.innerHTML=Math.floor(data.list[19].main.temp)+"°"
    windspeed.innerHTML=data.list[19].wind.speed+"Km/h";
    humidity.innerHTML=data.list[19].main.humidity+"%";
    visibility.innerHTML=data.list[19].visibility/1000+"Km";
    let des=data.list[19].weather[0].description;

     let weathericon=getWetherIcon(data.list[19].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}



function updateUiCityForcastFour(data){
    let city=document.querySelector("#citynamefor4");
    let date=document.querySelector("#datefor4");
    let descriptionicon=document.querySelector("#description-sectionfor4")
    let temp=document.querySelector("#tempfor4")
    let windspeed=document.querySelector("#windfor4")
    let humidity=document.querySelector("#humidityfor4");
    let visibility=document.querySelector("#visibilityfor4")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[27].dt_txt;
    temp.innerHTML=Math.floor(data.list[27].main.temp)+"°"
    windspeed.innerHTML=data.list[27].wind.speed+"Km/h";
    humidity.innerHTML=data.list[27].main.humidity+"%";
    visibility.innerHTML=data.list[27].visibility/1000+"Km";
    let des=data.list[27].weather[0].description;

     let weathericon=getWetherIcon(data.list[27].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}



function updateUiCityForcastFive(data){
    let city=document.querySelector("#citynamefor5");
    let date=document.querySelector("#datefor5");
    let descriptionicon=document.querySelector("#description-sectionfor5")
    let temp=document.querySelector("#tempfor5")
    let windspeed=document.querySelector("#windfor5")
    let humidity=document.querySelector("#humidityfor5");
    let visibility=document.querySelector("#visibilityfor5")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[35].dt_txt;
    temp.innerHTML=Math.floor(data.list[35].main.temp)+"°"
    windspeed.innerHTML=data.list[35].wind.speed+"Km/h";
    humidity.innerHTML=data.list[35].main.humidity+"%";
    visibility.innerHTML=data.list[35].visibility/1000+"Km";
    let des=data.list[35].weather[0].description;

     let weathericon=getWetherIcon(data.list[35].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}





function getWetherIcon(wethericon){
   let icons={
    Clear:"wb_sunny",
    Clouds:"wb_cloudy",
    Rain:"umbrella",
    Thunderstrom:"flash_on",
    Snow:"ac_unit",
    Drizzle:"grain",
    Mist:"cloud",
    Smoke:"cloud",
    Haze:"cloud",
    Fog:"cloud"
   };

   return icons[wethericon] || "help";
}
// =====================================================================================================================================
// Use Current Location Of User Start coding Here

// if the user Allow the Location then this methos is called and we can easily find the location
function getCurrentLocation(position){
    console.log(position)
    let lat=position.coords.latitude
    let lon=position.coords.longitude
    getFetchDataFromUsingCurrentLocation(lat,lon)
 }
 
//  If the user Block or not allow the Current Location then This method is called
 function failedToGet(){
    alert("Failed to get current location");
 }


// By using the Use Current Location Button we can Access the Location of User 
useCurrentLocation.addEventListener("click",async()=>{
    navigator.geolocation.getCurrentPosition(getCurrentLocation,failedToGet);
})


function getFetchDataFromUsingCurrentLocation(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`).then((res)=>{
        return res.json()
    }).then((res)=>{
        updateUiForFiveDays(res);
    }).catch((err)=>{
        alert(`Error Found:-${err}`)
    })
}

function updateUiForFiveDays(data){
     console.log(data);
     main.classList.remove("h-screen")
    headingof5days.classList.remove("hidden")
    fivedaysforcastsection.classList.remove("hidden")
    fivedaysforcastsection.classList.add("flex");
    detailsSection.classList.remove("hidden");
    detailsSection.classList.add("flex");
    cityname.innerHTML=data.city.name
    temparature.innerHTML=Math.floor(data.list[1].main.temp)+"°"
    windspeed.innerHTML=data.list[1].wind.speed+"Km/h";
    humidity.innerHTML=data.list[1].main.humidity+"%";
    visibility.innerHTML=data.list[1].visibility/1000+"Km";
    let des=data.list[1].weather[0].description;
    let strdate=new Date();
    date.innerHTML=strdate.toDateString()
    let weathericon=getWetherIcon(data.list[1].weather[0].main)
    descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`


    // Card 1 Foracst Update
    updateUiforCardOne(data);
    // card 2 forcast Update
    updateUiforCardTwo(data);
    // card 3 forcast Update
    updateUiforCardThree(data);
    updateUiforCardFour(data);
    updateUiforCardFive(data);

}


function updateUiforCardOne(data){
     let city=document.querySelector("#citynamefor1");
     let date=document.querySelector("#datefor1");
     let descriptionicon=document.querySelector("#description-sectionfor1")
     let temp=document.querySelector("#tempfo1")
     let windspeed=document.querySelector("#windfor1")
     let humidity=document.querySelector("#humidityfor1");
     let visibility=document.querySelector("#visibilityfor1")

     city.innerHTML=data.city.name;
     date.innerHTML=data.list[3].dt_txt;
     temp.innerHTML=Math.floor(data.list[3].main.temp)+"°"
     windspeed.innerHTML=data.list[3].wind.speed+"Km/h";
     humidity.innerHTML=data.list[3].main.humidity+"%";
     visibility.innerHTML=data.list[3].visibility/1000+"Km";
     let des=data.list[3].weather[0].description;

      let weathericon=getWetherIcon(data.list[3].weather[0].main)
    descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
     
}



function updateUiforCardTwo(data){
    let city=document.querySelector("#citynamefor2");
    let date=document.querySelector("#datefor2");
    let descriptionicon=document.querySelector("#description-sectionfor2")
    let temp=document.querySelector("#tempfor2")
    let windspeed=document.querySelector("#windfor2")
    let humidity=document.querySelector("#humidityfor2");
    let visibility=document.querySelector("#visibilityfor2")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[11].dt_txt;
    temp.innerHTML=Math.floor(data.list[11].main.temp)+"°"
    windspeed.innerHTML=data.list[11].wind.speed+"Km/h";
    humidity.innerHTML=data.list[11].main.humidity+"%";
    visibility.innerHTML=data.list[11].visibility/1000+"Km";
    let des=data.list[11].weather[0].description;

     let weathericon=getWetherIcon(data.list[11].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}


function updateUiforCardThree(data){
    let city=document.querySelector("#citynamefor3");
    let date=document.querySelector("#datefor3");
    let descriptionicon=document.querySelector("#description-sectionfor3")
    let temp=document.querySelector("#tempfor3")
    let windspeed=document.querySelector("#windfor3")
    let humidity=document.querySelector("#humidityfor3");
    let visibility=document.querySelector("#visibilityfor3")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[19].dt_txt;
    temp.innerHTML=Math.floor(data.list[19].main.temp)+"°"
    windspeed.innerHTML=data.list[19].wind.speed+"Km/h";
    humidity.innerHTML=data.list[19].main.humidity+"%";
    visibility.innerHTML=data.list[19].visibility/1000+"Km";
    let des=data.list[19].weather[0].description;

     let weathericon=getWetherIcon(data.list[19].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}


function updateUiforCardFour(data){
    let city=document.querySelector("#citynamefor4");
    let date=document.querySelector("#datefor4");
    let descriptionicon=document.querySelector("#description-sectionfor4")
    let temp=document.querySelector("#tempfor4")
    let windspeed=document.querySelector("#windfor4")
    let humidity=document.querySelector("#humidityfor4");
    let visibility=document.querySelector("#visibilityfor4")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[27].dt_txt;
    temp.innerHTML=Math.floor(data.list[27].main.temp)+"°"
    windspeed.innerHTML=data.list[27].wind.speed+"Km/h";
    humidity.innerHTML=data.list[27].main.humidity+"%";
    visibility.innerHTML=data.list[27].visibility/1000+"Km";
    let des=data.list[27].weather[0].description;

     let weathericon=getWetherIcon(data.list[27].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}


function updateUiforCardFive(data){
    let city=document.querySelector("#citynamefor5");
    let date=document.querySelector("#datefor5");
    let descriptionicon=document.querySelector("#description-sectionfor5")
    let temp=document.querySelector("#tempfor5")
    let windspeed=document.querySelector("#windfor5")
    let humidity=document.querySelector("#humidityfor5");
    let visibility=document.querySelector("#visibilityfor5")


    
    city.innerHTML=data.city.name;
    date.innerHTML=data.list[35].dt_txt;
    temp.innerHTML=Math.floor(data.list[35].main.temp)+"°"
    windspeed.innerHTML=data.list[35].wind.speed+"Km/h";
    humidity.innerHTML=data.list[35].main.humidity+"%";
    visibility.innerHTML=data.list[35].visibility/1000+"Km";
    let des=data.list[35].weather[0].description;

     let weathericon=getWetherIcon(data.list[35].weather[0].main)
   descriptionicon.innerHTML=` <i class="material-icons" id="icons">${weathericon}</i><span class="text-xl font-semibold" id="description">${des}</span>`
}