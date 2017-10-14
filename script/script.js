var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:punisher&field_list=description&format=json",
    "method": "GET"

}

$.ajax(settings).done(function(response) {
    $("#content").html(response.results[0].description);
    console.log(response.results.description);
});