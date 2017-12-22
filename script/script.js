$(document).ready(function() {
    $('#search_form').submit(function(e) {

        e.preventDefault();
        var search = $('#search').val();
        var proxy = 'https://cors-anywhere.herokuapp.com/';

        var settings = {
                "async": true,
                "url": proxy + "https://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:" + search + "&format=json",
                "method": "GET",
                "contentType": "text/plain"


            }
            //This empties out the content of the div upon each new search

        $("#desc").empty();
        $.ajax(settings).done(function(response) {
            var desc = $("#desc");
            var card = $("#result_card");
            var cardImg = $("#card_img");
            var cardTitle = $("#card_title");
            for (i = 0; i < response.results.length; i++) {
              
                // card.append('<div class="card">'+'<img class="" src='+response.results[i].image.small_url+'>' +'</div>');
                // desc.append(response.results[i].description);
                desc.append('<div class="result"><h1 class="name">' + response.results[i].name + '</h1>' + '<div class="dsc">' + response.results[i].description + '</div></div>');
            }
            
            $("img").addClass("rounded");
            $('a').each(function() {
                this.href = this.href.replace('file:///F:', 'https://comicvine.gamespot.com')
                this.href = this.href.replace('https://travis-johnson.github.io', 'https://comicvine.gamespot.com')
            })
        }).fail(function(response) {
            $("#desc").append('<h1>NO RESULTS FOUND</h1></br><h2 class="text-center">Try making a more specific request</h2>')
        })

    });


    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.to-top').fadeIn(200);
        } else {
            $('.to-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.to-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});