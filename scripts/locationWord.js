document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".greetings-text");
  const text = textElement.textContent;
  textElement.innerHTML = "";

  // Example images (you can use your own images)
  const images = [
    "url(https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.2x.rsocial.w600.jpg)",
  ];

  // Create span elements for each character and set background image
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    if (text[i] !== " ") {
      span.style.backgroundImage = images[i % images.length];
    }
    textElement.appendChild(span);
  }
});
