let total = 0;

let items = {};

function plusItem(name, price){

    if(!items[name]){
        items[name] = 0;
    }

    items[name]++;

    total += price;

    updateUI(name);
}

function minusItem(name, price){

    if(items[name] > 0){

        items[name]--;

        total -= price;

        updateUI(name);
    }
}

function updateUI(name){

    document.getElementById(name + "-count").innerText = items[name];

    let orderList = document.getElementById("order-list");

    orderList.innerHTML = "";

    for(let item in items){

        if(items[item] > 0){

            orderList.innerHTML += `
                <p>${item} x ${items[item]}</p>
            `;
        }
    }

    document.getElementById("total").innerText =
        "Total : Rp " + total.toLocaleString();
}

function scrollToCoffee(){

    document.getElementById("coffee-section")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToBread(){

    document.getElementById("bread-section")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function openForm(){

    document.getElementById("popup")
    .style.display = "flex";
}

function submitOrder(){

    let name =
    document.getElementById("name");

    let payment =
    document.getElementById("payment");

    let button =
    document.querySelector(".popup-content button");

    if(
        name.value === "" ||
        payment.value === ""
    ){

        button.classList.add("shake");

        setTimeout(() => {

            button.classList.remove("shake");

        },300);

        return;
    }

    alert("Your order is being processed!");

    document.getElementById("popup")
    .style.display = "none";
}

function closePopup(event){

    document.getElementById("popup")
    .style.display = "none";
}