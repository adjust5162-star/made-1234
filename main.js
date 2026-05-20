const URL = "https://teachablemachine.withgoogle.com/models/b-S-p_4z9/";

let model;
let isModelLoaded = false;
let isImageUploaded = false;

// UI Elements
let loader, appContainer, imageUpload, imagePreview, imagePlaceholder, labelContainer, predictButton, buttonText, buttonLoader;

document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize UI Elements
    loader = document.getElementById('loader');
    appContainer = document.getElementById('app-container');
    imageUpload = document.getElementById('imageUpload');
    imagePreview = document.getElementById('image-preview');
    imagePlaceholder = document.getElementById('image-placeholder');
    labelContainer = document.getElementById('label-container');
    predictButton = document.getElementById('predict-button');
    buttonText = predictButton.querySelector('.button-text');
    buttonLoader = predictButton.querySelector('.button-loader');

    // Add event listeners
    imageUpload.addEventListener('change', handleImage);
    predictButton.addEventListener('click', predict);

    init();
});

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        model = await tmImage.load(modelURL, metadataURL);
        isModelLoaded = true;
        
        loader.style.display = 'none';
        appContainer.style.display = 'block';
        
        updatePredictButtonState();
    } catch (error) {
        console.error("Error loading the model:", error);
        loader.innerHTML = "Failed to load model. Please refresh.";
    }
}

function handleImage(event) {
    const image = event.target.files[0];
    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            imagePlaceholder.style.display = 'none';
            isImageUploaded = true;
            updatePredictButtonState();
        }
        reader.readAsDataURL(image);
    }
}

function updatePredictButtonState() {
    if (isModelLoaded && isImageUploaded) {
        predictButton.disabled = false;
    } else {
        predictButton.disabled = true;
    }
}

async function predict() {
    if (!isModelLoaded || !isImageUploaded) return;

    buttonText.style.display = 'none';
    buttonLoader.style.display = 'block';
    predictButton.disabled = true;

    try {
        const prediction = await model.predict(imagePreview);
        labelContainer.innerHTML = ""; 
        
        prediction.sort((a, b) => b.probability - a.probability);

        for (let i = 0; i < prediction.length; i++) {
            const resultItem = document.createElement("div");
            resultItem.classList.add('result-item');

            const className = document.createElement("span");
            className.textContent = prediction[i].className;

            const probability = document.createElement("span");
            probability.textContent = (prediction[i].probability * 100).toFixed(2) + '%';

            resultItem.appendChild(className);
            resultItem.appendChild(probability);
            labelContainer.appendChild(resultItem);
        }
    } catch (error) {
        console.error("Prediction error:", error);
        labelContainer.innerHTML = "<p style='color: red;'>Prediction failed.</p>";
    } finally {
        buttonText.style.display = 'inline';
        buttonLoader.style.display = 'none';
        updatePredictButtonState();
    }
}
