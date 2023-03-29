"use strict";

//const ulList = document.querySelector("#categories");
//const items = ulList.getElementsByTagName("li");
//let totalCats = 0
//for (var i = 0; i < items.length; i++) {
   // if (items[i].getElementsByTagName('h2').length > 0) {
   //     const elementUl = items[i].getElementsByTagName('ul')
   //     totalCats++
   // }
//}
//console.log(`
//Number of categories: ${totalCats}`)

//for (var i = 0; i < items.length; i++) {
   // if (items[i].getElementsByTagName('h2').length > 0) {
       
    //    const elementUl = items[i].getElementsByTagName('ul')
     //   console.log(`
//Category: ${items[i].getElementsByTagName('h2')[0].innerHTML}
//Elements: ${elementUl[0].getElementsByTagName('li').length}`)
 //   }
 //       totalCats++
  //  }
// Get the ul#categories element
const categoriesList = document.querySelector('#categories');

// Get all li.item elements
const categoryItems = categoriesList.querySelectorAll('li.item');

// Display the number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Loop through each category item
categoryItems.forEach((category) => {
  // Get the category header and element list
  const categoryHeader = category.querySelector('h2');
  const categoryElements = category.querySelectorAll('ul li');

  // Display the category header and number of elements
  console.log(`Category: ${categoryHeader.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});

