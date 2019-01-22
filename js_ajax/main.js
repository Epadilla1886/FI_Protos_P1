//Create GLOBAL variable below here on line 2

var global_result;

$(document).ready(initializeApp);

function initializeApp(){
    $('button').click(getData);
}

function getData(){
    console.log('1) getData called from button click');
    var ajaxConfig = {
        dataType: 'json',
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
        success: function (result) {
            global_result = result;
            console.log('2) AJAX Success function called, with the following result:', result);
            var firstMovieInfo = global_result.feed.entry[0]['im:image'][2]; // 3rd image of first movie

            for (var index = 0; index < 10; index++) {
                var movieImage = global_result.feed.entry[index]['im:image'][2].label;
                var movieTitle = global_result.feed.entry[index]['im:name'].label;
                var movieDirector = global_result.feed.entry[index]['im:artist'].label;

                    $('#main').append($('<img>').attr('src',movieImage));
                    $('#main').append($('<div>').text(movieTitle));
                    $('#main').append($('<div>').text(movieDirector));
                }
            }
        }



    console.log('3) Making AJAX request');
    $.ajax(ajaxConfig);

    console.log('4) End of getData');

}