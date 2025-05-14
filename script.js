document.addEventListener("DOMContentLoaded", function () {
    // Element selections
    const changeTextBtn = document.getElementById("changeTextBtn");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const addParagraphBtn = document.getElementById("addParagraphBtn");
    const removeElementBtn = document.getElementById("removeElementBtn");
    const subtitle = document.querySelector(".header-subtitle");
    const header = document.querySelector(".header");
    const storyContent = document.querySelector(".story-content");
    const heroImage = document.getElementById("heroImage");
    
    // Form elements
    const sampleForm = document.getElementById("sampleForm");
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    const passwordInput = document.getElementById("passwordInput");
    const passwordError = document.getElementById("passwordError");
  
    // Basic Event Handling
    if (changeTextBtn && subtitle) {
      changeTextBtn.addEventListener("click", function () {
        subtitle.textContent = "Embrace the bugs, conquer the world!";
      });
    }
  
    if (changeColorBtn && header) {
      changeColorBtn.addEventListener("click", function () {
        header.classList.toggle("modified");
      });
    }
  
    if (addParagraphBtn && storyContent) {
      addParagraphBtn.addEventListener("click", function () {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "Follow me for more coding stories!";
        storyContent.appendChild(newParagraph);
      });
    }
  
    if (removeElementBtn && storyContent) {
      removeElementBtn.addEventListener("click", function () {
        let elementToRemove = storyContent.querySelector("p:last-child");
        if (elementToRemove) {
          elementToRemove.remove();
        }
      });
    }
  
    // Additional Event Handling: Keypress Detection
    document.addEventListener("keypress", function (event) {
      console.log("Key pressed:", event.key);
      if (event.key === "Enter") {
        subtitle.textContent = "Enter key pressed! Bugs be gone!";
      }
    });
  
    // Bonus: Double-Click Secret Action on Header
    header.addEventListener("dblclick", function () {
      alert("Secret action unlocked! You double-clicked the header!");
      header.style.backgroundColor = "#f0e68c"; // Apply a secret style change
    });
  
    // Bonus: Long Press Detection on "Change Text" Button
    let pressTimer;
    changeTextBtn.addEventListener("mousedown", function () {
      pressTimer = setTimeout(function () {
        subtitle.textContent = "Long press activated! Ready to debug life.";
      }, 1500);
    });
    changeTextBtn.addEventListener("mouseup", function () {
      clearTimeout(pressTimer);
    });
    changeTextBtn.addEventListener("mouseleave", function () {
      clearTimeout(pressTimer);
    });
  
    // Interactive Image Gallery: Click image to cycle through different pictures
    const imageArray = [
      "https://images.pexels.com/photos/8885041/pexels-photo-8885041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=400"
    ];
    let currentImageIndex = 0;
    if (heroImage) {
      heroImage.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        heroImage.src = imageArray[currentImageIndex];
      });
    }
  
    // Form Validation
    if (sampleForm) {
      sampleForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting for demo purposes
        let valid = true;
  
        // Email validation using a simple regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          emailError.textContent = "Please enter a valid email address.";
          valid = false;
        } else {
          emailError.textContent = "";
        }
  
        // Password validation: Ensure at least 8 characters
        if (passwordInput.value.length < 8) {
          passwordError.textContent = "Password must be at least 8 characters long.";
          valid = false;
        } else {
          passwordError.textContent = "";
        }
  
        if (valid) {
          alert("Form submitted successfully!");
          sampleForm.reset();
        }
      });
  
      // Real-time Feedback for Email
      emailInput.addEventListener("input", function () {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          emailError.textContent = "Invalid email format.";
        } else {
          emailError.textContent = "";
        }
      });
  
      // Real-time Feedback for Password
      passwordInput.addEventListener("input", function () {
        if (passwordInput.value.length < 8) {
          passwordError.textContent = "Minimum 8 characters required.";
        } else {
          passwordError.textContent = "";
        }
      });
    }
  });
  