import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new VimeoPlayer(iframe);

const onTimeUpdate = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onTimeUpdate);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const parsedTime = parseFloat(savedTime);
  player.setCurrentTime(parsedTime).catch(error => {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
}
