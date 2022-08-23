const shopArray = [];


function adToCard(element) {
    // console.log(element.parentNode.children)


    const messiProduct = element.parentNode.children[0].innerText;
    // console.log(messiProduct);
    const playerProductPrice = element.parentNode.children[1].children[0].innerText;
    // console.log(playerProductPrice);

    const ProductObject = {
        messiProduct: messiProduct,
        playerProductPrice: parseFloat(playerProductPrice)

    }
    shopArray.push(ProductObject)

    // console.log(shopArray);
    // console.log(shopArray.length);
    document.getElementById('total-man').innerText = shopArray.length
}