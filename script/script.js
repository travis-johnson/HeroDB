$(document).ready(function() {
    $('#search_form').submit(function(e) {
        e.preventDefault();
        var search = $('#search').val();
        var settings = {
            "async": true,
            "url": "http://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:" + search + "&field_list=description&format=json",
            "method": "GET"

        }
        $.ajax(settings).done(function(response) {
            var ct = $("#content");
            for (i = 0; i < response.results.length; i++) {
                ct.append(response.results[i].description);


                console.log(response.results[i].description);
                console.log(search);
            }
        });

    });

});

// $("form").submit(function() {
//     var x = $("form");
//     $.ajax({
//         url: "http://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:cyclops&field_list=description",
//         dataType: "html",
//         success: function(response) {
//             $('#content').html(response.results[0]);
//             console.log(response.results[0]);
//         }
//     });

// });