import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(onPlay, 1000));
onCurrentTimeSave();

function onPlay(data) {
  localStorage.setItem(VIDEO_STORAGE_KEY, data.seconds);
}

function onCurrentTimeSave() {
  const time = localStorage.getItem(VIDEO_STORAGE_KEY);
  if (time) {
    player.setCurrentTime(time).then(function (seconds) {
      return;
    });
  }
}
