const items = document.querySelectorAll("li.item");
items.forEach(item => {
    console.log(`Number of categories: ${items.length}`);
});

for (let i = 0; i < items.length; i++) {
    const h2 = items[i].querySelector("h2").textContent;
    console.log(`Category: ${h2}`)
    const lastEl = items[i].lastElementChild;
   console.log(`Elements: ${lastEl.children.length}`)
}

// const items = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${items.length}`);
// items.forEach(item => {
//     const h2 = item.querySelector("h2").textContent;
//     const elements = item.querySelector("ul").children.length;
//     console.log(`Category: ${h2}`);
//     console.log(`Elements: ${elements}`);
// })