var searchTerm = $("#search-term").text;
var numberOfRecords = $("#number-of-records");
var startYear = $("#startYear");
var endYear = $("endYear");
var resultsDiv = $("#results");

var apiKey = "3hN1Jc95ELtBFJb52lnctDanO9AwA1yd";

$("#clear-results").on("click", function() {
    resultsDiv.empty();
})

