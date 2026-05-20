# Project Blueprint: Animal Face Test

## 1. Overview

This project is a web application that uses a pre-trained Teachable Machine model to determine whether an uploaded image contains a dog or a cat. The user can upload an image file, and the application will display the prediction in real-time.

## 2. Style, Design, and Features

*   **UI Components:**
    *   **Image Upload Button:** To select an image file from the user's device.
    *   **Image Preview:** To display the uploaded image.
    *   **Predict Button:** To initiate the prediction on the uploaded image.
    *   **Label Container:** To display the prediction results (dog or cat) with probabilities.
*   **Design:**
    *   **Layout:** A simple, centered layout for easy use.
    *   **Fonts:** 'Poppins' from Google Fonts for a clean and modern look.
    *   **Colors:** A vibrant color palette with a light background (`#f0f2f5`), blue accents, and a subtle texture.
    *   **Effects:**
        *   **Noise Texture:** A subtle noise texture on the background for a premium feel.
        *   **Shadows:** Soft, deep shadows on the image container and buttons to create a lifted look.
        *   **Glow Effect:** A glow effect on buttons on hover for better interactivity.
*   **Features:**
    *   **Image-based Prediction:** The application predicts from a user-uploaded image file.
    *   **Model Integration:** The application uses a Teachable Machine model loaded from a URL.

## 3. Implementation Plan

*   **HTML (`index.html`):**
    *   Set up the basic HTML structure.
    *   Link to Google Fonts for the 'Poppins' font.
    *   Add an `input` of type `file` for image uploads.
    *   Add an `img` tag for the image preview.
    *   Add a `button` to trigger the prediction.
    *   Add a `div` for the label container.
    *   Include the required JavaScript libraries (`@tensorflow/tfjs` and `@teachablemachine/image`).
*   **JavaScript (`main.js`):**
    *   Define the Teachable Machine model URL.
    *   Create an `init()` function to load the model.
    *   Create a `handleImage()` function to handle file selection, read the image, and display a preview.
    *   Create a `predict()` function to get the prediction from the model using the uploaded image and update the UI.
*   **CSS (`style.css`):**
    *   Add styles for a modern and visually appealing interface, including the new file upload button and image preview area.

## 4. Current Task: Feature Change - File Upload Prediction

*   **Objective:** Change the application to use file uploads for prediction instead of the webcam.
*   **Changes:**
    *   **`index.html`:** Replaced webcam elements with a file input, image preview, and a predict button.
    *   **`style.css`:** Added styles for the new upload button, image preview area, and disabled button state.
    *   **`main.js`:** Removed webcam logic and implemented functions to handle image file loading, previewing, and prediction.
