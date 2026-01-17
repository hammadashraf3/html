function convert(event) {
    event.preventDefault();
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    // Static exchange rates (example)
    const rates = {
        USD: { PKR: 280, EUR: 0.92, USD: 1, QTR: 3.64 },
        PKR: { USD: 1 / 280, EUR: 0.0033, PKR: 1, QTR: 0.01 },
        EUR: { USD: 1.09, PKR: 304, EUR: 1, QTR: 4.22 },
        QTR: { USD: 0.27, PKR: 76.92, EUR: 0.24, QTR: 1 }
    };

    let converted = amount * rates[from][to];
    document.getElementById("result").innerText =
        amount + " " + from + " = " + converted.toFixed(2) + " " + to;
}