// добавляю прослушку на все окно
window.addEventListener ('click', function (event) {

    // объявляем переменную для счетчика
    let counter; 


    if (event.target.dataset.action === 'plus'|| event.target.dataset.action === 'minus' ) {
        // находим обертку  счетчика
        const counterWrapper = event.target.closest ('.counter-wrapper');
    
        // находим див с числом счетчика
         counter = counterWrapper.querySelector ('[data-counter]');
    }


    // проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus') { 
        counter.innerText = ++counter.innerText
    }


    // проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === 'minus') {
       // проверяем чтобы счетсчик был больше 1
    if (parseInt (counter.innerText) >1) {
        // изменяем текст в счетчике уменьшая его на 1
                counter.innerText = --counter.innerText
            }
    }
})

// этот код сделан для счетчика товара
