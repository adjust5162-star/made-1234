const MODEL_URL = "https://teachablemachine.withgoogle.com/models/b-S-p_4z9/";

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const imageUpload = document.getElementById("imageUpload");
    const imagePreview = document.getElementById("imagePreview");
    const predictButton = document.getElementById("predictButton");
    const labelContainer = document.getElementById("label-container");

    // Application State
    let model;
    let isModelLoaded = false;
    let isImageUploaded = false;

    // Function to update the predict button's state
    function updatePredictButtonState() {
        if (isModelLoaded && isImageUploaded) {
            predictButton.disabled = false;
        } else {
            predictButton.disabled = true;
        }
    }

    // Load the model
    async function loadModel() {
        labelContainer.innerHTML = "Loading Model...";
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";
        try {
            model = await tmImage.load(modelURL, metadataURL);
            isModelLoaded = true;
            labelContainer.innerHTML = "Model loaded. Please upload an image.";
            updatePredictButtonState();
        } catch (error) {
            console.error("Error loading model:", error);
            labelContainer.innerHTML = "Error loading model. Please refresh.";
        }
    }

    // Handle image upload
    imageUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
                isImageUploaded = true;
                updatePredictButtonState();
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle prediction
    predictButton.addEventListener("click", async () => {
        if (!isModelLoaded || !isImageUploaded) {
            return;
        }

        predictButton.disabled = true;
        predictButton.textContent = "Predicting...";

        try {
            const prediction = await model.predict(imagePreview);
            labelContainer.innerHTML = ""; // Clear previous results
            prediction.forEach(pred => {
                const el = document.createElement("div");
                el.innerHTML = `${pred.className}: ${(pred.probability * 100).toFixed(2)}%`;
                labelContainer.appendChild(el);
            });
        } catch (error) {
            console.error("Prediction error:", error);
            labelContainer.innerHTML = "Prediction failed. Please try again.";
        } finally {
            predictButton.disabled = false;
            predictButton.textContent = "Predict";
        }
    });

    // Initial setup
    updatePredictButtonState();
    loadModel();
});
