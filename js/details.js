// for target a btn size

const btns = document.querySelectorAll(".btn-choix");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        // Reset all buttons

        btns.forEach(reset => {
            reset.style.backgroundColor = "";
            const size = reset.querySelector(".size-food");
            const priceSize = reset.querySelector(".price-size");
            size.style.color = "";
            priceSize.style.backgroundColor = "";
        });

        // Activate the clicked one

        btn.style.backgroundColor = "#181818";
        const size = btn.querySelector(".size-food");
        size.style.color = "white";
        const priceSize = btn.querySelector(".price-size");
        priceSize.style.backgroundColor = "#860000";
    });
});

const imageFetch = document.querySelector(".image-url");
const titleFetch = document.querySelector(".title-food");
const descriptionFetch = document.querySelector(".description-food")
const priceFetch = document.querySelector("#total-price");
const priceSizeFetch = document.querySelectorAll(".priceT");

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);


fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach( e=>{
            if(e.id == id){
                imageFetch.src = e.image;
                titleFetch.textContent = e.name;
                descriptionFetch.textContent = e.description;
                priceFetch.textContent = e.price;
                for(i = 0; i < 4; i++){
                    priceSizeFetch[i].textContent = e.price;
                }
            }
    })      
});


const plusPriceValue = document.querySelector('.btn-plus');
// console.log(aMed);

plusPriceValue.addEventListener('click', () => {
    const pluS = document.querySelector('#number-total-food');
    let valuePlus = parseInt(pluS.textContent);
    valuePlus++;
    pluS.textContent = valuePlus;

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseFloat(totalPrice.textContent);
    valuePrice ++;
    totalPrice.textContent = valuePrice.toFixed(2);
})

const minusPriceValue = document.querySelector('.btn-minus');
const a = 

minusPriceValue.addEventListener('click', () => {
    const minuS = document.querySelector('#number-total-food');
    let valueMinus = parseInt(minuS.textContent);
    if (valueMinus > 1) {
        valueMinus--;
        minuS.textContent = valueMinus;
    }

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseFloat(totalPrice.textContent);
    if (valuePrice) {
        valuePrice --;
        totalPrice.textContent = valuePrice.toFixed(2);
    }
});
