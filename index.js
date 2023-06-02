const displayYear = document.querySelector("#displayYear");
const displayMonth = document.querySelector("#displayYear");
const displayDays = document.querySelector("#displayYear");

const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace", "Tab"];


// DateDiff js native From stackeroverflow : https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript - Mordred
 
function dateDiff(startingDate, endingDate) {
  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
    endingDate = new Date().toISOString().substring(0, 10); // need date in YYYY-MM-DD format
  }
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();
  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }

    
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  const dateObj = {
    years: yearDiff,
    months: monthDiff,
    days: dayDiff
  }
  return dateObj;
}

// Verify key pressed on input
year.addEventListener('keydown', (event) =>{
  if(!validKeys.includes(event.key)){
    event.preventDefault();
  }
})
month.addEventListener('keydown', (event) =>{
  if(!validKeys.includes(event.key)){
    event.preventDefault();
  }
})
day.addEventListener('keydown', (event) =>{
  if(!validKeys.includes(event.key)){
    event.preventDefault();
  }
})

function yearValidate(y){
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if(y < 0 || y > currentYear || isNaN(y)){
    year.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
    year.style.borderColor = 'hsl(0, 100%, 67%)';
    year.nextElementSibling.style.display = "block";
    return false
  }else{
    year.previousElementSibling.style.color = '';
    year.style.borderColor = '';
    year.nextElementSibling.style.display = "";
    return true
  }
}

function dayValidate(d,m){
  const maxDays = {
    1: 31, // Janeiro
    2: 28, // Fevereiro (considerando não bissexto)
    3: 31, // Março
    4: 30, // Abril
    5: 31, // Maio
    6: 30, // Junho
    7: 31, // Julho
    8: 31, // Agosto
    9: 30, // Setembro
    10: 31, // Outubro
    11: 30, // Novembro
    12: 31 // Dezembro
  };

  if(d < 1 || d > maxDays[m] || d > 31 || isNaN(d)){
    day.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
    day.style.borderColor = 'hsl(0, 100%, 67%)';
    day.nextElementSibling.style.display = "block";
    return false;
  }else{
    day.previousElementSibling.style.color = '';
    day.style.borderColor = '';
    day.nextElementSibling.style.display = "";
    return true
  }
}

function monthValidate(m){  
  if(m < 1 || m > 12 || isNaN(m)){
    month.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
    month.style.borderColor = 'hsl(0, 100%, 67%)';
    month.nextElementSibling.style.display = "block";
    return false;
  }else{
    month.previousElementSibling.style.color = '';
    month.style.borderColor = '';
    month.nextElementSibling.style.display = "";
    return true;
  }
}

function dateHandler(d, m, y){
  d = parseInt(d);
  m = parseInt(m);
  y = parseInt(y);
  
  const isDay = dayValidate(d,m);
  const isMonth = monthValidate(m);
  const isYear = yearValidate(y);

  if(isDay && isMonth && isYear){
    const currentDate = new Date();
    const inputDate = new Date();
    inputDate.setFullYear(y);
    inputDate.setMonth(m - 1);
    inputDate.setDate(d);

    const dateDifference = dateDiff(inputDate, currentDate);
  // console.log(dateDifference.years + ' y ' + dateDifference.months + ' m ' + dateDifference.days + ' d');
    document.querySelector('#displayYear').innerHTML = dateDifference.years;
    document.querySelector('#displayMonth').innerHTML = dateDifference.months;
    document.querySelector('#displayDays').innerHTML = dateDifference.days;
    
  }

  console.log(`Dia ${d}, mês ${m}, ano ${y}`);
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
})

document.querySelector("button[type='submit']").addEventListener('click', (ev) =>{
  dateHandler(day.value, month.value, year.value);
})

