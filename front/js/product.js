var str= window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);
// returning product id

let source = 'http://localhost:3000/api/products';
fetch(source).then((response) => 
response.json().then((data) => {
    console.log(data);
//returning API table of data
var product = data.findIndex(item => item._id === id);
console.log(product);
//returning object number corresponding to id
console.log(data[product]);
//returning all object parameters
var productimage = data[product].imageUrl;
var productalttxt = data[product].altTxt;
var productname = data[product].name;
var productprice = data[product].price;
var productdescription = data[product].description;
var productcolor = data[product].colors;

let affichageimg = `<img src="${productimage}" alt="${productalttxt}">`;
    {
        document.getElementsByClassName('item__img')
        document.querySelector(".item__img").innerHTML = affichageimg
    }

window.onload = function displayproduct() {
        document.getElementById('title')
            .insertAdjacentHTML('afterbegin', `
        ${productname}
        `)
        document.getElementById('price')
            .insertAdjacentHTML('afterbegin', `
        ${productprice}
        `)
        document.getElementById('description')
        .insertAdjacentHTML('afterbegin', `
        ${productdescription}
        `)
        for (let colors of [product]){
        document.getElementById('colors')
        .insertAdjacentHTML('afterbegin', `
        <option value="${productcolor}">${productcolor}</option>
        `)
        }
        
}

/*window.onload = function displayprice() {
        document.getElementById('price')
            .insertAdjacentHTML('afterbegin', `
        ${productprice}
        `)
    }*/


}));

