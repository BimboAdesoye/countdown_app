// console.log("Hello World");

// let samData = {
//   fullName: "Sam",
//   mass: 76,
//   height: 1.99,
//   calcBMI: function () {
//     let BMI = (this.mass / this.height) ** 2;
//     return BMI;
//   },
// };

// let samBMI = samData.calcBMI();
// console.log(samBMI);

// let christyData = {
//   fullName: "Christy",
//   mass: 80,
//   height: 2.1,
//   calcBMI: function () {
//     let BMI = (this.mass / this.height) ** 2;
//     return BMI;
//   },
// };

// let christyBMI = christyData.calcBMI();
// console.log(christyBMI);

// if (samBMI > christyBMI) {
//   console.log(`Sam BMI (${samBMI}) is higher than Christy BMI (${christyBMI})`);
// } else {
//   console.log(`Christy BMI (${christyBMI}) is higher than Sam BMI (${samBMI})`);
// }

// const companies = [
//   { name: "company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "company Eight", category: "technology", start: 1981, end: 1989 },
// ];

// let companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// let billValue = 430;
// let tip;

// billValue >= 50 && billValue <= 300
//   ? (tip = (billValue * 15) / 100)
//   : (tip = (billValue * 20) / 100);

// console.log(
//   `The bill was ${billValue}, the tip was ${tip} and the total value was ${
//     billValue + tip
//   }`
// );

// if (billValue >= 50 && billValue <= 300) {
//   tip = (billValue * 15) / 100;
// } else {
//   tip = (billValue * 20) / 100;
// }

// Date
// console.log(new Date());
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let xx = document.querySelector("#hours");
let xy = document.querySelector("#days");
const newYears = "1 Jan 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

countdown();
setInterval(countdown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
