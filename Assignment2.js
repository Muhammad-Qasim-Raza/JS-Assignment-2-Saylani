// Task#1

function closure(num) {
    return function (value) {
        return num + value;
    }
}

const addclosure = closure(+prompt("Enter any Number"));
console.log(addclosure(+prompt("Enter any Number to add")));


// Task#2

function searchArray(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === val) {
        return true;
    }
    return searchArray(arr.slice(1), val);
}

const randomNumbers = [5, 9, 7, 18, 12, 25, 6, 34, 1, 20, 17, 14, 22, 3, 11, 29, 8, 24, 16, 27, 19, 10, 23, 4, 31];
console.log(searchArray(randomNumbers, +prompt("Enter any Number to find")));


// Task#3

window.onload = function () {

    function addParagraph(text) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = text;
        const contentDiv = document.getElementById('content');
        contentDiv.appendChild(newParagraph);
    }

    addParagraph("03472584939 this is my WhatsApp Number! This is a new paragraph added with JavaScript!");
    addParagraph("The bottom paragraph is also by yourself!");
    addParagraph(prompt("Write any paragraph to add"));

}


// Task#4

window.onload = function () {

    function addListItem(text) {
        let listItem = document.createElement("li");
        listItem.textContent = text;
        let list = document.getElementById("myList");
        list.appendChild(listItem);
    }

    addListItem("Item 3");
    addListItem(prompt("Write any Item to add"));

}


// Task#5

function changeColor() {
    let element = document.getElementById("myElement");
    let color = prompt("Enter a new color in hex format (e.g. #ff0000) or blue/red/green etc:");
    element.style.backgroundColor = color;
}


// Task#6

function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}
const myObj1 = {
    name: "Muhammad Qasim Raza",
    age: 20,
    course: "JavaScript"
};

saveObjectToLocalStorage("myKey", myObj1);


// Task#7

function getObjectFromLocalStorage(key) {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
}

const getObj = getObjectFromLocalStorage("myKey");
console.log(getObj);


// Task#8

function saveToLocalStorage(obj) {
    for (let key in obj) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    }
    let newObj = {};
    for (let key in obj) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
  }

let myObj = {
    name: "Muhammad Qasim Raza",
    age: 20,
    course: "JavaScript"
};

let newObj = saveToLocalStorage(myObj);

console.log(newObj); 