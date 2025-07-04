function calculateTip(){

    const bill = parseFloat(document.querySelector('#bill').value);
    const tipPercent = parseFloat(document.querySelector('#tip').value);
    const people = parseInt(document.querySelector('#people').value || 1);

    if(isNaN(bill) || isNaN(tipPercent) || bill <=0 || tipPercent < 0){
        alert("Please enter a valid number")
        return;
    }

    const tipAmount = (bill * tipPercent)/100;
    const totalAmount = tipAmount + bill;
    const perPerson = totalAmount/people;
    
    document.getElementById('result').innerHTML = `
    <p>Tip Amount:₹${tipAmount.toFixed(2)}</p>
    <p>Total Amount:₹${totalAmount.toFixed(2)}</p>
    <p>Per Person:₹${perPerson.toFixed(2)}</p>
    `
}

calculateTip();