// footer accordian 

const accordianIteamHeader = document.querySelectorAll(".acc-item-header");
accordianIteamHeader.forEach(accordianIteamHeader =>{
    accordianIteamHeader.addEventListener("click",event => {
        accordianIteamHeader.classList.toggle("active");
        const accordianIteamBody = accordianIteamHeader.nextElementSiblings;
        if(accordianIteamHeader.classList.container("active")){
            accordianIteamBody.style.maxHeight = accordianIteamBody.scrollHeight + "px";
        }
        else{
            accordianIteamBody.style.maxHeight = 0;
        }
    });
});


//Developers Slider list

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3, 
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true', 
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });