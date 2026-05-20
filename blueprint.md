# Project Blueprint: Animal Face Test

## 1. Overview

This project is a web application that uses a pre-trained Teachable Machine model to determine whether an uploaded image contains a dog or a cat. The user can upload an image file, and the application will display the prediction in real-time. It features a modern, responsive design and provides clear user feedback during model loading and prediction.

## 2. Style, Design, and Features

*   **UI Components:**
    *   **Loading Spinner:** Indicates that the model is loading.
    *   **Card Layout:** A modern card-based design for the main interface.
    *   **Image Upload Button:** A styled button with an icon for selecting an image.
    *   **Image Preview:** A designated area to display the uploaded image, with a placeholder.
    *   **Predict Button:** A button that shows a loading state during prediction.
    *   **Label Container:** Displays prediction results with class names and probabilities in a structured list.
*   **Design:**
    *   **Layout:** A centered, responsive card layout that looks great on all devices.
    *   **Fonts:** 'Poppins' from Google Fonts for a clean, modern aesthetic.
    *   **Colors:** A professional color scheme with a gradient header, a subtle background pattern, and strong accent colors.
    *   **Effects:**
        *   **Shadows:** Deep, layered shadows for a sense of depth and a premium feel.
        *   **Transitions:** Smooth transitions for hover effects and layout changes.
        *   **Icons:** Font Awesome icons for better usability and visual appeal.
*   **Features:**
    *   **File-based Prediction:** The application predicts from a user-uploaded image file.
    *   **State Management:** Clear state management ensures the 'Predict' button is only active when both the model is loaded and an image is uploaded.
    *   **User Feedback:** The UI provides feedback for loading, prediction, and errors.
    *   **Event Handling:** Event listeners are managed in JavaScript for better code structure.

## 3. Implementation Plan

*   **HTML (`index.html`):**
    *   Add a loading spinner element.
    *   Structure the main application within a card-style container.
    *   Include Font Awesome for icons.
    *   Use a file input for image uploads and a placeholder for the preview area.
*   **JavaScript (`main.js`):**
    *   Manage the visibility of the loader and the main app container.
    *   Implement state variables (`isModelLoaded`, `isImageUploaded`) to control application flow.
    *   Create a central function `updatePredictButtonState()` to manage the predict button's state.
    *   Show a loading indicator on the predict button during the prediction process.
    *   Display results in a more structured and readable format.
    *   Bind event listeners programmatically instead of using inline HTML attributes.
*   **CSS (`style.css`):**
    *   Implement a modern card-based design with shadows, gradients, and rounded corners.
    *   Style the loading spinner and the button's internal loader.
    *   Ensure the layout is responsive and visually appealing.

## 4. Current Task: Critical Bug Fix - Prediction Not Triggering

*   **Objective:** Fix a critical bug where clicking the 'Predict' button did not trigger the prediction function.
*   **Changes:**
    *   **`main.js`:** Added an event listener to the 'Predict' button to call the `predict()` function on click. Moved the `onchange` event for the file input from the HTML to a programmatic event listener in JavaScript for better code separation and maintenance.
    *   **`index.html`:** Removed the inline `onchange="handleImage(event)"` attribute from the file input element.
