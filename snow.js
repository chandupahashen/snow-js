(function () {
    const snowflakes = [];
    const body = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomly decide between a white dot or a snowflake
        if (Math.random() > 0.65) {
            snowflake.textContent = '❄'; // Snowflake character
            snowflake.style.fontSize = `${10 + Math.random() * 20}px`; // Larger size for flakes
        } else {
            snowflake.textContent = ''; // Empty for dot
            snowflake.style.width = `${2 + Math.random() * 3}px`; // Small dot size
            snowflake.style.height = snowflake.style.width; // Keep it circular
            snowflake.style.backgroundColor = 'white'; // White dot
            snowflake.style.borderRadius = '50%'; // Make it circular
        }

        // Common properties
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${8 + Math.random() * 5}s`; // Speed of falling
        snowflake.style.opacity = Math.random(); // Random opacity

        body.appendChild(snowflake);
        snowflakes.push(snowflake);

        // Remove snowflake or dot when its animation ends
        snowflake.addEventListener('animationend', () => {
            body.removeChild(snowflake);
            snowflakes.splice(snowflakes.indexOf(snowflake), 1);
        });
    }

    function initSnowfall() {
        const style = document.createElement('style');
        style.textContent = `
            .snowflake {
                position: fixed;
                top: -50px;
                color: white;
                z-index: 9999;
                pointer-events: none;
                animation: fall linear infinite;
            }
            @keyframes fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    transform: translateY(120vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);

        setInterval(createSnowflake, 150); // Generate a new snowflake/dot every 150ms
    }

    function shouldStartSnowfall() {
        const today = new Date();
        const start = new Date(today.getFullYear(), 11, 10); // December 10
        const end = new Date(today.getFullYear() + 1, 0, 1); // January 1

        return today >= start && today <= end;
    }

    // Initialize the snowfall effect only if within the date range
    window.addEventListener('load', () => {
        if (shouldStartSnowfall()) {
            initSnowfall();
        }
    });
})();
