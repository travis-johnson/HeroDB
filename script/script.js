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
            var headImg = $("#header_img");
            var cardTitle = $("#card_title");
            for (i = 0; i < response.results.length; i++) {
                // card.append('<div class="card">'+'<img class="" src='+response.results[i].image.small_url+'>' +'</div>');
              

                desc.append('<div class="result"><div class="row" id="header"><div class="deck col-sm-4"><p>'+ response.results[i].deck +'</p></div><div class="col-sm-4"><h1 class="name">' + response.results[i].name + '</h1>' 
                + '<ul id="head_stats">'+ 
                '<li><h3>First Appeared in </h3><p>'+ response.results[i].first_appeared_in_issue.name + " <br>(Issue No. "+ response.results[i].first_appeared_in_issue.issue_number + ')</p></li>' + 
                '<li> <h3>Real Name: </h3>' + response.results[i].real_name + '</li>'+  
                '</ul> </div> <div class="h_img col-sm-4"><img src= "' + response.results[i].image.small_url + '"> </div></div>' +
                 '<div class="dsc">' + response.results[i].description + '</div></div>');

                
                // headImg.html('<img src= "' + response.results[i].image.small_url + '">');
                // console.log(response.results[i].image.small_url);
                $(".dsc:contains(null)").html("Sorry, no information for this character.");
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