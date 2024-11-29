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
backgroundImage.src = "./images/Stockholm-Winter.jpg";

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
const currentDate = new Date('2024-12-9');
//const currentDate = new Date();
const month = currentDate.getMonth() + 1;

function updateContent() {
    const currentDay = currentDate.getDate();


    if (month != 12) {
        const adventCount = document.getElementById("advent-count");
        adventCount.textContent = "0";
    }
    else {
        const imageUrls = [
            "./images/1_KarlBertilJonsson.jpg",
            "./images/2_Elf.jpg",
            "./images/3_ChristmasDrop.jfif",
            "./images/4_ChristmasChronicles.jpg",
            "./images/5_Noelle.jpg",
            "./images/6_ABoyCalledChristmas.png",
            "./images/7_Tomtenärfar.jpg",
            "./images/8_HomeAlone.jpg",
            "./images/9_HomeAlone2.jfif",
            "./images/10_AChristmasStory.jfif",
            "./images/11_DieHard.jfif",
            "./images/12_Holiday.jpg",
            "./images/13_theSantaClause.jfif",
            "./images/14_LoveActually.jpg",
            "./images/15_Snowroller.jfif",
            "./images/16_ChristmasVacation.jfif",
            "./images/17_JagKommerHemIgenTillJul.jfif",
            "./images/18_Scrooge.jpg",
            "./images/19_EnUnderbarJävlaJul.jpg",
            "./images/20_CharlieBrownsChristmas.jfif",
            "./images/21_ChristmaswiththeKRanks.jpg",
            "./images/22_Grinch.jpg",
            "./images/23_theNightBefore.jfif",
            "./images/24_SaganomKarl-BertilJonssonsJulafton.jpg"
        ];

        const moviePlatforms = [
            "Netflix",
            "Netflix",
            "Netflix",
            "Netflix",
            "Disney+",
            "Netflix",
            "Netflix",
            "Disney+",
            "Disney+",
            "Viaplay/Prime",
            "Disney+",
            "TV4+",
            "Disney+",
            "Netflix",
            "TV4+",
            "Find yourself",
            "TV4+",
            "Netflix",
            "Netflix",
            "Find yourself",
            "Find yourself",
            "Netflix",
            "Netflix",
            "SVT Play"
        ];

        // Set the advent count
        const adventCount = document.getElementById("advent-count");
        adventCount.textContent = currentDay;

        if (currentDay > 9) {
            if ((window.matchMedia("(min-width: 768px)").matches)) {
                adventCount.style.transform = "translate(-35%, 100%)";
            }
            else {
                adventCount.style.transform = "translate(-40%, 110%)";
            }
        }
        else {
            if ((window.matchMedia("(min-width: 768px)").matches)) {
                adventCount.style.transform = "translate(0%, 100%)";
            }
            else {
                adventCount.style.transform = "translate(0%, 110%)";
            }

        }



        // Set the date
        // const dateContent = document.getElementById("date");
        // dateContent.textContent = currentDay + "/" + month;


        // Set the image source based on the current day
        const dailyImage = document.getElementById("daily-image");
        dailyImage.src = imageUrls[currentDay - 1];

        // Set the movie platform content based on the current day
        const dailyPlatform = document.getElementById("daily-platform");
        dailyPlatform.textContent = moviePlatforms[currentDay - 1];

    }

}



// when the present is clicked function
const present = document.querySelector(".present");

present.addEventListener("mouseenter", function () {
    if (month == 12)
        present.style.opacity = "0";
});

present.addEventListener("mouseleave", function () {
    present.style.opacity = "1";
});

present.addEventListener("touchstart", function () {
    if (month == 12)
        present.style.opacity = "0";
});

present.addEventListener("touchend", function () {
    present.style.opacity = "1";
});


// removes santa after moving
const santaSleigh = document.getElementById("santaSleigh");

santaSleigh.addEventListener("animationend", function () {
    santaSleigh.style.display = "none";
});



setInterval(() => Snowfall.snowFall(), 20);

// Call the updateContent function when the page loads
window.onload = updateContent;


