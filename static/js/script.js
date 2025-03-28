document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.getElementById("nav");          
    const header = document.getElementById("header");

    burgerMenu.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }); 

    document.querySelectorAll(".car-card img").forEach(img => {
        img.addEventListener("click", function() {
            const carName = this.nextElementSibling.textContent;
            window.location.href = `car-info.html?car=${encodeURIComponent(carName)}`;
        });
    });

    let slideGroups = document.querySelectorAll(".slide-group");
    let index = 0;

    function changeSlide() {
        slideGroups[index].classList.remove("active");
        index = (index + 1) % slideGroups.length;
        slideGroups[index].classList.add("active");
    }

    setInterval(changeSlide, 3000);  
});
