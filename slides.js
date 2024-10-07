const sliderData = [
    {
      "name": "Хозе-Рауль Капабланка",
      "info": "Чемпион мира по шахматам",
      "avatar": "./images/section-four/man.png"
    },
    {
      "name": "Эммануил Ласкер",
      "info": "Чемпион мира по шахматам",
      "avatar": "./images/section-four/man.png"
    },
    {
      "name": "Александр Алехин",
      "info": "Чемпион мира по шахматам",
      "avatar": "./images/section-four/man.png"
    },
    {
      "name": "Арон Нимцович",
      "info": "Чемпион мира по шахматам",
      "avatar": "./images/section-four/man.png"
    },
    {
      "name": "Рихард Рети",
      "info": "Чемпион мира по шахматам",
      "avatar": "./images/section-four/man.png"
    },
    {
      "name": "Остап Бендер",
      "info": "Гроссмейстер",
      "avatar": "./images/section-four/man.png"
    },
  ];
  

  function generateSlides(data) {
    const slider = document.querySelector('.slider'); 
    slider.innerHTML = ''; 

    data.forEach(person => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      const avatarWrapper = document.createElement('div');
      avatarWrapper.classList.add('avatar-wrapper');

      const avatar = document.createElement('div');
      avatar.classList.add('avatar');
      avatar.style.backgroundImage = `url(${person.avatar})`; 

      const name = document.createElement('div');
      name.classList.add('name');
      name.textContent = person.name; 

      const info = document.createElement('div');
      info.classList.add('info');
      info.textContent = person.info; 

      const more = document.createElement('div');
      more.classList.add('more');
      more.textContent = 'Подробнее'; 

      avatarWrapper.appendChild(avatar);
      slide.appendChild(avatarWrapper);
      slide.appendChild(name);
      slide.appendChild(info);
      slide.appendChild(more);

      slider.appendChild(slide);
    });
  }

  generateSlides(sliderData);