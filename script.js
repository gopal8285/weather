// http://api.weatherapi.com/v1/current.json?key=0e49c92a2ae546d9934135009250612&q=new delhi&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit",searchForLocation);







let target="Mumbai";


const fetchResults = async (targetLocation) =>{
  let url = `https://api.weatherapi.com/v1/current.json?key=0e49c92a2ae546d9934135009250612&q=${targetLocation}&aqi=no`;

  const res=await fetch(url);

  const data= await res.json();

  console.log(data);

  let locationName = data.location.name;
  
  let time = data.location.localtime;
  let temp = data.current.temp_c;
  let condition = data.current.condition.text;

  updateWeatherDetails(locationName, time, temp, condition);
  


}


function updateWeatherDetails(locationName, time, temp, condition){
  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  dataField.innerText = time;
  conditionField.innerText = condition;

}



function searchForLocation(e){
  e.preventDefault();
  target=searchField.value;
  fetchResults(target);
}

fetchResults(target);