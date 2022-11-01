async function main() {
  const request = "js/data.json";
  const response = await fetch(request);
  const data = await response.json();
  drawChart(data);
}
main();

const chart = document.querySelectorAll(".amount-chart");
const day = document.querySelectorAll(".day");
const amount = document.querySelectorAll(".amount");
const total = document.querySelector(".total-amount");

let totalCounter = 0;

function drawChart(data) {
  // Getting the week day
  const date = new Date();
  let toDay = date.toLocaleDateString("en-us", { weekday: "short" });

  for (let i = 0; i < chart.length; i++) {
    chart[i].style.height = `${data[i]["amount"] * 3}px`;
    amount[i].textContent = `$${data[i]["amount"]}`;
    day[i].textContent = `${data[i]["day"]}`;
    totalCounter += data[i]["amount"];

    if (day[i].textContent === toDay.toLowerCase()) {
      chart[i].style.backgroundColor = "#76b5bc";
    }
  }

  total.textContent = `$${totalCounter.toFixed(2)}`;
}
