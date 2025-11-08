function includHTML(id,file){
    fetch(file)
    .then(response => response.text())
    .then(data=>{
        document.getElementById(id).innerHTML = data ; 
    })
    .catch(err => console.log("erreur include file ", err))
}
includHTML("footer" , "../compenents/footer.html")
includHTML("brands" , "../compenents/brands.html")
includHTML("map" , "../compenents/cardGoogleMap.html")
