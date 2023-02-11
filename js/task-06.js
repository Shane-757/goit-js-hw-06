const input = document.getElementById("validation-input");

input.addEventListener("input", controlBorderColor, false);

function controlBorderColor() {
    if (this.value.length === Number.parseInt(input.getAttribute("data-length"))) {
        input.classList = "valid" 
    } else { input.classList = "invalid" }
}