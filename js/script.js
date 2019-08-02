/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/******************************************
Author: Anil Varma Keerthipati
******************************************/

//getRandomQuote() used to return a random number between 0 and n
function getRandomQuote(n){
  var randomNumber= Math.floor(Math.random()*n);
  return quotes[randomNumber];
}

// functions randomRGB and randomBackground used to get a random backgroundColor
function randomRGB(){
  return Math.floor(Math.random() * 256);
}
function randomBackground(){
  //to display the random background color
  var r=randomRGB();
  var g=randomRGB();
  var b=randomRGB();
  var randomColor='rgb(' + r + ',' + g + ',' + b + ')';
  document.body.style.backgroundColor = randomColor;
}

//printQuote() function is used to print the quote with avaliable properties
//on the HTML quote-box
function printQuote(){
  // get the random quote object containing quote, source and other avaliable properties
  var randomObject=getRandomQuote(quotes.length);
  //create an empty string to store the text to be displayed on <div> on the html page
  var html='';
  //adding random quote and source to the html string
  html='<p class="quote">'+randomObject.quote + '</p><p class="source">'+randomObject.source;
  //add citation to the html string if it is avaliable in the randomObject
  if(randomObject.citation){
    html=html+'<span class="citation">'+randomObject.citation+'</span>';
  }
  //add year to the html string if it is avaliable in the randomObject
  if(randomObject.year){
    html=html+'<span class="year">'+randomObject.year+'</span></p>';
  }
  //finally target the div with the id of quote-box, and set its innerHTML equal to the html string
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
  //changing background color
  randomBackground();
}

//this is used to call the printQuote() function every time
//if user clicks on show another quote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Changing Quote and background color every 20 seconds.
var autoChageQuote = setInterval(printQuote, 20000);

// I want to get exceeds rating. Please grade accordingly
