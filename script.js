'use strict';

let enter;
const button = document.querySelector('.btn');
let img = document.createElement("img");
img.src = "https://cdn.discordapp.com/attachments/876035186305941524/876127281033138216/dac3bc690788712b.png";
let div = document.createElement('div');


function parol () {
    enter = prompt("Введите пароль", "");
};



while (enter!="Огурец226") {
    parol();

    

    if (enter=="Огурец226") {
        console.log('Сайт работает'); // Проверочный вывод для понятия подключения сайта к html коду

        
        button.addEventListener('click', () => {
            div.append(img);
            document.body.append(div);
        });

    











    };    
};

































