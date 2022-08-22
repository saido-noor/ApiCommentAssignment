fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(green) {
 console.log(green);

let greens = document.getElementById('products')
green.forEach(x => {
    let itemsList = document.createElement('li')
    itemsList.innerText = `${x.name}`
    greens.appendChild(itemsList)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(fruit) {
 console.log(fruit);

let fruitsList = document.getElementById('fruList')
fruit.forEach(y => {
    let listFruit = document.createElement('li')
    listFruit.innerText = `${y.name}`
    fruitsList.appendChild(listFruit)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(vegeta) {
 console.log(vegeta);

let veg = document.getElementById('vegList')
vegeta.forEach(v => {
    let vega = document.createElement('li')
    vega.innerText = `${v.name}`
    veg.appendChild(vega)
})
})
.catch(function(error){
 console.log('error',error);
});