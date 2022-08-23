const shopArray = [];

function displayPt(cardProduct1) {
    let tootalPrice = 0;
    console.log(cardProduct1)
    const tList = document.getElementById('viwe-1');
    tList.innerHTML = '';
    for (let i = 0; i < cardProduct1.length; i++) {
        // console.log(shopArray[i].messiProduct, shopArray[i].playerProductPrice);
        const name = shopArray[i].messiProduct;
        const price = shopArray[i].playerProductPrice;

        tootalPrice = tootalPrice + price;
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;

        tList.appendChild(tr);
    }
    const tr = document.createElement('tr')
    tr.innerHTML = `
         <th></th>
        <td>Tootal-price:</td>
        <td>${tootalPrice}</td>
        
    `
    tList.appendChild(tr)
}



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
    document.getElementById('total-man').innerText = shopArray.length;
    displayPt(shopArray)
}