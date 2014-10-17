module.exports = function (grunt) {
  grunt.config.init({
    weather: {
      home: 8712, // Stäfa
      work: 8050  // Zürich, Oerlikon
    }
  });
  grunt.registerMultiTask('weather', 'Fetches weather', function() {
    var done, http, location, request, requestOptions, zipCode;

    location = this.target;
    zipCode = this.data;

    // request options without proxy settings
    var requestOptionsWithoutProxy = {
      host: 'api.openweathermap.org',
      path: '/data/2.5/weather?units=metric&q=' + zipCode,
      port: 80,
      method: 'GET'
    };

    // request options with proxy settings
    //
    var requestOptionsWithProxy = {
      host: 'localhost',
      port: 3128,
      path: 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + zipCode,
      method: 'GET',
      headers: {
        Host: 'openweathermap.org'
      }
    };

//      requestOptions = requestOptionsWithoutProxy;
      requestOptions = requestOptionsWithProxy;

    http = require('http');

    done = this.async();

    request = http.request(requestOptions, function(response) {
      var buffer = [];

      response.on('data', function(data) {
        buffer.push(data);
      });

      response.on('end', function() {
        var weather = JSON.parse(buffer.join());
        console.log(location + ' : ' + weather.main.temp + ' degrees');
        done();
      });
    });
    request.end();
  });
};