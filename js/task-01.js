const categoryEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryEl.length} `);

categoryEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});