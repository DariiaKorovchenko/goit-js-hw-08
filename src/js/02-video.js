import _ from 'lodash';

export const iframe = document.querySelector('iframe');
export const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(onPlay, 1000));
onCurrentTimeSave();

export function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

export function onCurrentTimeSave() {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time).then(function (seconds) {
    return;
  });
}
