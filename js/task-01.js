const categoriesEl = document.querySelector('#categories');
const categoriesItemEl = document.querySelectorAll('.item');
// for (let i = 0; i < categoriesItemEl.length; i += 1) {
//     if (categoriesItemEl[i] < categoriesItemEl.length) { continue; }
// }
console.log(`Number of categories: ${categoriesItemEl.length}`);

const firstItem = categoriesEl.firstElementChild;
const firstItemHeader = firstItem.firstElementChild;
const firstItemList = firstItem.children[1];
const firstItemNodes = firstItemList.children;

// const categoriesHeaderEl = document.querySelectorAll("h2");
const secondItem = categoriesEl.children[1];
const secondItemHeader = secondItem.firstElementChild;
const secondItemList = secondItem.children[1];
const secondItemNodes = secondItemList.children;
const thirdItem = categoriesEl.lastElementChild;
const thirdItemHeader = thirdItem.firstElementChild;
const thirdItemList = thirdItem.children[1];
const thirdItemNodes = thirdItemList.children;
console.log(`Category: ${firstItemHeader.textContent}`);
console.log(`Elements: ${firstItemNodes.length}`);
console.log(`Category: ${secondItemHeader.textContent}`);
console.log(`Elements: ${secondItemNodes.length}`);
console.log(`Category: ${thirdItemHeader.textContent}`);
console.log(`Elements: ${thirdItemNodes.length}`);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5