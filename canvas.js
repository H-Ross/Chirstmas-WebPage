const snowfalldiv = document.getElementById('snowfall');
const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

snowfalldiv.appendChild(canvas);

const w = canvas.width;
const h = canvas.height;

const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
backgroundImage.src = "./images/sthlm.jpg";

const flakes = [];
class Snowfall {

    static snowFall() {
        ctx.drawImage(backgroundImage, 0, 0, w, h);
        Snowfall.addFlakes();
        Snowfall.addSnow();
    };

    static addFlakes() {
        const x = Math.ceil(Math.random() * w);
        const speed = Math.ceil(Math.random() * 5);
        const radius = 10 * Math.PI;

        flakes.push({
            x: x,
            y: 0,
            speed: speed,
            radius: radius
        });
    };

    static addSnow() {
        for (let i = 0; i < flakes.length; i++) {
            let oneFlake = flakes[i];

            // creating circles
            ctx.beginPath();
            // color the circles
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            // drawing circle
            ctx.arc(oneFlake.x, oneFlake.y += oneFlake.speed / 2, oneFlake.speed * 0.8, 0, oneFlake.radius);
            ctx.fill();
        }
    };
}

function updateImage() {
    const currentDate = new Date(2023, 11, 3);
    const currentDay = currentDate.getDate();

    // You can create an array of image URLs for each day
    const imageUrls = [
        "./images/grinch.jpg",
        "./images/polarExpress.jpg",
        "./images/homeAlone.jpg",
        // Add URLs for each day
    ];

    const moviePlatforms = [
        "Netflix",
        "Disney+",
        "HBO Max",

    ];

    // Set the image source based on the current day
    const dailyImage = document.getElementById("daily-image");
    dailyImage.src = imageUrls[currentDay - 1];

    // Set the movie platform source based on the current day
    const dailyPlatform = document.getElementById("daily-platform");
    dailyPlatform.textContent = moviePlatforms[currentDay - 1];
}

setInterval(() => Snowfall.snowFall(), 20);

// Call the updateImage function when the page loads
window.onload = updateImage;