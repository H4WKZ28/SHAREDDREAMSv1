container = $('.container');
            cover = $('.memory')
            play = $('#play');
            pause = $('#pause');
            mute = $('#mute');
            song = new audio('./audio/feels.mp3' )
            close = $('#close');
            duration = song.duration;

if (song.canPlayType('audio/mpeg;')){

    song.type ="audio/mpeg";
    song.src = './audio/feels.mp3';

    } else {

        song.type = 'audio/wav';
        song.src = './audio/feels.wav';
    }

    play.live ('click', function(e) {

        e.preventDefault();
        song.play();
        container.addClass('audio-player-container');
        memory.addClass('memory');
        $(this).replaceWith(' id="pause"');
		
        $('#close').fadeIn(300);
		$('#seek').attr('max',song.duration);


    });

    pause.live('click, function(e)'); {
            e.preventDefault();
            song.pause();
            $(this).replaceWith('id="play"');    
    
        }