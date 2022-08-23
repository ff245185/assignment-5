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

// next point js folder 

function comoin() {
    const totalePlayears = document.getElementById('total-man');
    const totalePlayearsText = parseInt(totalePlayears.innerText);

    const perPlayer = document.getElementById('main-vs');
    const perPlayerValue = parseFloat(perPlayer.value);

    perPlayer.value = '';

    const playersSum = document.getElementById('going-5');
    const playersSumText = parseFloat(playersSum.innerText);

    const totalePlayearsSum = totalePlayearsText * perPlayerValue;

    playersSum.innerText = totalePlayearsSum;
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    comoin()
})
document.getElementById('calculattotal').addEventListener('click', function () {

    const playersSum = document.getElementById('going-5');
    const playersSumText = parseFloat(playersSum.innerText);



    const managerInput = document.getElementById('manager-input');
    const managerInputValue = parseFloat(managerInput.value);

    managerInput.value = '';

    const coachInput = document.getElementById('coach-input');
    const coachInputValue = parseFloat(coachInput.value);

    coachInput.value = '';

    const totaleSum = playersSumText + managerInputValue + coachInputValue;

    const totaleTaka = document.getElementById('lolo');
    const orderTotal = parseFloat(coachInput);
    totaleTaka.value = '';

    orderTotal.innerText = totaleSum;

    function myFunction() {
        alert("I am an alert box!");
    }

})