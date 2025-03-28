const cars = [
    {
        name: "Ferrari SF90",
        image: "download.jpg",
        description: "A powerful hybrid supercar with 986 horsepower."
    },
    {
        name: "Lamborghini Huracan",
        image: "download (1).jpg",
        description: "A sleek and aggressive V10-powered masterpiece."
    },
    {
        name: "Porsche 911 Turbo",
        image: "download (2).jpg",
        description: "A high-performance sports car with all-wheel drive."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const carGallery = document.querySelector(".car-gallery");

    if (!carGallery) {
        console.error("Car gallery container not found!");
        return;
    }


    carGallery.innerHTML = cars.map(({ name, image, description }) => `
        <div class="car-card">
            <img src="${image}" alt="${name}" loading="lazy">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>
    `).join('');
});
