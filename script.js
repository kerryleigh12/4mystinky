const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Awhhh, I like you too, my Nugget <3";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

function moveButton() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile tap
noBtn.addEventListener("touchstart", moveButton);

// Optional: fallback for persistent click trolls
noBtn.addEventListener("click", moveButton);
