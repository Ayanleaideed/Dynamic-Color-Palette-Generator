// JavaScript
const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.append(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContainerEls.forEach((containerEl) => {
    const newColorCode = randomColor();
    containerEl.style.backgroundColor = "#" + newColorCode;
    containerEl.innerText = "#" + newColorCode;

    // Add click event listener to copy the color code
    containerEl.addEventListener("click", () => {
      copyColorToClipboard(newColorCode);
      showIndicator(containerEl);
    });
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}

function copyColorToClipboard(colorCode) {
  const dummyInput = document.createElement("input");
  document.body.appendChild(dummyInput);
  dummyInput.setAttribute("value", "#" + colorCode);
  dummyInput.select();
  document.execCommand("copy");
  document.body.removeChild(dummyInput);
}

function showIndicator(containerEl) {
  // Create the indicator element
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.textContent = "Copied!";
  containerEl.appendChild(indicator);


  // Remove the indicator after a short delay
  setTimeout(() => {
    containerEl.removeChild(indicator);
  }, 500); // Adjust the duration of the indicator display (in milliseconds) as needed
}
const refreshButton = document.querySelector(".refresh-button");

refreshButton.addEventListener("click", () => {

  location.reload(); // Reload the page when the button is clicked
});
