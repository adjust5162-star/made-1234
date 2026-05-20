const MODEL_URL = "https://teachablemachine.withgoogle.com/models/b-S-p_4z9/";

document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("imageUpload");
    const imagePreview = document.getElementById("imagePreview");
    const predictButton = document.getElementById("predictButton");
    const labelContainer = document.getElementById("label-container");

    let model;
    let isImageReady = false;

    async function loadModel() {
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";
        try {
            model = await tmImage.load(modelURL, metadataURL);
            console.log("Model loaded");
            checkReady();
        } catch (error) {
            console.error("Error loading model:", error);
            labelContainer.innerHTML = "Failed to load model.";
        }
    }

    imageUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
                isImageReady = true;
                checkReady();
            };
            reader.readAsDataURL(file);
        }
    });

    function checkReady() {
        if (model && isImageReady) {
            predictButton.disabled = false;
        }
    }

    predictButton.addEventListener("click", async () => {
        if (!model || !isImageReady) return;

        predictButton.disabled = true;
        predictButton.textContent = "Predicting...";
        
        try {
            const prediction = await model.predict(imagePreview);
            labelContainer.innerHTML = ""; 
            prediction.forEach(pred => {
                const el = document.createElement("div");
                el.innerHTML = `${pred.className}: ${(pred.probability * 100).toFixed(2)}%`;
                labelContainer.appendChild(el);
            });
        } catch (error) {
            console.error("Prediction error:", error);
            labelContainer.innerHTML = "Prediction failed.";
        } finally {
            predictButton.disabled = false;
            predictButton.textContent = "Predict";
        }
    });

    loadModel();
});
