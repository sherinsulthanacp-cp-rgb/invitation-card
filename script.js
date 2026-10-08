
/* =====================================================
   OPEN INVITATION
===================================================== */

function openInvitation() {

    const openingScreen =
        document.getElementById("openingScreen");

    const invitation =
        document.getElementById("invitation");


    openingScreen.style.opacity = "0";
    openingScreen.style.transition = "opacity 0.8s ease";


    setTimeout(function () {

        openingScreen.style.display = "none";

        invitation.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

}


/* =====================================================
   WEDDING COUNTDOWN
===================================================== */

const weddingDate =
    new Date("November 15, 2026 10:30:00").getTime();


const countdownTimer =
    setInterval(function () {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        /* Wedding day reached */

        if (distance <= 0) {

            clearInterval(countdownTimer);

            const countdown =
                document.querySelector(".countdown");

            countdown.innerHTML = `
                <div class="wedding-today">
                    <span>♡</span>
                    <h3>Today is our special day!</h3>
                    <p>We can't wait to celebrate with you.</p>
                </div>
            `;

            return;
        }


        /* Calculate time */

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        /* Update HTML */

        document.getElementById("days").innerText =
            String(days).padStart(2, "0");


        document.getElementById("hours").innerText =
            String(hours).padStart(2, "0");


        document.getElementById("minutes").innerText =
            String(minutes).padStart(2, "0");


        document.getElementById("seconds").innerText =
            String(seconds).padStart(2, "0");


    }, 1000);


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", function () {

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});
