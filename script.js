'use strict';

let enter;
const button = document.querySelector('.btn');


function parol () {
    enter = prompt("Введите пароль", "");
};



while (enter!="Огурец226") {
    parol();

    

    if (enter=="Огурец226") {
        console.log('Сайт работает'); // Проверочный вывод для понятия подключения сайта к html коду

        
        button.addEventListener('click', () => {
            alert("Новых новостей пока что нет(");
        });

    











    };    
};


































