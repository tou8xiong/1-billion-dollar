

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("light-change");
    if (element.classList.contains("dark-mode")) {
        button.innerHTML = "Dark-mode";
        element.style.backgroundColor = " rgba(0, 0, 0, 0.925)";
    } else {
        button.innerHTML = "White-mode";
        element.style.backgroundColor = "white";
    }
}

let pointerValue = 1000000000;

function updatePointer() {
    const pointer = document.getElementById("pointer");
    pointer.textContent = pointerValue;
    pointer.style.color = "#0026e5ff";
}

function updatePrice() {
    let pricePerBurger = 10;
    let quantity = Number(document.getElementById("quantity").value);
    let totalPrice = quantity * pricePerBurger;
    document.getElementById("price").innerHTML = "$" + totalPrice;
    console.log(totalPrice);
}

function buyBurger() {
    let quantity = Number(document.getElementById("quantity").value);
    if (quantity < 1) {
        alert("Quantity must be at least 1!");
        document.getElementById("quantity").value = 1;
        updatePrice();
        return;
    }
    let totalPrice = 10 * quantity;
    if (pointerValue >= totalPrice) {
        pointerValue -= totalPrice; // Add points
        updatePointer();
        underZero();
        addToList("theburgernb", quantity);
        confirm(`You gonna buy ${quantity} burger`);
    }
    else {
        alert("Your money is not enough");
    }
}
//lamboghini
function buylambo() {
    let quantitylambo = Number(document.getElementById("quantitylambo").value);
    if (quantitylambo < 1) {
        alert("Quantity must be at least 1!");
        document.getElementById("quantitylambo").value = 1;
        updatePricelambo();
        return;
    }
    let theprice = 100000 * quantitylambo;
    if (pointerValue >= theprice) {
        pointerValue -= theprice;
        updatePointer();
        underZero();
        addToList("thelambonb", quantitylambo);
        confirm(`You goona buy ${quantitylambo} Lamborghini`);

    }
    else {
        alert("Your money is not enough");
    }

}
function updatePricelambo() {
    let pricePerlambo = 100000;
    let quantitylambo = Number(document.getElementById("quantitylambo").value);
    let theprice = quantitylambo * pricePerlambo;
    document.getElementById("pricelambo").innerHTML = "$" + theprice;
    console.log(theprice);
}

// Initialize pointer and price on page load
window.onload = function () {
    updatePointer();
    updatePrice();
    updatePricelambo();
};

function underZero() {
    if (pointerValue < 0) {
        pointerValue = 0;
        updatePointer();
        alert("Plase add the Burger Number")

    }
}
function addToList(productId, quantity) {
    let span = document.getElementById(productId);
    let currentValue = Number(span.textContent); // current number in popup
    span.textContent = currentValue + quantity; // add new quantity
    console.log("this is the curent", currentValue);
    console.log("this is the span", span.textContent)

    let lambos = Number(document.getElementById("thelambonb").textContent);
    let burgers = Number(document.getElementById("theburgernb").textContent);
    let styleplus = document.getElementById("bothproduct").textContent = lambos + burgers + " " + "ລາຍການ";
}

let pupcontent = document.getElementById("pup-up-content")

function showpupup() {
    pupcontent.style.display = "block"
}
function hidepupup() {
    pupcontent.style.display = "none"
}

//17.8.2025
let shownode = document.querySelectorAll('span')
let showspan = shownode[1].innerHTML;
console.log("this sis the span 1", showspan)
console.log(shownode);
