$(document).ready(function() {
    $('#search_form').submit(function(e) {

        e.preventDefault();
        var search = $('#search').val();
        var settings = {
                "async": true,
                "url": "http://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:" + search + "&field_list=description&format=json",
                "method": "GET",
                "Access-Control-Allow-Origin": "https://travis-johnson.github.io/RandomHeroes/"
            }
            //This empties out the content of the div upon each new search
        $("#content").empty();

        $.ajax(settings).done(function(response) {
            var ct = $("#content");
            for (i = 0; i < response.results.length; i++) {
                ct.append(response.results[i].description);
            }
            $("img").addClass("img-fluid");
            $('a').each(function() {
                this.href = this.href.replace('file:///F:', 'https://comicvine.gamespot.com')
            })
        });

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