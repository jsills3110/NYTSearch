
    // Grabbing and storing the search term (temp tester term)
    var searchTerm  = "Roosevelt";
    // $("term").val();
    var limit = 5;
    // $("limit").val();
    var filters = "pub_year('1923')";

    // example to play off of
    // fq=news_desk:("Sports") AND glocations:("NEW YORK CITY")

    // Constructing a queryURL using the search term
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +searchTerm +"&fq=" + filters +"&api-key=muGcCiFCyAcrCUHr9wU1tQbNTvHzkFjd"


    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });