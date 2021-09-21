import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox'); // Отобрали все эоементы,, которые могут попать в стейт при взаимодействии с пользователем

          checkNumInputs('#width'); // Отдельная функция валидации тоже отдельный мдуль 
          checkNumInputs('#height');


    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i)=> {
            item.addEventListener(event, ()=> {

                switch(item.nodeName) { // Ноднейм дает имя ноды
                    case 'SPAN': // Ноднейм всегда отдает в большом регистре
                        state[prop] = i;
                        console.log(state);
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j)=> {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                            console.log(state);
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }


                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('input', windowProfile, 'profile');



}

export default changeModalState;