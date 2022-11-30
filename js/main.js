//ADVANTAGES
let elOne = document.querySelector('.el-1');
let elTwo = document.querySelector('.el-2');
let elThree = document.querySelector('.el-3');
let elFour = document.querySelector('.el-4');
let elFive = document.querySelector('.el-5');
let elSix = document.querySelector('.el-6');
let elSeven = document.querySelector('.el-7');
let elEight = document.querySelector('.el-8');
let elNine = document.querySelector('.el-9');

let advBcg = document.querySelector('.advantages__img');
let advSub = document.querySelector('.advantages__subtitle');
let advDes = document.querySelector('.advantages__description');

elOne.onclick = function (one) {
    advBcg.className = 'advantages__img img0';
    advSub.innerHTML = 'Вся система в браузере';
    advDes.innerHTML = 'Вам больше не нужно покупать VDS. Бот автоматически устанавливается на выделенный сервер, доступ к которому осуществляется через веб-интерфейс в браузере.'
    elOne.style.opacity ='1';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elTwo.onclick = function (two) {
    advBcg.className = 'advantages__img img1';
    advSub.innerHTML = 'Средняя доходность';
    advDes.innerHTML = 'По статистике наши клиенты зарабатывают От $6 до $100 в день, в зависимости от связки и настроек. Наша техподдержка помогает вам выйти на стабильный доход.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='1';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elThree.onclick = function (three) {
    advBcg.className = 'advantages__img img2';
    advSub.innerHTML = 'Посуточная подписка';
    advDes.innerHTML = 'От $6 в день, в зависимости от связки. Работай только когда потребуется, никаких трат на месяц вперёд.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='1';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elFour.onclick = function (four) {
    advBcg.className = 'advantages__img img3';
    advSub.innerHTML = 'Реферальная система';
    advDes.innerHTML = 'Приводи друзей и получай процент с их пополнений! Чем больше пригласил, тем выше процент.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='1';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elFive.onclick = function (five) {
    advBcg.className = 'advantages__img img4';
    advSub.innerHTML = 'Заморозка бота';
    advDes.innerHTML = 'Порезали аккаунт? Заморозь бота и возвращайся к работе позже. В месяц доступно 1 бесплатная заморозка, а если не хватит, то можно докупить во внутреннем магазине.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='1';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elSix.onclick = function (six) {
    advBcg.className = 'advantages__img img5';
    advSub.innerHTML = 'Настройка быстрее!';
    advDes.innerHTML = 'Мы предоставляем возможность копирования настроек между ботами. Вы также можете сохранить настройки на свое устройство и заменить на боте в любое время.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='1';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elSeven.onclick = function (seven) {
    advBcg.className = 'advantages__img img6';
    advSub.innerHTML = 'Защищенные сервера';
    advDes.innerHTML = 'Для каждого бота предоставляется сервер с выделенным IP, он включен в стоимость подписки. Доступ к серверу осуществляется через веб-интерфейс браузера.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='1';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='0.8';
}
elEight.onclick = function (eigth) {
    advBcg.className = 'advantages__img img7';
    advSub.innerHTML = 'Отзывчивая техподдержка';
    advDes.innerHTML = 'Помогаем настроить бота на стабильный доход! Решим любой вопрос и проблему, а также добавляем функционал по вашим заявкам!';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='1';
    elNine.style.opacity ='0.8';
}
elNine.onclick = function (nine) {
    advBcg.className = 'advantages__img img8';
    advSub.innerHTML = 'Магазин товаров';
    advDes.innerHTML = 'Магазин необходимых товаров уже под рукой на нашем сайте: заморозки, прокси и многое другое ждёт вас! Доступ к магазину имеют только авторизованные пользователи.';
    elOne.style.opacity ='0.8';
    elTwo.style.opacity ='0.8';
    elThree.style.opacity ='0.8';
    elFour.style.opacity ='0.8';
    elFive.style.opacity ='0.8';
    elSix.style.opacity ='0.8';
    elSeven.style.opacity ='0.8';
    elEight.style.opacity ='0.8';
    elNine.style.opacity ='1';
}



document.querySelector('.header__burger').onclick = function ready(fn) {
    if (document.readyState !== 'loading') {
      document.querySelector('.header__burger').classList.toggle('active');
      document.querySelector('.header__menu').classList.toggle('active');
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };
