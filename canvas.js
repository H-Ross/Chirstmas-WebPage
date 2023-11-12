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

const currentDate = new Date(2023, 11, 20);
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
            "./images/2_HolidayInTheWild.jpg",
            "./images/3_theFamilyStone.jpg",
            "./images/4_FamilySwitch.jpg",
            "./images/5_Tomtenärfar.jpg",
            "./images/6_Grinch.jpg",
            "./images/7_ChristmasChronicles.jpg",
            "./images/8_TwastheNight.jpg",
            "./images/9_EnUnderbarJävlaJul.jpg",
            "./images/10_HomeAlone.jpg",
            "./images/11_Scrooge.jpg",
            "./images/12_12DatesofChristmas.jpg",
            "./images/13_AlfSpecialChristmas.jpg",
            "./images/14_Holiday.jpg",
            "./images/15_Noelle.jpg",
            "./images/16_ChristmasWithAVieew.jpg",
            "./images/17_DecktheHalls.jpg",
            "./images/18_ABoyCalledChristmas.png",
            "./images/19_theKnightbeforeChristmas.jpg",
            "./images/20_thePrincessSwitch.jpg",
            "./images/21_ChristmasatthePlaza.jpg",
            "./images/22_ChristmaswiththeKRanks.jpg",
            "./images/23_LoveActually.jpg",
            "./images/24_SaganomKarl-BertilJonssonsJulafton.jpg"
        ];

        const moviePlatforms = [
            "Netflix",
            "Netflix",
            "Disney+",
            "Netflix",
            "Netflix",
            "Netflix",
            "Netflix",
            "Disney+",
            "Disney+",
            "Disney+",
            "Netflix",
            "Disney+",
            "HBO Max",
            "Netflix",
            "Disney+",
            "Netflix",
            "Disney+",
            "Netflix",
            "Netflix",
            "Netflix",
            "Find yourself",
            "Find yourself",
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


