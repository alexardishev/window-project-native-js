import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');



        checkNumInputs('input[name="user_phone"]');


    
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, { // если использую запрос, то он асинхрон и об этом надо писать 
            method: "POST",
            body: data
        });

        return await res.text();
    };  

    const clearInputs = () => {
        input.forEach(item => {
            item.value = ''; // Очищаем инпуты
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage); // метод помещает блок в конец формы

            const formData = new FormData(item); // соберет объект из данных формы
            if (item.getAttribute('data-calc')=== 'end') { // Добавили все данные из свитча, в котором мы собирали данные о заказе пользователя
                    for (let key in state) { // Перебираем объект в JS
                        formData.append(key, state[key]); // Метод добавления в обхект новых ключей
                    }

            }

            const clearState = () => {
                for (let key in state) {
                    switch(key) {
                        case 'height':
                            state.height = 0;
                        case 'width':
                            state.width = 0;
                        case 'type':
                            state.type = "tree";
                        case 'form':
                            state.form = 0;
                        case 'profile':
                            delete state.profile;
                    }
                    // delete state[key];
                    }
            };

            const hideModal = () => {
              const modalEnd =  document.querySelector('.popup_calc_end');
                modalEnd.style.display = 'none';
                document.body.classList.remove('modal-open');
            }

            console.log(formData)
            console.log(JSON.stringify(formData));

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res);
                console.log(state);
                
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearState();
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    hideModal();
                }, 2000);
                console.log(state);

            });
        });

        }); // submitim formu


};

export default forms;