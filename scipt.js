
var request =new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    console.log(data);
    for(var i in data){
        try{
            var cname= data[i].name;
            var latlong = data[i].latlng;
            if(latlong===0) throw new Error('latitude of this perticular location not found');
            print(cname,...latlong);
        }
        catch(e){
                console.log("invalid coordinate details"+cname+" "+e.message);
        }
    }
};
var print = function (cname,lat,long){
    var Key='0ba374fd042413c51b080d029c7a6ed8';
    var URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Key}`;
    var weather =new XMLHttpRequest();
    weather.open('GET',URL,true);
    weather.send();
    weather.onload= function(){
        try{
            var result= JSON.parse(this.response);
            console.log(`${cname}:${result.main.temp}`);
        }catch(e){
            console.log('invalid response from'+cname);
        }
    }
}
