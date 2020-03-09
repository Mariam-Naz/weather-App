var button=document.querySelector(".button");
console.log(button);
var input=document.querySelector(".input");
console.log(input.value)
var desc = document.querySelector(".temp-description");
var temp = document.querySelector(".temperature-degree")
var city=document.querySelector('.city-name')
var icon=document.querySelector('.icon')
   
button.addEventListener("click",()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=16b5addeffaa6a79b7debd49a80f2121')
                    .then(response=>{
                        return response.json();
                    })
                    .then(data=>{
                        console.log(data)
                        var desc_name=data['weather'][0]['description'];
                        var temp_name= data['main']['temp']
                        var city_name=data['name']
                        desc.innerHTML=desc_name;
                        temp.innerHTML=parseInt(temp_name-273.15);
                        city.innerHTML=city_name;
                        $(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
            })
            .catch(function() {
                city.innerHTML='Wrong city';
                desc.innerHTML='';
                temp.innerHTML='';
                icon.innerHTML='';
                
        });

}) ;