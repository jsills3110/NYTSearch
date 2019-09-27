var searchTerm = $("#search-term");
var numberOfRecords = $("#number-of-records");
var startYear = $("#startYear");
var endYear = $("endYear");
var resultsDiv = $("#results");

$("#clear-results").on("click", function() {
    resultsDiv.empty();
})

