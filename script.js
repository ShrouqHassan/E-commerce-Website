var slideimg = document.getElementsByClassName("slideimg")[0];
var products = document.getElementById("Products");
var row = document.getElementsByClassName("row")[0];
var  arr=[];
arr[0]="./images/furneture/green-sofa-white-living-room-with-free-space.jpg";
arr[1]="./images/furneture/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg";
arr[2]="./images/furneture/empty-flat-interrior-with-elements-decoration.jpg";
arr[3]="./images/furneture/modern-living-room-style.jpg";
arr[4]="./images/furneture/wood-sideboard-living-room-interior-with-copy-space.jpg";
arr[5]="./images/furneture/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg";
arr[6]="./images/furneture/retro-living-room-interior-design.jpg";
var i=0;
function displaySlideBar(){
    setInterval(function(){
        i++;
        slideimg.setAttribute("src",arr[i]);
        if(i==6)
            i=0;
    },2500);


}
var V =[];
var Plants=[];
var paintings=[];
var F=[];
var C=[];
var allProducts=[];

function displayProducts(){

    row.innerHTML="";
        products.forEach(element => {
            row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top " alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button class="btn btn-primary" onclick="AddToCart(${element.id})">Add to cart</button>
            <button class="btn btn-primary" style="background-color:green;"onclick="itemDetails(${element.id})">View</button>
            <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            </div></div>`
        if(element.category=="Furneture"){
            F.push(element);
        }
        else if(element.category=="Vases"){
            V.push(element);
        }
        else if(element.category=="Paintings"){

            paintings.push(element);
        }
        else if(element.category=="Clocks"){
            C.push(element);
        }
        else if(element.category=="Plants"){
            Plants.push(element);
        }
            


        });
        localStorage.setItem("products",JSON.stringify(products));
        cartcount.innerHTML=counter;
}

function getAllProduct() {
    fetch("allProducts.json")
        .then((response) => response.text())
        .then((json) => (products = JSON.parse(json)))
        .then((products) => { displayProducts()})
        .catch((error) => { console.log(error) })
}


function getPaintings(){
    row.innerHTML="";
    paintings.forEach(paintings => {
    row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
    <img src="${paintings.image}" class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="card-title">${paintings.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" onclick="AddToCart()">Add to cart</button> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    </div>
    </div></div>`
});

}
function getVasses(){
    row.innerHTML="";
    V.forEach(V => {
    row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
    <img src="${V.image}" class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="card-title">${V.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" onclick="AddToCart()">Add to cart</button> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    </div>
    </div></div>`
});

}
function getClocks(){
    row.innerHTML="";
    C.forEach(C => {
    row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
    <img src="${C.image}" class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="card-title">${C.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" onclick="AddToCart()">Add to cart</button> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    </div>
    </div></div>`
});

}
function getFurneture(){
    row.innerHTML="";
    F.forEach(F => {
    row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
    <img src="${F.image}" class="card-img-top " alt="...">
    <div class="card-body">
    <h5 class="card-title">${F.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" onclick="AddToCart()">Add to cart</button> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    </div>
    </div></div>`
});

}
function getPlants(){
    row.innerHTML="";
    Plants.forEach(Plants => {
        row.innerHTML+=` <div class="col">  <div class="card" style="width: 18rem;">
        <img src="${Plants.image}" class="card-img-top " alt="...">
        <div class="card-body">
        <h5 class="card-title">${Plants.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-primary" onclick="AddToCart()">Add to cart</button> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        </div></div>`
    });
}
var ids="";
if(localStorage.getItem("Ids")==null)
    ids="";
else
ids=localStorage.getItem("Ids");
var counter
if(localStorage.getItem("cartCount")==null){
    counter=0;
    cartcount.innerHTML=counter;
}
else
counter=localStorage.getItem("cartCount");


var cartcount = document.getElementsByTagName("span")[0];
//====================================================================================================================================
function AddToCart(id){
    var cartcount = document.getElementsByTagName("span")[0];
    if(localStorage.getItem("cartCount")==null){
        counter=0;
        cartcount.innerHTML=counter;
    }
    else
    counter=localStorage.getItem("cartCount");

    counter++;
    localStorage.setItem("cartCount",counter);
    cartcount.innerHTML=counter;

    if(localStorage.getItem("Ids")==null)
    ids="";
    else
    ids=localStorage.getItem("Ids");
    ids+=id+",";
    localStorage.setItem("Ids",ids);
    console.log("here");
}


var cart = document.getElementById("LoadCart");

function LoadCart(){
    cartcount.innerHTML=localStorage.getItem("cartCount");
    var i=0;
    var elements=localStorage.getItem("Ids");
    var items=elements.split(",");
allProducts=JSON.parse(localStorage.getItem("products"));
console.log(allProducts);
allProducts.forEach(element => {
    items.forEach(e => {
    if(element.id==e){
        cart.innerHTML+=`
    <div class="card mb-3" style="max-width: 900px; height:200px">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.image}" class="img-fluid rounded-start" alt="..." style="width:180px; height:200px">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    
                    </div>
                </div>
                </div>
            </div>`

    }
}
);
});

}



function about(){
    cartcount.innerHTML=localStorage.getItem("cartCount");
}




var div=document.getElementById("ProductDetails");

function itemDetails(id){
    console.log(id);
    localStorage.setItem("View",id);

    window.open("./itemdetails.html");


    }

    function load_item(){
        let item = localStorage.getItem("View");
        let allProducts= JSON.parse(localStorage.getItem("products"));
        console.log(item);
        console.log(allProducts[0].id);
    allProducts.forEach(element => {
        if(element.id==item)
{
            div.innerHTML=`
            <br>
            <br>
            <br>
            <div class="card mb-3" style="max-width: 900px; height:500px" >
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.image}" class="img-fluid rounded-start" alt="..."style="width:500px; height:500px" >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    
                    </div>
                </div>
                </div>
            </div>`
        }
        });
    }
