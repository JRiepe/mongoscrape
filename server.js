
// Dependencies:
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('zoo', ['animals'])
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html
var PORT = process.env.PORT || 9000;

require('./routes/routes.js')(app);

// Make a request call to grab the html body from the site of your choice

request('http://www.nationalenquirer.com/', function (error, response, html) {

	// Load the html into cheerio and save it to a var.
  
  var $ = cheerio.load(html);

  // an empty array to save the data that we'll scrape
  var result = [];

  // Select each instance of the html body that you want to scrape.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors, 
  // but be sure to visit the package's npm page to see how it works.
  $('article').each(function(i, element){
      var title = $(this).text();
      var link = $(this).find('a').attr('href');
      // Scrape information from the web page, put it in an object 
      // and add it to the result array. 
      result.push({
        title: title,
        url: link 
      });
  });
  console.log('article.hero')
  console.log(result);
});


app.listen(PORT, function(){
  console.log('listening on port', PORT)
});