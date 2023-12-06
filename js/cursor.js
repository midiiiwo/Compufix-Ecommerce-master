document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);
  
    const links = document.querySelectorAll("body");
    const navlinks = document.querySelectorAll("body");
  
    document.addEventListener("mousemove", (e) => {
      let leftPosition = e.pageX + 4;
      let topPosition = e.pageY + 4;
  
      cursor.style.left = leftPosition + "px";
      cursor.style.top = topPosition + "px";
    });
  
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
      });
  
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
      });
    });
  
    // Animation
    navlinks.forEach((body, i) => {
      li.style.animationDelay = 0 + i * 140 + "ms";
    });
  });
  