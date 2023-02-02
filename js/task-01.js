"use strict";

const ulList = document.querySelector("#categories");
const items = ulList.getElementsByTagName("li");
let totalCats = 0
for (var i = 0; i < items.length; i++) {
    if (items[i].getElementsByTagName('h2').length > 0) {
        const elementUl = items[i].getElementsByTagName('ul')
        totalCats++
    }
}
console.log(`
Number of categories: ${totalCats}`)

for (var i = 0; i < items.length; i++) {
    if (items[i].getElementsByTagName('h2').length > 0) {
       
        const elementUl = items[i].getElementsByTagName('ul')
        console.log(`
Category: ${items[i].getElementsByTagName('h2')[0].innerHTML}
Elements: ${elementUl[0].getElementsByTagName('li').length}`)
    }
        totalCats++
    }


