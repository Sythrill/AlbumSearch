$(document).ready(function () {

    var spotifyAPI = "https://api.spotify.com/v1/search" // needs end point
    var albumsList = $('#albums');

    $('#search').click(searchAlbums);
    $('#next').click(nextPage);
    function searchAlbums() {
        $.ajax({
            url: spotifyAPI,
            method: 'GET',
            data: {
                "query": "*%20genre:" + $('#genre').val(),
                "type": "artist",
                "limit": "20"
            },
            success: displayAlbums
        });
    };

    function displayAlbums(resp) {
        $.each(resp.artists.items, function (i, item) {
            $('<img src ="' + item.images[2].url + '" class="image is-128x128">').appendTo(albumsList);
        });
    };
});