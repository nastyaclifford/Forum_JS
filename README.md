# JS_Week12
Hometask, JS Week 12, Strings, numbers, Math 

# Вопросы 💎

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?

- *””
- ’’
- `` - можно записывать несколько строк, использовать разные типы данных, задавать переменные через ${}, чего нельзя делать в кавычках ”” и ’’.*

2. Какими методами можно найти подстроку в строке? Приведите пример.

*let sentence = “I study JavaScript”;
- const part = sentence.slice(8,17); // JavaScript
- const part = sentence.substring(8,17); //  JavaScript
- const part = sentence.subsrt(8,10);  //  JavaScript*
3. Самостоятельно разберитесь, зачем нужен специальный символ `\n`?

*Символ перевода строки.*

4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`

*let name = 'настя';
name = name[0].toUpperCase() + name.slice(1);
console.log(name);*

5. Какой из вариантов округления делает это по математическим правилам?

*Math.round()*

6. Как сгенерировать случайное число от 1 до 100? 

*`Math.floor(Math.random() * 101)`*

7. Что выведет в консоль? `*"The string length is 6"*`

```jsx
const x="Солнце";

console.log("The string length is " + x.length)
```

8. Каким будет результат в представленном ниже фрагменте кода? *// ВЕЛОСИПЕД*

```jsx
const upperText="ВелоСипед" ;

document.write(upperText.toUpperCase())
```

9. Каким будет результат в приведенном ниже фрагменте кода? `*"красивые такие розы"*`

```jsx
let str = "розы такие розы"; 

str.replace("розы","красивые")
```

10. Что выведет в консоль? `*"(2,3): cde"*`

```jsx
const str = "abcdefghij";

console.log("(2,3): "    + str.substr(2,3));
```
