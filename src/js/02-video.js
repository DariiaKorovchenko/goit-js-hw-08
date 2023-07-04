import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(onPlay, 1000));
onCurrentTimeSave();

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

function onCurrentTimeSave() {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time).then(function (seconds) {
      return;
    });
  }
}
