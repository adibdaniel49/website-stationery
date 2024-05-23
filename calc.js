


document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('registerButton').addEventListener('click', function(event) {
        alert('Register button clicked! Please do check your email for membership code ;)');
        document.querySelector('form').reset();
    });
});


function calculateTotal() {
    const prices = {
        item1: 1.00,
        item2: 2.00,
        item3: 0.50,
        item4: 0.80,
        item5: 2.50,
        item6: 3.00
    };

    const quantity1 = parseInt(document.getElementById('item1').value) || 0;
    const quantity2 = parseInt(document.getElementById('item2').value) || 0;
    const quantity3 = parseInt(document.getElementById('item3').value) || 0;
    const quantity4 = parseInt(document.getElementById('item4').value) || 0;
    const quantity5 = parseInt(document.getElementById('item5').value) || 0;
    const quantity6 = parseInt(document.getElementById('item6').value) || 0;

    const totalPrice = (quantity1 * prices.item1) + (quantity2 * prices.item2) + (quantity3 * prices.item3) +
                        (quantity4 * prices.item4) + (quantity5 * prices.item5) + (quantity6 * prices.item6);

    document.getElementById('totalPrice').innerText = `Total Price: RM${totalPrice}`;
}