49
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
biryani.appendChild(itemCard);
})
chickenData.map(item=>{
var itemCard= document.createElement('div');
itemCard.setAttribute('id','item-card')
var cardTop= document.createElement('div');
cardTop.setAttribute('id','card-top');
var star= document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText= ' ' + item.rating;
var heart= document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id)
cardTop.appendChild(star);
cardTop.appendChild(heart);
var img= document.createElement('img');
img.src=item.img;
50
var itemName= document.createElement('p');
itemName.setAttribute('id','item-name');
itemName.innerText= item.name;
var itemPrice= document.createElement('p');
itemPrice.setAttribute('id','item-price');
itemPrice.innerText= 'Price : $ ' + item.price;
itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
chicken.appendChild(itemCard)
})
PaneerData.map(item=>{
var itemCard= document.createElement('div');
itemCard.setAttribute('id','item-card')
var cardTop= document.createElement('div');
cardTop.setAttribute('id','card-top');
var star= document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText= ' ' + item.rating;
var heart= document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id)
51
cardTop.appendChild(star);
cardTop.appendChild(heart);
var img= document.createElement('img');
img.src=item.img;
var itemName= document.createElement('p');
itemName.setAttribute('id','item-name');
itemName.innerText= item.name;
var itemPrice= document.createElement('p');
itemPrice.setAttribute('id','item-price');
itemPrice.innerText= 'Price : $ ' + item.price;
itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
paneer.appendChild(itemCard)
})
vegetableData.map(item=>{
var itemCard= document.createElement('div');
itemCard.setAttribute('id','item-card')
var cardTop= document.createElement('div');
cardTop.setAttribute('id','card-top');
52
var star= document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText= ' ' + item.rating;
var heart= document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id)
cardTop.appendChild(star);
cardTop.appendChild(heart);
var img= document.createElement('img');
img.src=item.img;
var itemName= document.createElement('p');
itemName.setAttribute('id','item-name');
itemName.innerText= item.name;
var itemPrice= document.createElement('p');
itemPrice.setAttribute('id','item-price');
itemPrice.innerText= 'Price : $ ' + item.price;
itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
vegetable.appendChild(itemCard)
53
})
chineseData.map(item=>{
var itemCard= document.createElement('div');
itemCard.setAttribute('id','item-card')
var cardTop= document.createElement('div');
cardTop.setAttribute('id','card-top');
var star= document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText= ' ' + item.rating;
var heart= document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id)
cardTop.appendChild(star);
cardTop.appendChild(heart);
var img= document.createElement('img');
img.src=item.img;
var itemName= document.createElement('p');
itemName.setAttribute('id','item-name');
itemName.innerText= item.name;
var itemPrice= document.createElement('p');
itemPrice.setAttribute('id','item-price');
itemPrice.innerText= 'Price : $ ' + item.price;
54
itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
chinese.appendChild(itemCard)
})
southData.map(item=>{
var itemCard= document.createElement('div');
itemCard.setAttribute('id','item-card')
var cardTop= document.createElement('div');
cardTop.setAttribute('id','card-top');
var star= document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText= ' ' + item.rating;
var heart= document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id)
cardTop.appendChild(star);
cardTop.appendChild(heart);
var img= document.createElement('img');
55
img.src=item.img;
var itemName= document.createElement('p');
itemName.setAttribute('id','item-name');
itemName.innerText= item.name;
var itemPrice= document.createElement('p');
itemPrice.setAttribute('id','item-price');
itemPrice.innerText= 'Price : $ ' + item.price;
itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);
southIndian.appendChild(itemCard)
})
}
displayItems();
const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData);
function selectTaste(){
var categoryList= document.getElementById('category-list');
vegData.map(item=>{
console.log(item)
var listCard= document.createElement('div');
listCard.setAttribute('class','list-card');
56
var listImg= document.createElement('img');
listImg.src= item.img;
var listName= document.createElement('a');
listName.setAttribute('class','list-name');
listName.innerText= item.category;
listName.setAttribute('href','#'+item.category)
listCard.appendChild(listImg);
listCard.appendChild(listName);
var cloneListCard= listCard.cloneNode(true);
categoryList.appendChild(listCard);
document.querySelector('.category-header').appendChild(cloneListCard)
})
}
selectTaste();
document.querySelectorAll('.add-to-cart').forEach(item=>{
item.addEventListener('click',addToCart)
})
var cartData= [];
function addToCart(){
var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
var itemObj= foodItem.find(element=>element.name==itemToAdd);
var index= cartData.indexOf(itemObj);
if(index=== -1){
57
document.getElementById(itemObj.id).classList.add('toggle-heart');
cartData= [...cartData,itemObj];
}
else if(index > -1){
alert("Added to cart!");
}
document.getElementById('cart-plus').innerText=
' ' + cartData.length + ' Items';
document.getElementById('m-cart-plus').innerText=
' ' + cartData.length;
totalAmount();
cartItems();
}
function cartItems(){
var tableBody= document.getElementB