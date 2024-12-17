(function () {
    // Snowfall effect
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        document.body.appendChild(snowflake);

        const size = Math.random() * 5 + 2; // Random size between 2px and 7px
        const startPosX = Math.random() * window.innerWidth; // Random horizontal position
        const animationDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startPosX}px`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.position = 'absolute';
        snowflake.style.top = '-10px';
        snowflake.style.backgroundColor = '#fff';
        snowflake.style.borderRadius = '50%';
        snowflake.style.opacity = '0.7';

        // Remove snowflake after it falls
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Create snowflakes every 100ms
    setInterval(createSnowflake, 100);
})();
