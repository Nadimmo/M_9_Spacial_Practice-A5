const buttons = document.getElementsByClassName('btn');
for(let button of buttons){
    // console.log(button)
    button.addEventListener('click', function(event){
        const name = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText

    //    console.log(name,price, category)
    const div = document.getElementById('add-new-tag');
        const newDiv = document.createElement('div');
        newDiv.classList = 'newDiv';
        const p1 = document.createElement('p');
        p1.innerText = name;
        const p2 = document.createElement('p');
        p2.innerText = price
        const p3 = document.createElement('p');
        p3.innerText = category;

        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);

        div.appendChild(newDiv)

        updatePrice(price)
        updateGrandTotal()

        event.target.setAttribute('disabled', false);
        event.target.parentNode.style.backgroundColor = 'rgb(224, 181, 100)'

        // condition card disabled
        const firstCountCard = getElementTextByID('card');
        if(firstCountCard + 1 > 6){
            alert('Your Limit is End');
            return
        }

        // budget update
        const budget = document.getElementById('budget').innerText;
        const budgetUpdate = budget  - price;
        document.getElementById('budget').innerText = budgetUpdate;

        // card update
        const card = getElementTextByID('card');
        document.getElementById('card').innerText = card +1;
        
        // left update
        const left = document.getElementById('left').innerText;
        document.getElementById('left').innerText = left - 1

    })
}


function updateGrandTotal(status){
    // console.log(grand)
    const total = getElementTextByID('total');
    if(status == undefined){
        document.getElementById('grandtotal').innerText = total
    }
    else{
        const CouponCode = document.getElementById('coupon').value;
        // console.log(CouponCode)
        if(CouponCode == "New2024"){
            const totalDiscount = total * 0.2 ;
            // console.log(totalDiscount)
            const finalCost = total - totalDiscount;
            document.getElementById('grandtotal').innerText = finalCost;
        }
        else{
            alert('Please enter valid coupon code')
        }
    }
}


function updatePrice(price){
    const total = getElementTextByID('total');
    const CurrentPrice = parseInt(price);
    const convert = parseInt(total);
    const totalPrice = convert + CurrentPrice;
    document.getElementById('total').innerText = totalPrice;
}


function getElementTextByID(id){
    const element = document.getElementById(id).innerText;
    const convert = parseInt (element);
    return convert
}