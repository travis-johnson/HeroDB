

  $('#search_form').submit(function(e) {
    
            e.preventDefault();
            var search = $('#search').val();
            var proxy = 'https://cors-anywhere.herokuapp.com/';
            var cardImg = $("#card_img");
            var cardTitle = $("#card_title");
            var settings = {
                    "async": true,
                    "url": proxy + "https://comicvine.gamespot.com/api/characters/?api_key=ee0dbaffd32c89c6a7b8e9745670e0fbe379e3c0&filter=name:" + search + "&format=json",
                    "method": "GET",
                    "contentType": "text/plain"    
                }
                //This empties out the content of the div upon each new search
    
            $.ajax(settings).done(function(response) {
               
                for (i = 0; i < response.results.length; i++) {            
                    var card = $("#result_card");

                  $(card).append(
                    //   cardImg.attr('src',response.results[i].image.small_url),
                    //   cardTitle.append(response.results[i].name)
                    
                    '<div class="card"> '+
                    '<img '+ 'src=' + response.results[i].image.screen_url + ' id="card_img"'+' class="card-img-top">'+
                    ' <div class="card-block">'+
                    '<h4 id="card_title" class="card-title">'+ response.results[i].name +'</h4>'+
                    '<a class="btn btn-primary">Learn More</a>'+
                    '</div>'
                  );
                
                }
            })
    
        });