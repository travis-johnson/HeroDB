var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name%3Apunisher&field_list=description",
    "method": "GET",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "ec191fdd-0eb4-cb15-3e89-3d265ea53930"
    }
}

$.ajax(settings).done(function(response) {
    console.log(response);
});