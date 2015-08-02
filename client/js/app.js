$('.jstest').html('Hello World!');

console.log($)
console.log('test')

function get_track_info() {

    $.ajax('/track-info', {
        //cache: false,
        dataType: 'json',
        success: function (data) {
        	console.log(data)
            if (data.title) {
                $('#live-info .album-art').attr('src', data.art.replace('100x100', '400x400'));
                $('#live-info .album-art').attr('alt', data.album);
                $('#live-info .album-art').attr('title', data.album);
                $('#live-info .artist').html(data.artist);
                $('#live-info .title').html(data.title);
            }
        },
        error: function (data) {
        	console.log('error',data);
        }
    });
    setTimeout(function(){get_track_info();}, 10000);
}

get_track_info();