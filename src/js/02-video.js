import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframeEl = document.querySelector("iframe");
// делаем переменную и записываем ссылку на iframe

const player = new VimeoPlayer(iframeEl);
// деалем экземпляр player класса VimeoPlayer (который импортируем из библиотеки)

const SAVED_TIME = "videoplayer-current-time";
// создаем константу для ключа локального хранилища

const onPlay = function (data) {
  console.log("просмотр видео на", parseInt(data.seconds), "секунде");
  localStorage.setItem(SAVED_TIME, JSON.stringify(data.seconds));
  //записуем показатели текущего времени просмотра в локальное хранилище
};
// создаем функциядля сохранения времени просмотра в локальное хранилище

player.on("timeupdate", throttle(onPlay, 1000));
// player + метод on c timeupdate ==> ничинаем отслеживать событие каждую секунду (throttle из lodash нам в помощь)
if (!JSON.parse(localStorage.getItem(SAVED_TIME))) {
  console.log("У нас нет сохраненого времени");
  //если в локальное хранилище нечего не записано
} else {
  console.log(
    "проигрывание видео начнеться с",
    parseInt(JSON.parse(localStorage.getItem(SAVED_TIME)))
  );
  player.setCurrentTime(JSON.parse(localStorage.getItem(SAVED_TIME)));
  // если локальное хранилице не пустое то запускаем, player + метод setCurrentTime который воспроизводит видео с последнего места остановки
}
