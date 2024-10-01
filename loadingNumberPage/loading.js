const btn = document.getElementById("generate-btn");
const loading = document.getElementById("loading");
const numberDiv = document.getElementById("number");

function generateRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      resolve(randomNumber);
    }, 5000);
  });
}

function showLoading() {
  loading.style.display = "block";
  numberDiv.textContent = "";
  btn.disabled = true;
}

function hideLoading() {
  loading.style.display = "none";
  btn.disabled = false;
}

btn.addEventListener("click", () => {
  showLoading();
  generateRandomNumber()
    .then((randomNumber) => {
      numberDiv.textContent = randomNumber;
    })
    .finally(() => {
      hideLoading();
    });
});
