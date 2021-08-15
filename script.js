'use strict';

let enter;
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');





let a;
let img1 = document.createElement("img");
img1.src = "https://cdn.discordapp.com/attachments/876035186305941524/876127281033138216/dac3bc690788712b.png";
img1.width = "800";
let div = document.createElement('div');






function parol () {
    enter = prompt("Введите пароль", "");
};



while (enter!="Огурец226") {
    parol();

    

    if (enter=="Огурец226") {
        console.log('Сайт работает'); // Проверочный вывод для понятия подключения сайта к html коду

        
        btn.addEventListener('click', () => {
        div.append(img1);
        document.body.append(div);
        });

        btn1.addEventListener('click', () => {
            alert("Все ок");

        });

        btn2.addEventListener('click', () => {
            alert("Это 3 кнопка");
        });

        btn3.addEventListener('dblclick', () => {
            window.location.replace('https://www.youtube.com/channel/UC45_tmUzeXEV4UoN1XMY44A');
        });



    











    };    
};































