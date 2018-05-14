
/* VARIABLES ========================================= */
var shoppingCart = [];
var storeLinksEls = document.getElementsByTagName('a');
var storeContainerEl = document.getElementById('store-container');
var divEl = document.createElement('div');

/* EVENTS ========================================= */

// show webstore images, when clicked on a link
for (var i = 0; i < storeLinksEls.length; i++){
    storeLinksEls[i].addEventListener('click', function(){
        // grabs data-name from link to find the right pictures
        var linkData = this.dataset.name;
        // clears content and show new store brand
        storeContainerEl.innerHTML = "";
        storeContainerEl.className = 'show';
        divEl.className = 'container';
        // finds which link is clicked on
        var storeObj = whichBrand(linkData);
        // find images, name, price and applies to the store-container
        findImages(storeObj);
        storeContainerEl.appendChild(divEl);
    });
}

// determines from list of store Brand Names
function whichBrand(linkData) {
    if (linkData === 'oxle') {
        return oxleItemsObj;
    }
    else if (linkData === 'bash') {
        return bashItemsObj;
    }
    else if (linkData === 'dino') {
        return dinoItemsObj;
    }
}

// loads name, price, and img based on data in items.js file
function findImages(storeObj){
    divEl.innerHTML = "";
    for (var i = 0; i < storeObj.length; i++){
        var currentItem = storeObj[i];
        //creates containers for elements
        var divEl2 = document.createElement('div');
        divEl2.className = 'img-container';
        divEl.appendChild(divEl2);
        // grabs the name label and pricing
        var h3El = document.createElement('h2');
        var h4El = document.createElement('h3');
        h3El.textContent = currentItem.name;
        h4El.textContent = `$${currentItem.price}`;
        // finds the images paths
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', currentItem.img);
        imgEl.className = 'store-img';
        // appends name, price, and image
        divEl2.appendChild(h3El);
        divEl2.appendChild(h4El);
        divEl2.appendChild(imgEl);

        // event lister to check if an image is clicked to add to shopping cart
        imgEl.addEventListener('click', addToShoppingCart);
        imgEl.dataset.number = currentItem.price;
        imgEl.dataset.label = currentItem.name;
    }
}

/* SHOPPING CART ===================================== */

function addToShoppingCart (){
    // grabs and creates elements for shopping-list
    var ulEl = document.querySelector('ul');
    var liEl = document.createElement('li');
    var pLabelEl = document.createElement('p');
    var pPriceEl = document.createElement('p');
    pPriceEl.className = 'listPrice';
    // grabs name and price from dataset
    var listLabel = this.dataset.label;
    var listPrice = this.dataset.number;
    pLabelEl.textContent = listLabel;
    pPriceEl.textContent = `$${listPrice}`;
    // appends items to shopping list
    liEl.appendChild(pLabelEl);
    liEl.appendChild(pPriceEl);
    ulEl.appendChild(liEl);

    // grabs clicked item and adds to shoppingCart array
    shoppingCart.push(Number(listPrice));
    var shoppingTotal = calcTotal();
    // grabs and creates elements for shopping-total
    var shoppingTotalEl = document.getElementById('shopping-total');
    var pTotalEl = document.createElement('p');
    var hr2El = document.querySelectorAll('hr')[1];
    hr2El.className = 'show';
    // appends shopping-total
    var whiteSpace = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
    shoppingTotalEl.innerHTML='';
    pTotalEl.className = 'listPrice';
    pTotalEl.innerHTML =`Total${whiteSpace}$${shoppingTotal}`;
    shoppingTotalEl.appendChild(pTotalEl);
}

// calculates the total from the items in the shopping cart
function calcTotal () {
    var calcTotal = shoppingCart.reduce(function(acc, val){
        return acc + val;
    });
    return calcTotal;
}
