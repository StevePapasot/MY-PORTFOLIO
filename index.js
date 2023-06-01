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

//------------------------------------------------- Downloadable CV ----------------------------------------------------
window.onload = function () {
  // Get the image element by its ID
  var pdfImage = document.getElementById("pdf-download");

  // Add a click event listener to the image
  pdfImage.addEventListener("click", function () {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    downloadLink.href = "/Stavros_Papasotiropoulos_Resume.pdf"; // Replace with the actual path to your PDF file
    downloadLink.download = "downloaded-file.pdf"; // Specify the file name for the downloaded file

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Programmatically trigger the click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
  });
};
