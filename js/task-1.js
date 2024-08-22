document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap" rel="stylesheet">>
`);

const ul = document.querySelector("#categories");
const items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = "item-wrapper";
    item.insertAdjacentElement('beforebegin', wrapper);
    wrapper.appendChild(item);
    
    const h2 = item.querySelector("h2").textContent;
    const elements = item.lastElementChild.children.length;

    console.log(`Category: ${h2}`)
    console.log(`Elements: ${elements}`)
});

// for (let i = 0; i < items.length; i++) {
//     const h2 = items[i].querySelector("h2").textContent;
//     console.log(`Category: ${h2}`)
//     const lastEl = items[i].lastElementChild;
//    console.log(`Elements: ${lastEl.children.length}`)
// }