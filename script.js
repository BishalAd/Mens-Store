let currentImageIndex = 0; // Index of the current image

        // Array of image sources
        const images = [
            "Resources/Front Image.jpg",
            "Resources/box1_image.jpg",
            "Resources/Product2.png",
            "Resources/Image2.jpg"
        ];

        const imageElement = document.getElementById('slideshow-image');

        // Function to change the image
        function changeImage() {
            // Set the image source
            imageElement.src = images[currentImageIndex];
            // Fade in the image
            imageElement.style.opacity = 0;
            setTimeout(() => {
                imageElement.style.opacity = 1;
            }, 50);

            // Increment the index
            currentImageIndex++;

            // Reset the index if it exceeds the number of images
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
        }

        // Initial call to changeImage function
        changeImage();

        // Set interval to change the image every 5 seconds
        setInterval(changeImage, 5000);