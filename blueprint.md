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
    *   **Fonts:** 'Poppins' from Google Fonts for a clean and modern look.
    *   **Colors:** A vibrant color palette with a light background (`#f0f2f5`), blue accents (`#007bff`), and a subtle texture.
    *   **Effects:**
        *   **Noise Texture:** A subtle noise texture on the background for a premium feel.
        *   **Shadows:** Soft, deep shadows on the webcam container and button to create a lifted look.
        *   **Glow Effect:** A glow effect on the button on hover for better interactivity.
*   **Features:**
    *   **Real-time Prediction:** The application will continuously predict the user's face from the webcam feed.
    *   **Model Integration:** The application will use a Teachable Machine model loaded from a URL.

## 3. Implementation Plan

*   **HTML (`index.html`):**
    *   Set up the basic HTML structure.
    *   Link to Google Fonts for the 'Poppins' font.
    *   Add a `div` for the webcam container.
    *   Add a `div` for the label container.
    *   Add a `button` to start the process.
    *   Include the required JavaScript libraries (`@tensorflow/tfjs` and `@teachablemachine/image`).
*   **JavaScript (`main.js`):**
    *   Define the Teachable Machine model URL.
    *   Create an `init()` function to load the model, set up the webcam, and start the prediction loop.
    *   Create a `loop()` function to update the webcam feed and call the `predict()` function.
    *   Create a `predict()` function to get the prediction from the model and update the UI.
*   **CSS (`style.css`):**
    *   Add styles for a modern and visually appealing interface, including fonts, colors, shadows, and a background texture.

## 4. Current Task: Visual Enhancements & Redeployment

*   **Objective:** Enhance the visual design of the application and attempt to redeploy to GitHub.
*   **Changes:**
    *   **`index.html`:** Added a link to the 'Poppins' font from Google Fonts.
    *   **`style.css`:**
        *   Changed the font to 'Poppins'.
        *   Added a subtle noise texture to the background.
        *   Added shadow effects to the webcam container and button.
        *   Added a hover effect to the button.
        *   Improved the color palette.
