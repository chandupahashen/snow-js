(function() {
    const snowflakeCount = 50; // Number of snowflakes
    const snowflakes = [];
    const body = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${3 + Math.random() * 5}s`; // Speed of falling
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${10 + Math.random() * 20}px`; // Size of snowflake
        snowflake.textContent = '❄';
        body.appendChild(snowflake);
        snowflakes.push(snowflake);

        setTimeout(() => {
            body.removeChild(snowflake);
            snowflakes.splice(snowflakes.indexOf(snowflake), 1);
        }, 8000); // Time to remove the snowflake after animation ends
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
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);

        setInterval(createSnowflake, 200); // Generate a new snowflake every 200ms
    }

    // Initialize the snowfall effect
    window.addEventListener('load', initSnowfall);
})();
