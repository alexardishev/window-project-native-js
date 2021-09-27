
const modals = (modalId, state) => {
    
    console.log(modalId);

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickIverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();
        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if(e.target) {
                    e.preventDefault();
                }
                console.dir(e.target.className);
                windows.forEach(item1 => {
                    item1.style.display = 'none';
                });





            
            switch(e.target.className) {
                case 'button popup_calc_button':
                    console.log(state);
                    const  windowWidth = document.querySelector('#width');
                    const  windowHeight = document.querySelector('#height');
                    if(state.height == 0) {
                        windowHeight.style.cssText = `border: solid 1px red`;
                        console.log(modal);
                        document.querySelector('.popup_calc').style.display = 'block';
                        
                    } 
                    if(state.width == 0) {
                        windowWidth.style.cssText = `border: solid 1px red`;
                        console.log(modal);
                        document.querySelector('.popup_calc').style.display = 'block';
                        
                    } 
                    if(state.height != 0 && state.width != 0) {
                        modal.style.display = "block";
                        // document.body.style.overflow = 'hidden'; 
                            document.body.classList.add('modal-open');
                            document.body.style.marginRight = `${scroll}px`;
                            windowHeight.style.cssText = `border: solid 1px green`;
                            windowWidth.style.cssText = `border: solid 1px green`;
                    }

                    break;
                case 'button glazing_price_btn text-uppercase popup_calc_btn':
                    console.log(windows);
                    modal.style.display = "block";
                    // document.body.style.overflow = 'hidden'; 
                        document.body.classList.add('modal-open');
                        document.body.style.marginRight = `${scroll}px`;
                    break;
                case 'button popup_calc_profile_button':
                    console.log(windows);
                    modal.style.display = "block";
                    // document.body.style.overflow = 'hidden'; 
                        document.body.classList.add('modal-open');
                        document.body.style.marginRight = `${scroll}px`;
                    break;
                case 'header_btn text-uppercase text-left popup_engineer_btn':
                    console.log(windows);
                    modal.style.display = "block";
                    // document.body.style.overflow = 'hidden'; 
                        document.body.classList.add('modal-open');
                        document.body.style.marginRight = `${scroll}px`;
                    break;
                case 'phone_link':
                    console.log(windows);
                    modal.style.display = "block";
                    // document.body.style.overflow = 'hidden'; 
                        document.body.classList.add('modal-open');
                        document.body.style.marginRight = `${scroll}px`;
                    break;
            }
            
            // console.log(windows);
            // modal.style.display = "block";
            // // document.body.style.overflow = 'hidden'; 
            //     document.body.classList.add('modal-open');
                
        });
        });
                        // Можем листать только модалку


        close.addEventListener('click', ()=> {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = "none";
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;

        });


        modal.addEventListener('click', (e)=> {
            if(e.target === modal && closeClickIverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;

            }
        });


    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';


        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth; // Первое это полная ширина, а второе это паддинге и сам контент
        div.remove();

        return scrollWidth;
    }



    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals