document.getElementById("validation-input").addEventListener("input", controlBorderColor, false);
const input = document.getElementById("validation-input");

function controlBorderColor() {
    if (this.value.length === Number.parseInt(input.getAttribute("data-length"))) {
        input.classList = "valid" 
    } else { input.classList = "invalid" }
}