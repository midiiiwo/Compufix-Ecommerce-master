document.addEventListener("DOMContentLoaded", function () {
    const whatsappIcon = document.getElementById("whatsapp-icon");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        whatsappIcon.style.transform = "translateY(-100%)";
      } else {
        whatsappIcon.style.transform = "translateY(0)";
      }
    });
  });
  