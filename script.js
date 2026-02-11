// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// Confetti function
function createConfetti() {
    // Create container if it doesn't exist
    let container = document.getElementById("confetti-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "confetti-container";
        document.body.appendChild(container);
    }

    // Romantic pixel-art color palette
    const colors = [
        "#FFB6C1", // Light pink
        "#FF69B4", // Hot pink
        "#FF1493", // Deep pink
        "#FFC0CB", // Pink
        "#DB7093", // Pale violet red
        "#FF6B6B", // Coral red
        "#FFFFFF", // White
        "#FFE4E1", // Misty rose
        "#F08080", // Light coral
        "#E75480"  // Dark pink
    ];

    // Create 150 confetti pieces
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement("div");
            confetti.className = "confetti";

            // Random position across the screen
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = -20 + "px";

            // Random color from palette
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            // Random size (pixel-art style: small squares)
            const size = Math.random() * 8 + 6;
            confetti.style.width = size + "px";
            confetti.style.height = size + "px";

            // Random animation duration
            const duration = Math.random() * 3 + 2;
            confetti.style.animationDuration = duration + "s";

            // Random delay for staggered effect
            confetti.style.animationDelay = Math.random() * 0.5 + "s";

            container.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, (duration + 1) * 1000);
        }, i * 20); // Stagger creation
    }
}

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    // Trigger confetti
    createConfetti();
});
