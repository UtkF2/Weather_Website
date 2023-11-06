async function fetchData(city) {
  const apiKey = "c077554941msh42e0e88a7310304p19ceaajsn58c59c49cbfc"; // Replace with your RapidAPI key
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Update the card elements with the fetched data
    document.getElementById("cityName").textContent = city.toUpperCase();
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${data.temp}°C`;
    document.getElementById(
      "feelsLike"
    ).textContent = `Feels like: ${data.feels_like}°C`;
    document.getElementById(
      "humidity"
    ).textContent = `Humidity: ${data.humidity}%`;
    document.getElementById(
      "minMaxTemp"
    ).textContent = `Min/Max Temperature: ${data.min_temp}°C / ${data.max_temp}°C`;
    document.getElementById(
      "wind"
    ).textContent = `Wind: ${data.wind_speed} m/s, ${data.wind_degrees}°`;
    document.getElementById("sunrise").textContent = `Sunrise: ${new Date(
      data.sunrise * 1000
    ).toLocaleTimeString()}`;
    document.getElementById("sunset").textContent = `Sunset: ${new Date(
      data.sunset * 1000
    ).toLocaleTimeString()}`;
  } catch (error) {
    console.error(error);
  }
}

// Function to handle the search button click
document.getElementById("searchButton").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const searchInput = document.getElementById("searchInput").value;
  if (searchInput.trim() !== "") {
    // Only fetch data when the search input is not empty
    fetchData(searchInput);
  }
});

// Initial page load: Fetch weather data for Delhi
var defaultCity = "Delhi";
fetchData(defaultCity);

setInterval(() => {
  var newdate = new Date();
  var newhr = newdate.getHours();
  var mm = newhr < 12 ? "AM" : "PM";
  newhr = newhr > 12 ? newhr - 12 : newhr;
  var newmin = newdate.getMinutes();
  var newsec = newdate.getSeconds();
  var col = ["red", "blue", "green"];
  document.getElementById("time").style.color = col[newsec % 3];
  document.getElementById("time").style.backgroundColor = "aqua";
  document.getElementById("time").style.textAlign = "center";

  document.getElementById(
    "time"
  ).innerHTML = `${newhr} : ${newmin} : ${newsec} ${mm}`;
}, 1000);
