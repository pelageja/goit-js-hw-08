import Player from '@vimeo/player';
   import throttle from 'lodash.throttle';



    const iframe = document.querySelector('iframe');
     const player = new Player(iframe);

   
    player.on('timeupdate', throttle(onPlay, 1000));  

player.on('timeupdate', function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    player.setCurrentTime(JSON.parse(savedTime))
}








