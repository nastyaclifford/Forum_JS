link.onclick = function () {
  let fullName = document.getElementById("name").value; //извлекаем ФИО, которое ввел пользователь
  let arr = fullName.split(" "); // разделяем его на фамилию, имя, отчество
  let lastName = arr[0]; // создаем переменные для имени, фамилии и отчества
  let firstName = arr[1];
  let middleName = arr[2];
  updatedName = `${lastName[0].toUpperCase()}${lastName // присваиваем переменной новое значение, которое корректирует регистры и пробелы
    .slice(1)
    .toLowerCase()} ${firstName[0].toUpperCase()}${firstName
    .slice(1)
    .toLowerCase()} ${middleName[0].toUpperCase()}${middleName
    .slice(1)
    .toLowerCase()}`;
  document.getElementById("name").value = updatedName; // изменяем имя на отредактированное в поле ввода при клике на следующее поле ввода
};

function checkSpam() {
  //функция по проверке спама
  let userComment = document.getElementById("comment").value; //задаем переменную для комментария и путь к ней
  userComment = userComment.replace(/viagra/gi, "***").replace(/xxx/gi, "***"); // заменяем найденные запрещенные слова
  document.getElementById("displayComment").innerHTML = userComment; //выводим строку с измененным словом или оставляем прежний
}

button.onclick = function () {
  let userName = document.getElementById("name").value; // задаем новую переменную для измененного ФИО
  let photoLink = document.getElementById("link").value; // задаем переменную для ссылки на аватар пользователя
  document.getElementById("userName").innerHTML = userName;
  //выводим в область для ФИО новое обработанное значение
  document.getElementById("photo").src = photoLink; //меняем src для аватара пользователя
  checkSpam(); //вызываем функцию на проверку спама и вывод комментария пользователя
};
