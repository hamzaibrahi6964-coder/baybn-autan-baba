/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 1200);

});


/* =========================================
   SECRET CODE
========================================= */

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


        /* CHECK PASSWORD */

        if (enteredCode.length === 4) {

            setTimeout(() => {

                if (enteredCode === secretCode) {

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

if (deleteKey) {

    deleteKey.addEventListener("click", () => {

        enteredCode = enteredCode.slice(0, -1);

        updateDots();

    });

}


/* =========================================
   WRONG CODE
========================================= */

function wrongCode() {

    enteredCode = "";

    updateDots();

    const heroCard =
        document.querySelector(".hero-card");

    if (!heroCard) return;


    heroCard.animate(

        [
            {
                transform: "translateX(-10px)"
            },

            {
                transform: "translateX(10px)"
            },

            {
                transform: "translateX(-10px)"
            },

            {
                transform: "translateX(0)"
            }
        ],

        {
            duration: 400,
            easing: "ease"
        }

    );

}


/* =========================================
   UNLOCK SURPRISE
========================================= */

function unlockSurprise() {

    if (!hero) return;


    hero.style.transition =
        "opacity 1s ease, transform 1s ease";

    hero.style.opacity = "0";

    hero.style.transform =
        "scale(1.05)";


    setTimeout(() => {

        const birthdaySection =
            document.getElementById(
                "birthdaySection"
            );

        if (birthdaySection) {

            birthdaySection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 900);

}


/* =========================================
   START JOURNEY
========================================= */

const startJourney =
    document.getElementById("startJourney");


if (startJourney) {

    startJourney.addEventListener("click", () => {

        const memoriesSection =
            document.getElementById(
                "memoriesSection"
            );

        if (memoriesSection) {

            memoriesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


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

    }); // ← THIS CLOSING PART WAS MISSING


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

let cuttingStarted = false;


/* Only run if cake exists */

if (cakeWrapper) {

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

}


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


    if (cakeInstruction) {

        cakeInstruction.textContent =
            "🎉 Perfect! You cut the cake!";

    }


    createConfetti();


    setTimeout(() => {

        if (cakeSuccess) {

            cakeSuccess.classList.add(
                "show"
            );


            cakeSuccess.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }

    }, 900);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    if (!confettiContainer) return;


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
            Math.random() * 0.8 + "s";


        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        confettiContainer.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


/* =========================================
   CONTINUE SURPRISE
========================================= */

const continueSurprise =
    document.getElementById(
        "continueSurprise"
    );


if (continueSurprise) {

    continueSurprise.addEventListener(
        "click",
        () => {

            alert(
                "Another surprise is waiting ❤️"
            );

        }
    );

}


/* =========================================
   LOVE LETTER REVEAL
========================================= */

const loveLetter =
    document.querySelector(".love-letter");

const letterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    loveLetter.classList.add(
                        "show"
                    );

                    letterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.25
        }

    );


if (loveLetter) {

    letterObserver.observe(
        loveLetter
    );

}


/* =========================================
   REASON CARDS
========================================= */

const reasonCards =
    document.querySelectorAll(".reason-card");


reasonCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});


/* =========================================
   ANNIVERSARY SURPRISE
========================================= */

const anniversaryHeart =
    document.getElementById(
        "anniversaryHeart"
    );

const anniversaryMessage =
    document.getElementById(
        "anniversaryMessage"
    );


if (
    anniversaryHeart &&
    anniversaryMessage
) {

    anniversaryHeart.addEventListener(
        "click",
        () => {

            anniversaryHeart.style.transform =
                "scale(1.4)";

            anniversaryHeart.style.opacity =
                "0";


            setTimeout(() => {

                anniversaryHeart.style.display =
                    "none";


                anniversaryMessage.classList.add(
                    "show"
                );

            }, 350);

        }
    );

}


/* =========================================
   MAKE A WISH
========================================= */

const birthdayCandle =
    document.getElementById(
        "birthdayCandle"
    );

const candleFlame =
    document.getElementById(
        "candleFlame"
    );

const candleSmoke =
    document.getElementById(
        "candleSmoke"
    );

const candleInstruction =
    document.getElementById(
        "candleInstruction"
    );

const wishReveal =
    document.getElementById(
        "wishReveal"
    );

const wishConfetti =
    document.getElementById(
        "wishConfetti"
    );

const finalSurpriseBtn =
    document.getElementById(
        "finalSurpriseBtn"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


let wishMade = false;


/* =========================================
   BLOW OUT CANDLE
========================================= */

if (birthdayCandle) {

    birthdayCandle.addEventListener(
        "click",
        () => {

            if (wishMade) return;

            wishMade = true;


            /* Flame goes out */

            candleFlame.classList.add(
                "out"
            );


            /* Smoke appears */

            setTimeout(() => {

                candleSmoke.classList.add(
                    "show"
                );

            }, 300);


            /* Update instruction */

            candleInstruction.textContent =
                "✨ Your wish is now in the universe...";


            /* Celebration */

            createWishConfetti();


            /* Reveal message */

            setTimeout(() => {

                wishReveal.classList.add(
                    "show"
                );


                wishReveal.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }, 1000);

        }
    );

}


/* =========================================
   CREATE CONFETTI
========================================= */

function createWishConfetti() {

    const colors = [

        "#f29aaa",
        "#4f83c2",
        "#ffd166",
        "#ffffff",
        "#d96b88"

    ];


    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.classList.add(
            "wish-piece"
        );


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * .8 + "s";


        piece.style.transform =
            `rotate(
                ${Math.random() * 360}deg
            )`;


        wishConfetti.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

if (finalSurpriseBtn) {

    finalSurpriseBtn.addEventListener(
        "click",
        () => {

            finalMessage.classList.add(
                "show"
            );


            createWishConfetti();


            setTimeout(() => {

                finalMessage.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }, 200);

        }
    );

}

/* =========================================
   FINAL PROPOSAL RING
========================================= */

const ringWrapper =
    document.getElementById("ringWrapper");

const proposalMessage =
    document.getElementById("proposalMessage");


ringWrapper.addEventListener(
    "click",
    () => {

        /* STOP FLOATING */

        ringWrapper.style.animation =
            "none";


        /* LITTLE POP EFFECT */

        ringWrapper.animate(

            [

                {
                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.25)"
                },

                {
                    transform:
                        "scale(1)"
                }

            ],

            {

                duration: 700,

                easing:

                    "cubic-bezier(.2,.8,.2,1)"

            }

        );


        /* SHOW PROPOSAL */

        setTimeout(() => {

            proposalMessage
                .classList
                .add("show");


            proposalMessage
                .scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });

        }, 500);

    }

);
