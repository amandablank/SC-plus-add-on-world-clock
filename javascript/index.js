function updateTime() {
  //Ushuaia
  let ushuaiaElement = document.querySelector("#ushuaia");
  if (ushuaiaElement) {
    let ushuaiaDateElement = ushuaiaElement.querySelector(".date");
    let ushuaiaTimeElement = ushuaiaElement.querySelector(".time");
    let ushuaiaTime = moment().tz("America/Argentina/Ushuaia");

    ushuaiaDateElement.innerHTML = ushuaiaTime.format("dddd, MMMM Do, YYYY");
    ushuaiaTimeElement.innerHTML = ushuaiaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Athens
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("dddd, MMMM Do, YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "local-timezone") {
    cityTimeZone = moment.tz.guess();
  }
  if (cityTimeZone) {
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city no-border" id="${cityName}">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} 
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
    <div class="back-btn">
    <a href="/">
      --->> Back to homepage <<---
    </a>
    </div>
    `;

    setTimeout(() => updateCity(event), 1000);
  }
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
