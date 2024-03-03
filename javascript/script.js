document.addEventListener("DOMContentLoaded", function(){
    // hero carousel
    {
        const itemsHero = document.querySelectorAll(".hero-number-item");
        const HeroSlides = document.querySelectorAll(".content-hero")[0];
        if (itemsHero.length > 0) {
            activeItem = itemsHero[0];
            activeItem.classList.add("active");
        }
        itemsHero.forEach((itemHero, index) => {
            itemHero.addEventListener("click", function(){
                if (activeItem) {
                    activeItem.classList.remove("active");
                }
                itemHero.classList.add("active");
                activeItem = itemHero;
                const targetSlide = index * -100;
                HeroSlides.style.transition = "margin-left 0.4s";
                HeroSlides.style.marginLeft = `${targetSlide}%`;
            })
        });
        const heroContent = document.querySelector(".hero");
        let touchstartX = 0;
        let touchendX = 0;
        heroContent.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, false);
        heroContent.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleGesture();
        }, false);
        heroContent.addEventListener('mousedown', function(event) {
            touchstartX = event.screenX;
        }, false);

        heroContent.addEventListener('mouseup', function(event) {
            touchendX = event.screenX;
            handleGesture();
        }, false);
        function handleGesture() {
            if (touchendX < touchstartX) {
                moveToNextSlide();
            }

            if (touchendX > touchstartX) {
                moveToPrevSlide();
            }
        }
        function moveToNextSlide() {
            const currentSlide = Array.from(itemsHero).findIndex(item => item.classList.contains('active'));
            const nextSlide = (currentSlide + 1) % itemsHero.length;
            itemsHero[nextSlide].click();
        }

        function moveToPrevSlide() {
            const currentSlide = Array.from(itemsHero).findIndex(item => item.classList.contains('active'));
            const prevSlide = (currentSlide - 1 + itemsHero.length) % itemsHero.length;
            itemsHero[prevSlide].click();
        }
    }
    // menu
    const menu = document.getElementById("check");
    const menuItems = document.querySelector(".nav-items");
    const menuIcon = document.querySelector(".bar");
    let used = false;

    console.log(menuItems)

        menu.addEventListener("click", function(){
            if (!used) {
                menuItems.style.transition = "0.3s"
                menuItems.style.right = "0";
                menuIcon.style.position = "fixed";                
                menuIcon.style.top = "25px";
                menuIcon.style.right = "150px";
                used = true;
            } else {
                menuItems.style.transition = "0.3s"
                menuItems.style.right = "-200px";
                menuIcon.style.position = "relative";
                menuIcon.style.top = "0";
                menuIcon.style.right = "0";
                used = false;
            }
    })
});