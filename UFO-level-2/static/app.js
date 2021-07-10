// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Loop Through `data` and console.log each weather report object
tableData.forEach(ufoReport => {
    
//Use d3 to append one table row `tr` for each ufo report object
    var row =  tbody.append('tr');

//Use `Object.entries` to console.log each ufo report value
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        //Use d3 to append 1 cell per ufo report value
        var cell = row.append('td');

        cell.text(value);
    });

});


// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("form");

form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input elements and get the raw HTML node
    var inputElement = d3.select('.form-control');
    // var inputCity = d3.select('#city');
    // var inputState = d3.select('#state');
    // var inputCountry = d3.select('#country');
    // var inputShape = d3.select('#shape');
    // Get the value property of the input element
    var inputValue = inputElement.property('value');
    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue); 
    console.log(inputValue);
    console.log(tableData);

    tbody.html("")

    filteredData.forEach(ufoReport => {
    
        //Use d3 to append one table row `tr` for each ufo report object
            var row =  tbody.append('tr');
        
        //Use `Object.entries` to console.log each ufo report value
            Object.entries(ufoReport).forEach(function([key, value]){
                console.log(key, value);
                //Use d3 to append 1 cell per ufo report value
                var cell = row.append('td');
        
                cell.text(value);
            });
        
        });

};




