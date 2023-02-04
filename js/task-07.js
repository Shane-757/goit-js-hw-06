
const content = document.getElementById('font-size-control');
const text = document.getElementById('text');
content.oninput = function(){
    text.style.fontSize = content.value + "px";
}