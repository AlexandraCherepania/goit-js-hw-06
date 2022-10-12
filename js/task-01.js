

const categoryElRef = document.querySelector("#categories");

const categoryItemRef = categoryElRef.querySelectorAll("li.item");
console.log('Number of categories:', categoryItemRef.length);

const titleElRef = categoryElRef.querySelectorAll('#categories>li');
titleElRef.forEach((element) => {
console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`);
});

