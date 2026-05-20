# Project Blueprint: Animal Face Test

## 1. Overview

This project is a web application that uses a pre-trained Teachable Machine model to determine whether the user's face is more like a dog or a cat. It uses the webcam to capture the user's face and displays the prediction in real-time.

## 2. Style, Design, and Features

*   **UI Components:**
    *   **Webcam View:** A live feed from the user's webcam.
    *   **Start Button:** To initialize the model and webcam.
    *   **Label Container:** To display the prediction results (dog or cat) with probabilities.
*   **Design:**
    *   **Layout:** A simple, centered layout for easy viewing.
    *   **Fonts:** Clean and readable fonts.
    *   **Colors:** A simple and friendly color palette.
*   **Features:**
    *   **Real-time Prediction:** The application will continuously predict the user's face from the webcam feed.
    *   **Model Integration:** The application will use a Teachable Machine model loaded from a URL.

## 3. Implementation Plan

*   **HTML (`index.html`):**
    *   Set up the basic HTML structure.
    *   Add a `div` for the webcam container.
    *   Add a `div` for the label container.
    *   Add a `button` to start the process.
    *   Include the required JavaScript libraries (`@tensorflow/tfjs` and `@teachablemachine/image`).
*   **JavaScript (`main.js`):**
    *   Define the Teachable Machine model URL.
    *   Create an `init()` function to:
        *   Load the model.
        *   Set up and start the webcam.
        *   Start the prediction loop.
    *   Create a `loop()` function to update the webcam feed and call the `predict()` function.
    *   Create a `predict()` function to:
        *   Get the webcam image.
        *   Use the model to predict the class (dog or cat).
        *   Update the label container with the prediction results.
*   **CSS (`style.css`):**
    *   Add styles for the layout, webcam container, and label container to ensure a clean and user-friendly interface.
