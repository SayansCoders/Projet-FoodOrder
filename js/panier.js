import {CardPanier} from "./fetchComponents.js"
let cartProduct = JSON.parse(localStorage.getItem("produits"))  || []
console.log(cartProduct)
cartProduct.forEach(product=>{
    console.log(product)
    let inject =document.createElement('div')





    inject.innerHTML = CardPanier()
    inject.querySelector('#cart').id = product.id
    inject.querySelector('#img-cart').src = product.image
    inject.querySelector('#title').textContent = product.name
    inject.querySelector('#price').textContent = product.price
    document.querySelector('.totalPanier').textContent = ((parseFloat(document.querySelector('.totalPanier').textContent)+ parseFloat(product.price))).toFixed(2).toString()
    //event si lutilisateur click sur svg + qte va baisser et aussi pour svg -



    inject.querySelector('#miniceQte').addEventListener('click',e=>{
        inject.querySelector('#qte-text').textContent= (parseFloat(inject.querySelector('#qte-text').textContent)-1).toString()
        if  (parseFloat(inject.querySelector('#qte-text').textContent) === 0) {inject.remove()}
        document.querySelector('.totalPanier').textContent =((parseFloat(document.querySelector('.totalPanier').textContent)-parseFloat(product.price))).toFixed(2).toString()

        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    })
    //
    //
    //
    //
    //
    //
    inject.querySelector('#addQte').addEventListener('click',e=>{
        inject.querySelector('#qte-text').textContent=(parseFloat(inject.querySelector('#qte-text').textContent)+1).toString()

        document.querySelector('.totalPanier').textContent = (parseFloat(document.querySelector('.totalPanier').textContent)+parseFloat(product.price)).toFixed(2).toString()
        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    })
    //
    inject.querySelector('#deleteCartCard').addEventListener('click',e=>{
        inject.remove()
        document.querySelector('.totalPanier').textContent = (parseFloat(document.querySelector('.totalPanier').textContent)-parseFloat(product.price)).toFixed(2).toString()

        document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    })
    document.querySelectorAll('.totalPanier')[1].textContent = document.querySelector('.totalPanier').textContent
    document.getElementById("elemnt-ajouter").append(inject)
})

