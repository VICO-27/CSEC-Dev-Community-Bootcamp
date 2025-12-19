const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", () => {
    if (isOn) {
        statusText.textContent = "OFF";
    } else {
        statusText.textContent = "ON";
    }

    isOn = !isOn;
});
