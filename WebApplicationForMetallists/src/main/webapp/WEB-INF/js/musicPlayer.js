// var Player =
//     {
//         isMuted: false,
//         isPlaying: false,
//
//         duration: 0,
//         current: 0,
//
//         mute: function()
//         {
//             this.isMuted = this.isMuted ? false : true;
//             if(window.console) console.log(this.isMuted ? 'Muted' : 'Unmuted');
//
//             return this
//         },
//
//         play: function()
//         {
//             this.isPlaying = this.isPlaying ? false : true;
//             if(window.console) console.log(this.isPlaying ? 'Playing' : 'Paused');
//
//             return this
//         },
//
//         skip: function(d)
//         {
//             if(window.console) console.log('Skipping', d == 'l' ? 'Backwards' : 'Forwards')
//
//             this.current = 0;
//
//             return this
//         },
//
//         vol: function(v)
//         {
//             if(window.console) console.log('Set volume to:', v, '%');
//
//             return this
//         },
//
//         setDuration: function(s)
//         {
//             this.duration = s;
//
//             var m = 0;
//             while(s > 60) { m ++; s -= 60 }
//             while(String(s).length == 1) s = '0' + s;
//
//             $('.music-player > .dash > .info > i > [name="duration"]').html(m + ':' + s);
//
//             return this
//         },
//
//         setCurrent: function(s)
//         {
//             this.current = s;
//
//             var m = 0, pct = this.current / this.duration;
//             while(s > 60) { m ++; s -= 60 }
//             while(String(s).length == 1) s = '0' + s;
//
//             $('.music-player > .dash > .info > i > [name="current"]').html(m + ':' + s);
//
//             $('.music-player > .dash > a[href="#seek"]:not(:active)').each(function()
//             {
//                 var rotate = 'rotate(-' + ((pct * 180) + 90) + 'deg)';
//
//                 $(this).add('.music-player > .dash > .seeker > .wheel > .progress').css(
//                     {
//                         '-webkit-transform': rotate,
//                         '-moz-transform': rotate,
//                         '-ms-transform': rotate,
//                         '-o-transform': rotate,
//                         'transform' : rotate
//                     });
//             });
//
//             return this
//         },
//
//         playing: function()
//         {
//             if(!this.isPlaying)
//                 return this;
//
//             if(this.current > (this.duration - 1))
//                 this.skip('r');
//             else
//                 this.setCurrent(this.current + 1);
//
//             return this
//         }
//     };
//
// $(function()
// {
//     setInterval(function(){ Player.playing() }, 1000);
//     Player.setDuration(230);
//     Player.setCurrent(180);
//
//     Player.play();
//
//     $('.music-player > .dash > a[href="#mute"]').click(function()
//     {
//         $(this).toggleClass('fa-volume-up fa-volume-off');
//         Player.mute();
//
//         return !1;
//     });
//
//     $('.music-player > .dash > .controls > a[href="#play"]').click(function()
//     {
//         $(this).toggleClass('fa-play fa-pause');
//         Player.play();
//
//         return !1;
//     });
//
//     $('.music-player > .dash > .controls > a[href="#back"]').click(function(){ Player.skip('l'); return !1 });
//     $('.music-player > .dash > .controls > a[href="#forward"]').click(function(){ Player.skip('r'); return !1 });
//
//     $('.music-player > .dash > .volume-level').bind('mousemove', function(e)
//     {
//         if($(this).is(':active'))
//         {
//             $(this).find('em').css('width', e.pageX - $(this).offset().left);
//             var vol = $(this).find('em').width() / $(this).width() * 100;
//
//             Player.vol(vol > 100 ? 100 : vol);
//         }
//     });
//
//     $('.music-player').on('mousemove', function(e)
//     {
//         //http://jsfiddle.net/sandeeprajoria/x5APH/11/
//
//         var wheel = $(this).find('.dash > .seeker > .wheel'), rotate,
//             x = (e.pageX - 20) - wheel.offset().left - wheel.width() / 2,
//             y = -1 * ((e.pageY - 20) - wheel.offset().top - wheel.height() / 2),
//             deg = (90 - Math.atan2(y, x) * (180 / Math.PI)), pct, nc, nm = 0;
//         if(deg > 270) deg = 270; else if(deg < 90) deg = 90;
//         rotate = 'rotate(' + deg + 'deg)';
//         pct = deg; pct = 270 - pct; pct = pct / 180;
//         nc = Math.round(Player.duration * pct);
//
//         $(this).find('.dash > a[href="#seek"]:active').each(function()
//         {
//             Player.current = nc;
//             while(nc > 60) { nm ++; nc -= 60 }
//             while(String(nc).length == 1) nc = '0' + nc;
//
//             $('.music-player > .dash > .info > i > [name="current"]').html(nm + ':' + nc);
//
//             $(this).add('.music-player > .dash > .seeker > .wheel > .progress').css(
//                 {
//                     '-webkit-transform': rotate,
//                     '-moz-transform': rotate,
//                     '-ms-transform': rotate,
//                     '-o-transform': rotate,
//                     'transform' : rotate
//                 });
//         });
//     });
// });

/* Music
======================================*/
var playlist = [
    {
        "song"    : "House of the Rising Sun",
        "album"   : "The Animals",
        "artist"  : "The Animals",
        "artwork" : "http://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Rising_sun_animals_US.jpg/220px-Rising_sun_animals_US.jpg",
        "mp3"     : "http://retro-disko.ru/6/music/016.mp3"
    },
    {
        "song"    : "Superstition",
        "album"   : "Talking Book",
        "artist"  : "Stevie Wonder",
        "artwork" : "https://i.imgur.com/Py4XcBT.png",
        "mp3"     : "http://vocaroo.com/media_command.php?media=s1WYNvqulYH9&command=download_mp3"
    },
    {
        "song"    : "I Need You Back",
        "album"   : "Premiere",
        "artist"  : "The Noisy Freaks",
        "artwork" : "http://i1285.photobucket.com/albums/a583/TheGreatOzz1/Hosted-Images/Noisy-Freeks-Image_zps4kilrxml.png",
        "mp3"     : "http://kirkbyo.net/Assets/The-Noisy-Freaks.mp3"
    }
];

/* General Load / Variables
======================================*/
var rot = 0;
var duration;
var playPercent;
var rotate_timer;
var armrot = -45;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
var arm = document.getElementById("arm");
var next = document.getElementById("next");
var song = document.getElementById("song");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var album = document.getElementById("album");
var artist = document.getElementById("artist");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
var artwork = document.getElementsByClassName("artwork")[0];
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", 	bufferUpdate, false);
load();

/* Functions
======================================*/
function load(){
    pauseButton.style.visibility = "hidden";
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "background:url(https://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
    music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    music.load();
}
function reset(){
    rotate_reset = setInterval(function(){
        Rotate();
        if(rot == 0){
            clearTimeout(rotate_reset);
        }
    }, 1);
    fireEvent(pauseButton, 'click');
    armrot = -45;
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "background:url(https://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
    music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    music.load();
}
function formatSecondsAsTime(secs, format) {
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
    if (sec < 10){
        sec  = "0" + sec;
    }
    return min + ':' + sec;
}
function timeUpdate() {
    bufferUpdate();
    playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.width = playPercent + "px";
    timer.innerHTML = formatSecondsAsTime(music.currentTime.toString());
}
function bufferUpdate() {
    bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
    bufferhead.style.width = bufferPercent + "px";
}
function Rotate(){
    if(rot == 361){
        artwork.style.transform = 'rotate(0deg)';
        rot = 0;
    } else {
        artwork.style.transform = 'rotate('+rot+'deg)';
        rot++;
    }
}
function RotateArm(){
    if(armrot > -12){
        arm.style.transform = 'rotate(-38deg)';
        armrot = -45;
    } else {
        arm.style.transform = 'rotate('+armrot+'deg)';
        armrot = armrot + (26 / duration);
    }
}
function fireEvent(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function _next(){
    if(currentSong == playlist.length - 1){
        reset();
    } else {
        fireEvent(next, 'click');
    }
}
playButton.onclick = function() {
    music.play();
}
pauseButton.onclick = function() {
    music.pause();
}
music.addEventListener("play", function () {
    playButton.style.visibility = "hidden";
    pause.style.visibility = "visible";
    rotate_timer = setInterval(function(){
        if(!music.paused && !music.ended && 0 < music.currentTime){
            Rotate();
        }
    }, 10);
    if(armrot != -45){
        arm.setAttribute("style", "transition: transform 800ms;");
        arm.style.transform = 'rotate('+armrot+'deg)';
    }
    arm_rotate_timer = setInterval(function(){
        if(!music.paused && !music.ended && 0 < music.currentTime){
            if(armrot == -45){
                arm.setAttribute("style", "transition: transform 800ms;");
                arm.style.transform = 'rotate(-38deg)';
                armrot = -38;
            }
            if(arm.style.transition != ""){
                setTimeout(function(){
                    arm.style.transition = "";
                }, 1000);
            }
            RotateArm();
        }
    }, 1000);
}, false);
music.addEventListener("pause", function () {
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    playButton.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
}, false);
next.onclick = function(){
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    arm.style.transform = 'rotate(-45deg)';
    armrot = -45;
    if((currentSong + 1) == playlist.length){
        currentSong = 0;
        music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    } else {
        currentSong++;
        music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    }
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "transform: rotate("+rot+"deg); background:url(https://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
    music.load();
    duration = music.duration;
    music.play();
}
previous.onclick = function(){
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    arm.style.transform = 'rotate(-45deg)';
    armrot = -45;
    if((currentSong - 1) == -1){
        currentSong = playlist.length - 1;
        music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    } else {
        currentSong--;
        music.innerHTML = '<source src="'+playlist[currentSong]['mp3']+'" type="audio/mp3">';
    }
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "transform: rotate("+rot+"deg); background:url(https://i.imgur.com/3idGgyU.png), url('"+playlist[currentSong]['artwork']+"') center no-repeat;");
    music.load();
    duration = music.duration;
    music.play();
}
volume.oninput = function(){
    music.volume = volume.value;
    visablevolume.style.width = (80 - 11) * volume.value + "px";
}
music.addEventListener("canplay", function () {
    duration = music.duration;
}, false);