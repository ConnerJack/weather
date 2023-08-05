let data = [];
let container = document.getElementById("cardsContainer");

const fetchData = async () => {
  let apikey = "abe3b5a954e4a2e54ec7f1417333b006";
  const textField = document.getElementById("search");

  const searchData = data.filter((item) => {
    return item.name.toLowerCase() == textField.value.toLowerCase();
  });
  if (textField.value) {
    if (searchData.length == 0) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${textField.value.toLowerCase()}&appid=${apikey}&units=metric`
      );
      d = await res.json();
      data.push(d);
      // console.log(d);
      shodData();
    } else {
        alert("Data already exist" );
    }
  } else {
    alert("Enter city name");
  }
};

const shodData = () => {
  if (data.length > 0) {
    container.innerHTML = "";
    data = data.sort((a, b) => {
      return a.main.temp - b.main.temp;
    });
    console.log(data);
    data.map((item) => {
      var cardDiv = document.createElement("div");
      cardDiv.innerHTML = `<div class="card">
      <div class="cardback">
      </div>
    <div class="left">
      <div class="tempDiv"><h1>${item.main.temp}&deg;</h1></div>
      <div class="location">
        <p class="coordinates">H:${item.coord.lon}</p>
        <p class="coordinates">L:${item.coord.lat}</p>
      </div>
      <div class="locationheader"><p>${item.name}, ${item.sys.country}</p></div>
    </div>
    <div class="right">
      
    
   <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
   <p>${item.weather[0].description}</p>
      
     
    </div>
  </div>`;
      container.appendChild(cardDiv);
    });
  }
};
