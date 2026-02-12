// Screen Resolution Checker
(function() {
    'use strict';

    // DOM Elements
    const screenResolution = document.getElementById('screen-resolution');
    const availableScreen = document.getElementById('available-screen');
    const viewportSize = document.getElementById('viewport-size');
    const pixelRatio = document.getElementById('pixel-ratio');
    const screenWidth = document.getElementById('screen-width');
    const screenHeight = document.getElementById('screen-height');
    const colorDepth = document.getElementById('color-depth');
    const orientation = document.getElementById('orientation');
    const touchSupport = document.getElementById('touch-support');

    // Format numbers with commas
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Get orientation
    function getOrientation() {
        const isLandscape = window.innerWidth > window.innerHeight;
        return isLandscape ? 'Landscape' : 'Portrait';
    }

    // Update all display values
    function updateDisplay() {
        // Screen Resolution (full screen)
        const screenW = window.screen.width;
        const screenH = window.screen.height;
        screenResolution.textContent = `${screenW} × ${screenH}`;

        // Available Screen (minus system bars)
        const availW = window.screen.availWidth;
        const availH = window.screen.availHeight;
        availableScreen.textContent = `${availW} × ${availH}`;

        // Viewport Size (browser window)
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;
        viewportSize.textContent = `${viewportW} × ${viewportH}`;

        // Device Pixel Ratio
        const dpr = window.devicePixelRatio || 1;
        pixelRatio.textContent = dpr.toFixed(2);

        // Detailed info
        screenWidth.textContent = `${formatNumber(screenW)} px`;
        screenHeight.textContent = `${formatNumber(screenH)} px`;
        
        // Color Depth (bits per color)
        colorDepth.textContent = `${window.screen.colorDepth} bit`;
        
        // Orientation
        orientation.textContent = getOrientation();

        // Touch Support
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        touchSupport.textContent = hasTouch ? 'Yes' : 'No';
    }

    // Initialize
    function init() {
        updateDisplay();

        // Listen for resize events
        window.addEventListener('resize', updateDisplay);
        
        // Listen for orientation change
        window.addEventListener('orientationchange', updateDisplay);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
