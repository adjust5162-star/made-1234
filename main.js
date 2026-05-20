const URL = "https://teachablemachine.withgoogle.com/models/b-S-p_4z9/";

let model, imagePreview, labelContainer, predictButton;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
}

function handleImage(event) {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        predictButton.disabled = false;
    }

    reader.readAsDataURL(image);
}

async function predict() {
    const prediction = await model.predict(imagePreview);
    labelContainer.innerHTML = ""; // Clear previous results
    for (let i = 0; i < prediction.length; i++) {
        const classPrediction = 
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        const elem = document.createElement("div");
        elem.innerHTML = classPrediction;
        labelContainer.appendChild(elem);
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    imagePreview = document.getElementById('image-preview');
    labelContainer = document.getElementById('label-container');
    predictButton = document.getElementById('predict-button');
    init();
});