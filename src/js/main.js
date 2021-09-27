import "./slider";
import modals from "./modules/modals";
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';
window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';

    let modalState = {
        height: 0,
        width: 0,
        type: "tree",
        form: 0
    }; // Делаем свой стейт, чтобы хранить, то что выбрал пользак удобная штука (общий)

    let deadline = '2021-09-22';


    const intervalId =  setInterval(() => {
        document.querySelector('.popup').style.display = "block";
        document.body.classList.add('modal-open');
        console.log('ok');
        if(document.body.classList.contains('modal-open')) {
            clearInterval(intervalId)
        }
    }, 600000);

    
    changeModalState(modalState);
    modals(intervalId, modalState);
    tabs('.glazing_slider','.glazing_block', '.glazing_content','active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div','after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState); // Чтобы внутри модуля forms был стейт наш
    timer('.container1', deadline);
    images();
});