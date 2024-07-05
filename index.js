// Write your code here!
const elementToRemove = document.querySelector('main#main');
if (elementToRemove) {
    elementToRemove.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Mohamed is the champion";