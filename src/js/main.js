import "./slider";
import modals from "./modules/modals";
import tabs from './modules/tabs'
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    const intervalId =  setInterval(() => {
        document.querySelector('.popup').style.display = "block";
        document.body.classList.add('modal-open');
        console.log('ok');
        if(document.body.classList.contains('modal-open')) {
            clearInterval(intervalId)
        }
    }, 60000);

    

    modals(intervalId);

    tabs('.glazing_slider','.glazing_block', '.glazing_content','active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div','after_click');
    forms();
});