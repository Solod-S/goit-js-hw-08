import throttle from "lodash.throttle";
import { object } from "webidl-conversions";
// импортировал метод из библиотеки лодлаш (предварительно был скачан с помощью npm)
import "../css/03-feedback.css";
import "../css/common.css";

const STORAGE_KEY = "inputLocallStorageKey";
const feedback = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textArea: document.querySelector(".feedback-form textarea"),
  formData: { ...JSON.parse(localStorage.getItem(STORAGE_KEY)) },
  // по умолчанию берет данные из локал стоража
  onFormSubmit(event) {
    event.preventDefault();
    // стоп стандартному действию (перезагрузка)
    console.log("Мы собрали данные");
    event.target.reset();
    //сброс всех полей
    localStorage.removeItem(STORAGE_KEY);
    //очистка локального хранилища
  },
  onFormInput(event) {
    feedback.formData[event.target.name] = event.target.value;
    // в feedback.formData создаем ключ (event.target.name ==> в нашей feedback.formData.email или feedback.formData.message), если оно есть то не создаем + записываем значение event.target.value (то что вбиваем в поля)
    console.log(feedback.formData);
    // console.log((feedback.formData[event.target.name] = event.target.value));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback.formData));
    // переделываем в JSON {email: "value", message: "value"} ==> {"email": "value", "message": "value"} и записываем в локальное хранилище STORAGE_KEY
  },

  populateTextareaMulti() {
    const message = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // возвращаем JSON в обычный объект и записываем в переменную

    if (!message) {
      return;
    }

    // если в localStorage нет интирисующей нас записи то заканчиваем функцию
    if (message.message) {
      feedback.textArea.value = message.message;
    }
    // вносим данные в поле ввода из message: "value" ЕСЛИ ОНИ ЕСТЬ))
    if (message.email) {
      feedback.input.value = message.email;
    }
    // вносим данные в поле ввода из email: "value" ЕСЛИ ОНИ ЕСТЬ))
  },
};

feedback.populateTextareaMulti();
// запускаем функцию которая заполняет поля из localStorage
feedback.form.addEventListener("submit", feedback.onFormSubmit);
// запускаем слушателя событий на отправку формы + колбек функцию
feedback.form.addEventListener("input", throttle(feedback.onFormInput, 500));
// запускаем слушателя событий на заполнение форм + колбек функцию + lodash.throttle (задержка 500 секунд)
