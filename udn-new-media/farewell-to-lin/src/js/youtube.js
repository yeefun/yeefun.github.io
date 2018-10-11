/* eslint-disable */
const tagContainYoutubeAPI = document.createElement('script');
tagContainYoutubeAPI.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tagContainYoutubeAPI, firstScriptTag);

var firstYoutube;

function onYouTubeIframeAPIReady() {
  // console.log('hey');
  firstYoutube = new YT.Player('first-youtube');
  // console.log(firstYoutube);
};
/* eslint-enable */
