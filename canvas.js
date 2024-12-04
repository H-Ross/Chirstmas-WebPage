const snowfalldiv = document.getElementById('snowfall');
const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    w = canvas.width;
    h = canvas.height;

});

snowfalldiv.appendChild(canvas);

let w = canvas.width;
let h = canvas.height;

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
//const currentDate = new Date('2024-12-25');
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

function updateContent() {
    const currentDay = currentDate.getDate();


    if (month != 12) {
        const adventCount = document.getElementById("advent-count");
        adventCount.textContent = "0";
        adventCount.style.transform = "translate(0%, 110%)";
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
            "Find Online",
            "Disney+",
            "TV4+",
            "Disney+",
            "Netflix",
            "TV4+",
            "Prime/ViaPlay",
            "TV4+",
            "Netflix",
            "Netflix",
            "Find Online",
            "Find Online",
            "Netflix",
            "Netflix",
            "SVT Play"
        ];

        // Set the advent count
        const adventCount = document.getElementById("advent-count");
        adventCount.textContent = currentDay;

        if (currentDay > 9) {
            // if ((window.matchMedia("(min-width: 768px)").matches)) {
            //     adventCount.style.transform = "translate(-35%, 100%)";
            // }
            //else {
            adventCount.style.transform = "translate(-50%, 110%)";
            // }
        }
        else {
            //  if ((window.matchMedia("(min-width: 768px)").matches)) {
            //    adventCount.style.transform = "translate(0%, 100%)";
            // }
            //else {
            adventCount.style.transform = "translate(0%, 110%)";
            // }

        }



        // Set the date
        // const dateContent = document.getElementById("date");
        // dateContent.textContent = currentDay + "/" + month;


        // Set the image source based on the current day
        const dailyImage = document.getElementById("daily-image");
        dailyImage.src = imageUrls[currentDay - 1];

        // Set the movie platform content based on the current day
        const dailyPlatform = document.getElementById("daily-platform");
        const platform = moviePlatforms[currentDay - 1];

        // Clear previous content
        dailyPlatform.innerHTML = '';

        if (platform === "Find Online") {
            let site = '';
            if (currentDay === 10)
                site = 'https://www.dailymotion.com/video/x8cmcx1';
            else if (currentDay === 20)
                site = 'https://archive.org/details/a-charlie-brown-christmas-original-version/A+Charlie+Brown+Christmas+Remastered+(Sort+of).mp4';
            else if (currentDay === 21)
                site = 'https://www.dailymotion.com/video/x82evr8';
            dailyPlatform.innerHTML = `<a href='${site}' target='_blank'>Click Here</a>`;
        } else {
            dailyPlatform.textContent = platform;
        }

    }

}






// when the present is clicked function
const present = document.querySelector(".present");
const test = document.getElementById('test');

present.addEventListener("click", function () {
    if (month == 12 && currentDay < 25) {
        present.remove();
        setTimeout(() => {
            test.appendChild(present);
        }, 5000); // Adjust the delay as needed

    }
});

// present.addEventListener("mouseleave", function () {
//     //present.style.opacity = "0";
// });

present.addEventListener("touchstart", function () {
    if (month == 12 && currentDay < 25) {
        present.remove();
        setTimeout(() => {
            test.appendChild(present);
        }, 5000); // Adjust the delay as needed
    }
    //present.style.opacity = "0";
});

// present.addEventListener("touchend", function () {
//     present.style.opacity = "1";
// });


// removes santa after moving
const santaSleigh = document.getElementById("santaSleigh");

santaSleigh.addEventListener("animationend", function () {
    santaSleigh.style.display = "none";
});



setInterval(() => Snowfall.snowFall(), 20);

// Call the updateContent function when the page loads
window.onload = updateContent;


