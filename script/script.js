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
            for (i = 0; i < response.results.length; i++) {


                // desc.append(response.results[i].description);
                desc.append('<div class="result"><h1 class="name">' + response.results[i].name + '</h1>' + '<div class="dsc">' + response.results[i].description + '</div></div>');
                // var replaced = $(".dsc").html().replace('null', 'No Info Available for this character.');
                // $(".dsc").html(replaced);

            }




            $("img").addClass("rounded");
            $('a').each(function() {
                this.href = this.href.replace('file:///F:', 'https://comicvine.gamespot.com')
                this.href = this.href.replace('https://travis-johnson.github.io', 'https://comicvine.gamespot.com')
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