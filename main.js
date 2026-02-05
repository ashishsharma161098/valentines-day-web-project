document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const icon = muteButton.querySelector("i");
    const clickButton = document.querySelector(".click-box button");
    const choiceBox = document.querySelector(".choice-box");
    const threedBox = document.querySelector(".threed-box");
    const questionText = document.querySelector(".question-box h1");
    const yesButton = document.querySelector(".choice-box button:first-child");
    const noButton = document.querySelector(".choice-box button:last-child");

    let partnerName = "Hey Ami🌸"; // Replace with dynamic value
    let noClickCount = 0; // Counter for No button clicks

    // Function to create typewriter effect
    function typeWriterEffect(element, text, speed = 100) {
        element.innerHTML = ""; // Clear previous text
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                element.innerHTML += `<span class="typewriter"></span>`; // Cursor effect
            }
        }
        typing();
    }

    // Function to handle the click event
    function revealChoices() {
        audio.pause(); // Stop background music
        audio.currentTime = 0; // Reset music

        clickButton.style.display = "none"; // Hide the button
        choiceBox.classList.remove("hide"); // Show Yes/No options

        // Show partner name instantly
        questionText.innerHTML = `<span class="partner-name">${partnerName}</span><br><span class="typed-text"></span>`;

        // Start typewriter effect for the second line
        const typedTextElement = document.querySelector(".typed-text");
        setTimeout(() => {
            typeWriterEffect(typedTextElement, "Would you like to be my Valentine? 🤍");
        }, 500); // Delay to allow smooth transition
    }

    function createHearts() {
        const heartContainer = document.createElement("div");
        heartContainer.classList.add("heart-container");
        document.body.appendChild(heartContainer);
    
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            
            // Random positioning and animation speed
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            
            heartContainer.appendChild(heart);
        }
    
        // Remove hearts after animation ends
        setTimeout(() => {
            heartContainer.remove();
        }, 5000);
    }
    
    yesButton.addEventListener("click", function () {
       questionText.innerHTML = `
        <div class="message-wrapper">
        <div class="partner-name">${partnerName}</div>

        <p class="love-text">
            I know we haven’t met yet,<br>
            and maybe you don’t know me completely —<br>
            but sometimes a feeling doesn’t need time,<br>
            it just needs a chance ✨
        </p>

        <p class="love-text">
            Let’s meet somewhere quiet,<br>
            where the world feels calm,<br>
            but your voice is the loudest thing I hear 🤍
        </p>

        <p class="love-text">
            I want to know you —<br>
            between shared laughs and random jokes,<br>
            listening to you like nothing else matters 🌸
        </p>

        <p class="love-text">
            We’ll fight for the food (just a little 😉),<br>
            but the dessert will always be yours 🍰
        </p>

        <p class="love-text">
            It doesn’t have to be Valentine’s Day,<br>
            because if we meet,<br>
            that day itself will feel more special than one 💕
        </p>
    </div>
    `;
        choiceBox.style.display = "none"; // Hide choices
        threedBox.classList.remove("hide");

        createHearts();
    });

      // Handle "No" button click
    noButton.addEventListener("click", function () {
        noClickCount++; // Increment No click count

        if (noClickCount < 5) {
            let newNoSize = 16 - noClickCount * 2; // Reduce No button size
            let newYesSize = 18 + noClickCount * 5; // Increase Yes button size

            noButton.style.fontSize = `${newNoSize}px`;
            noButton.style.padding = `${newNoSize / 2}px ${newNoSize}px`;

            yesButton.style.fontSize = `${newYesSize}px`;
            yesButton.style.padding = `${newYesSize / 2}px ${newYesSize}px`;
        } else {
            noButton.style.display = "none"; // Hide No button after 5 clicks
            questionText.innerHTML += `<br><span class="no-choice-text">Did you really think you had a choice? 🤭</span>`;
        }
    });

    clickButton.addEventListener("click", revealChoices);
});