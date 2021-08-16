'use strict';

let enter;
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');


// let i1;
// let i2;

let vNews;
let vDrows;
let vCakes;


let a;
// let img1 = document.createElement("img");
// img1.src = "https://cdn.discordapp.com/attachments/876035186305941524/876127281033138216/dac3bc690788712b.png";
// img1.width = "800";
// let div = document.createElement('div');

// let img2 = document.createElement("img");
// img2.src = "https://cdn.discordapp.com/attachments/876035186305941524/876370883051130911/IMG_20210815_124233.jpg";
// img2.width = "800";
// let div2 = document.createElement('div');








function parol () {
    enter = prompt("Введите пароль", "");
};



while (enter!="Огурец226") {
    parol();

    

    if (enter=="Огурец226") {
        console.log('Сайт работает'); // Проверочный вывод для понятия подключения сайта к html коду

        
        function news() {
            btn.addEventListener('click', () => {

                vNews = confirm("Хотите перейти на другую вкладку 'Новости'?");
                if (vNews==true) {
                    window.location.replace('https://sub-zerro.github.io/News/');
                };
                
        });
        };

        
        function cakes() {
            btn1.addEventListener('click', () => {

                vCakes = confirm("Хотите перейти на другую вкладку 'Рисунки тортиков'?");
                if (vCakes==true) {
                    window.location.replace('https://sub-zerro.github.io/Cakes/');
                };

            });
        };
        

        
        function drows() {
            
            btn2.addEventListener('click', () => {
                vDrows = confirm("Хотите перейти на другую вкладку 'Просто рисунки'?");
                if (vDrows==true) {
                    window.location.replace('https://sub-zerro.github.io/Drows/');
                };
            });

        };
        

        btn3.addEventListener('dblclick', () => {
            window.location.replace('https://www.youtube.com/channel/UC45_tmUzeXEV4UoN1XMY44A');
        });

    
        news();
        drows();
        cakes();









    };    
};






























