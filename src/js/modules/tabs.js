const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);



    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i=0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();



    header.addEventListener('click', (e)=> {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, ""))  || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { // Проверяем в таб ли кликнул пользак 
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) { // Если пользователь пользователь кликнул на таб, который перебирается (или на его потомка например ссылку или изображение)
                    // console.log(target)
                    // console.log(target.parentNode) // parentNode выдает родителя то есть кликнула на ссылку, отдасть родителя


                    hideTabContent();
                    showTabContent(i);
                } 
            });
        }
    });
}

export default tabs;