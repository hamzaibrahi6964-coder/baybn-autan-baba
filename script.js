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

    });
