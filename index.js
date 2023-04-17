// блок с функциями для отражения / скрытия имени
let removeName = document.querySelector(".checkbox_negative"); //задаем переменную для инпута с радиокнопкой NO
let showName = document.querySelector(".checkbox_positive"); //задаем переменную для инпута с радиокнопкой Yes
removeName.addEventListener("click", () => {
  //функция, которая при отмечании No убирает блок с полем ввода для имени
  let nameField = document.querySelector(".form-name");
  nameField.style.display = "None";
});
showName.addEventListener("click", () => {
  //функция, которая при отмечании Yes возвращает блок с полем ввода для имени
  let nameField = document.querySelector(".form-name");
  nameField.style.display = "";
});

link.onclick = function () {
  let fullName = document.getElementById("name").value; //извлекаем ФИО, которое ввел пользователь
  let arr = fullName.split(" "); // разделяем его на фамилию, имя, отчество
  let lastName = arr[0]; // создаем переменные для имени, фамилии и отчества
  let firstName = arr[1];
  let middleName = arr[2];
  if (arr.length === 3) {
    //создаем оператор, который в зависимости от количества слов (3,2 или иначе)корректирует имя и выводит его обратно в поле
    updatedName = `${lastName[0].toUpperCase()}${lastName
      .slice(1)
      .toLowerCase()} ${firstName[0].toUpperCase()}${firstName
      .slice(1)
      .toLowerCase()} ${middleName[0].toUpperCase()}${middleName
      .slice(1)
      .toLowerCase()}`;
  } else if (arr.length === 2) {
    updatedName = `${lastName[0].toUpperCase()}${lastName
      .slice(1)
      .toLowerCase()} ${firstName[0].toUpperCase()}${firstName
      .slice(1)
      .toLowerCase()}`;
  } else {
    updatedName = `${lastName[0].toUpperCase()}${lastName
      .slice(1)
      .toLowerCase()}`;
  }
  document.getElementById("name").value = updatedName; // изменяем имя на отредактированное в поле ввода при клике на следующее поле ввода
};

let checkSpam = () => {
  //функция по проверке спама
  let userComment = document.getElementById("comment").value; //задаем переменную для комментария и путь к ней
  userComment = userComment.replace(/viagra/gi, "***").replace(/xxx/gi, "***"); // заменяем найденные запрещенные слова
  return `<div id="displayComment" class="display-comment">${userComment}</div>`;
};

let getDate = () => {
  let date = new Date(); // задаем переменную для даты
  return `<div class="display-date">${date}</div>`;
};

let fixUserName = () => {
  //функция получить имя пользователя
  let userName = document.getElementById("name").value; // задаем новую переменную для измененного ФИО
  if (userName.length === 0) {
    // проверяем, если пользовательно не задал имя, то выводим username
    return `<p id="userName" class="userInfo__name">${"username"}</p>`;
  } else {
    return `<p id="userName" class="userInfo__name">${userName}</p>`;
  } //иначе, выводим в область для ФИО новое обработанное значение
};

let getAvatar = () => {
  //функция получить ссылку на аватар
  let photoLink = document.getElementById("link").value; // задаем переменную для ссылки на аватар пользователя
  if (photoLink.length === 0) {
    //создаем условие, которое проверяет, если поле для ссылки аватара пустое, то выполняется условие
    const arr = [
      //создаем массив из картинок, которые будут выводится в рандомном порядке
      "assets/images/greyCat.jpg",
      "assets/images/redCat.jpg",
      "assets/images/softCat.jpg",
      "assets/images/tigreCat.jpg",
      "assets/images/littleCat.jpg",
    ];
    let i = Math.floor(Math.random() * 5); // задаем переменную для вычисления рандомного номера картинки
    let randomPic = arr[i]; // задаем переменную для рандомной картинки и возвращаем рандомную картинку
    return `<div class="userPhoto"><img />
  src='${randomPic}' 
  alt="userPhoto"
  class="userInfo__photo"
  id="photo"
/></div>`;
  } else {
    // иначе возвращаем ссылку на картинку, которую вставил пользователь
    return `<div class="userPhoto"><img 
  src='${photoLink}' 
  alt="userPhoto"
  class="userInfo__photo"
  id="photo"
/></div>`;
  }
};

let totalStringVDom = " "; // задаем переменную, куда будет склеиваться разметка для каждого нового комментария

button.onclick = function () {
  let newDate = getDate(); //возвращает разметку даты
  let newImg = getAvatar(); //возвращает разметку аватарки
  let fixedCom = checkSpam(); //возвращает разметку комментария
  let newUserName = fixUserName(); //возвращает разметку с именем пользователя
  totalStringVDom =
    `<div class="comments-display_newComment"> <div class="display-userInfo"><div class="userInfo_profile">
    ${newImg}
    ${newUserName}</div><div class="display-date">
    ${newDate}</div></div><div class="display-comment">
    ${fixedCom}</div>
  </div>` + totalStringVDom;
  document.querySelector(".comments-display").innerHTML = totalStringVDom; // выводим комментарий
};
