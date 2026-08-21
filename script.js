/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hidden");

    }, 1500);

});


/* =========================================
   SECRET CODE
========================================= */

// CHANGE THIS TO ANY 4 DIGIT CODE YOU WANT

const secretCode = "2208";

let enteredCode = "";


/* =========================================
   ELEMENTS
========================================= */

const keys = document.querySelectorAll(".key");

const dots = document.querySelectorAll(
    ".password-dots span"
);

const deleteKey = document.getElementById(
    "deleteKey"
);

const hero = document.getElementById(
    "hero"
);


/* =========================================
   UPDATE PASSWORD DOTS
========================================= */

function updateDots() {

    dots.forEach((dot, index) => {

        dot.classList.toggle(

            "active",

            index < enteredCode.length

        );

    });

}


/* =========================================
   KEYPAD CLICK
========================================= */

keys.forEach(key => {

    key.addEventListener("click", () => {

        const value = key.dataset.key;


        if (!value) return;


        if (enteredCode.length < 4) {

            enteredCode += value;

            updateDots();

        }


        /* =====================
           CHECK PASSWORD
        ===================== */

        if (enteredCode.length === 4) {

            setTimeout(() => {

                if (
                    enteredCode === secretCode
                ) {

                    unlockSurprise();

                } else {

                    wrongCode();

                }

            }, 300);

        }

    });

});


/* =========================================
   DELETE
========================================= */

deleteKey.addEventListener("click", () => {

    enteredCode = enteredCode.slice(0, -1);

    updateDots();

});


/* =========================================
   WRONG CODE
========================================= */

function wrongCode() {

    enteredCode = "";

    updateDots();


    document
        .querySelector(".hero-card")
        .animate(

            [

                {
                    transform:
                        "translateX(-10px)"
                },

                {
                    transform:
                        "translateX(10px)"
                },

                {
                    transform:
                        "translateX(-10px)"
                },

                {
                    transform:
                        "translateX(0)"
                }

            ],

            {

                duration: 400,

                easing:
                    "ease"

            }

        );

}


/* =========================================
   UNLOCK
========================================= */

function unlockSurprise() {

    hero.style.transition =

        "opacity 1s ease, transform 1s ease";


    hero.style.opacity = "0";

    hero.style.transform =

        "scale(1.05)";


    setTimeout(() => {

        document
            .getElementById(
                "birthdaySection"
            )
            .scrollIntoView({

                behavior:
                    "smooth"

            });

    }, 900);

}


/* =========================================
   START JOURNEY
========================================= */

document
    .getElementById("startJourney")
    .addEventListener("click", () => {

        document
            .getElementById("memoriesSection")
            .scrollIntoView({

                behavior: "smooth"

            });

    });


/* =========================================
   MEMORY HEARTS
========================================= */

document
    .querySelectorAll(".memory-heart")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.classList.remove("active");

            void button.offsetWidth;

            button.classList.add("active");

        });

    
/* =========================================
   CUT THE CAKE
========================================= */

const cakeWrapper =
    document.getElementById("cakeWrapper");

const cakeSuccess =
    document.getElementById("cakeSuccess");

const cakeInstruction =
    document.getElementById("cakeInstruction");

const confettiContainer =
    document.getElementById("confettiContainer");


let cakeCut = false;


cakeWrapper.addEventListener(
    "pointerdown",
    startCakeCut
);


cakeWrapper.addEventListener(
    "pointermove",
    moveCakeCut
);


cakeWrapper.addEventListener(
    "pointerup",
    finishCakeCut
);


let cuttingStarted = false;


function startCakeCut(event) {

    if (cakeCut) return;

    cuttingStarted = true;

    cakeWrapper.setPointerCapture(
        event.pointerId
    );

}


function moveCakeCut(event) {

    if (
        !cuttingStarted ||
        cakeCut
    ) return;


    const rect =
        cakeWrapper.getBoundingClientRect();


    const x =
        event.clientX - rect.left;


    /*
       The user needs to drag
       around the center of the cake
    */

    const center =
        rect.width / 2;


    if (
        x > center - 70 &&
        x < center + 70
    ) {

        cakeWrapper.classList.add(
            "cutting"
        );

    }

}


function finishCakeCut(event) {

    if (
        !cuttingStarted ||
        cakeCut
    ) return;


    cuttingStarted = false;


    const rect =
        cakeWrapper.getBoundingClientRect();


    const endY =
        event.clientY - rect.top;


    /*
       Successful cut if the drag
       reaches low enough on the cake
    */

    if (endY > 190) {

        completeCakeCut();

    }

}


function completeCakeCut() {

    if (cakeCut) return;


    cakeCut = true;


    cakeWrapper.classList.add(
        "cut"
    );


    cakeInstruction.textContent =
        "🎉 Perfect! You cut the cake!";


    createConfetti();


    setTimeout(() => {

        cakeSuccess.classList.add(
            "show"
        );


        cakeSuccess.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 900);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const colors = [

        "#f29aaa",
        "#4f83c2",
        "#ffd166",
        "#ffffff",
        "#ff9f43"

    ];


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const confetti =
            document.createElement("span");


        confetti.classList.add(
            "confetti"
        );


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        confetti.style.animationDelay =
            Math.random() * .8 + "s";


        confetti.style.transform =
            `rotate(
                ${Math.random() * 360}deg
            )`;


        confettiContainer.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


/* =========================================
   CONTINUE
========================================= */

document
    .getElementById("continueSurprise")
    .addEventListener("click", () => {

        alert(
            "Another surprise is waiting ❤️"
        );

    });
       
