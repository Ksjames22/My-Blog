document.addEventListener("DOMContentLoaded", function() {
    const toggleModeBtn = document.getElementById("DarkMode");
    const backBtn = document.getElementById("backBtn");
  
    toggleModeBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  
    backBtn.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });