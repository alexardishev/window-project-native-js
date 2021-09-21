const timer = (id, deadline) => {
    const addZero = (num) => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaning = (endtime) => {



        // Дедлайн - текущее время
          const t =  Date.parse(endtime) - Date.parse(new Date()), // Метод парс берет время и вычисляет его в милисекундах
                seconds = Math.floor((t/1000) % 60), // Получим остаток 
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/1000/60/60) % 24),
                days = Math.floor(t/1000/60/60/24);


            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    };


    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeImterval = setInterval(updateClock, 1000); // Каждую секунду вызывает функцию апдейт

            updateClock();
        function updateClock() {
            const t = getTimeRemaning(endtime); // Сколько осталось до дедлайна ?


            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent =  "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeImterval);
            }
        }
    };
    
    setClock(id, deadline);

};

export default timer;