function calculatePixels() {
    const screenWidth = window.innerWidth;
    const designWidth = document.getElementById('designWidth').value;
    const elementWidth = document.getElementById('elementWidth').value;
    const elementHeight = document.getElementById('elementHeight').value;
    
    // Only calculate if all inputs have values
    if (designWidth && elementWidth && elementHeight) {
        // Calculate proportional width and height
        const calculatedWidth = (elementWidth * screenWidth) / designWidth;
        const calculatedHeight = (elementHeight * screenWidth) / designWidth;
        
        // Calculate aspect ratio
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const ratioGCD = gcd(elementWidth, elementHeight);
        const aspectRatioWidth = elementWidth / ratioGCD;
        const aspectRatioHeight = elementHeight / ratioGCD;

        // Update results
        document.getElementById('calculatedWidth').textContent = calculatedWidth.toFixed(2);
        document.getElementById('calculatedHeight').textContent = calculatedHeight.toFixed(2);
        document.getElementById('aspectRatio').textContent = `${aspectRatioWidth}:${aspectRatioHeight}`;
    }
    
    document.getElementById('screenWidth').textContent = screenWidth;
}

// Calculate on page load
window.addEventListener('load', calculatePixels);

// Calculate on window resize
window.addEventListener('resize', calculatePixels);