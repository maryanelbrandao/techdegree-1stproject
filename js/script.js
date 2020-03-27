/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Array of dictionary containing the quotes and releated data.
 * 
***/
let quotes = [
  {
    quote:'"There is nothing permanent except change."',
    source: 'Heraclitus, Greek philosopher',
    citation: "Not found",
    year: "Not found",
    category: 'Philosofy'
  }, 
  {
    quote: '"When life gets you down, you know what you gotta do? Just keep swimming."',
    source: 'Dory',
    citation: 'Finding Nemo',
    year: 2003,
    category: 'Movie'
  },
  {
    quote: '"Your focus determines your reality."',
    source: 'Qui-Gon Jinn',
    citation: 'Star Wars: Episode I - The Pahntom Menace',
    year: 1999,
    category: 'Movie'
  },
  {
    quote: ' "The force will be with you. Always."',
    source: 'Obi-Wan Kenobi',
    citation: 'Movie: A New Hope.',
    year: 1977,
    category: 'Movie'
  },
  {
    quote: '"There is no place like home."',
    source: "Not found",
    citation: 'Movie: The Wizard of Oz ',
    year: 1997,
    category: 'Movie'
  }
];


/***
 * Array with HTML color codes.
 ***/
bg_colors = ['#ff3352', '#ff33ca', '#8333ff', '#333cff', '#33ffc1', '#ecff33', '#d22f1c'];


/***
 * `getRandomQuote` function 
 * This function receive an array of quotes.
 * Generate a random number.
 * Return a random quote. 
***/
function getRandomQuote(quotes_list){
  let randomNumber = Math.floor(Math.random() * quotes_list.length);
  
  return quotes_list[randomNumber];
}


/***
 * `getRandomBgColor` function
 * This function receive an array of colors.
 * Generate a random number and return a random color.
 ***/
function getRandomBgColor(bg_color_list){
  let randomNumber = Math.floor(Math.random() * bg_color_list.length);
  
  return bg_color_list[randomNumber];
}


/***
 * `printQuote` function 
 * This function return a HTML with random quote and color.
***/
function printQuote(){
  
  let quotes_citations = getRandomQuote(quotes);
  let bg_color = getRandomBgColor(bg_colors);
  let htmlquotes = '';
  
  htmlquotes += '<p class="quote">' + quotes_citations.quote + '</p>';
  htmlquotes += '<p class="source">' + quotes_citations.source;
  htmlquotes += '<span class="citation">' + quotes_citations.citation + '</span>';
  htmlquotes += '<span class="year">' + quotes_citations.year + '</span>';
  htmlquotes += '<span class="category">' + quotes_citations.category + ' </span>'; 
  htmlquotes += '</p>';
  document.body.style.background = bg_color;
  document.getElementById('quote-box').innerHTML = htmlquotes;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);