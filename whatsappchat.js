document.addEventListener("DOMContentLoaded", function () {
    const whatsappIcon = document.getElementById("whatsapp-icon");
    const fakeChat = document.getElementById("fakeChat");
  
    whatsappIcon.addEventListener("mouseover", function () {
      fakeChat.style.display = "block";
    });
  
    whatsappIcon.addEventListener("mouseout", function () {
      fakeChat.style.display = "none";
    });
  
    whatsappIcon.addEventListener("click", function () {
      window.location.href = "https://wa.me/your_phone_number";
    });
  });
  