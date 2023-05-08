//=============================== Navbar =============================================================
const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};

document.addEventListener("scroll", onScroll);

//-------------- Responsive ----------------------
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Auto generated text
const typewriter = document.querySelector(".typewriter h3");

typewriter.addEventListener("animationend", () => {
  typewriter.style.animation = "none";
  typewriter.offsetHeight;
  typewriter.style.animation = null;
});

window.addEventListener("load", () => {
  typewriter.style.animationPlayState = "running";
});
//Rounded Text
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 7.7}deg)">${char}</span>`
  )
  .join("");

//------------------- Cards-----------------------
const card = document.querySelector(".card");
card.addEventListener("click", () => {
  console.log("Card clicked!");
});
